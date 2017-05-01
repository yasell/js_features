$(window).load(function() {
     if (sessionStorage.getItem("visited")) {
      return false
    } else {
     $(".action").trigger('click');
     sessionStorage.setItem('visited', 'true');
    }
});
