<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kriteria extends Model
{
    use HasFactory;
    protected $table = 'kriterias';
    protected $fillable = [
        'nameKriteria',
        'bobot',
    ];

    public function penilaian()
    {
        return $this->belongsTo(Penilaian::class, 'id');
    }
}
