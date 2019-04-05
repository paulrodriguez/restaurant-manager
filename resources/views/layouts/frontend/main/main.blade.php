<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- CSRF Token -->
      <meta name="csrf-token" content="{{ csrf_token() }}">

      <title>@yield('title')</title>

      <!-- Fonts -->
      <link rel="dns-prefetch" href="//fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">


      <link rel="stylesheet" href="{{ mix('css/app.css') }}">
      <link rel="stylesheet" href="{{ mix('/css/custom.css') }}">
      @stack('scripts')
    </head>
    <body>
      @include('layouts.frontend.main.header')
      <section class="main-content">
      @yield('content')
      </section>
      @stack('footer_scripts')
    </body>
</html>
