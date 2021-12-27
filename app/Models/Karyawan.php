<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karyawan extends Model
{
    use HasFactory;
    protected $table = "karyawans";
    protected $fillable = [
        'id',
        'name',
        'placeOfBird',
        'dateOfBird',
        'address',
        'numberPhone',
        'profile_photo_path',
        'id_jabatan',
    ];

    // public function penilaian()
    // {
    //     return $this->hasMany(Penilaian::class);
    // }

    public function jabatan()
    {
        return $this->belongsTo(Jabatan::class, 'id_jabatan');
    }
}
