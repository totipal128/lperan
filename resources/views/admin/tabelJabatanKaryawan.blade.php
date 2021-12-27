@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Jabatan Karyawan</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Jabatan Karyawan</span></li>
                </ol>

                <a class="sidebar-right-toggle"></a>
            </div>
        </header>

        <div class="row">
            <!-- start: page -->
            <div class="row">
                <section class="panel">
                    <header class="panel-heading">
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
                                        {{-- <th>No</th> --}}
                                        <th>Name</th>
                                        <th>Jabatan</th>
                                        <th>Number Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @php
                                        $no = 1;
                                    @endphp
                                    {{-- @if ($karyawan->id_jabatan === '')
                                        <td>data tidak di temukan</td>
                                    @endif --}}
                                    @foreach ($karyawan as $k)
                                        <tr class="gradeX">
                                            {{-- <td>{{ $no++ }}</td> --}}
                                            <td>{{ $k->name }}</td>
                                            @if ($k->id_jabatan != null)

                                                <td>{{ $k->jabatan->name }}
                                                @else
                                                <td>Blum ada jabatan</td>
                                            @endif
                                            <td>{{ $k->numberPhone }}</td>
                                            <td>
                                                <a href="{{ route('jabatanKaryawanEdit', $k->id) }}"><i
                                                        class="fa fa-pencil btn btn-warning"> </i></a>
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
