<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('fname');
            $table->string('lname')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('sex',2)->nullable()->comment('M,F');
            $table->string('email')->nullable()->unique();
            $table->string('phone')->nullable();
            $table->date('hire_date')->nullable();
            $table->unsignedBigInteger('manager')->nullable();
            $table->unsignedBigInteger('department')->nullable();
            $table->unsignedBigInteger('job')->nullable();
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
        Schema::dropIfExists('employees');
    }
};
