@extends('layouts.backend.main.layout_left_sidebar')
@section('content')
<div id="app"></div>
@endsection
@push('footer_scripts')
<script src="{{ mix('js/react/RestaurantListing.js') }}"></script>
@endpush