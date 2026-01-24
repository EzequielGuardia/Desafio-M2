function footer(Ele){
    const componentEl = document.createElement("footer")
    componentEl.className = "custom-footer";
    
    componentEl.innerHTML = `<div class="footer-container">
    <h2 class="footer-logo">Tu Logo</h2>
    
    <nav class="footer-nav">
        <a href="#"><i class="icon-home"></i> Home</a>
        <a href="#"><i class="icon-user"></i> Servicios</a>
        <a href="#"><i class="icon-phone"></i> Contacto</a>
    </nav>

    <div class="footer-social">
        <a href="#" class="social-circle"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" class="social-circle"><i class="fab fa-github"></i></a>
        <a href="#" class="social-circle"><i class="fab fa-twitter"></i></a>
    </div>

    <p class="footer-copyright">©2022 - https://a px.school</p>
    </div>`


    Ele.appendChild(componentEl);
    

};