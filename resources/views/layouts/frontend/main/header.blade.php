<nav role="navigation" class="header-nav">
  <div class="container-fluid header-nav-container">
    <div class="row header-nav-row">
    <div class="logo col-2 header-nav-col">GrabFood</div>
    <div class="col-4 header-nav-col flex-wrap">
      <div class="address-text">Enter an address</div>
      <div class="address-search">
      <form method="POST">
        <input type="text" placeholder="Enter your address" />
      </form>
      </div>
    </div>
    <div class="col-4 header-nav-col">
      <form method="GET" action="/search">
        <input type="text" placeholder="Search" />
      </form>
    </div>
    <div class="col-2 header-nav-col">
      <a href="">Sign in</a>
      <a href="">Bag</a>
    </div>
  </div>
  </div>
</nav>
<div class="header-clearfix"></div>
