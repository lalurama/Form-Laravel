<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DataSiswa;

class DataSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return DataSiswa::all();
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $post = DataSiswa::create($request->all());
        return response()->json($post,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return DataSiswa::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = DataSiswa::find($id);
        $post->update($request->all());
        return response()->json($post,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DataSiswa::destroy($id);
        return response()->json(null,204);
    }
}
