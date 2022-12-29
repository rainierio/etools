@extends('welcome')
@section('content')

<div class="row">
    <div class="col s12">
    <p class="z-depth-2">
        <form action="{{ url('serverScriptSearch') }}">
            <div class="input-field col s3">
                <input id="ssSearch" name="ssSearch" type="text" class="validate" style="text-transform: uppercase">
                <label for="ssSearch">Input server script name </label>
            </div>
            <div class="input-field col">
                <h5>or</h5>
            </div>
            <div class="input-field col s4">
                    <input id="ssContentSearch" name="csContentSearch" type="text" class="validate" style="text-transform: uppercase">
                    <label for="ssContentSearch">Search string in server script</label>
                </div>
            <div class="input-field col s4">
                <button class="btn waves-effect waves-light red accent-2" type="submit">
                    Search
                </button>
            </div>
        </form>
        <table class="bordered highlight responsive-table z-depth-2">
            <thead>
                <tr>
                    <th>SCRIPT ID</th>
                    <th>SCRIPT TITLE</th>
                    <th>SCRIPT DESCRIPTION</th>
                    <th style="text-align:center;">ACTION</th>
                </tr>
            </thead>

            <tbody>
                @foreach($serverScript as $serverScripts)
                <tr class="condensed light">
                    <td class="tdinput">{!! $serverScripts->SCRIPT_ID !!}</td>
                    <td class="tdinput">{!! $serverScripts->SCRIPT_NAME !!}</td>
                    <td class="tdinput">{!! $serverScripts->DESCRIPTION !!}</td>
                    <td style="text-align:center;"> 
                            <button type="button" id='scriptButton' data-target="#scriptmodal" data-toggle="modal" class="btn-floating red" data-value="{{ $serverScripts->FUNCTION_CODE }}" data-value2="{{ $serverScripts->SCRIPT_NAME }}">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                    </td>   
                </tr>
                @endforeach
            </tbody>
        </table>
        </p>

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

        <ul class="pagination center">
            <li class="waves-effect"><a href="{{ $serverScript->previousPageUrl() }}"><i class="fas fa-backward"></i></a></li>
            <li class="active"> <a href=""> {{ $serverScript->currentPage() }} </a> </li>
            <li class="waves-effect"> <a href=""> of {{ $serverScript->lastPage()}} </a> </li>
            <li class="waves-effect" ><a href="{{ $serverScript->nextPageUrl() }}"><i class="fas fa-forward"></i></a></li>
        </ul>
                        
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
