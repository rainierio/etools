
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
    var elixir;

    elixir(function(mix) {
    mix.sass('app.scss');
    require('laravel-materialize');
    require('laravel-elixir-vue-2');
    require('laravel-elixir');
});


