<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Console\View\Components\Task;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index()
    {
        $writers = response()->json(Writer::all());
        return $writers;
    }

    public function show($id)
    {
        $writers = response()->json(Writer::find($id));
        return $writers;
    }

    public function destroy($id)
    {
        Writer::find($id)->delete();
        //return redirect('/task/list')
    }

    public function store(Request $request)
    {
        $writer = new Writer();
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
    }

    public function update(Request $request, $id)
    {
        $writer = Writer::find($id);
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
    }
}
