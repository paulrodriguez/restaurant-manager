<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
          'name'=>'Paul Rodriguez',
          'email'=>'paul.d.rodriguez@outlook.com',
          'password'=>bcrypt('BpKmn1TS*qVI')
        ]);
    }
}
