function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}
function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
