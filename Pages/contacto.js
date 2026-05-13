async function main(){

    const navegador = document.querySelector(".navegador")
    nav(navegador)

    const footerContenedor = document.querySelector(".footer-js");
    footer(footerContenedor);
}

const formulario = document.querySelector("#formulario");
        
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const mensaje = document.querySelector("#mensaje").value;

        const urlForm = "https://apx.school/api/utils/email-to-student";

        const data = {
            to: email,
            subject: `Mensaje de ${nombre}`,
            message: mensaje
        };

        fetch(urlForm, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })

        .then(response => {
        return response.json()
        })
        .then(result => {
            console.log("Éxito:", result);
            alert("Mensaje enviado correctamente");
        })
        .catch(error => {
            console.error("Error:", error);
        });
    
});
main()