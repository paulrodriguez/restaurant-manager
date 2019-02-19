<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRestaurantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',50);
            $table->string('description',200);
            $table->string('address1',50);
            $table->string('address2',50);
            $table->string('city',50);
            $table->string('state',50);
            $table->string('state_code',5);
            $table->string('country_code',5);
            $table->string('postal_code',10);
            $table->string('telephone',20);
            $table->double('latitude',5,10);
            $table->double('longtitude',5,10);
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
        Schema::dropIfExists('restaurants');
    }
}
