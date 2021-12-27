<?php

namespace App\Http\Controllers;

use App\Models\Jabatan;
use App\Models\Karyawan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\VarDumper\VarDumper;
use RealRashid\SweetAlert\Facades\Alert;


class KaryawanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $karyawan = Karyawan::all();

        // $karyawan = Karyawan::paginate(15);
        return view('admin.tableKaryawan', ['karyawan' => $karyawan]);
    }

    public function tabelJabatan()
    {
        $karyawan = Karyawan::with('jabatan')->paginate();

        // $karyawan = Karyawan::paginate(15);
        return view('admin.tabelJabatanKaryawan', ['karyawan' => $karyawan]);
    }

    public function tabelJabatan_edit($id)
    {
        $karyawan = Karyawan::find($id);
        $jabatan = Jabatan::all();
        return view('admin.UpdateJabatanKaryawan', compact('karyawan', 'jabatan'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function tabelJabatan_update(Request $request)
    {
        DB::table('karyawans')->where('id', $request->id)->update([
            'id_jabatan'          => $request->jabatan,
        ]);
        Alert::success('Success', 'Success Data Update');
        return redirect('jabatan-karyawan')->with('success', 'Data Updated Success');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.inputKaryawan');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $karyawan = Karyawan::create([
            'name'          => $request->name,
            'placeOfBird'   => $request->placeOfbird,
            'dateOfBird'    => $request->dateOfbird,
            'address'       => $request->address,
            'numberPhone'   => $request->numberPhone,
        ]);
        // Karyawan::create($request->all());
        // var_dump($karyawan);
        // die();
        Alert::success('Success', 'Success Data Created');

        return redirect('karyawan')->with('success', 'Data Created Success');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function show(Karyawan $karyawan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $karyawan = Karyawan::find($id);
        return view('admin.UpdateKaryawan', ['karyawan' => $karyawan]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        DB::table('karyawans')->where('id', $request->id)->update([
            'name'          => $request->name,
            'placeOfBird'   => $request->placeOfbird,
            'dateOfBird'    => $request->dateOfbird,
            'address'       => $request->address,
            'numberPhone'   => $request->numberPhone,
        ]);
        Alert::success('Success', 'Success Data Update');
        return redirect('karyawan')->with('success', 'Data Updated Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $karyawan = Karyawan::find($id);
        $karyawan->delete();
        alert()->success('Success', 'Success Data Delete');

        return redirect('karyawan')->with('succes', 'Deleted Succes');
    }
}
