@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Input Data Kriteria</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Input Data Kriteria</span></li>
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
                        <a href="{{ route('kriteria') }}"><i class="fa fa-arrow-left btn btn-primary"></i></a>
                        Kembali
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title"></h2>
                    </header>
                    <div class="panel-body">
                        <form class="form-horizontal form-bordered" action="{{ route('kriteria-insert') }}" method="POST">
                            @csrf
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Nama Kriteria</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control populate" name="name"
                                            placeholder="Input Name" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Bobot</label>
                                    <div class="col-md-6">
                                        <input type="number" class="form-control populate" name="bobot"
                                            placeholder="Input Bobot" required>
                                    </div>
                                </div>
                            </div>
                            <footer class="panel-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
                                <button type="reset" class="btn btn-default">Reset</button>
                            </footer>

                        </form>
                    </div>
                </section>
            </div>
            <!-- end: page -->
    </section>

@endsection
