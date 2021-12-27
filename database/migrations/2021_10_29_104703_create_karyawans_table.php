<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKaryawansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('karyawans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('placeOfBird')->nullable();
            $table->date('dateOfBird')->nullable();
            $table->string('address')->nullable();
            $table->string('numberPhone')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->integer('id_jabatan')->nullable();
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
        Schema::dropIfExists('karyawans');
    }
}
