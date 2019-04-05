(function() {
  function clickHandler() {
    let classes = document.body.className.split(' ');
    let idx = classes.indexOf('sidebar-open');
    if(idx>=0)
    {
      classes.splice(idx,1);
    } else {
      classes.push('sidebar-open');
    }

    document.body.className = classes.join(' ');
  }

  let toggle = document.getElementById('toggle-sidebar');

  toggle.attachEvent('onclick',clickHandler);
  toggle.addEventListener('click',clickHandler,false);

})();
