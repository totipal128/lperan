<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\Kriteria;
use App\Models\Penilaian;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use RealRashid\SweetAlert\Facades\Alert;

class PenilaianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $penilaian = Penilaian::with('karyawan')->paginate();
        $kriteria = Kriteria::all();

        // var_dump($penilaian);
        // die();

        return view('admin.tablePenilaian', compact('kriteria', 'penilaian'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // $karyawan2 =
        $penilaian = Penilaian::with('karyawan')->paginate();
        $karyawan = Karyawan::all();
        $kriteria = Kriteria::all();

        return view('admin.inputPenilaian', compact('karyawan', 'kriteria', 'penilaian'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $nilai = Penilaian::create([
            'id_karyawan'       => $request->name,
            'id_k1'             => $request->c1,
            'k1'                => $request->k1,
            'id_k2'             => $request->c2,
            'k2'                => $request->k2,
            'id_k3'             => $request->c3,
            'k3'                => $request->k3,
            'id_k4'             => $request->c4,
            'k4'                => $request->k4,
            'id_k5'             => $request->c5,
            'k5'                => $request->k5,
            'id_k6'             => $request->c6,
            'k6'                => $request->k6,
            'id_k7'             => $request->c7,
            'k7'                 => $request->k7,
            'id_k8'             => $request->c8,
            'k8'                => $request->k8,
            'id_k9'             => $request->c9,
            'k9'                => $request->k9,
            'id_k10'            => $request->c10,
            'k10'               => $request->k10,
        ]);

        Alert::success('Success', "Insert Data Successfully");
        return redirect('penilaian');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Penilaian  $penilaian
     * @return \Illuminate\Http\Response
     */
    public function show(Penilaian $penilaian)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Penilaian  $penilaian
     * @return \Illuminate\Http\Response
     */
    public function edit(Penilaian $penilaian, $id)
    {
        $penilaian = Penilaian::find($id);
        $karyawan = Penilaian::with('karyawan')->paginate();
        $kriteria = Kriteria::all();

        return view('admin.UpdatePenilaian', compact('penilaian', 'karyawan', 'kriteria'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Penilaian  $penilaian
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Penilaian $penilaian)
    {
        // var_dump([
        //     $request->id,
        // ]);
        // die();
        $penilaian = DB::table('penilaians')->where('id', $request->id)->update([
            'id_k1'             => $request->c1,
            'k1'                => $request->k1,
            'id_k2'             => $request->c2,
            'k2'                => $request->k2,
            'id_k3'             => $request->c3,
            'k3'                => $request->k3,
            'id_k4'             => $request->c4,
            'k4'                => $request->k4,
            'id_k5'             => $request->c5,
            'k5'                => $request->k5,
            'id_k6'             => $request->c6,
            'k6'                => $request->k6,
            'id_k7'             => $request->c7,
            'k7'                 => $request->k7,
            'id_k8'             => $request->c8,
            'k8'                => $request->k8,
            'id_k9'             => $request->c9,
            'k9'                => $request->k9,
            'id_k10'            => $request->c10,
            'k10'               => $request->k10,
        ]);
        Alert::success('Success', 'Success Data Updated');

        return redirect('penilaian')->with('success', 'updated Succes');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Penilaian  $penilaian
     * @return \Illuminate\Http\Response
     */
    public function destroy(Penilaian $penilaian, $id)
    {
        // var_dump($penilaian);
        // die();
        // //
        Penilaian::find($id)->delete();
        // $penilaian2 = Penilaian::find($penilaian);
        Alert::success('Success', 'Success Data Delete');

        return redirect('penilaian')->with('success', 'Deleted Succes');
    }
}
