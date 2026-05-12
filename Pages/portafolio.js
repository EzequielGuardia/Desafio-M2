async function main(){

    console.log("El script cargó correctamente");
    const navegador = document.querySelector(".navegador")
    nav(navegador)

    const footerContenedor = document.querySelector(".footer-js");
    footer(footerContenedor);


    const SPACE_ID = "tsa59i96jrtd";
    const ACCESS_TOKEN = "JYgZGcLPqsEkIopSE2QWRj2qwsPX1IG6nnkWdf3VGp4";
    const CONTENT_TYPE = "misTrabajos";

    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        const entry = data.items[0].fields;

        const miPortafolio= document.querySelector(".mi-portafolio");
        miPortafolio.innerHTML = `
        
        <div class="services-container__cards">
        <div class="service-card">

            <div class="image-placeholder web-dev">

                <img src="https://via.placeholder.com/300x150" alt="Web Design">

            </div>

            <h3>${entry.trabajo1}</h3>

            <p>${entry.descripcion1}</p>

        </div>



        <div class="service-card">

            <div class="image-placeholder animations">

                <img src="https://via.placeholder.com/300x150" alt="Animations">

            </div>

            <h3>${entry.trabajo2}</h3>

            <p>${entry.descripcion2}</p>

        </div>



        <div class="service-card">

            <div class="image-placeholder app-dev">

                <img src="https://via.placeholder.com/300x150" alt="App Development">

            </div>

            <h3>${entry.trabajo3}</h3>

            <p>${entry.descripcion3}</p>

        </div>

        </div>
    `;
        
        
} catch (error) {
    console.error("Error fetching data:", error);
}

}

main(); 