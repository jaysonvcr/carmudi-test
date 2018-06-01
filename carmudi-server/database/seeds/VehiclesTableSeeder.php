<?php

use Illuminate\Database\Seeder;

class VehiclesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
    	 factory(\App\Vehicle::class, 100)->create();
    }

}