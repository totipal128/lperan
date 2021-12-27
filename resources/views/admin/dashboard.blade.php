@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Dashboard</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Dashboard</span></li>
                </ol>

                <a class="sidebar-right-toggle"></a>
            </div>
        </header>

        <div class="row">
            <!-- start: page -->

            <section class="panel">
                <header class="panel-heading">
                    <h2>Welcome to Dashboard</h2>
                    <div class="panel-actions">
                        <a href="#" class="fa fa-caret-down"></a>
                        <a href="#" class="fa fa-times"></a>
                    </div>
                    <h2 class="panel-title"></h2>
                </header>
                <div class="panel-body">
                    <p>PROMETHEE adalah metodologi untuk mengevaluasi alternatif dengan kriteria yang diberikan dan membuat
                        peringkat alternatif untuk keputusan akhir. Dugaan dari dominasi kriteria yang digunakan dalam
                        PROMETHEE adalah penggunaan nilai dalam hubungan outranking, outranking merupakan metode yang dapat
                        menangani criteria kualitatif dan kuantitatif secara bersamaan. Metode ini mampu memperhitungkan
                        alternatif-alternatif berdasarkan karakteristik yang berbeda. Metode outranking membandingkan
                        beberapa kemungkinan alternatif (pada kriteria) dengan kriteria dasar. Mereka pada dasarnya
                        menghitung indeks untuk setiap pasangan alternatif yang memenuhi syarat atau antara peringkat satu
                        relatif dengan alternatif lain</p>
                </div>
            </section>
            <div class="row">
                <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="row">
                        <div class="col-md-12 col-lg-6 col-xl-6">
                            <section class="panel panel-featured-left panel-featured-quartenary">
                                <div class="panel-body">
                                    <div class="widget-summary">
                                        <div class="widget-summary-col widget-summary-col-icon">
                                            <div class="summary-icon bg-quartenary">
                                                <i class="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div class="widget-summary-col">
                                            <div class="summary">
                                                <h4 class="title">Totals Employee</h4>
                                                <div class="info">
                                                    <strong class="amount">{{ count($karyawan) }}</strong>
                                                </div>
                                            </div>
                                            <div class="summary-footer">
                                                <a class="text-muted text-uppercase">(report)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
            <!-- end: page -->
    </section>
@endsection
