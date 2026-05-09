async function main(){

    console.log("El script cargó correctamente");
    const navegador = document.querySelector(".navegador")
    nav(navegador)

    const footerContenedor = document.querySelector(".footer-js");
    footer(footerContenedor);



    const SPACE_ID = "tsa59i96jrtd";
    const ACCESS_TOKEN = "JYgZGcLPqsEkIopSE2QWRj2qwsPX1IG6nnkWdf3VGp4";
    const CONTENT_TYPE = "seccionBienvenida";
    const CONTENT_TYPE2 = "presentacionPersonal";
    const CONTENT_TYPE3 = "servicios";

    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`;
    const url2 = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE2}`;
    const url3 = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE3}`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        const entry = data.items[0].fields;

        const idDeLaImagen = entry.logo.sys.id;
        const imagen = data.includes.Asset.find(asset => asset.sys.id === idDeLaImagen);
        const urlDeLaImagen = imagen.fields.file.url;

        const bienvenidaSection = document.querySelector(".Bienvenida");
        bienvenidaSection.innerHTML = `
            <div class="titulo">
            <h1 class="saludo">${entry.saludo} </h1>
            <h1 class="nombre">${entry.nombre}</h1>
            </div>
            <div
            class="logo"><img src="https:${urlDeLaImagen}" alt="Logo">
            </div>`
        
    } catch (error) {
        console.error("Error fetching data:", error);
}


try{

    const response2 = await fetch(url2);
    const data2 = await response2.json();

    const entry2 = data2.items[0].fields;
    
    const idDeLaImagen2 = entry2.fotoMia.sys.id;
    const imagen2 = data2.includes.Asset.find(asset => asset.sys.id === idDeLaImagen2);
    const urlDeLaImagen2 = imagen2.fields.file.url;

    const presentacionSection = document.querySelector(".sobre-mi");
    presentacionSection.innerHTML = `
        <div class="sobre-mi__texto">
            <h2>
                ${entry2.mePresento}
            </h2>
            <p>
                ${entry2.info}
            </p>
        </div>

        <img src="https:${urlDeLaImagen2}" alt="Foto de ${entry2.nombre}">
    `

} catch (error) {
    console.error("Error fetching data:", error);

}

try{
    const response3 = await fetch(url3);
    const data3 = await response3.json();

    const entry3 = data3.items[0].fields;

    const serviciosSection = document.querySelector(".services-container");
    serviciosSection.innerHTML = `

        <h2 class="main-title">Mis <span>servicios</span></h2>

        <div class="services-container__cards">
        <div class="service-card">

            <div class="image-placeholder web-dev">

                <img src="https://via.placeholder.com/300x150" alt="Web Design">

            </div>

            <h3>${entry3.servicio1}</h3>

            <p>${entry3.info1}</p>

        </div>



        <div class="service-card">

            <div class="image-placeholder animations">

                <img src="https://via.placeholder.com/300x150" alt="Animations">

            </div>

            <h3>${entry3.servicio2}</h3>

            <p>${entry3.info2}</p>

        </div>



        <div class="service-card">

            <div class="image-placeholder app-dev">

                <img src="https://via.placeholder.com/300x150" alt="App Development">

            </div>

            <h3>${entry3.servicio3}</h3>

            <p>${entry3.info3}</p>

        </div>

        </div>
    `



} catch (error) {
    console.error("Error fetching data:", error);

}
}
main();