var menuLinks = document.querySelectorAll('.nav-item');

menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    const closeButton = document.getElementById('close_button');
    if (closeButton) {
      closeButton.click();
    }
  });
})