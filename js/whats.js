const botton = document.getElementById("contatow");

botton.addEventListener("click",()=>{
    const phone = "5587991987418";
    const menssage = "Olá, gostaria de falar com você!"
    window.open(`https://wa.me/${phone}?text=${menssage}`);
});
