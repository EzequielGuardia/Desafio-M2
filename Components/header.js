
function nav(El){
    const componentEl = document.createElement("div")
    componentEl.className = "barra";
    
    componentEl.innerHTML = `<svg class = "logo" width="219" height="211" viewBox="0 0 219 211" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="219" height="211" fill="url(#pattern0_104_11870)"/>
        <defs>
        <pattern id="pattern0_104_11870" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_104_11870" transform="scale(0.00283374 0.00294118)"/>
        </pattern>
        </svg>

    
    <button class="abrir__ventana">Abrir Menú</button>
    <div class="ventana" style="display: none;">
    <button class="ventana__cerrar">Cerrar</button>
    <ul class="ventana__contenido">
        <li><a href="index.html">Home</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
    </div>`

    El.appendChild(componentEl);

    const AbreVentanaEl = document.querySelector(".abrir__ventana");
    const ventanaEl = document.querySelector(".ventana");
    const CierraVentanaEl = document.querySelector(".ventana__cerrar")
    AbreVentanaEl.addEventListener("click", () =>{
        ventanaEl.style.display = "inherit";
    })

    CierraVentanaEl.addEventListener("click", ()=> {
        ventanaEl.style.display = "none";
    })
};
