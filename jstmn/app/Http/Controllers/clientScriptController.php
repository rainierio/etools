<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class clientScriptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientScript = DB::table('S_CLIENT_SCRIPT')
        ->select(
            DB::RAW('CAST(S_CLIENT_SCRIPT.SCRIPT_ID AS VARCHAR(MAX)) AS SCRIPT_ID'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.DESCRIPTION AS VARCHAR(MAX)) AS DESCRIPTION'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_CODE AS VARCHAR(MAX)) AS FUNCTION_CODE'),
            'S_CLIENT_SCRIPT.SCRIPT_LANGUAGE',
            'S_CLIENT_SCRIPT.DATE_CREATED',
            'S_CLIENT_SCRIPT.DATE_MODIFIED',
            DB::RAW('CAST(S_CLIENT_SCRIPT.CREATED_BY AS VARCHAR(MAX)) AS CREATED_BY'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.MODIFIED_BY AS VARCHAR(MAX)) AS MODIFIED_BY')
        )
        ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','<>','gsGetQueryString')
        ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','<>','SScript2')
        ->orderBy('S_CLIENT_SCRIPT.FUNCTION_NAME','ASC')
        ->paginate(20);

        $title = 'clientScript';
        
        return view('panel.clientScript', compact('clientScript','title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function clientScriptSearch(Request $request)
    {
        $csSearch = $request->get('csSearch');
        $csContentSearch = $request->get('csContentSearch');

        $clientScript = DB::table('S_CLIENT_SCRIPT')  
                    ->select(
                            DB::RAW('CAST(S_CLIENT_SCRIPT.SCRIPT_ID AS VARCHAR(MAX)) AS SCRIPT_ID'),
                            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME'),
                            DB::RAW('CAST(S_CLIENT_SCRIPT.DESCRIPTION AS VARCHAR(MAX)) AS DESCRIPTION'),
                            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_CODE AS VARCHAR(MAX)) AS FUNCTION_CODE'),
                            'S_CLIENT_SCRIPT.SCRIPT_LANGUAGE',
                            'S_CLIENT_SCRIPT.DATE_CREATED',
                            'S_CLIENT_SCRIPT.DATE_MODIFIED',
                            DB::RAW('CAST(S_CLIENT_SCRIPT.CREATED_BY AS VARCHAR(MAX)) AS CREATED_BY'),
                            DB::RAW('CAST(S_CLIENT_SCRIPT.MODIFIED_BY AS VARCHAR(MAX)) AS MODIFIED_BY')
                        )
                    ->when($csSearch, function ($query) use ($csSearch) {
                        return $query->where('FUNCTION_NAME','like', '%' .$csSearch. '%');
                        }) 
                    ->when($csContentSearch, function ($query) use ($csContentSearch) {
                        return $query->where('FUNCTION_CODE','like', '%' .$csContentSearch. '%');
                    })
                    ->orderBy('FUNCTION_NAME','ASC')
                    ->paginate(100);
        
        $title = 'clientScript';
        
        return view('panel.clientScript', compact('clientScript', 'title'));
    }

}
