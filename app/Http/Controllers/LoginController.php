<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index()
    {
        $karyawan = Karyawan::all();

        return view('admin.dashboard', compact('karyawan'));
    }
}
