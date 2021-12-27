@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Data Karyawan</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Data Karyawan</span></li>
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
                        <a href="{{ route('karyawan-input') }}"><i class="fa fa-plus btn btn-primary"></i></a>
                        Input
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title"></h2>
                    </header>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-bordered mb-none" id="datatable-tabletools"
                                data-swf-path="assets/vendor/jquery-datatables/extras/TableTools/swf/copy_csv_xls_pdf.swf">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Tempat Dan Tanggal Lahir</th>
                                        <th>No Hp</th>
                                        <th>Alamat</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($karyawan as $k)
                                        <tr class="gradeX">
                                            <td>{{ $no++ }}</td>
                                            <td>{{ $k->name }}</td>
                                            <td>{{ $k->placeOfBird }}, {{ $k->dateOfBird }}</< /td>
                                            <td>{{ $k->numberPhone }}</td>
                                            <td>{{ $k->address }}</td>
                                            <td>
                                                <a href="{{ route('karyawanEdit', $k->id) }}"><i
                                                        class="fa fa-pencil btn btn-warning"> </i></a>
                                                <a href="{{ route('karyawanDelete', $k->id) }}"><i
                                                        class="fa fa-trash-o btn btn-danger delete"> </i></a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <!-- end: page -->
    </section>

@endsection
@section('script')
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script></script>

@endsection
