<?php

namespace App\Http\Controllers;

use App\Models\Kriteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use RealRashid\SweetAlert\Facades\Alert;
use SebastianBergmann\CodeCoverage\Report\Xml\Totals;

class KriteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kriteria = Kriteria::all();
        // $kriteriaJumlah = Kriteria::count();

        return view('admin.tableKriteria', ['kriteria' => $kriteria]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.inputKriteria');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $kriteria = Kriteria::create([
            'nameKriteria'  => $request->name,
            'bobot'         => $request->bobot
        ]);
        Alert::success('Success', "Insert Data Successfully");
        return redirect('kriteria')->with('success', 'Insert Data Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function show(Kriteria $kriteria)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function edit(Kriteria $kriteria, $id)
    {
        $kriteria = Kriteria::find($id);

        return view('admin.UpdateKriteria', ['kriteria' => $kriteria]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kriteria $kriteria)
    {
        $kriteria = DB::table('kriterias')->where('id', $request->id)->update([
            'nameKriteria'  => $request->name,
            'bobot'         => $request->bobot,
        ]);
        Alert::success('Success', 'Success Data Updated');

        return redirect('kriteria')->with('success', 'Updated Data Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kriteria  $kriteria
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kriteria $kriteria, $id)
    {
        $kriteria = Kriteria::find($id);
        $kriteria->delete();
        Alert::success('Success', 'Success Data Delete');

        return redirect('kriteria')->with('success', 'Deleted Succes');
    }
}
