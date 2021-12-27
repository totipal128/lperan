@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Data Jabatan</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Data Jabatan</span></li>
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
                        <a href="{{ route('jabatan-input') }}"><i class="fa fa-plus btn btn-primary"></i></a>
                        Input
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title"></h2>
                    </header>
                    <div class="panel-body">
                        <table class="table table-bordered table-striped mb-none" id="datatable-tabletools"
                            data-swf-path="assets/vendor/jquery-datatables/extras/TableTools/swf/copy_csv_xls_pdf.swf">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name position</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($jabatan as $j)
                                    <tr class="gradeX">
                                        <td>{{ $no++ }}</td>
                                        <td>{{ $j->name }}</td>
                                        <td>
                                            <a href="{{ route('jabatan-update', $j->id) }}"><i
                                                    class="fa fa-pencil btn btn-warning"> </i></a>
                                            <a href="{{ route('jabatan-delete', $j->id) }}"><i
                                                    class="fa fa-trash-o btn btn-danger delete"> </i></a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
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
