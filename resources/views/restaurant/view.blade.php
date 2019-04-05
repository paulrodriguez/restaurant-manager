@extends('layouts.frontend.main.main')

@section('content')
<div id="app"></div>
@endsection
@push('footer_scripts')
<script type="text/javascript">
var restaurant = @json($restaurant);
</script>
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('js/react/App.js') }}"></script>
@endpush
