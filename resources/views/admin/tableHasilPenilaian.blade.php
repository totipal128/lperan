@extends('layouts.app-admin')
@section('page')
    <section role="main" class="content-body">
        <header class="page-header">
            <h2>Penilaian Dengan Metode Promethee</h2>

            <div class="right-wrapper pull-right">
                <ol class="breadcrumbs">
                    <li>
                        <a href="{{ route('dashboard') }}">
                            <i class="fa fa-home"></i>
                        </a>
                    </li>
                    <li><span>Penilaian Dengan Metode Promethee</span></li>
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
                <div class="col-md-12 col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            Diketahui (Terdapat beberapa Kriteria dan Data Sampel seperti tabel dibawah ini)
                        </div>
                        <div class="panel-footer">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    KRITERIA
                                    <thead class="text-center">
                                        <tr>
                                            <th class="text-center">Name</th>
                                            <th class="">Bobot</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <?php
                                            for ($i = 0; $i < count($kriteria); $i++) {
                                                echo "<tr><td class=''>" . $kriteria[$i]['nameKriteria'] . '</td>';
                                                echo '<td>' . $kriteria[$i]['bobot'] . '</td>';
                                            }
                                            ?>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    DATA SAMPEL
                                    <thead class="text-center">
                                        <tr>
                                            <th rowspan="2" valign="middle" class="text-center">
                                                <p>Id Alternatif</p>
                                            </th>
                                            <th colspan="10" class="text-center">Kriteria</th>
                                        </tr>
                                        <tr>
                                            <?php
                                            for ($i = 0; $i < count($kriteria); $i++) {
                                                echo '<th>' . $kriteria[$i]['nameKriteria'] . '</th>';
                                            }
                                            ?>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        for ($i = 0; $i < count($penilaian); $i++) {
                                            echo '<tr>';
                                            echo "<td class='text-center'>" . $penilaian2[$i]['karyawan']['name'] . '</td>';
                                            $k1 = 1;
                                            for ($j = 0; $j < count($kriteria); $j++) {
                                                $k = 'k' . $k1++;
                                                echo '<td>' . $penilaian[$i][$k] . '</td>';
                                            }
                                            echo '</tr>';
                                        }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-sm-12">
                    <div class="panel-footer">
                        <b>Penentuan Nilai Deviasi berdasarkan Perbandingan Berpasangan (d)</b>
                        <div class="table-responsive table--no-card m-b-30">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th rowspan="3" style="vertical-align : middle;">Alternatif</th>
                                        <th colspan="<?php echo count($kriteria) * 2; ?>" style="text-align : center;">Nilai Kriteria
                                        </th>
                                    </tr>
                                    <tr>
                                        <?php foreach ($kriteria as $i => $d) { ?>
                                        <th colspan="1" class="text-center"><?php echo $d['nameKriteria']; ?></th>
                                        <?php } ?>
                                    </tr>
                                    <tr>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                        $i = 0;
                                        $arr = array(count($penilaian));
                                        foreach ($penilaian2 as $da) {
                                            $j = 0;
                                            $arr[$i] = array(count($penilaian));
                                            foreach ($penilaian2 as $db) {
                                                if ($da['id'] !== $db['id']) {
                                                    $sum_IP = 0.0;
                                    ?>
                                    <tr>
                                        <td><?php echo '(' . $da->karyawan->name . ',' . $db->karyawan->name . ')'; ?></td>
                                        <?php
                                                $q = 2;
                                                $k1 =1;
                                                foreach ($kriteria as $dk) {
                                                    $IP = 0.0; //Index Preferensi
                                                    $P = 0.0; //Preferensi
                                                    $k ='k'.$k1++;

                                                    $n1 = $da->$k;
                                                    $n2 = $db->$k;
                                                    $d = abs(floatval($n1) - floatval($n2));

                                                    //$p = floatval($dk['p']);
                                                    //$q = floatval($dk['q']);
                                                    $bobot = floatval($dk['bobot']);
                                                    $c =($n1 - $n2)*$bobot;
                                                    if ($c == 0) {
                                                        $P = 0;
                                                    }
                                                    if ($c > 0) {
                                                        $P = 1;
                                                    }
                                                    if ($c < 0) {
                                                        $P = 0;
                                                    }
                                                    $IP += $P;
                                                    $sum_IP += $IP;
                                                ?>
                                        <td>
                                            <?php echo $IP; ?>
                                        </td>
                                        <?php
                                                }
                                                $arr[$i][$j] = $sum_IP / count($kriteria);
                                            ?>
                                    </tr>
                                    <?php
                                            } else {
                                                $arr[$i][$j] = 0;
                                            }
                                            $j++;
                                        }
                                        $i++;
                                    } ?>
                                </tbody>

                            </table>
                        </div>
                        <br>
                        <b>Mencari Nilai Leaving Flow dan Entering Flow</b>
                        <div class="table-responsive table--no-card m-b-30">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style="vertical-align : middle;"></th>
                                        <?php foreach ($penilaian2 as $i => $d) { ?>
                                        <th style="text-align : left;"><?php echo $d->karyawan->name; ?></th>
                                        <?php } ?>
                                        <th style="vertical-align : middle;">Jumlah Baris</th>
                                        <th style="vertical-align : middle;">leaving flow</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <?php
                                            $leaving_flow = array();
                                            $entering_flow = array();
                                            $sum_row = array();
                                            $sum_column = array();
                                            $k = 'k';
                                            for ($n = 0; $n < count($arr); $n++) {
                                                $sum_a = 0;
                                                $sum_b = 0;
                                            ?>
                                    <tr>
                                        <td><?php echo $penilaian2[$n]['karyawan']['name']; ?></td>
                                        <?php
                                                    for ($m = 0; $m < count($arr[$n]); $m++) {
                                                    ?>
                                        <td><?php echo $arr[$n][$m]; ?></td>
                                        <?php
                                            $sum_a += $arr[$n][$m];
                                            $sum_b += $arr[$m][$n];
                                        }
                                        $sum_row[$n] = $sum_a;
                                        $sum_column[$n] = $sum_b;
                                        $leaving_flow[$n] = (1 / (count($penilaian) - 1)) * $sum_a;
                                        $entering_flow[$n] = (1 / (count($penilaian) - 1)) * $sum_b;
                                        ?>
                                        <td style="font-weight: bold"><?php echo $sum_row[$n]; ?></td>
                                        <td style="font-weight: bold"><?php echo $leaving_flow[$n]; ?></td>
                                    </tr>

                                    <?php
                                            }
                                            ?><tr>
                                        <td style="font-weight: bold">Jumlah Kolom</td>
                                        <?php
                                                for ($g = 0; $g < count($sum_column); $g++) { ?>
                                        <td style="font-weight: bold"><?php echo $sum_column[$g]; ?></td>
                                        <?php }
                                                ?><td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style="font-weight: bold">Entering Flow</td><?php
                                                                                                for ($g = 0; $g < count($entering_flow); $g++) { ?>
                                        <td style="font-weight: bold"><?php echo $entering_flow[$g]; ?></td>
                                        <?php }
                                                ?><td></td>
                                        <td></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <br>
                        <b>Mencari Netflow</b>
                        <div class="table-responsive table--no-card m-b-30">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style="vertical-align : middle;">Alternatif</th>
                                        <th style="vertical-align : middle;">NetFlow</th>
                                        <th style="vertical-align : middle;">Peringkat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $net_flow = null;
                                    for ($h = 0; $h < count($leaving_flow); $h++) {
                                        $n = $leaving_flow[$h] - $entering_flow[$h];
                                        $net_flow[] = array("id" => $penilaian[$h]['karyawan']['name'], "netflow" => $n);
                                    }
                                    array_multisort(array_map(function ($element) {
                                        return $element['netflow'];
                                    }, $net_flow), SORT_DESC, $net_flow);
                                    foreach ($net_flow as $i => $net) {
                                    ?>
                                    <tr>
                                        <td><?php echo $net['id']; ?></td>
                                        <td><?php echo $net['netflow']; ?></td>
                                        <td><?php echo $i + 1; ?></td>
                                    </tr>
                                    <?php
                                    }
                                    ?>
                                </tbody>
                            </table>
                        </div>
                        <?php
                        $terbesar = array_reduce($net_flow, function ($a, $b) {
                            return @$a['netflow'] > $b['netflow'] ? $a : $b;
                        });

                        echo 'Berdasarkan nilai terbesar maka <b> Alternatif ' . $terbesar['id'] . '</b> merupakan alternatif terpilih'; ?>

                    </div>
                </div>
            </div>
        </div>
        <!-- end: page -->
    </section>
@endsection
