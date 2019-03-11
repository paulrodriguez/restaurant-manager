<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>@yield('title')</title>
      <link rel="stylesheet" href="{{ mix('css/app.css') }}">
      <link rel="stylesheet" href="{{ mix('css/custom.css') }}">
      @stack('scripts')
    </head>
    <body>
      @include('frontend.main.header')
      <section class="main-content">
      @yield('content')
      </section>
    </body>
</html>
