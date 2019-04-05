<ul class="nav-left">
  <li>
    <a href="#" id="toggle-sidebar"
      aria-pressed="false" aria-expanded="false">
      <i class="fas fa-bars"></i>
    </a>
  </li>
</ul>
<ul class="nav-right">
  <li>{{Auth::guard('admin')->user()->name}}</li>
</ul>
