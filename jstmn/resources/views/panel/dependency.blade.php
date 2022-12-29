@extends('welcome')
@section('content')
<div class="row">
    <div class="col s12">
    <p class="z-depth-2">
        <form action="{{ url('dependencySearch') }}">
            <div class="input-field col s3" style="top:10px;">
                <div class="input-field col s12">
                    <select id="searchOption" name="searchOption">
                        <option value="">Choose object type</option>
                        <option value="1">Page</option>
                        <option value="2">view</option>
                        <option value="3">Client script</option>
                    </select>
                    <label>Select object type </label>
                </div>
            </div>
            <div class="input-field col s4" style="top:25px;">
                    <input id="dependencySearch" name="dependencySearch" type="text" class="validate">
                    <label for="dependencySearch">Insert object name</label>
                </div>
            <div class="input-field col s4" style="top:25px;">
                <button class="btn waves-effect waves-light red accent-2" type="submit">
                    Check
                </button>
            </div>
        </form>
        <div class="col s12">
            <!-- Radio Button for another option -->
        </div>

        <div class="row" style="top: 10050px;" id="tabs">
            <div class="col s12">
              <ul class="tabs">
                <li class="tab col s4"><a href="#pageTab">Page</a></li>
                <li class="tab col s4"><a href="#viewTab">View</a></li>
                <li class="tab col s4"><a href="#csTab">Client Script</a></li>
              </ul>
            </div>

            <div id="pageTab" class="col s12">
              
                <table class="responsive-table col s6">
                    <thead>
                        <tr>
                            <th>Area ID</th>
                            <th>Area Name</th>
                        </tr>
                    </thead>
                    @if( ! empty ($pageSearch[1]) )
                        <tbody>
                            @foreach($pageSearch[1] as $getAreas)
                            <tr class="condensed light">
                                <td class="tdinput">{!! $getAreas->AREA_ID !!}</td>
                                <td class="tdinput">{!! $getAreas->AREA_NAME !!}</td>  
                            </tr>
                            @endforeach
                        </tbody>
                    @endif
                </table>
                <table class="responsive-table col s6">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>User String</th>
                            </tr>
                        </thead>
                        @if( ! empty ($pageSearch[0]) )
                            <tbody>
                                @foreach($pageSearch[0] as $getId)
                                <tr class="condensed light">
                                    <td class="tdinput">{!! $getId->DESCRIPTION !!}</td>
                                    <td class="tdinput">{!! $getId->USER_STR1 !!}</td>  
                                </tr>
                                @endforeach
                            </tbody>
                        @endif
                    </table>
            </div>
            <div id="viewTab" class="col s12">
                <p></p>
                <div class="chip blue white-text z-depth-2">
                    View Dependency
                </div>
                <table class="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>View Name</th>
                            <th>Lookup area</th>
                            <th>Use in script</th>
                        </tr>
                    </thead>
                    @if( ! empty ($viewDependency))
                        <tbody>
                            @foreach($viewDependency as $viewDependencys)
                            <tr class="condensed light">
                                <td class="tdinput">{!! $viewDependencys->FUNCTION_NAME !!}</td>
                                <td class="tdinput">{!! $viewDependencys->PAGE_TITLE !!}</td>
                                <td class="tdinput">{!! $viewDependencys->PAGE_NAME !!}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    @endif
                </table>
            </div>
            <div id="csTab" class="col s12">
                <div class="chip blue white-text z-depth-2">
                    Client script dependency
                </div>
                <p class="flow-text">
                    <h6> <strong> attached on page </strong> </h6> </p> 
                </p>
                <table class="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Script Name</th>
                            <th>Page Name</th>
                            <th>Page Title</th>
                        </tr>
                    </thead>
                    @if( ! empty ($clientScriptSearch[1]))
                        <tbody>
                            @foreach($clientScriptSearch[1] as $clientScriptSearchsPages)
                            <tr class="condensed light">
                                <td class="tdinput">{!! $clientScriptSearchsPages->FUNCTION_NAME !!}</td>
                                <td class="tdinput">{!! $clientScriptSearchsPages->PAGE_TITLE !!}</td>
                                <td class="tdinput">{!! $clientScriptSearchsPages->PAGE_NAME !!}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    @endif
                </table>
                <p></p>
                <p class="flow-text">
                    <h6> <strong> Attached on view </strong> </h6> </p> 
                </p>
                <table class="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Script Name</th>
                            <th>View Name</th>
                            <th>View Title</th>
                        </tr>
                    </thead>
                    @if( ! empty ($clientScriptSearch[0]))
                        <tbody>
                            @foreach($clientScriptSearch[0] as $clientScripts)
                            <tr class="condensed light">
                                <td class="tdinput">{!! $clientScripts->FUNCTION_NAME !!}</td>
                                <td class="tdinput">{!! $clientScripts->VIEW_NAME !!}</td>
                                <td class="tdinput">{!! $clientScripts->TITLE_EDIT !!}</td>  
                            </tr>
                            @endforeach
                        </tbody>
                    @endif
                </table>
            </div>
        </div>
        
        <!-- Modal Structure for server script -->
        <div id="scriptmodal" tabindex="-1" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h5 id="scriptParametersHeader"></h5>
                <pre>
                    <code class="javascript">
                        <article id="javascript"></article>
                    </code>
                    
                </pre>
            </div>
            <div class="modal-footer">
                <a href="#!" id = "copyScriptButton" data-clipboard-target="#javascript" class="modal-action modal-close waves-green btn-flat ">Copy script</a>
                <a href="#!" class="modal-action modal-close waves-green btn-flat ">Back</a>
            </div>
        </div>
                        
    </div>
    
</div>            
@endsection
@section('myscript')
    <script>
        $(document).ready(function(){
            
            //<!-- use for select input-->
            $(document).ready(function() {
                $('select').material_select();

                var optReady = '<?php echo $searchOption; ?>';
                if (optReady == '1') {
                    $('#searchOption').val('1');
                    $('ul.tabs').tabs('select_tab', 'pageTab');

                }else if(optReady == '2'){
                    $('#searchOption').val('2');
                    $('ul.tabs').tabs('select_tab', 'viewTab');
                    
                }
                else if(optReady == '3'){
                    $('#searchOption').val('3');
                    $('ul.tabs').tabs('select_tab', 'csTab');
                    
                }

                $('select').material_select();
            });
            
            //Onchange tab
            $('ul.tabs').click(function (e) { 
                //alert($('ul.tabs').tabs());

            });

            //Onload tab selecttion
            let optOnload = $('#searchOption').val(); 
            if (optOnload == '1') {
                    
                    $('ul.tabs').tabs('select_tab', 'pageTab');

                }else if(optOnload == '2'){
                    
                    $('ul.tabs').tabs('select_tab', 'viewTab');
                    
                }
                else if(optOnload == '3'){
                    
                    $('ul.tabs').tabs('select_tab', 'csTab');
                    
                }

            // Onchange dropdown
            $('#searchOption').change(function () { 
                var opt = $('#searchOption').val();

                if (opt == '1') {
                    $('ul.tabs').tabs('select_tab', 'pageTab');

                }else if(opt == '2'){
                    $('ul.tabs').tabs('select_tab', 'viewTab');
                    
                }
                else if(opt == '3'){
                    $('ul.tabs').tabs('select_tab', 'csTab');
                }
            });

            $('.modal').modal('');
            $('.trigger-modal').modal();

            //<!-- button for copy script -->
            $('#copyScriptButton').click(function() {
                (function(){
                    new Clipboard('#copyScriptButton');
                })();
                Materialize.toast('Script copied to clipboard', 3000)
            });
        });    
    </script>
@endsection
