<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class dependencyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchOption = $request->get('searchOption');

        $title = 'dependency';
        return view('panel.dependency', compact('searchOption','title'));
    }

    /**
     * Display search result
     *
     * @return \Illuminate\Http\Response
     */
    public function dependencySearch(Request $request)
    {
        $searchOption = $request->get('searchOption');
        $dependencySearch = $request->get('dependencySearch');
        
        if ($searchOption == '1') {

            $pageSearch = $this->pageSearch($dependencySearch);

        } else if ($searchOption == '2') {

            $this->viewSearch($dependencySearch);

        } else if ($searchOption == '3') {

            $clientScriptSearch = $this->csSearch($dependencySearch);

        }
        
        $title = 'dependency';

        return view('panel.dependency', compact('clientScriptSearch','searchOption', 'pageSearch', 'title'));    
    }

    // Page check function
    public function pageSearch($id) {

        //Array to use in get Area ID query
        $getId = DB::table('D_LOOKUP_AREA_ITEM AS A')
                    ->select(
                        DB::RAW('CAST(A.PARENT_ID AS VARCHAR(MAX)) AS PARENT_ID')
                        )
                    ->where('A.USER_STR1','like','%' .$id. '%')
                    ->get();

        $array = json_decode(json_encode($getId), true);

        // Array to pass to View            
        $getId2 = DB::table('D_LOOKUP_AREA_ITEM AS A')
                ->select(
                    DB::RAW('CAST(A.DESCRIPTION AS VARCHAR(MAX)) AS DESCRIPTION'),
                    DB::RAW('CAST(A.USER_STR1 AS VARCHAR(MAX)) AS USER_STR1')
                    )
                ->where('A.USER_STR1','like','%' .$id. '%')
                ->get();

        // Get area ID query
        $getArea = DB::table('D_LOOKUP_AREA_ITEM AS B')     
                    ->select(
                        DB::RAW('CAST(B.AREA_ID AS VARCHAR(MAX)) AS AREA_ID'),
                        DB::RAW('CAST(C.AREA_NAME AS VARCHAR(MAX)) AS AREA_NAME')
                    )
                    ->join('D_LOOKUP_AREA AS C','B.AREA_ID','=','C.AREA_ID')
                    ->whereIn('B.ITEM_ID', $array )
                    ->get();

        return array($getId2,$getArea);
    }

    // View check function
    public function viewSearch($id) {
        //query to check view name using by any script or pages or trigger from button
    }

    // Client script check function
    public function csSearch($id) {
        //check client script attach to what view
        $clientScript = DB::table('S_CLIENT_SCRIPT')  
                    ->select(
                            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME'),
                            DB::RAW('CAST(S_VIEW.VIEW_NAME AS VARCHAR(MAX)) AS VIEW_NAME'),
                            DB::RAW('CAST(S_VIEW.TITLE_EDIT AS VARCHAR(MAX)) AS TITLE_EDIT')
                           
                        )
                    ->join('S_VIEW_CLIENT_SCRIPT','S_CLIENT_SCRIPT.SCRIPT_ID','=','S_VIEW_CLIENT_SCRIPT.SCRIPT_ID')
                    ->join('S_VIEW','S_VIEW_CLIENT_SCRIPT.VIEW_ID','=','S_VIEW.VIEW_ID')
                    ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','like','%' .$id. '%')
                    ->orderBy('VIEW_NAME','ASC')
                    ->get();
        
        //check client script attach to what view
        $clientScriptPage = DB::table('S_CLIENT_SCRIPT')  
                    ->select(
                            DB::RAW('CAST(S_CLIENT_SCRIPT.FUNCTION_NAME AS VARCHAR(MAX)) AS FUNCTION_NAME'),
                            DB::RAW('CAST(S_PAGE.PAGE_NAME AS VARCHAR(MAX)) AS PAGE_NAME'),
                            DB::RAW('CAST(S_PAGE.PAGE_TITLE AS VARCHAR(MAX)) AS PAGE_TITLE')
                        )
                    ->Join('S_PAGE_CLIENT_SCRIPT','S_CLIENT_SCRIPT.SCRIPT_ID','=','S_PAGE_CLIENT_SCRIPT.SCRIPT_ID')
                    ->Join('S_PAGE','S_PAGE_CLIENT_SCRIPT.PAGE_ID','=','S_PAGE.PAGE_ID')
                    ->where('S_CLIENT_SCRIPT.FUNCTION_NAME','like','%' .$id. '%')
                    ->orderBy('PAGE_NAME','ASC')
                    ->get();

        return array($clientScript,$clientScriptPage);
    }

   
}
