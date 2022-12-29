<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class pageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $etpPage = DB::table('S_PAGE')  
                    ->select('PAGE_NAME','PAGE_TITLE','HISTORY_TITLE')
                    ->orderBy('PAGE_NAME','ASC')
                    ->where('PAGE_NAME','<>', NULL)
                    ->paginate(20);

        $title = 'page';
        
        return view('panel.page', compact('etpPage', 'title'));
    }

    public function pageSearch(Request $request)
    {
        $trancode = $request->get('searchTrancode');
        $pageName = $request->get('searchPage');
        $result = DB::table('S_PAGE')  
                    ->select('PAGE_NAME','PAGE_TITLE','HISTORY_TITLE')
                    ->join('S_PAGE_LIST','S_PAGE.PAGE_ID','=','S_PAGE_LIST.PAGE_ID')
                    ->when($trancode, function ($query) use ($trancode) {
                        return $query->where('S_PAGE_LIST.LIST_QUERY','like', '%' .$trancode. '%');
                        }) 
                    ->when($pageName, function ($query) use ($pageName) {
                        return $query->where('S_PAGE.PAGE_NAME','like', '%' .$pageName. '%');
                    })
                    ->where('S_PAGE.PAGE_NAME','!=', '')
                    ->orderBy('PAGE_NAME','ASC')
                    ->paginate(20);
        $title = 'page';
        
        return view('panel.page',['etpPage' => $result, 'title' => $title]);
    }

    /**
     * Display the page details.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function pageDetails($id)
    {
        $page = DB::table('S_PAGE')  
        ->select('PAGE_NAME','PAGE_TITLE', 
                DB::RAW('CAST(S_PAGE.PAGE_ID AS VARCHAR(MAX)) AS PAGE_ID'),
                'LIST_NAME',
                DB::RAW('CAST(LIST_QUERY AS VARCHAR(MAX)) AS LIST_QUERY'),
                DB::RAW('CAST(ONLOAD_CLIENTSCRIPT_ID AS VARCHAR(MAX)) AS ONLOAD_CLIENTSCRIPT_ID')
                )
        ->join('S_PAGE_LIST','S_PAGE.PAGE_ID','=','S_PAGE_LIST.PAGE_ID')
        ->where('PAGE_NAME','=', $id)
        ->first();

        //Query for page filter
        $filterDetail = DB::table('S_PAGE_FILTER')
        ->select('S_PAGE_FILTER.FILTER_ID',
                'S_PAGE_FILTER.FILTER_NAME', 
                'S_PAGE_FILTER.FIELD_NAME',
                'S_PAGE_FILTER.FILTER_TYPE',
                'S_PAGE_FILTER.FILTER_TITLE',
                DB::RAW('CAST(S_PAGE_FILTER.FILTER_QUERY AS VARCHAR(1500)) AS FILTER_QUERY'),
                'S_PAGE_FILTER.ITEM_INDEX'  

            )
        ->join('S_PAGE','S_PAGE_FILTER.PAGE_ID','=','S_PAGE.PAGE_ID')
        ->where('S_PAGE.PAGE_NAME','=', $id)
        ->orderBy('S_PAGE_FILTER.ITEM_INDEX','ASC')
        ->get();

        //Query page field
        $fieldDetail = DB::table('S_PAGE_LIST_COLUMN')
        ->select(
        'S_PAGE_LIST_COLUMN.ITEM_TITLE',
        'S_PAGE_LIST_COLUMN.COLUMN_NAME',
        'S_PAGE_LIST_COLUMN.ITEM_TYPE',
        DB::RAW('CAST(S_PAGE_LIST_COLUMN.QUERY AS VARCHAR(1500)) AS QUERY'),
        DB::RAW('CAST(S_PAGE_LIST_COLUMN.SCRIPT AS VARCHAR(1500)) AS SCRIPT'),
        DB::RAW('CAST(S_PAGE_LIST_COLUMN.PARAMETERS AS VARCHAR(1500)) AS PARAMETERS')
        )
        ->join('S_PAGE_LIST','S_PAGE_LIST_COLUMN.LIST_ID','=','S_PAGE_LIST.LIST_ID')
        ->join('S_PAGE','S_PAGE_LIST.PAGE_ID','=','S_PAGE.PAGE_ID')
        ->where('S_PAGE.PAGE_NAME','=', $id)
        ->orderBy('S_PAGE_LIST_COLUMN.ITEM_INDEX','ASC')
        ->get();

        //Query for attached script        
        $pageScript = DB::table('S_CLIENT_SCRIPT')
        ->select(
            DB::RAW('CAST(S_CLIENT_SCRIPT.SCRIPT_ID AS VARCHAR(MAX)) AS SCRIPT_ID'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.DESCRIPTION AS VARCHAR(MAX)) AS DESCRIPTION'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_CODE AS VARCHAR(MAX)) AS FUNCTION_CODE'),
            'S_CLIENT_SCRIPT.SCRIPT_LANGUAGE'
        )
        ->join('S_PAGE_CLIENT_SCRIPT','S_CLIENT_SCRIPT.SCRIPT_ID','=','S_PAGE_CLIENT_SCRIPT.SCRIPT_ID')
        ->join('S_PAGE','S_PAGE_CLIENT_SCRIPT.PAGE_ID','=','S_PAGE.PAGE_ID')
        ->where('S_PAGE.PAGE_NAME','=',$id)
        ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','<>','gsGetQueryString')
        ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','<>','SScript2')
        ->orderBy('S_CLIENT_SCRIPT.FUNCTION_NAME','ASC')
        ->get();

        //Query for page button 
        $pageButton = DB::table('S_PAGE_BUTTON')
        ->select(
            DB::RAW('CAST(S_PAGE_BUTTON.BUTTON_NAME AS VARCHAR(MAX)) AS BUTTON_NAME'),
            DB::RAW('CAST(S_PAGE_BUTTON.BUTTON_TITLE AS VARCHAR(MAX)) AS BUTTON_TITLE'),
            DB::RAW('CAST(S_PAGE_BUTTON.PARAMETERS AS VARCHAR(MAX)) AS PARAMETERS'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME')            
        )
        ->join('S_PAGE','S_PAGE_BUTTON.PAGE_ID','=','S_PAGE.PAGE_ID')
        ->join('S_CLIENT_SCRIPT','S_PAGE_BUTTON.FUNCTION_ID','=','S_CLIENT_SCRIPT.SCRIPT_ID')
        ->where('S_PAGE.PAGE_NAME','=',$id)
        ->orderBy('S_PAGE_BUTTON.ITEM_INDEX','ASC')
        ->get();

        $title = 'page';
        
        return view('panel.pageDetails', compact('page','filterDetail','fieldDetail','pageButton','pageScript', 'title'));
    }
}
