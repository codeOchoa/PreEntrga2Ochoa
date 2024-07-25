// const projectRoot = window.CSS.camelCase($project - root)

document.addEventListener('scroll', function () {
    var navBar = document.getElementById('nav-bar');
    var specificDiv = document.getElementById('specific-div');
    var specificDivTop = specificDiv.getBoundingClientRect().top;

    if (specificDivTop <= 0) {
        navBar.style.top = '-100px';
    } else {
        navBar.style.top = '0';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("/PreEntrga2Ochoa/includes/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbard").innerHTML = data);
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("/.PreEntrga2Ochoa/includes/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

document.getElementById('toggleSearch').addEventListener('click', function () {
    const searchForm = document.querySelector('.search-form');
    searchForm.style.display = searchForm.style.display === 'none' || searchForm.style.display === '' ? 'flex' : 'none';
});

document.getElementById('clearSearch').addEventListener('click', function () {
    document.querySelector('.search-form .form-control').value = '';
});