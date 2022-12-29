@extends('welcome')
@section('content')
<div class="col s12 push-s5">
    <div class="col l12">
        <div class="input-field col s8">
            <p class="flow-text">
                <h6> <strong> View : {!! $view->VIEW_NAME !!} </strong> </h6> </p> 
            </p>
            <div class="chip blue white-text z-depth-2">
                 List of fields  
            </div>
            <p class="z-depth-2"> </p>
            
        </div>
        
        <!-- Table for item listing -->
        <div class="col s12">
            <table class="bordered highlight responsive-table z-depth-2 l12">
                <thead>
                    <tr>
                        <th >Tab</th>
                        <th>Item Name</th>
                        <th>Item Title </th>
                        <th>Column Name</th>
                        <th>Item Type</th>
                        <th>Length</th>
                        <th>Query</th>
                        <th>Allow Empty</th>
                        <th>Item Index</th>
                        <th>Default Value</th>
                    </tr>
                </thead>
    
                <tbody>
                    @foreach($viewDetail as $viewDetails)
                    <tr class="condensed light">
                        <td class="tdinput">{!! $viewDetails->TAB_NAME !!} </td>
                        <td class="tdinput">{!! $viewDetails->ITEM_NAME !!} </td>
                        <td class="tdinput">{!! $viewDetails->ITEM_TITLE !!} </td>
                        <td class="tdinput">{!! $viewDetails->COLUMN_NAME !!} </td>
                        <td class="tdinput">{!! $viewDetails->ITEM_TYPE !!} </td>
                        <td class="tdinput">{!! $viewDetails->MAX_LENGTH !!} </td>
                        <td class="tdinput2">{!! $viewDetails->QUERY !!} </td>
                        <td class="tdinput">{!! $viewDetails->ALLOW_EMPTY !!} </td>
                        <td class="tdinput">{!! $viewDetails->ITEM_INDEX !!} </td>
                        <td class="tdinput">{!! $viewDetails->DEFAULT_VALUE !!} </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        </p>

        <!-- Button list -->
        <br>
        <div class="input-field col s2">
            <div class="chip blue white-text z-depth-2">
                    List of button
            </div>
            <p class="z-depth-2"> </p>
        </div>
        <div class="col s12">
            @foreach($viewButton as $viewButtons)
                    <a class="btn tooltipped" data-position="bottom" data-tooltip="{{ $viewButtons->FUNCTION_NAME }}" id="buttonParm" data-target="#buttonmodal" data-toggle="modal" data-value-button ="{{ $viewButtons->PARAMETERS }}" data-value-button2 ="{{ $viewButtons->FUNCTION_NAME }}"> 
                        {!! $viewButtons->BUTTON_TITLE!!}
                    </a>
            @endforeach
        </div>

        <!-- Table for script listing -->
        <br>
        <div class="input-field col s2">
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
                    @foreach($viewScript as $viewScripts)
                    <tr class="condensed light">
                        <td class="tdinput"> 
                            {!! $viewScripts->SCRIPT_ID !!} <br>
                                @if($view->FUNCTION_ONLOAD === $viewScripts->SCRIPT_ID)
                                    <span class="new badge blue left" data-badge-caption="onload"></span>
                                @endif
                        </td>
                        <td class="tdinput"> {!! $viewScripts->FUNCTION_NAME !!}  </td>
                        <td class="tdinput"> {!! $viewScripts->DESCRIPTION !!} </td>
                        <td class="tdinput" style="text-align:center;"> {!! $viewScripts->SCRIPT_LANGUAGE!!} </td>
                        <td style="text-align:center;"> 
                            <button type="button" id='scriptButton' data-target="#scriptmodal" data-toggle="modal" class="btn-floating red" data-value="{{ $viewScripts->FUNCTION_CODE }}" data-value2="{{ $viewScripts->FUNCTION_NAME }}">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                    
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            </br>
        </div>

        <!-- Back button -->
            <a href="{{ URL::previous() }}"
                <button class="btn waves-light red accent-2" type="submit">
                    Back
                </button>
            </a>
            <p class="z-depth-2"> </p>
        </div>

        <!-- Modal Structure for script -->
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
                var scriptName = $(this).attr('data-value2');
                $("#javascript").html(scriptCode).addClass('javascript');
                $("#scriptParametersHeader").html(scriptName);
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
                Materialize.toast('Script copied to clipboard', 3000)
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




