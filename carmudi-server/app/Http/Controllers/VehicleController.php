<?php

namespace App\Http\Controllers;


use App\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }


    public function get() {

        return response()->json(Vehicle::all());
    }


    public function post(Request $request) {

        return response()->json(['success' => true]);
    }

}
