

document.addEventListener('DOMContentLoaded', ()=>{
    showModal();
})

function showModal(){

    const overlay = document.createElement("div");
    overlay.className = 'overlay'

    const modal = document.createElement("div");
    modal.className = 'modal'

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `PAGINA NO OFICIAL<br><BR>Creada para practicar HTML y CSS</a><br><br> Página oficial de Saratoga<br><a href="https://www.saratoga.com.es" target="_blank">AQUI</a> `;

    modal.appendChild(mensaje);

    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
  botonCerrar.className = 'botonCerrar'
    modal.appendChild(botonCerrar);

    
    botonCerrar.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(modal);

    document.body.appendChild(overlay);

    setTimeout(() => {
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
    }, 5000);
}