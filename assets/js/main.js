const buscar__id = document.getElementById('buscar__id');
const search = document.getElementById('search');
const cancel = document.getElementById('cancel');

search.addEventListener('click', () => {
    buscar__id.focus();
});
buscar__id.addEventListener('input', () => {
    if (buscar__id.value.length > 0) {
        cancel.style.display = 'block';
    } else {
        cancel.style.display = 'none';
    }
});
cancel.addEventListener('click', () => {
    buscar__id.value = '';
    cancel.style.display = 'none';
});
function incrementar() {
    var input = document.getElementById('numero');
    var numero = parseInt(input.value, 10);
    numero = isNaN(numero) ? 0 : numero;
    numero++;
    input.value = numero;
}
function decrementar() {
    var input = document.getElementById('numero');
    var numero = parseInt(input.value, 10);
    numero = isNaN(numero) ? 0 : numero;
    numero--;
    input.value = numero;
}






    // Cuando se carga la página
    window.onload = function() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-50px"; // Altura de la barra de navegación
            }
            prevScrollpos = currentScrollPos;
        }
    }