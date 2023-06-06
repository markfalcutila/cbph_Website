
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var iconOne = document.querySelector('.icon-one');
    var tab = document.querySelector('.mobile-nav');
    var side = document.querySelector('.sidenav');
  
    iconOne.addEventListener('click', function() {
      iconOne.classList.toggle('active-one');
      tab.classList.toggle('show-mobile-navbar');
      tab.classList.toggle('add-dark-bg');

    });

    document.addEventListener('click', function() {
      if(!side.contains(event.target) && !iconOne.contains(event.target) ){
        iconOne.classList.remove('active-one');
        tab.classList.remove('show-mobile-navbar');
      }
   

    });
   
  
  });
