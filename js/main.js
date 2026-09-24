document.addEventListener('DOMContentLoaded', function () {
  var tombolMenu = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav');

  if (!tombolMenu || !menu) return;

  tombolMenu.addEventListener('click', function () {
    var terbuka = menu.classList.toggle('terbuka');
    tombolMenu.setAttribute('aria-expanded', terbuka ? 'true' : 'false');
  });
});
