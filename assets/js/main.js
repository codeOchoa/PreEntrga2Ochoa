document.addEventListener('scroll', function () {
    var navBar = document.getElementById('nav-bar');
    var specificDiv = document.getElementById('specific-div');
    var specificDivTop = specificDiv.getBoundingClientRect().top;

    if (specificDivTop <= 0) {
      navBar.style.top = '-100px'; // Ajusta este valor según la altura de tu nav-bar
    } else {
      navBar.style.top = '0';
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    fetch("/includes/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});