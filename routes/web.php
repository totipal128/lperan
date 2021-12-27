<?php

use App\Http\Controllers\HasilPenilaianController;
use App\Http\Controllers\JabatanController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\KriteriaController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PenilaianController;
use App\Models\Penilaian;
use RealRashid\SweetAlert\Facades\Alert;


// use Alert;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/dash', function () {
    return view('admin/tableKaryawan');
});

// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     // Alert::success('Welcome To Dashboard Admin');
//     // Alert::success('Welcome to', 'Dashboard Admin');
//     return view('admin/dashboard');
// })->name('dashboard');

Route::group(['middleware' => [
    'auth:sanctum',
    'verified',
    'isAdmin'
]], function () {
    Route::get('/dashboard', [LoginController::class, 'index'])->name('dashboard');
    // Route::get('/dashboard', function () {
    //     return view('admin/dashboard');
    // })->name('dashboard');

    // Route ke Karyawan
    Route::get('/karyawan', [KaryawanController::class, 'index'])->name('karyawan');
    Route::get('/karyawan-create', [KaryawanController::class, 'create'])->name('karyawan-input');
    Route::get('/karyawan/delete/{id}', [KaryawanController::class, 'destroy'])->name('karyawanDelete');
    Route::get('/karyawan/update/{id}', [KaryawanController::class, 'edit'])->name('karyawanEdit');
    Route::post('/karyawan/insert', [KaryawanController::class, 'store'])->name('karyawan-insert');
    Route::post('/karyawan/editt', [KaryawanController::class, 'Update'])->name('karyawanUpdate');
    // Route::post('/karyawanInsert', 'KaryawanController@store')->name('karyawan-insert');

    Route::get('/jabatan-karyawan', [KaryawanController::class, 'tabelJabatan'])->name('jabatan-karyawan');
    Route::get('/jabatan-karyawan/update/{id}', [KaryawanController::class, 'tabelJabatan_edit'])->name('jabatanKaryawanEdit');
    Route::post('/Jabatan-karyawan/edit', [KaryawanController::class, 'tabelJabatan_update'])->name('jabatankaryawanUpdate');

    // Route::get('/karyawanInsert', [KaryawanController::class, 'store'])->name('karyawan-insert');

    //Kriteria
    Route::get('/kriteria', [KriteriaController::class, 'index'])->name('kriteria');
    Route::get('/kriteria/deleted/{id}', [KriteriaController::class, 'destroy'])->name('kriteria-delete');
    Route::get('/kriteria/update/{id}', [KriteriaController::class, 'edit'])->name('kriteria-update');
    Route::get('/kriteria-create', [KriteriaController::class, 'create'])->name('kriteria-input');
    Route::post('/kriteria/Insert', [KriteriaController::class, 'store'])->name('kriteria-insert');
    Route::post('/kriteria/edit', [KriteriaController::class, 'update'])->name('kriteria-edit');

    //jabatan
    Route::get('/Jabatan', [JabatanController::class, 'index'])->name('jabatan');
    Route::get('/jabatan/deleted/{id}', [JabatanController::class, 'destroy'])->name('jabatan-delete');
    Route::get('/jabatan/update/{id}', [JabatanController::class, 'edit'])->name('jabatan-update');
    Route::get('/jabatan-input/', [JabatanController::class, 'create'])->name('jabatan-input');
    Route::post('/jabatan/Insert', [JabatanController::class, 'store'])->name('jabatan-insert');
    Route::post('/jabatan/edit', [JabatanController::class, 'update'])->name('jabatan-edit');


    Route::get('/penilaian', [PenilaianController::class, 'index'])->name('penilaian');
    Route::get('/Penilaian-input', [PenilaianController::class, 'create'])->name('penilaian-input');
    Route::post('/penilaian/Insert/', [PenilaianController::class, 'store'])->name('penilaian-insert');
    Route::get('/penilaian/deleted/{id}', [PenilaianController::class, 'destroy'])->name('penilaian-delete');
    Route::get('/penilaian/update/{id}', [PenilaianController::class, 'edit'])->name('penilaian-update');
    Route::post('/penilaian/edit', [PenilaianController::class, 'update'])->name('penilaian-edit');


    Route::get('/hasil-penilaian', [HasilPenilaianController::class, 'index'])->name('hasilPenilaian');
});
