@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Update Data Penilaian</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Update Data Penilaian</span></li>
                </ol>

                <a class="sidebar-right-toggle"></a>
            </div>
        </header>

        @php
            $no = 1;
        @endphp
        <div class="row">
            <!-- start: page -->
            <div class="row">
                <section class="panel">
                    <header class="panel-heading">
                        <a href="{{ route('penilaian') }}"><i class="fa fa-arrow-left btn btn-primary"></i></a>
                        Kembali
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title"></h2>
                    </header>
                    <div class="panel-body">
                        <form class="form-horizontal form-bordered" action="{{ route('penilaian-edit') }}" method="POST">
                            {{ csrf_field() }}
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Name Karyawan</label>
                                    <div class="col-md-6">
                                        <input type="hidden" class="form-control populate" name="id" value="{{ $penilaian->id }} ">
                                        <input type="text" class="form-control populate" name="" value="{{ $penilaian->karyawan->name }} " disabled>
                                        <input type="hidden" class="form-control populate" name="name" value="{{ $penilaian->karyawan->id }} " disabled>
                                        {{-- <input type="text" class="form-control populate" name="name"
                                            placeholder="Input Name"> --}}
                                    </div>
                                </div>
                                {{-- @if (<selec != '') --}}
                                @php
                                    $nok= 0;
                                @endphp
                                @foreach ($kriteria as $kr )
                                @php
                                    $nok++;
                                    $d = 'k'.$nok;
                                    $c = 'c'.$nok;
                                @endphp
                                <div class="form-group">
                                    <label class="col-md-3 control-label" name="{{ $c }}">{{ $kr->nameKriteria }}</label>
                                    <div class="col-md-6">
                                        <input type="hidden" class="form-control populate" name="{{ $c }}"
                                            placeholder="Input Bobot" value="{{ $kr->id }}">
                                        <input type="text" value="{{ $penilaian->$d }}" class="form-control populate" name="{{ $d }}"
                                            placeholder="Input Bobot">
                                    </div>
                                </div>
                                @endforeach
                                {{-- @endif --}}

                            </div>
                            <footer class="panel-footer">
                                <button type="submit" class="btn btn-primary">Update</button>
                                <button type="reset" class="btn btn-default">Reset</button>
                            </footer>

                        </form>
                    </div>
                </section>
            </div>
            <!-- end: page -->
    </section>

@endsection
{{-- @section()
    <script>
        var select = document.getElementById("selct");
        function selec()
    </script>
@endsection --}}
