@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Data penilaian</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Data penilaian</span></li>
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
                        <a href="{{ route('penilaian-input') }}"><i class="fa fa-plus btn btn-primary"></i></a>
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title"></h2>
                    </header>
                    <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped mb-none" id="datatable-tabletools"
                                data-swf-path="assets/vendor/jquery-datatables/extras/TableTools/swf/copy_csv_xls_pdf.swf">
                                <thead>
                                    <tr>
                                        <th rowspan="2" class="center">No</th>
                                        <th rowspan="2" class="center">Name Kriteria</th>
                                        <th colspan="10" class="center">Kriteria</th>
                                        {{-- <th rowspan="">Bobot</th> --}}
                                    </tr>
                                    <tr>
                                        @foreach ($kriteria as $l)
                                            <th>{{ $l->nameKriteria }}</th>
                                        @endforeach
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($penilaian as $k)
                                        <tr class="gradeX">
                                            <td>{{ $no++ }}</td>
                                            <td>{{ $k->karyawan->name }}</td>
                                            @for ($i = 1; $i <= count($kriteria); $i++)
                                                @php
                                                    $j = 'k' . $i;
                                                @endphp
                                                <td>{{ $k->$j }}</td>
                                            @endfor
                                            <td>
                                                <a href="{{ route('penilaian-update', $k->id) }}"><i
                                                        class="fa fa-pencil btn btn-warning"> </i></a>
                                                <a href="{{ route('penilaian-delete', $k->id) }}"><i
                                                        class="fa fa-trash-o btn btn-danger"> </i></a>
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
