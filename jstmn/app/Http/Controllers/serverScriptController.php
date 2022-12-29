<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class serverScriptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $serverScript = DB::table('S_SERVER_SCRIPT')
        ->select(
            DB::RAW('CAST(S_SERVER_SCRIPT.SCRIPT_ID AS VARCHAR(MAX)) AS SCRIPT_ID'),
            DB::RAW('CAST(S_SERVER_SCRIPT.SCRIPT_NAME AS VARCHAR(MAX)) AS SCRIPT_NAME'),
            DB::RAW('CAST(S_SERVER_SCRIPT.DESCRIPTION AS VARCHAR(MAX)) AS DESCRIPTION'),
            DB::RAW('CAST(S_SERVER_SCRIPT.CODE AS VARCHAR(MAX)) AS FUNCTION_CODE'),
            'S_SERVER_SCRIPT.SCRIPT_LANGUAGE',
            'S_SERVER_SCRIPT.DATE_CREATED',
            'S_SERVER_SCRIPT.DATE_MODIFIED',
            DB::RAW('CAST(S_SERVER_SCRIPT.CREATED_BY AS VARCHAR(MAX)) AS CREATED_BY'),
            DB::RAW('CAST(S_SERVER_SCRIPT.MODIFIED_BY AS VARCHAR(MAX)) AS MODIFIED_BY')
        )
        ->orderBy('S_SERVER_SCRIPT.SCRIPT_NAME','ASC')
        ->paginate(20);
        
        $title = 'serverScript';

        return view('panel.serverScript', compact('serverScript', 'title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function serverScriptSearch(Request $request)
    {
        $ssSearch = $request->get('ssSearch');
        $ssContentSearch = $request->get('ssContentSearch');

        $serverScript = DB::table('S_SERVER_SCRIPT')  
                    ->select(
                            DB::RAW('CAST(S_SERVER_SCRIPT.SCRIPT_ID AS VARCHAR(MAX)) AS SCRIPT_ID'),
                            DB::RAW('CAST(S_SERVER_SCRIPT.SCRIPT_NAME AS VARCHAR(MAX)) AS SCRIPT_NAME'),
                            DB::RAW('CAST(S_SERVER_SCRIPT.DESCRIPTION AS VARCHAR(MAX)) AS DESCRIPTION'),
                            DB::RAW('CAST(S_SERVER_SCRIPT.CODE AS VARCHAR(MAX)) AS FUNCTION_CODE'),
                            'S_SERVER_SCRIPT.SCRIPT_LANGUAGE',
                            'S_SERVER_SCRIPT.DATE_CREATED',
                            'S_SERVER_SCRIPT.DATE_MODIFIED',
                            DB::RAW('CAST(S_SERVER_SCRIPT.CREATED_BY AS VARCHAR(MAX)) AS CREATED_BY'),
                            DB::RAW('CAST(S_SERVER_SCRIPT.MODIFIED_BY AS VARCHAR(MAX)) AS MODIFIED_BY')
                        )
                    ->when($ssSearch, function ($query) use ($ssSearch) {
                        return $query->where('SCRIPT_NAME','like', '%' .$ssSearch. '%');
                        }) 
                    ->when($ssContentSearch, function ($query) use ($ssContentSearch) {
                        return $query->where('CODE','like', '%' .$ssContentSearch. '%');
                    })
                    ->orderBy('SCRIPT_NAME','ASC')
                    ->paginate(20);

        $title = 'serverScript';
        
        return view('panel.serverScript', compact('serverScript', 'title'));
    }

}
