<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;
use Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Fabio Ramos',
            'email' => 'fabio@mail.com',
            'registration' => '517811',
            'password' => Hash::make('0246')
        ]);
        // \App\Models\User::factory(10)->create();
    }
}
