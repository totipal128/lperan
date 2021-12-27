<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penilaian extends Model
{
    use HasFactory;
    protected $table = 'penilaians';
    protected $fillable = [
        'id_karyawan',
        'id_k1',
        'k1',
        'id_k2',
        'k2',
        'id_k3',
        'k3',
        'id_k4',
        'k4',
        'id_k5',
        'k5',
        'id_k6',
        'k6',
        'id_k7',
        'k7',
        'id_k8',
        'k8',
        'id_k9',
        'k9',
        'id_k10',
        'k10',
    ];

    public function karyawan()
    {
        return $this->belongsTo(Karyawan::class, 'id_karyawan');
    }

    public function kriteria()
    {
        return $this->belongsToMany(Kriteria::class);
    }
}
