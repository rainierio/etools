<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class viewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $etpView = DB::table('S_VIEW')  
                    ->select('VIEW_NAME','TITLE_EDIT','TITLE_ADD')
                    ->orderBy('VIEW_NAME','ASC')
                    ->paginate(20);

        $title = 'view';

        return view('panel.view', compact('etpView', 'title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function viewSearch(Request $request)
    {
        $trancode = $request->get('searchTrancode');
        $viewName = $request->get('searchView');
        $etpView = DB::table('S_VIEW')  
                    ->select('VIEW_NAME','TITLE_EDIT','TITLE_ADD')
                    ->when($trancode, function ($query) use ($trancode) {
                        return $query->where('SELECT_QUERY','like', '%' .$trancode. '%');
                        }) 
                    ->when($viewName, function ($query) use ($viewName) {
                        return $query->where('VIEW_NAME','like', '%' .$viewName. '%');
                    })
                    ->orderBy('VIEW_NAME','ASC')
                    ->paginate(20);
        $title = 'view';

        return view('panel.view',compact('etpView','title'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function viewDetails($id)
    {
        $view = DB::table('S_VIEW')  
        ->select(
            'VIEW_NAME',
            'TITLE_EDIT', 
            DB::RAW('CAST(VIEW_ID AS CHAR(500)) AS VIEW_ID'),
            DB::RAW('CAST(FUNCTION_ONLOAD AS VARCHAR(MAX)) AS FUNCTION_ONLOAD')
        )
        ->where('VIEW_NAME','=', $id)
        ->first();

//Query for view field
        $viewDetail = DB::table('S_VIEW')
        ->select('S_VIEW.TITLE_EDIT',
                'S_VIEW_TAB.TAB_NAME', 
                'S_VIEW_TAB_ITEM.ITEM_NAME',
                DB::RAW('CAST(S_VIEW_TAB_ITEM.ITEM_TITLE AS CHAR(500)) AS ITEM_TITLE'),
                'S_VIEW_TAB_ITEM.COLUMN_NAME',
                'S_VIEW_TAB_ITEM.ITEM_TYPE',
                'S_VIEW_TAB_ITEM.MAX_LENGTH',
                DB::RAW('CAST(QUERY AS VARCHAR(1500)) AS QUERY'),
                'S_VIEW_TAB_ITEM.ALLOW_EMPTY',
                'S_VIEW_TAB_ITEM.ITEM_INDEX',
                'S_VIEW_TAB_ITEM.DEFAULT_VALUE'
            )
        ->join('S_VIEW_TAB','S_VIEW.VIEW_ID','=','S_VIEW_TAB.VIEW_ID')
        ->join('S_VIEW_TAB_ITEM','S_VIEW_TAB.TAB_ID','=','S_VIEW_TAB_ITEM.TAB_ID')
        ->where('S_VIEW.VIEW_NAME','=', $id)
        ->orderBy('S_VIEW_TAB_ITEM.ITEM_INDEX','ASC')
        ->get();
    
//Query for attached script        
        $viewScript = DB::table('S_CLIENT_SCRIPT')
        ->select(
            DB::RAW('CAST(S_CLIENT_SCRIPT.SCRIPT_ID AS VARCHAR(MAX)) AS SCRIPT_ID'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.DESCRIPTION AS VARCHAR(MAX)) AS DESCRIPTION'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_CODE AS VARCHAR(MAX)) AS FUNCTION_CODE'),
            'S_CLIENT_SCRIPT.SCRIPT_LANGUAGE'
        )
        ->join('S_VIEW_CLIENT_SCRIPT','S_CLIENT_SCRIPT.SCRIPT_ID','=','S_VIEW_CLIENT_SCRIPT.SCRIPT_ID')
        ->join('S_VIEW','S_VIEW_CLIENT_SCRIPT.VIEW_ID','=','S_VIEW.VIEW_ID')
        ->where('S_VIEW.VIEW_NAME','=',$id)
        ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','<>','gsGetQueryString')
        ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','<>','SScript2')
        ->orderBy('S_CLIENT_SCRIPT.FUNCTION_NAME','ASC')
        ->get();

//Query for view button 
        $viewButton = DB::table('S_VIEW_BUTTON')
        ->select(
            DB::RAW('CAST(S_VIEW_BUTTON.BUTTON_NAME AS VARCHAR(MAX)) AS BUTTON_NAME'),
            DB::RAW('CAST(S_VIEW_BUTTON.BUTTON_TITLE AS VARCHAR(MAX)) AS BUTTON_TITLE'),
            DB::RAW('CAST(S_VIEW_BUTTON.PARAMETERS AS VARCHAR(MAX)) AS PARAMETERS'),
            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME')
            
        )
        ->join('S_VIEW','S_VIEW_BUTTON.VIEW_ID','=','S_VIEW.VIEW_ID')
        ->join('S_CLIENT_SCRIPT','S_VIEW_BUTTON.FUNCTION_ID','=','S_CLIENT_SCRIPT.SCRIPT_ID')
        ->where('S_VIEW.VIEW_NAME','=',$id)
        ->orderBy('S_VIEW_BUTTON.ITEM_INDEX','ASC')
        ->get();

        $title = 'view';

        return view('panel.viewDetails', compact('view','viewDetail','viewScript','viewButton', 'title'));
    }

}
