<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Console\View\Components\Task;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index()
    {
        $writers = Writer::all();

        return response()->json($writers);
    }

    public function destroy($id)
    {
        $writer = Writer::find($id)->delete();
        return response()->json(['message' => 'Sikeres törlés!'], 201);
        //return redirect('/task/list')
    }

    public function store(Request $request)
    {
        $record = new Writer();
        $record->nev = $request->nev;
        $record->szul = $request->szul;
        $record->save();

        return Writer::find($record->id);
    }

    public function update(Request $request, $id)
    {
        $writer = Writer::find($id);
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
    }
}
