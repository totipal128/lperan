@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Update Jabatan</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Update Jabatan</span></li>
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
                        <a href="{{ route('jabatan') }}"><i class="fa fa-arrow-left btn btn-primary"></i></a>
                        Kembali
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title"></h2>
                    </header>
                    <div class="panel-body">
                        <form class="form-horizontal form-bordered" action="{{ route('jabatan-edit') }}" method="POST">
                            {{ csrf_field() }}
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Name Posision</label>
                                    <div class="col-md-6">
                                        <input type="hidden" value="{{ $jabatan->id }}" class="form-control populate"
                                            name="id" placeholder="Input Name position">
                                        <input type="text" value="{{ $jabatan->name }}" class="form-control populate"
                                            name="name" placeholder="Input Name position">
                                    </div>
                                </div>
                            </div>
                            <footer class="panel-footer">
                                <button type="submit" class="btn btn-primary">Update</button>
                                <a href="{{ route('jabatan') }}" class="btn btn-default">Batal</a>
                            </footer>

                        </form>
                    </div>
                </section>
            </div>
            <!-- end: page -->
    </section>

@endsection
