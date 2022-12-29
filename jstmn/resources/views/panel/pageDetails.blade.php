@extends('welcome')
@section('content')

<div class="row">
    <div class="col s12">
        <div class="input-field col s8">
                <p class="flow-text">
                    <h6> <strong> Page : {!! $page->PAGE_NAME !!} </strong> </h6> </p> 
                </p>
                <div class="chip blue white-text z-depth-2">
                   Filter List 
                </div>
            <p class="z-depth-2"> </p>
        </div>
        <p class="z-depth-2">
            <table class="bordered highlight responsive-table z-depth-2">
                <thead>
                    <tr>
                        <th>Filter</th>
                        <th>Field</th>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Query</th>
                        <th>Index</th>
                    </tr>
                </thead>
    
                <tbody>
                    @foreach($filterDetail as $filterDetails)  
                    <tr class="condensed light">
                        <td class="tdinput"> {!! $filterDetails->FILTER_NAME !!} </td>
                        <td class="tdinput"> {!! $filterDetails->FIELD_NAME !!}  </td>
                        <td class="tdinput"> {!! $filterDetails->FILTER_TYPE !!} </td>
                        <td class="tdinput"> {!! $filterDetails->FILTER_TITLE !!} </td>
                        <td class="tdinput"> {!! $filterDetails->FILTER_QUERY !!} </td>
                        <td class="tdinput"> {!! $filterDetails->ITEM_INDEX !!} </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            </p>
        </div>

        <!-- Button list -->
        <br>
        <div class="input-field col s2">
            <div class="chip blue white-text z-depth-2">
                    List of button
            </div>
            <p class="z-depth-2"> </p>
        </div>
        <div class="col s12">
            @foreach($pageButton as $pageButtons)
                    <a class="btn tooltipped" data-position="bottom" data-tooltip="{{ $pageButtons->FUNCTION_NAME }}" id="buttonParm" data-target="#buttonmodal" data-toggle="modal" data-tooltip="tooltip"  data-value-button ="{!! $pageButtons->PARAMETERS !!}" data-value-button2 ="{!! $pageButtons->FUNCTION_NAME !!}"> 
                        {!! $pageButtons->BUTTON_TITLE!!}
                    </a>
            @endforeach
        </div>

        <!-- Column Table -->
        <div class="input-field col">
            <div class="chip blue white-text z-depth-2">
                Column List 
            </div>
            <p class="z-depth-2"> </p>
        </div>
        <p class="z-depth-2">
            <table class="bordered highlight responsive-table z-depth-2">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Column</th>
                        <th>Type</th>
                        <th>Query</th>
                        <th>Script</th>
                        <th>Parameters</th>
                    </tr>
                </thead>
    
                <tbody>
                    @foreach($fieldDetail as $fieldDetails)  
                    <tr class="condensed light">
                        <td class="tdinput"> {!! $fieldDetails->ITEM_TITLE !!} </td>
                        <td class="tdinput"> {!! $fieldDetails->COLUMN_NAME !!}  </td>
                        <td class="tdinput"> {!! $fieldDetails->ITEM_TYPE !!} </td>
                        <td class="tdinput"> {!! $fieldDetails->QUERY !!} </td>
                        <td class="tdinput"> {!! $fieldDetails->SCRIPT !!} </td>
                        <td class="tdinput"> {!! $fieldDetails->PARAMETERS !!} </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </p>

        <!-- Script Table -->
        <div class="input-field col s6">
            <div class="chip blue white-text z-depth-2">
                List of attached script
            </div>
            <p class="z-depth-2"> </p>
        </div>
        <div class="col s12">
            <table class="bordered highlight responsive-table z-depth-2 l12">
                <thead>
                    <tr>
                        <th>Script ID</th>
                        <th>Script Name</th>
                        <th>Description</th>
                        <th style="text-align:center;">Script Language</th>
                        <th style="text-align:center;">Action</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach($pageScript as $pageScripts)
                    <tr class="condensed light">
                        <td class="tdinput"> 
                            {!! $pageScripts->SCRIPT_ID !!} <br>
                                @if($page->ONLOAD_CLIENTSCRIPT_ID === $pageScripts->SCRIPT_ID)
                                    <span class="new badge blue left" data-badge-caption="onload"></span>
                                @endif
                        </td>
                        <td class="tdinput"> {!! $pageScripts->FUNCTION_NAME !!}  </td>
                        <td class="tdinput"> {!! $pageScripts->DESCRIPTION !!} </td>
                        <td class="tdinput" style="text-align:center;"> {!! $pageScripts->SCRIPT_LANGUAGE!!} </td>
                        <td style="text-align:center;"> 
                            <button type="button"  id="scriptButton" data-target="#scriptmodal" data-toggle="modal" class="btn-floating red" data-value="{{ $pageScripts->FUNCTION_CODE }}">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                    
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            </br>
        </div>
</div>
<a href="{{ URL::previous() }}"
    <button class="btn waves-light red accent-2" type="submit">
        Back
    </button>
</a>
<p class="z-depth-2"> </p>

<!-- Modal Structure for script -->
<div id="scriptmodal" tabindex="-1" class="modal modal-fixed-footer">
    <div class="modal-content">
        <h4>Script detail</h4>
        <pre>
            <code class="javascript">
                <article id="javascript"></article>
            </code>
        </pre>
    </div>
    <div class="modal-footer">
        <a href="#!" id = "copyScriptButton" data-clipboard-target="#javascript" class="modal-action modal-close waves-green btn-flat">Copy script</a>
        <a href="#!" class="modal-action modal-close waves-green btn-flat ">Back</a>
    </div>
</div>

<!-- Modal Structure for button -->
<div id="buttonmodal" tabindex="-1" class="modal modal-fixed-footer">
    <div class="modal-content">
        <h5 id="buttonParametersHeader"></h5>
        <pre>
            <code class="javascript">
                <article id="buttonParameters"></article>
            </code>    
        </pre>
    </div>
    <div class="modal-footer">
        <a href="#!" id = "copyButton" data-clipboard-target="#buttonParameters" class="modal-action modal-close waves-green btn-flat ">Copy script</a>
        <a href="#!" class="modal-action modal-close waves-green btn-flat ">Back</a>
    </div>
</div>
    
@endsection
@section('myscript')
    <script>
         $(document).ready(function(){
            $('.modal').modal('');
            $('.trigger-modal').modal();
            
            //<!-- Trigger for script modal -->
            $('.btn-floating').click(function() {
                var scriptCode = $(this).attr('data-value');
                $("#javascript").html(scriptCode).addClass('javascript');
                $('#scriptmodal').modal('open');
            });

            //<!-- Trigger for button modal -->
            $('.tooltipped').click(function() {
                var buttonParm1 = $(this).attr('data-value-button');
                var buttonParm2 = $(this).attr('data-value-button2');
                $("#buttonParameters").html(buttonParm1).addClass('javascript');
                $("#buttonParametersHeader").html(buttonParm2);
                $('#buttonmodal').modal('open');
            });
            
            //<!-- button for copy script -->
            $('#copyScriptButton').click(function() {
                (function(){
                    new Clipboard('#copyScriptButton');
                })();
                Materialize.toast('Script copied to clipboard', 4000)
            });

            //<!-- Button for copy button parameter -->
            $('#copyButton').click(function() {
                (function(){
                    new Clipboard('#copyButton');
                })();
                Materialize.toast('Script copied to clipboard', 3000)
            }); 
            
        });    
        
    </script>
@endsection