document.addEventListener("DOMContentLoaded", function () {
    fetch("../../includes/nav.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbard").innerHTML = data);
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../includes/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});

// document.addEventListener("DOMContentLoaded", function () {
//     // Obtener el número de carpetas que sube desde la página actual a la raíz
//     var pathDepth = window.location.pathname.split('/').length - 2; // -2 para contar correctamente desde la raíz
//     var relativePath = '';

//     // Construir la ruta relativa basada en la profundidad de la ruta actual
//     for (var i = 0; i < pathDepth; i++) {
//         relativePath += '../';
//     }

//     // Ruta completa para nav.html
//     var navPath = relativePath + 'includes/nav.html';

//     fetch(navPath)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => document.getElementById("navbard").innerHTML = data)
//         .catch(error => console.error('There was a problem with the fetch operation:', error));
// });

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("./includes/nav.html")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             const navbar = document.getElementById("navbard");
//             if (navbar) {
//                 navbar.innerHTML = data;
//             } else {
//                 console.error('Element with id "navbard" not found');
//             }
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
// });