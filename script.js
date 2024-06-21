document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('name');
    if (name) {
        document.getElementById('name-test').innerText = `Esperando ser recibido por ${name}`;
    }
});