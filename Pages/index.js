async function main(){

    console.log("El script cargó correctamente");
    const navegador = document.querySelector(".navegador")
    nav(navegador)

    const footerContenedor = document.querySelector(".footer-js");
    footer(footerContenedor);



    const SPACE_ID = "tsa59i96jrtd";
    const ACCESS_TOKEN = "JYgZGcLPqsEkIopSE2QWRj2qwsPX1IG6nnkWdf3VGp4";
    const CONTENT_TYPE = "seccionBienvenida";

    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE}`;

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
            <div
            class="logo"><img src="https:${urlDeLaImagen}" alt="Logo">
            </div>
            </div>`
        
    } catch (error) {
        console.error("Error fetching data:", error);
}
}

main();