@extends('layouts.backend.main.layout_left_sidebar')
@section('content')
{{Auth::guard('admin')->user()->name}}
@endsection
