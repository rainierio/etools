@extends('welcome')
<link href="{{ asset('packages/particles.js-master/demo/css/style.css') }}" rel="stylesheet">
@section('content')

      
    <!-- particles.js container -->
    <div id="particles-js" class="s col12">
    </div>
      

@endsection
@section('myscript')
    <script src="{{ asset('packages/particles.js-master/particles.min.js') }}"></script>
    <script src="{{ asset('packages/particles.js-master/demo/js/app.js') }}"></script>

@endsection