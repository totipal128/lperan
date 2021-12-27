{{-- @push('menu') --}}
<aside id="sidebar-left" class="sidebar-left">
    <div class="sidebar-header">
        <div class="sidebar-title">
            Navigation
        </div>
        <div class="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html"
            data-fire-event="sidebar-left-toggle">
            <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
        </div>
    </div>
    <div class="nano">
        <div class="nano-content">
            <nav id="menu" class="nav-main" role="navigation">
                <ul class="nav nav-main">
                    <li class="nav-active">
                        <a href="/dashboard">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    @if (auth()->user()->isAdmin == 1)


                        <li class="nav-active">
                            <a href="{{ route('karyawan') }}">
                                <i class="fa fa-tasks" aria-hidden="true"></i>
                                <span>Data Karyawan</span>
                            </a>
                        </li>
                        <li class="nav-active">
                            <a href="{{ route('kriteria') }}">
                                <i class="fa fa-tasks" aria-hidden="true"></i>
                                <span>Kriteria</span>
                            </a>
                        </li>
                        <li class="nav-parent">
                            <a>
                                <i class="fa fa-list-alt" aria-hidden="true"></i>
                                <span>Penilaian</span>
                            </a>
                            <ul class="nav nav-children">
                                <li>
                                    <a href="{{ route('penilaian') }}">
                                        Penilaian Karyawan
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('hasilPenilaian') }}">
                                        Hasil penilaian
                                    </a>
                                </li>

                            </ul>
                        </li>
                    @else

                        <li class="nav-active">
                            <a href="{{ route('jabatan') }}">
                                <i class="fa fa-tasks" aria-hidden="true"></i>
                                <span>Jabatan</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('hasilPenilaian') }}">
                                <i class="fa fa-tasks" aria-hidden="true"></i>
                                Hasil penilaian
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('jabatan-karyawan') }}">
                                <i class="fa fa-tasks" aria-hidden="true"></i>
                                Jabatan Karyawan
                            </a>
                        </li>
                    @endif

                </ul>
            </nav>

            <hr class="separator" />


        </div>

    </div>

</aside>
