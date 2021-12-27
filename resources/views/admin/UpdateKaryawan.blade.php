@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Update Data Karyawan</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Update Data Karyawan</span></li>
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
                        <a href="{{ route('karyawan') }}"><i class="fa fa-arrow-left btn btn-primary"></i></a>
                        Kembali
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title"></h2>
                    </header>
                    <div class="panel-body">
                        <form class="form-horizontal form-bordered" action="{{ route('karyawanUpdate') }}" method="POST">
                            {{ csrf_field() }}
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Nama</label>
                                    <div class="col-md-6">
                                        <input type="hidden" class="form-control populate" value="{{ $karyawan->id }}"
                                            name="id">
                                        <input type="text" class="form-control populate" value="{{ $karyawan->name }}"
                                            name="name" placeholder="Input Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Tempat dan tanggal lahir</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control populate"
                                            value="{{ $karyawan->placeOfBird }}" name="placeOfbird"
                                            placeholder="Input Place OfBird">
                                    </div>
                                    <div class="col-md-4">
                                        <input type="date" class="form-control populate"
                                            value="{{ $karyawan->dateOfBird }}" name="dateOfbird">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Alamat</label>
                                    <div class="col-md-6">
                                        <textarea name="address" class="form-control populate"
                                            placeholder="Input Your Address">{{ $karyawan->address }} </textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label">No Hp</label>
                                    <div class="col-md-6">
                                        <input type="text" name="numberPhone" value="{{ $karyawan->numberPhone }}"
                                            class="form-control populate" placeholder="Input Your Phone Number">
                                    </div>
                                </div>
                            </div>
                            <footer class="panel-footer">
                                <button type="submit" class="btn btn-primary">Update</button>
                                <a href="{{ route('karyawan') }}" class="btn btn-warning">Batal</a>
                            </footer>

                        </form>
                    </div>
                </section>
            </div>
            <!-- end: page -->
    </section>

@endsection
