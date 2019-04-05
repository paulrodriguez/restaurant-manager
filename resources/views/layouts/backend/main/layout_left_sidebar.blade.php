<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”robots” content=”nofollow” />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('Admin') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/backend/app.css') }}" rel="stylesheet">
</head>
<body>

        <nav class="sidebar">
          @include('layouts.backend.main.sidebar')
        </nav>
        <div class="header">
          @include('layouts/backend.main.header')
        </div>
        <main class="main-content">
            @yield('content')
        </main>
    </div>
    @stack('footer_scripts')
      <script type="text/javascript">
      (function() {
        function clickHandler() {
          if (document.body.classList) {
            document.body.classList.toggle("sidebar-open");
          } else {
            // For IE9
            var classes = document.body.className.split(" ");
            var i = document.body.indexOf("sidebar-open");

            if (i >= 0)
              classes.splice(i, 1);
            else
              classes.push("sidebar-open");
              document.body.className = classes.join(" ");
          }
        }

        let toggle = document.getElementById('toggle-sidebar');

        //toggle.attachEvent('onclick',clickHandler);
        toggle.addEventListener('click',clickHandler,false);
        console.log('finished');
      })();

      </script>
</body>
</html>
