<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'engine_displacement', 'engine_power', 'price', 'location'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */

}
