<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // echo ' ini middleware . <br>';

        // $userRole = auth()->user()->isAdmin;
        // $currenrRouteName = Route::currentRouteName();
        // echo 'user role ini adalah '  . $userRole . '</br>';
        // echo 'user page ini adalah'  . $currenrRouteName;
        // exit();
        // if (auth()->user()->isAdmin == 1) {
        //     echo "ini adalh page admin";
        //     return $next($request);
        //     exit;
        // } else {
        //     echo "ini adalah user pimpinan";
        //     return $next($request);
        //     exit;
        // }
        return $next($request);
        // return redirect('/')->with('error', 'anda tidak dapat mengakses halaman ini');
    }
}
