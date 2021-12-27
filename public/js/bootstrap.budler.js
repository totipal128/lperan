/*!
 * Bootstrap v4.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
}(this, function (t, e) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function c(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
                return Object.getOwnPropertyDescriptor(o, t).enumerable
            }))), e.forEach(function (t) {
                var e, n, i;
                e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return r
    }
    for (var r, n, o, a, l, f, h, u, d, p, g, m, _, v, E, y, b, T, C, w, I, D, A, S, O, N, k, L, P, x, j, R, M, H, W, F, U, B, K, V, Q, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ft, ht, ut, dt, pt, gt = function (i) {
            var e = "transitionend";

            function t(t) {
                var e = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function () {
                    n = !0
                }), setTimeout(function () {
                    n || l.triggerTransitionEnd(e)
                }, t), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
                    return t
                },
                getSelectorFromElement: function (t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try {
                        return 0 < i(document).find(e).length ? e : null
                    } catch (t) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var e = i(t).css("transition-duration");
                    return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
                },
                reflow: function (t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function (t) {
                    i(t).trigger(e)
                },
                supportsTransitionEnd: function () {
                    return Boolean(e)
                },
                isElement: function (t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function (t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = e[i],
                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                        } var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function (t) {
                    if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(e = e && e.hasOwnProperty("default") ? e.default : e), mt = (n = "alert", a = "." + (o = "bs.alert"), l = (r = e).fn[n], f = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }, h = "alert", u = "fade", d = "show", p = function () {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function (t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function () {
                r.removeData(this._element, o), this._element = null
            }, t._getRootElement = function (t) {
                var e = gt.getSelectorFromElement(t),
                    n = !1;
                return e && (n = r(e)[0]), n || (n = r(t).closest("." + h)[0]), n
            }, t._triggerCloseEvent = function (t) {
                var e = r.Event(f.CLOSE);
                return r(t).trigger(e), e
            }, t._removeElement = function (e) {
                var n = this;
                if (r(e).removeClass(d), r(e).hasClass(u)) {
                    var t = gt.getTransitionDurationFromElement(e);
                    r(e).one(gt.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function (t) {
                r(t).detach().trigger(f.CLOSED).remove()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = r(this),
                        e = t.data(o);
                    e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }]), i
        }(), r(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
            return r.fn[n] = l, p._jQueryInterface
        }, p), _t = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', D = "input", A = ".active", S = ".btn", O = {
            CLICK_DATA_API: "click" + v + E,
            FOCUS_BLUR_DATA_API: (C = "focus") + v + E + " blur" + v + E
        }, N = function () {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function () {
                var t = !0,
                    e = !0,
                    n = g(this._element).closest(I)[0];
                if (n) {
                    var i = g(this._element).find(D)[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && g(this._element).hasClass(b)) t = !1;
                            else {
                                var r = g(n).find(A)[0];
                                r && g(r).removeClass(b)
                            } if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !g(this._element).hasClass(b), g(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b)
            }, t.dispose = function () {
                g.removeData(this._element, _), this._element = null
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = g(this).data(_);
                    t || (t = new n(this), g(this).data(_, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }]), n
        }(), g(document).on(O.CLICK_DATA_API, w, function (t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
            var e = g(t.target).closest(S)[0];
            g(e).toggleClass(C, /^focus(in)?$/.test(t.type))
        }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
            return g.fn[m] = y, N._jQueryInterface
        }, N), vt = (L = "carousel", x = "." + (P = "bs.carousel"), j = ".data-api", R = (k = e).fn[L], M = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, H = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, W = "next", F = "prev", U = "left", B = "right", K = {
            SLIDE: "slide" + x,
            SLID: "slid" + x,
            KEYDOWN: "keydown" + x,
            MOUSEENTER: "mouseenter" + x,
            MOUSELEAVE: "mouseleave" + x,
            TOUCHEND: "touchend" + x,
            LOAD_DATA_API: "load" + x + j,
            CLICK_DATA_API: "click" + x + j
        }, V = "carousel", Q = "active", Y = "slide", G = "carousel-item-right", q = "carousel-item-left", z = "carousel-item-next", X = "carousel-item-prev", J = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, Z = function () {
            function o(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(J.INDICATORS)[0], this._addEventListeners()
            }
            var t = o.prototype;
            return t.next = function () {
                this._isSliding || this._slide(W)
            }, t.nextWhenVisible = function () {
                !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next()
            }, t.prev = function () {
                this._isSliding || this._slide(F)
            }, t.pause = function (t) {
                t || (this._isPaused = !0), k(this._element).find(J.NEXT_PREV)[0] && (gt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function (t) {
                var e = this;
                this._activeElement = k(this._element).find(J.ACTIVE_ITEM)[0];
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) k(this._element).one(K.SLID, function () {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? W : F;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function () {
                k(this._element).off(x), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function (t) {
                return t = c({}, M, t), gt.typeCheckConfig(L, t, H), t
            }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && k(this._element).on(K.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(K.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && k(this._element).on(K.TOUCHEND, function () {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, t._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function (t) {
                return this._items = k.makeArray(k(t).parent().find(J.ITEM)), this._items.indexOf(t)
            }, t._getItemByDirection = function (t, e) {
                var n = t === W,
                    i = t === F,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                var s = (r + (t === F ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function (t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),
                    r = k.Event(K.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return k(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);
                    var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && k(e).addClass(Q)
                }
            }, t._slide = function (t, e) {
                var n, i, r, o = this,
                    s = k(this._element).find(J.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    f = Boolean(this._interval);
                if (t === W ? (n = q, i = z, r = U) : (n = G, i = X, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l);
                    var h = k.Event(K.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: c
                    });
                    if (k(this._element).hasClass(Y)) {
                        k(l).addClass(i), gt.reflow(l), k(s).addClass(n), k(l).addClass(n);
                        var u = gt.getTransitionDurationFromElement(s);
                        k(s).one(gt.TRANSITION_END, function () {
                            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                                return k(o._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(u)
                    } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(h);
                    f && this.cycle()
                }
            }, o._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = k(this).data(P),
                        e = c({}, M, k(this).data());
                    "object" == typeof i && (e = c({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new o(this, e), k(this).data(P, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, o._dataApiClickHandler = function (t) {
                var e = gt.getSelectorFromElement(this);
                if (e) {
                    var n = k(e)[0];
                    if (n && k(n).hasClass(V)) {
                        var i = c({}, k(n).data(), k(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), t.preventDefault()
                    }
                }
            }, s(o, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function () {
                    return M
                }
            }]), o
        }(), k(document).on(K.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function () {
            k(J.DATA_RIDE).each(function () {
                var t = k(this);
                Z._jQueryInterface.call(t, t.data())
            })
        }), k.fn[L] = Z._jQueryInterface, k.fn[L].Constructor = Z, k.fn[L].noConflict = function () {
            return k.fn[L] = R, Z._jQueryInterface
        }, Z), Et = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = ($ = e).fn[tt], rt = {
            toggle: !0,
            parent: ""
        }, ot = {
            toggle: "boolean",
            parent: "(string|element)"
        }, st = {
            SHOW: "show" + nt,
            SHOWN: "shown" + nt,
            HIDE: "hide" + nt,
            HIDDEN: "hidden" + nt,
            CLICK_DATA_API: "click" + nt + ".data-api"
        }, at = "show", lt = "collapse", ct = "collapsing", ft = "collapsed", ht = "width", ut = "height", dt = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, pt = function () {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = $(dt.DATA_TOGGLE), i = 0; i < n.length; i++) {
                    var r = n[i],
                        o = gt.getSelectorFromElement(r);
                    null !== o && 0 < $(o).filter(t).length && (this._selector = o, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function () {
                $(this._element).hasClass(at) ? this.hide() : this.show()
            }, t.show = function () {
                var t, e, n = this;
                if (!this._isTransitioning && !$(this._element).hasClass(at) && (this._parent && 0 === (t = $.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = $(t).not(this._selector).data(et)) && e._isTransitioning))) {
                    var i = $.Event(st.SHOW);
                    if ($(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call($(t).not(this._selector), "hide"), e || $(t).data(et, null));
                        var r = this._getDimension();
                        $(this._element).removeClass(lt).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && $(this._triggerArray).removeClass(ft).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = gt.getTransitionDurationFromElement(this._element);
                        $(this._element).one(gt.TRANSITION_END, function () {
                            $(n._element).removeClass(ct).addClass(lt).addClass(at), n._element.style[r] = "", n.setTransitioning(!1), $(n._element).trigger(st.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, t.hide = function () {
                var t = this;
                if (!this._isTransitioning && $(this._element).hasClass(at)) {
                    var e = $.Event(st.HIDE);
                    if ($(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", gt.reflow(this._element), $(this._element).addClass(ct).removeClass(lt).removeClass(at), 0 < this._triggerArray.length)
                            for (var i = 0; i < this._triggerArray.length; i++) {
                                var r = this._triggerArray[i],
                                    o = gt.getSelectorFromElement(r);
                                if (null !== o) $(o).hasClass(at) || $(r).addClass(ft).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var s = gt.getTransitionDurationFromElement(this._element);
                        $(this._element).one(gt.TRANSITION_END, function () {
                            t.setTransitioning(!1), $(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN)
                        }).emulateTransitionEnd(s)
                    }
                }
            }, t.setTransitioning = function (t) {
                this._isTransitioning = t
            }, t.dispose = function () {
                $.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function (t) {
                return (t = c({}, rt, t)).toggle = Boolean(t.toggle), gt.typeCheckConfig(tt, t, ot), t
            }, t._getDimension = function () {
                return $(this._element).hasClass(ht) ? ht : ut
            }, t._getParent = function () {
                var n = this,
                    t = null;
                gt.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = $(this._config.parent)[0];
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return $(t).find(e).each(function (t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function (t, e) {
                if (t) {
                    var n = $(t).hasClass(at);
                    0 < e.length && $(e).toggleClass(ft, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function (t) {
                var e = gt.getSelectorFromElement(t);
                return e ? $(e)[0] : null
            }, a._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = $(this),
                        e = t.data(et),
                        n = c({}, rt, t.data(), "object" == typeof i && i);
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(et, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function () {
                    return rt
                }
            }]), a
        }(), $(document).on(st.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = $(this),
                e = gt.getSelectorFromElement(this);
            $(e).each(function () {
                var t = $(this),
                    e = t.data(et) ? "toggle" : n.data();
                pt._jQueryInterface.call(t, e)
            })
        }), $.fn[tt] = pt._jQueryInterface, $.fn[tt].Constructor = pt, $.fn[tt].noConflict = function () {
            return $.fn[tt] = it, pt._jQueryInterface
        }, pt), yt = "undefined" != typeof window && "undefined" != typeof document, bt = ["Edge", "Trident", "Firefox"], Tt = 0, Ct = 0; Ct < bt.length; Ct += 1)
        if (yt && 0 <= navigator.userAgent.indexOf(bt[Ct])) {
            Tt = 1;
            break
        } var wt = yt && window.Promise ? function (t) {
        var e = !1;
        return function () {
            e || (e = !0, window.Promise.resolve().then(function () {
                e = !1, t()
            }))
        }
    } : function (t) {
        var e = !1;
        return function () {
            e || (e = !0, setTimeout(function () {
                e = !1, t()
            }, Tt))
        }
    };

    function It(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function Dt(t, e) {
        if (1 !== t.nodeType) return [];
        var n = getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function At(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function St(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = Dt(t),
            n = e.overflow,
            i = e.overflowX,
            r = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? t : St(At(t))
    }
    var Ot = {},
        Nt = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "all";
            if (t = t.toString(), Ot.hasOwnProperty(t)) return Ot[t];
            switch (t) {
                case "11":
                    Ot[t] = -1 !== navigator.userAgent.indexOf("Trident");
                    break;
                case "10":
                    Ot[t] = -1 !== navigator.appVersion.indexOf("MSIE 10");
                    break;
                case "all":
                    Ot[t] = -1 !== navigator.userAgent.indexOf("Trident") || -1 !== navigator.userAgent.indexOf("MSIE")
            }
            return Ot.all = Ot.all || Object.keys(Ot).some(function (t) {
                return Ot[t]
            }), Ot[t]
        };

    function kt(t) {
        if (!t) return document.documentElement;
        for (var e = Nt(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Dt(n, "position") ? kt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function Lt(t) {
        return null !== t.parentNode ? Lt(t.parentNode) : t
    }

    function Pt(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && kt(s.firstElementChild) !== s ? kt(l) : l;
        var c = Lt(t);
        return c.host ? Pt(c.host, e) : Pt(t, Lt(e).host)
    }

    function xt(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }

    function jt(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function Rt(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Nt(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function Mt() {
        var t = document.body,
            e = document.documentElement,
            n = Nt(10) && getComputedStyle(e);
        return {
            height: Rt("Height", t, e, n),
            width: Rt("Width", t, e, n)
        }
    }
    var Ht = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        Wt = function () {
            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), t
            }
        }(),
        Ft = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        Ut = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function Bt(t) {
        return Ut({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function Kt(t) {
        var e = {};
        try {
            if (Nt(10)) {
                e = t.getBoundingClientRect();
                var n = xt(t, "top"),
                    i = xt(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var r = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            o = "HTML" === t.nodeName ? Mt() : {},
            s = o.width || t.clientWidth || r.right - r.left,
            a = o.height || t.clientHeight || r.bottom - r.top,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var f = Dt(t);
            l -= jt(f, "x"), c -= jt(f, "y"), r.width -= l, r.height -= c
        }
        return Bt(r)
    }

    function Vt(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Nt(10),
            r = "HTML" === e.nodeName,
            o = Kt(t),
            s = Kt(e),
            a = St(t),
            l = Dt(e),
            c = parseFloat(l.borderTopWidth, 10),
            f = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === e.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var h = Bt({
            top: o.top - s.top - c,
            left: o.left - s.left - f,
            width: o.width,
            height: o.height
        });
        if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var u = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            h.top -= c - u, h.bottom -= c - u, h.left -= f - d, h.right -= f - d, h.marginTop = u, h.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = xt(e, "top"),
                r = xt(e, "left"),
                o = n ? -1 : 1;
            return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
        }(h, e)), h
    }

    function Qt(t) {
        if (!t || !t.parentElement || Nt()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === Dt(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function Yt(t, e, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? Qt(t) : Pt(t, e);
        if ("viewport" === i) o = function (t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = Vt(t, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : xt(n),
                a = e ? 0 : xt(n, "left");
            return Bt({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = St(At(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = Vt(a, s, r);
            if ("HTML" !== a.nodeName || function t(e) {
                    var n = e.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === Dt(e, "position") || t(At(e)))
                }(s)) o = l;
            else {
                var c = Mt(),
                    f = c.height,
                    h = c.width;
                o.top += l.top - l.marginTop, o.bottom = f + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function Gt(t, e, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = Yt(i, n, o, r),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function (t) {
                return Ut({
                    key: t
                }, a[t], {
                    area: (e = a[t], e.width * e.height)
                });
                var e
            }).sort(function (t, e) {
                return e.area - t.area
            }),
            c = l.filter(function (t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            }),
            f = 0 < c.length ? c[0].key : l[0].key,
            h = t.split("-")[1];
        return f + (h ? "-" + h : "")
    }

    function qt(t, e, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Vt(n, i ? Qt(e) : Pt(e, n), i)
    }

    function zt(t) {
        var e = getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function Xt(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t]
        })
    }

    function Jt(t, e, n) {
        n = n.split("-")[0];
        var i = zt(t),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[Xt(a)], r
    }

    function Zt(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function $t(t, n, e) {
        return (void 0 === e ? t : t.slice(0, function (t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex(function (t) {
                return t[e] === n
            });
            var i = Zt(t, function (t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(t, "name", e))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t.function || t.fn;
            t.enabled && It(e) && (n.offsets.popper = Bt(n.offsets.popper), n.offsets.reference = Bt(n.offsets.reference), n = e(n, t))
        }), n
    }

    function te(t, n) {
        return t.some(function (t) {
            var e = t.name;
            return t.enabled && e === n
        })
    }

    function ee(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if ("undefined" != typeof document.body.style[o]) return o
        }
        return null
    }

    function ne(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function ie(t, e, n, i) {
        n.updateBound = i, ne(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = St(t);
        return function t(e, n, i, r) {
            var o = "BODY" === e.nodeName,
                s = o ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }), o || t(St(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function re() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ne(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function oe(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function se(n, i) {
        Object.keys(i).forEach(function (t) {
            var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && oe(i[t]) && (e = "px"), n.style[t] = i[t] + e
        })
    }

    function ae(t, e, n) {
        var i = Zt(t, function (t) {
                return t.name === e
            }),
            r = !!i && t.some(function (t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!r) {
            var o = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var le = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ce = le.slice(3);

    function fe(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = ce.indexOf(t),
            i = ce.slice(n + 1).concat(ce.slice(0, n));
        return e ? i.reverse() : i
    }
    var he = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };

    function ue(t, r, o, e) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(e),
            n = t.split(/(\+|\-)/).map(function (t) {
                return t.trim()
            }),
            i = n.indexOf(Zt(n, function (t) {
                return -1 !== t.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function (t, e) {
            var n = (1 === e ? !a : a) ? "height" : "width",
                i = !1;
            return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e)
            }, []).map(function (t) {
                return function (t, e, n, i) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return Bt(a)[e] / 100 * o
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(t, n, r, o)
            })
        })).forEach(function (n, i) {
            n.forEach(function (t, e) {
                oe(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1))
            })
        }), s
    }
    var de = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var r = t.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                f = {
                                    start: Ft({}, l, o[l]),
                                    end: Ft({}, l, o[l] + o[c] - s[c])
                                };
                            t.offsets.popper = Ut({}, s, f[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.offset,
                            i = t.placement,
                            r = t.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = oe(+n) ? [+n, 0] : ue(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (t, i) {
                        var e = i.boundariesElement || kt(t.instance.popper);
                        t.instance.reference === e && (e = kt(e));
                        var r = Yt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                        i.boundaries = r;
                        var n = i.priority,
                            o = t.offsets.popper,
                            s = {
                                primary: function (t) {
                                    var e = o[t];
                                    return o[t] < r[t] && !i.escapeWithReference && (e = Math.max(o[t], r[t])), Ft({}, t, e)
                                },
                                secondary: function (t) {
                                    var e = "right" === t ? "left" : "top",
                                        n = o[e];
                                    return o[t] > r[t] && !i.escapeWithReference && (n = Math.min(o[e], r[t] - ("right" === t ? o.width : o.height))), Ft({}, e, n)
                                }
                            };
                        return n.forEach(function (t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            o = Ut({}, o, s[e](t))
                        }), t.offsets.popper = o, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (t, e) {
                        var n;
                        if (!ae(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0],
                            o = t.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            f = l ? "Top" : "Left",
                            h = f.toLowerCase(),
                            u = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = zt(i)[c];
                        a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = Bt(t.offsets.popper);
                        var g = a[h] + a[c] / 2 - p / 2,
                            m = Dt(t.instance.popper),
                            _ = parseFloat(m["margin" + f], 10),
                            v = parseFloat(m["border" + f + "Width"], 10),
                            E = g - t.offsets.popper[h] - _ - v;
                        return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (Ft(n = {}, h, Math.round(E)), Ft(n, u, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (p, g) {
                        if (te(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var m = Yt(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = Xt(_),
                            E = p.placement.split("-")[1] || "",
                            y = [];
                        switch (g.behavior) {
                            case he.FLIP:
                                y = [_, v];
                                break;
                            case he.CLOCKWISE:
                                y = fe(_);
                                break;
                            case he.COUNTERCLOCKWISE:
                                y = fe(_, !0);
                                break;
                            default:
                                y = g.behavior
                        }
                        return y.forEach(function (t, e) {
                            if (_ !== t || y.length === e + 1) return p;
                            _ = p.placement.split("-")[0], v = Xt(_);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                                a = o(i.left) < o(m.left),
                                l = o(i.right) > o(m.right),
                                c = o(i.top) < o(m.top),
                                f = o(i.bottom) > o(m.bottom),
                                h = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && f,
                                u = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!g.flipVariations && (u && "start" === E && a || u && "end" === E && l || !u && "start" === E && c || !u && "end" === E && f);
                            (s || h || d) && (p.flipped = !0, (s || h) && (_ = y[e + 1]), d && (E = "end" === (n = E) ? "start" : "start" === n ? "end" : n), p.placement = _ + (E ? "-" + E : ""), p.offsets.popper = Ut({}, p.offsets.popper, Jt(p.instance.popper, p.offsets.reference, p.placement)), p = $t(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = Xt(e), t.offsets.popper = Bt(r), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (t) {
                        if (!ae(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = Zt(t.instance.modifiers, function (t) {
                                return "preventOverflow" === t.name
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (t, e) {
                        var n = e.x,
                            i = e.y,
                            r = t.offsets.popper,
                            o = Zt(t.instance.modifiers, function (t) {
                                return "applyStyle" === t.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : e.gpuAcceleration,
                            a = Kt(kt(t.instance.popper)),
                            l = {
                                position: r.position
                            },
                            c = {
                                left: Math.floor(r.left),
                                top: Math.floor(r.top),
                                bottom: Math.floor(r.bottom),
                                right: Math.floor(r.right)
                            },
                            f = "bottom" === n ? "top" : "bottom",
                            h = "right" === i ? "left" : "right",
                            u = ee("transform"),
                            d = void 0,
                            p = void 0;
                        if (p = "bottom" === f ? -a.height + c.bottom : c.top, d = "right" === h ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[f] = 0, l[h] = 0, l.willChange = "transform";
                        else {
                            var g = "bottom" === f ? -1 : 1,
                                m = "right" === h ? -1 : 1;
                            l[f] = p * g, l[h] = d * m, l.willChange = f + ", " + h
                        }
                        var _ = {
                            "x-placement": t.placement
                        };
                        return t.attributes = Ut({}, _, t.attributes), t.styles = Ut({}, l, t.styles), t.arrowStyles = Ut({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (t) {
                        var e, n;
                        return se(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }), t.arrowElement && Object.keys(t.arrowStyles).length && se(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function (t, e, n, i, r) {
                        var o = qt(r, e, t, n.positionFixed),
                            s = Gt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), se(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        pe = function () {
            function o(t, e) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Ht(this, o), this.scheduleUpdate = function () {
                    return requestAnimationFrame(n.update)
                }, this.update = wt(this.update.bind(this)), this.options = Ut({}, o.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Ut({}, o.Defaults.modifiers, i.modifiers)).forEach(function (t) {
                    n.options.modifiers[t] = Ut({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                    return Ut({
                        name: t
                    }, n.options.modifiers[t])
                }).sort(function (t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && It(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Wt(o, [{
                key: "update",
                value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = qt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Gt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Jt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = $t(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, te(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ee("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = ie(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return re.call(this)
                }
            }]), o
        }();
    pe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, pe.placements = le, pe.Defaults = de;
    var ge, me, _e, ve, Ee, ye, be, Te, Ce, we, Ie, De, Ae, Se, Oe, Ne, ke, Le, Pe, xe, je, Re, Me, He, We, Fe, Ue, Be, Ke, Ve, Qe, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, on, sn, an, ln, cn, fn, hn, un, dn, pn, gn, mn, _n, vn, En, yn, bn, Tn, Cn, wn, In, Dn, An, Sn, On, Nn, kn, Ln, Pn, xn, jn, Rn, Mn, Hn, Wn, Fn, Un, Bn, Kn, Vn, Qn, Yn, Gn, qn, zn, Xn, Jn, Zn, $n, ti, ei, ni, ii, ri, oi, si, ai, li, ci, fi, hi, ui, di, pi, gi, mi, _i, vi, Ei, yi, bi = (me = "dropdown", ve = "." + (_e = "bs.dropdown"), Ee = ".data-api", ye = (ge = e).fn[me], be = new RegExp("38|40|27"), Te = {
            HIDE: "hide" + ve,
            HIDDEN: "hidden" + ve,
            SHOW: "show" + ve,
            SHOWN: "shown" + ve,
            CLICK: "click" + ve,
            CLICK_DATA_API: "click" + ve + Ee,
            KEYDOWN_DATA_API: "keydown" + ve + Ee,
            KEYUP_DATA_API: "keyup" + ve + Ee
        }, Ce = "disabled", we = "show", Ie = "dropup", De = "dropright", Ae = "dropleft", Se = "dropdown-menu-right", Oe = "position-static", Ne = '[data-toggle="dropdown"]', ke = ".dropdown form", Le = ".dropdown-menu", Pe = ".navbar-nav", xe = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", je = "top-start", Re = "top-end", Me = "bottom-start", He = "bottom-end", We = "right-start", Fe = "left-start", Ue = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Be = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Ke = function () {
            function l(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = l.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !ge(this._element).hasClass(Ce)) {
                    var t = l._getParentFromElement(this._element),
                        e = ge(this._menu).hasClass(we);
                    if (l._clearMenus(), !e) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = ge.Event(Te.SHOW, n);
                        if (ge(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof pe) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = t : gt.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && ge(t).addClass(Oe), this._popper = new pe(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === ge(t).closest(Pe).length && ge(document.body).children().on("mouseover", null, ge.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), ge(this._menu).toggleClass(we), ge(t).toggleClass(we).trigger(ge.Event(Te.SHOWN, n))
                        }
                    }
                }
            }, t.dispose = function () {
                ge.removeData(this._element, _e), ge(this._element).off(ve), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                ge(this._element).on(Te.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (t) {
                return t = c({}, this.constructor.Default, ge(this._element).data(), t), gt.typeCheckConfig(me, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = ge(t).find(Le)[0]
                }
                return this._menu
            }, t._getPlacement = function () {
                var t = ge(this._element).parent(),
                    e = Me;
                return t.hasClass(Ie) ? (e = je, ge(this._menu).hasClass(Se) && (e = Re)) : t.hasClass(De) ? e = We : t.hasClass(Ae) ? e = Fe : ge(this._menu).hasClass(Se) && (e = He), e
            }, t._detectNavbar = function () {
                return 0 < ge(this._element).closest(".navbar").length
            }, t._getPopperConfig = function () {
                var e = this,
                    t = {};
                "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = c({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, l._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = ge(this).data(_e);
                    if (t || (t = new l(this, "object" == typeof e ? e : null), ge(this).data(_e, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, l._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = ge.makeArray(ge(Ne)), n = 0; n < e.length; n++) {
                        var i = l._getParentFromElement(e[n]),
                            r = ge(e[n]).data(_e),
                            o = {
                                relatedTarget: e[n]
                            };
                        if (r) {
                            var s = r._menu;
                            if (ge(i).hasClass(we) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && ge.contains(i, t.target))) {
                                var a = ge.Event(Te.HIDE, o);
                                ge(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && ge(document.body).children().off("mouseover", null, ge.noop), e[n].setAttribute("aria-expanded", "false"), ge(s).removeClass(we), ge(i).removeClass(we).trigger(ge.Event(Te.HIDDEN, o)))
                            }
                        }
                    }
            }, l._getParentFromElement = function (t) {
                var e, n = gt.getSelectorFromElement(t);
                return n && (e = ge(n)[0]), e || t.parentNode
            }, l._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || ge(t.target).closest(Le).length)) : be.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !ge(this).hasClass(Ce))) {
                    var e = l._getParentFromElement(this),
                        n = ge(e).hasClass(we);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = ge(e).find(xe).get();
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var o = ge(e).find(Ne)[0];
                            ge(o).trigger("focus")
                        }
                        ge(this).trigger("click")
                    }
                }
            }, s(l, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function () {
                    return Ue
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Be
                }
            }]), l
        }(), ge(document).on(Te.KEYDOWN_DATA_API, Ne, Ke._dataApiKeydownHandler).on(Te.KEYDOWN_DATA_API, Le, Ke._dataApiKeydownHandler).on(Te.CLICK_DATA_API + " " + Te.KEYUP_DATA_API, Ke._clearMenus).on(Te.CLICK_DATA_API, Ne, function (t) {
            t.preventDefault(), t.stopPropagation(), Ke._jQueryInterface.call(ge(this), "toggle")
        }).on(Te.CLICK_DATA_API, ke, function (t) {
            t.stopPropagation()
        }), ge.fn[me] = Ke._jQueryInterface, ge.fn[me].Constructor = Ke, ge.fn[me].noConflict = function () {
            return ge.fn[me] = ye, Ke._jQueryInterface
        }, Ke),
        Ti = (Qe = "modal", Ge = "." + (Ye = "bs.modal"), qe = (Ve = e).fn[Qe], ze = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, Xe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Je = {
            HIDE: "hide" + Ge,
            HIDDEN: "hidden" + Ge,
            SHOW: "show" + Ge,
            SHOWN: "shown" + Ge,
            FOCUSIN: "focusin" + Ge,
            RESIZE: "resize" + Ge,
            CLICK_DISMISS: "click.dismiss" + Ge,
            KEYDOWN_DISMISS: "keydown.dismiss" + Ge,
            MOUSEUP_DISMISS: "mouseup.dismiss" + Ge,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ge,
            CLICK_DATA_API: "click" + Ge + ".data-api"
        }, Ze = "modal-scrollbar-measure", $e = "modal-backdrop", tn = "modal-open", en = "fade", nn = "show", rn = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, on = function () {
            function r(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = Ve(t).find(rn.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var t = r.prototype;
            return t.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function (t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    Ve(this._element).hasClass(en) && (this._isTransitioning = !0);
                    var n = Ve.Event(Je.SHOW, {
                        relatedTarget: t
                    });
                    Ve(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Ve(document.body).addClass(tn), this._setEscapeEvent(), this._setResizeEvent(), Ve(this._element).on(Je.CLICK_DISMISS, rn.DATA_DISMISS, function (t) {
                        return e.hide(t)
                    }), Ve(this._dialog).on(Je.MOUSEDOWN_DISMISS, function () {
                        Ve(e._element).one(Je.MOUSEUP_DISMISS, function (t) {
                            Ve(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function (t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Ve.Event(Je.HIDE);
                    if (Ve(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = Ve(this._element).hasClass(en);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Ve(document).off(Je.FOCUSIN), Ve(this._element).removeClass(nn), Ve(this._element).off(Je.CLICK_DISMISS), Ve(this._dialog).off(Je.MOUSEDOWN_DISMISS), i) {
                            var r = gt.getTransitionDurationFromElement(this._element);
                            Ve(this._element).one(gt.TRANSITION_END, function (t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                Ve.removeData(this._element, Ye), Ve(window, document, this._element, this._backdrop).off(Ge), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (t) {
                return t = c({}, ze, t), gt.typeCheckConfig(Qe, t, Xe), t
            }, t._showElement = function (t) {
                var e = this,
                    n = Ve(this._element).hasClass(en);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && gt.reflow(this._element), Ve(this._element).addClass(nn), this._config.focus && this._enforceFocus();
                var i = Ve.Event(Je.SHOWN, {
                        relatedTarget: t
                    }),
                    r = function () {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, Ve(e._element).trigger(i)
                    };
                if (n) {
                    var o = gt.getTransitionDurationFromElement(this._element);
                    Ve(this._dialog).one(gt.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, t._enforceFocus = function () {
                var e = this;
                Ve(document).off(Je.FOCUSIN).on(Je.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === Ve(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? Ve(this._element).on(Je.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || Ve(this._element).off(Je.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? Ve(window).on(Je.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : Ve(window).off(Je.RESIZE)
            }, t._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    Ve(document.body).removeClass(tn), t._resetAdjustments(), t._resetScrollbar(), Ve(t._element).trigger(Je.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (Ve(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (t) {
                var e = this,
                    n = Ve(this._element).hasClass(en) ? en : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = $e, n && Ve(this._backdrop).addClass(n), Ve(this._backdrop).appendTo(document.body), Ve(this._element).on(Je.CLICK_DISMISS, function (t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), n && gt.reflow(this._backdrop), Ve(this._backdrop).addClass(nn), !t) return;
                    if (!n) return void t();
                    var i = gt.getTransitionDurationFromElement(this._backdrop);
                    Ve(this._backdrop).one(gt.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    Ve(this._backdrop).removeClass(nn);
                    var r = function () {
                        e._removeBackdrop(), t && t()
                    };
                    if (Ve(this._element).hasClass(en)) {
                        var o = gt.getTransitionDurationFromElement(this._backdrop);
                        Ve(this._backdrop).one(gt.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var r = this;
                if (this._isBodyOverflowing) {
                    Ve(rn.FIXED_CONTENT).each(function (t, e) {
                        var n = Ve(e)[0].style.paddingRight,
                            i = Ve(e).css("padding-right");
                        Ve(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), Ve(rn.STICKY_CONTENT).each(function (t, e) {
                        var n = Ve(e)[0].style.marginRight,
                            i = Ve(e).css("margin-right");
                        Ve(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    }), Ve(rn.NAVBAR_TOGGLER).each(function (t, e) {
                        var n = Ve(e)[0].style.marginRight,
                            i = Ve(e).css("margin-right");
                        Ve(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                    });
                    var t = document.body.style.paddingRight,
                        e = Ve(document.body).css("padding-right");
                    Ve(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function () {
                Ve(rn.FIXED_CONTENT).each(function (t, e) {
                    var n = Ve(e).data("padding-right");
                    "undefined" != typeof n && Ve(e).css("padding-right", n).removeData("padding-right")
                }), Ve(rn.STICKY_CONTENT + ", " + rn.NAVBAR_TOGGLER).each(function (t, e) {
                    var n = Ve(e).data("margin-right");
                    "undefined" != typeof n && Ve(e).css("margin-right", n).removeData("margin-right")
                });
                var t = Ve(document.body).data("padding-right");
                "undefined" != typeof t && Ve(document.body).css("padding-right", t).removeData("padding-right")
            }, t._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = Ze, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var t = Ve(this).data(Ye),
                        e = c({}, r.Default, Ve(this).data(), "object" == typeof n && n);
                    if (t || (t = new r(this, e), Ve(this).data(Ye, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(r, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function () {
                    return ze
                }
            }]), r
        }(), Ve(document).on(Je.CLICK_DATA_API, rn.DATA_TOGGLE, function (t) {
            var e, n = this,
                i = gt.getSelectorFromElement(this);
            i && (e = Ve(i)[0]);
            var r = Ve(e).data(Ye) ? "toggle" : c({}, Ve(e).data(), Ve(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var o = Ve(e).one(Je.SHOW, function (t) {
                t.isDefaultPrevented() || o.one(Je.HIDDEN, function () {
                    Ve(n).is(":visible") && n.focus()
                })
            });
            on._jQueryInterface.call(Ve(e), r, this)
        }), Ve.fn[Qe] = on._jQueryInterface, Ve.fn[Qe].Constructor = on, Ve.fn[Qe].noConflict = function () {
            return Ve.fn[Qe] = qe, on._jQueryInterface
        }, on),
        Ci = (an = "tooltip", cn = "." + (ln = "bs.tooltip"), fn = (sn = e).fn[an], hn = "bs-tooltip", un = new RegExp("(^|\\s)" + hn + "\\S+", "g"), gn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(pn = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(dn = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, _n = "out", vn = {
            HIDE: "hide" + cn,
            HIDDEN: "hidden" + cn,
            SHOW: (mn = "show") + cn,
            SHOWN: "shown" + cn,
            INSERTED: "inserted" + cn,
            CLICK: "click" + cn,
            FOCUSIN: "focusin" + cn,
            FOCUSOUT: "focusout" + cn,
            MOUSEENTER: "mouseenter" + cn,
            MOUSELEAVE: "mouseleave" + cn
        }, En = "fade", yn = "show", bn = ".tooltip-inner", Tn = ".arrow", Cn = "hover", wn = "focus", In = "click", Dn = "manual", An = function () {
            function i(t, e) {
                if ("undefined" == typeof pe) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = sn(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), sn(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (sn(this.getTipElement()).hasClass(yn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function () {
                clearTimeout(this._timeout), sn.removeData(this.element, this.constructor.DATA_KEY), sn(this.element).off(this.constructor.EVENT_KEY), sn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && sn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === sn(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = sn.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    sn(this.element).trigger(t);
                    var n = sn.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = gt.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && sn(i).addClass(En);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : sn(this.config.container);
                    sn(i).data(this.constructor.DATA_KEY, this), sn.contains(this.element.ownerDocument.documentElement, this.tip) || sn(i).appendTo(a), sn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new pe(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Tn
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), sn(i).addClass(yn), "ontouchstart" in document.documentElement && sn(document.body).children().on("mouseover", null, sn.noop);
                    var l = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, sn(e.element).trigger(e.constructor.Event.SHOWN), t === _n && e._leave(null, e)
                    };
                    if (sn(this.tip).hasClass(En)) {
                        var c = gt.getTransitionDurationFromElement(this.tip);
                        sn(this.tip).one(gt.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, t.hide = function (t) {
                var e = this,
                    n = this.getTipElement(),
                    i = sn.Event(this.constructor.Event.HIDE),
                    r = function () {
                        e._hoverState !== mn && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), sn(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (sn(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (sn(n).removeClass(yn), "ontouchstart" in document.documentElement && sn(document.body).children().off("mouseover", null, sn.noop), this._activeTrigger[In] = !1, this._activeTrigger[wn] = !1, this._activeTrigger[Cn] = !1, sn(this.tip).hasClass(En)) {
                        var o = gt.getTransitionDurationFromElement(n);
                        sn(n).one(gt.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (t) {
                sn(this.getTipElement()).addClass(hn + "-" + t)
            }, t.getTipElement = function () {
                return this.tip = this.tip || sn(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var t = sn(this.getTipElement());
                this.setElementContent(t.find(bn), this.getTitle()), t.removeClass(En + " " + yn)
            }, t.setElementContent = function (t, e) {
                var n = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? n ? sn(e).parent().is(t) || t.empty().append(e) : t.text(sn(e).text()) : t[n ? "html" : "text"](e)
            }, t.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getAttachment = function (t) {
                return pn[t.toUpperCase()]
            }, t._setListeners = function () {
                var i = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) sn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                        return i.toggle(t)
                    });
                    else if (t !== Dn) {
                        var e = t === Cn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Cn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        sn(i.element).on(e, i.config.selector, function (t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function (t) {
                            return i._leave(t)
                        })
                    }
                    sn(i.element).closest(".modal").on("hide.bs.modal", function () {
                        return i.hide()
                    })
                }), this.config.selector ? this.config = c({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || sn(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), sn(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? wn : Cn] = !0), sn(e.getTipElement()).hasClass(yn) || e._hoverState === mn ? e._hoverState = mn : (clearTimeout(e._timeout), e._hoverState = mn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                    e._hoverState === mn && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || sn(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), sn(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? wn : Cn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = _n, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                    e._hoverState === _n && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function (t) {
                return "number" == typeof (t = c({}, this.constructor.Default, sn(this.element).data(), t)).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), gt.typeCheckConfig(an, t, this.constructor.DefaultType), t
            }, t._getDelegateConfig = function () {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function () {
                var t = sn(this.getTipElement()),
                    e = t.attr("class").match(un);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function () {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (sn(t).removeClass(En), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = sn(this).data(ln),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), sn(this).data(ln, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function () {
                    return gn
                }
            }, {
                key: "NAME",
                get: function () {
                    return an
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return ln
                }
            }, {
                key: "Event",
                get: function () {
                    return vn
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return cn
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return dn
                }
            }]), i
        }(), sn.fn[an] = An._jQueryInterface, sn.fn[an].Constructor = An, sn.fn[an].noConflict = function () {
            return sn.fn[an] = fn, An._jQueryInterface
        }, An),
        wi = (On = "popover", kn = "." + (Nn = "bs.popover"), Ln = (Sn = e).fn[On], Pn = "bs-popover", xn = new RegExp("(^|\\s)" + Pn + "\\S+", "g"), jn = c({}, Ci.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Rn = c({}, Ci.DefaultType, {
            content: "(string|element|function)"
        }), Mn = "fade", Wn = ".popover-header", Fn = ".popover-body", Un = {
            HIDE: "hide" + kn,
            HIDDEN: "hidden" + kn,
            SHOW: (Hn = "show") + kn,
            SHOWN: "shown" + kn,
            INSERTED: "inserted" + kn,
            CLICK: "click" + kn,
            FOCUSIN: "focusin" + kn,
            FOCUSOUT: "focusout" + kn,
            MOUSEENTER: "mouseenter" + kn,
            MOUSELEAVE: "mouseleave" + kn
        }, Bn = function (t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function (t) {
                Sn(this.getTipElement()).addClass(Pn + "-" + t)
            }, r.getTipElement = function () {
                return this.tip = this.tip || Sn(this.config.template)[0], this.tip
            }, r.setContent = function () {
                var t = Sn(this.getTipElement());
                this.setElementContent(t.find(Wn), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Fn), e), t.removeClass(Mn + " " + Hn)
            }, r._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function () {
                var t = Sn(this.getTipElement()),
                    e = t.attr("class").match(xn);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = Sn(this).data(Nn),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Sn(this).data(Nn, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function () {
                    return jn
                }
            }, {
                key: "NAME",
                get: function () {
                    return On
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return Nn
                }
            }, {
                key: "Event",
                get: function () {
                    return Un
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return kn
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Rn
                }
            }]), i
        }(Ci), Sn.fn[On] = Bn._jQueryInterface, Sn.fn[On].Constructor = Bn, Sn.fn[On].noConflict = function () {
            return Sn.fn[On] = Ln, Bn._jQueryInterface
        }, Bn),
        Ii = (Vn = "scrollspy", Yn = "." + (Qn = "bs.scrollspy"), Gn = (Kn = e).fn[Vn], qn = {
            offset: 10,
            method: "auto",
            target: ""
        }, zn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Xn = {
            ACTIVATE: "activate" + Yn,
            SCROLL: "scroll" + Yn,
            LOAD_DATA_API: "load" + Yn + ".data-api"
        }, Jn = "dropdown-item", Zn = "active", $n = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, ti = "offset", ei = "position", ni = function () {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $n.NAV_LINKS + "," + this._config.target + " " + $n.LIST_ITEMS + "," + this._config.target + " " + $n.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Kn(this._scrollElement).on(Xn.SCROLL, function (t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function () {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? ti : ei,
                    r = "auto" === this._config.method ? t : this._config.method,
                    o = r === ei ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Kn.makeArray(Kn(this._selector)).map(function (t) {
                    var e, n = gt.getSelectorFromElement(t);
                    if (n && (e = Kn(n)[0]), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [Kn(e)[r]().top + o, n]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                Kn.removeData(this._element, Qn), Kn(this._scrollElement).off(Yn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (t) {
                if ("string" != typeof (t = c({}, qn, t)).target) {
                    var e = Kn(t.target).attr("id");
                    e || (e = gt.getUID(Vn), Kn(t.target).attr("id", e)), t.target = "#" + e
                }
                return gt.typeCheckConfig(Vn, t, zn), t
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = Kn(t.join(","));
                n.hasClass(Jn) ? (n.closest($n.DROPDOWN).find($n.DROPDOWN_TOGGLE).addClass(Zn), n.addClass(Zn)) : (n.addClass(Zn), n.parents($n.NAV_LIST_GROUP).prev($n.NAV_LINKS + ", " + $n.LIST_ITEMS).addClass(Zn), n.parents($n.NAV_LIST_GROUP).prev($n.NAV_ITEMS).children($n.NAV_LINKS).addClass(Zn)), Kn(this._scrollElement).trigger(Xn.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function () {
                Kn(this._selector).filter($n.ACTIVE).removeClass(Zn)
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = Kn(this).data(Qn);
                    if (t || (t = new n(this, "object" == typeof e && e), Kn(this).data(Qn, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }, {
                key: "Default",
                get: function () {
                    return qn
                }
            }]), n
        }(), Kn(window).on(Xn.LOAD_DATA_API, function () {
            for (var t = Kn.makeArray(Kn($n.DATA_SPY)), e = t.length; e--;) {
                var n = Kn(t[e]);
                ni._jQueryInterface.call(n, n.data())
            }
        }), Kn.fn[Vn] = ni._jQueryInterface, Kn.fn[Vn].Constructor = ni, Kn.fn[Vn].noConflict = function () {
            return Kn.fn[Vn] = Gn, ni._jQueryInterface
        }, ni),
        Di = (oi = "." + (ri = "bs.tab"), si = (ii = e).fn.tab, ai = {
            HIDE: "hide" + oi,
            HIDDEN: "hidden" + oi,
            SHOW: "show" + oi,
            SHOWN: "shown" + oi,
            CLICK_DATA_API: "click" + oi + ".data-api"
        }, li = "dropdown-menu", ci = "active", fi = "disabled", hi = "fade", ui = "show", di = ".dropdown", pi = ".nav, .list-group", gi = ".active", mi = "> li > .active", _i = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', vi = ".dropdown-toggle", Ei = "> .dropdown-menu .active", yi = function () {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ii(this._element).hasClass(ci) || ii(this._element).hasClass(fi))) {
                    var t, i, e = ii(this._element).closest(pi)[0],
                        r = gt.getSelectorFromElement(this._element);
                    if (e) {
                        var o = "UL" === e.nodeName ? mi : gi;
                        i = (i = ii.makeArray(ii(e).find(o)))[i.length - 1]
                    }
                    var s = ii.Event(ai.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = ii.Event(ai.SHOW, {
                            relatedTarget: i
                        });
                    if (i && ii(i).trigger(s), ii(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (t = ii(r)[0]), this._activate(this._element, e);
                        var l = function () {
                            var t = ii.Event(ai.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = ii.Event(ai.SHOWN, {
                                    relatedTarget: i
                                });
                            ii(i).trigger(t), ii(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                ii.removeData(this._element, ri), this._element = null
            }, t._activate = function (t, e, n) {
                var i = this,
                    r = ("UL" === e.nodeName ? ii(e).find(mi) : ii(e).children(gi))[0],
                    o = n && r && ii(r).hasClass(hi),
                    s = function () {
                        return i._transitionComplete(t, r, n)
                    };
                if (r && o) {
                    var a = gt.getTransitionDurationFromElement(r);
                    ii(r).one(gt.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function (t, e, n) {
                if (e) {
                    ii(e).removeClass(ui + " " + ci);
                    var i = ii(e.parentNode).find(Ei)[0];
                    i && ii(i).removeClass(ci), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (ii(t).addClass(ci), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), gt.reflow(t), ii(t).addClass(ui), t.parentNode && ii(t.parentNode).hasClass(li)) {
                    var r = ii(t).closest(di)[0];
                    r && ii(r).find(vi).addClass(ci), t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = ii(this),
                        e = t.data(ri);
                    if (e || (e = new i(this), t.data(ri, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.0"
                }
            }]), i
        }(), ii(document).on(ai.CLICK_DATA_API, _i, function (t) {
            t.preventDefault(), yi._jQueryInterface.call(ii(this), "show")
        }), ii.fn.tab = yi._jQueryInterface, ii.fn.tab.Constructor = yi, ii.fn.tab.noConflict = function () {
            return ii.fn.tab = si, yi._jQueryInterface
        }, yi);
    ! function (t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = gt, t.Alert = mt, t.Button = _t, t.Carousel = vt, t.Collapse = Et, t.Dropdown = bi, t.Modal = Ti, t.Popover = wi, t.Scrollspy = Ii, t.Tab = Di, t.Tooltip = Ci, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
