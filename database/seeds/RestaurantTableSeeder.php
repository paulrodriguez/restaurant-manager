<?php

use Illuminate\Database\Seeder;

class RestaurantTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('restaurants')->insert([
          'name'=>'Panda Express',
          'description'=>'Fast-food chain for Chinese standards, including some health-conscious options.',
          'address1'=>'4940 W Century Blvd',
          'city'=>'Inglewood',
          'state'=>'California',
          'state_code'=>'CA',
          'country_code'=>'US',
          'postal_code'=>'90304',
          'telephone'=>'(310) 419-0468',
          'latitude'=>33.9476637,
          'longtitude'=>-118.412622
        ]);
    }
}
