@extends('welcome')
@section('content')

<div class="row">
    <div class="col s12">
    <p class="z-depth-2">
        <form action="{{ url('viewSearch') }}">
            <div class="input-field col s3">
                <input id="searchTrancode" name="searchTrancode" type="text" class="validate" style="text-transform: uppercase">
                <label for="searchTrancode">Input view trancode</label>
            </div>
            <div class="input-field col">
                <h5>or</h5>
            </div>
            <div class="input-field col s3">
                    <input id="searchView" name="searchView" type="text" class="validate" style="text-transform: uppercase">
                    <label for="searchView">Input view name</label>
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
                    <th>VIEW NAME</th>
                    <th>VIEW TITLE</th>
                    <th>ITEM NAME</th>
                    <th style="text-align:center;">ACTION</th>
                </tr>
            </thead>

            <tbody>
                @foreach($etpView as $etpViews)
                <tr class="condensed light">
                    <td class="tdinput">{!! $etpViews->VIEW_NAME !!}</td>
                    <td class="tdinput">{!! $etpViews->TITLE_EDIT !!}</td>
                    <td class="tdinput">{!! $etpViews->TITLE_ADD !!}</td>
                    <td style="text-align:center;">
                        <a href="{{ route('viewDetails', [$etpViews->VIEW_NAME]) }}" >
                            <button type="button" class="btn-floating red">
                                    <i class="fas fa-paper-plane"></i>
                            </button>
                        </a>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        </p>

        <ul class="pagination center">
            <li class="waves-effect"><a href="{{ $etpView->previousPageUrl() }}"><i class="fas fa-backward"></i></a></li>
            <li class="active"> <a href=""> {{ $etpView->currentPage() }} </a> </li>
            <li class="waves-effect"> <a href=""> of {{ $etpView->lastPage()}} </a> </li>
            <li class="waves-effect" ><a href="{{ $etpView->nextPageUrl() }}"><i class="fas fa-forward"></i></a></li>
        </ul>
                        
    </div>
    
</div>            
@endsection
@section('myscript')
    <script>
        
    </script>
@endsection
