@extends('welcome')
@section('content')

<div class="row">
    <div class="col s12">
    <p class="z-depth-2">
        <form action="{{ url('pageSearch') }}">
            <div class="input-field col s3">
                <input id="searchTrancode" name="searchTrancode" type="text" class="validate" style="text-transform: uppercase">
                <label for="searchTrancode">Input page trancode</label>
            </div>
            <div class="input-field col">
                <h5>or</h5>
            </div>
            <div class="input-field col s3">
                    <input id="searchPage" name="searchPage" type="text" class="validate" style="text-transform: uppercase">
                    <label for="searchPage">Input page name</label>
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
                    <th>Page Name</th>
                    <th>Page Title</th>
                    <th>History Title</th>
                    <th style="text-align:center;">Action </th>
                </tr>
            </thead>

            <tbody>
                @foreach($etpPage as $etpPages)
                <tr class="condensed light">
                    <td class="tdinput"> {!! $etpPages->PAGE_NAME !!} </td>
                    <td class="tdinput"> {!! $etpPages->PAGE_TITLE !!} </td>
                    <td class="tdinput"> {!! $etpPages->HISTORY_TITLE !!} </td>
                    <td style="text-align:center;">
                        <a href="{{ route('pageDetails', [$etpPages->PAGE_NAME]) }}" >
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
            <li class="waves-effect"><a href="{{ $etpPage->previousPageUrl() }}"><i class="fas fa-backward"></i></a></li>
            <li class="active"> <a href=""> {{ $etpPage->currentPage() }} </a> </li>
            <li class="waves-effect"> <a href=""> of {{ $etpPage->lastPage()}} </a> </li>
            <li class="waves-effect" ><a href="{{ $etpPage->nextPageUrl() }}"><i class="fas fa-forward"></i></a></li>
        </ul>
                        
    </div>
</div>            
@endsection
@section('myscript')
    <script>
        
    </script>
@endsection