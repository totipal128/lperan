<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePenilaiansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('penilaians', function (Blueprint $table) {
            $table->id();
            $table->integer('id_karyawan');
            $table->integer('id_k1')->nullable();
            $table->integer('k1')->nullable();
            $table->integer('id_k2')->nullable();
            $table->integer('k2')->nullable();
            $table->integer('id_k3')->nullable();
            $table->integer('k3')->nullable();
            $table->integer('id_k4')->nullable();
            $table->integer('k4')->nullable();
            $table->integer('id_k5')->nullable();
            $table->integer('k5')->nullable();
            $table->integer('id_k6')->nullable();
            $table->integer('k6')->nullable();
            $table->integer('id_k7')->nullable();
            $table->integer('k7')->nullable();
            $table->integer('id_k8')->nullable();
            $table->integer('k8')->nullable();
            $table->integer('id_k9')->nullable();
            $table->integer('k9')->nullable();
            $table->integer('id_k10')->nullable();
            $table->integer('k10')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('penilaians');
    }
}
