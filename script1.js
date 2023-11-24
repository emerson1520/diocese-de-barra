$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Guaxinim ", "São Francisco", "Santa Marta", "Paramelos", "Pedrinhas", "Ponta da Ilha", "Angico do Rio Verde","Associação dos Cocos","Associação Baixa do Cipó","Associação Nova Vida","Alto da Esperança ( Miradouro )","Alto do Sitio","Alto da Santana ","Areia Branca ","Boa Vista","Babosa ","Cabeça da Ilha ","Cantinho","Carneiro ","Fazenda Nova ","Ilha do Meio ","Ilha do Paulista ","Ilha do Paulista ( Alto de Cima ) ","Ilha do Paulista ( Canafista ) ","Ilha do Gado Bravo ","Ilha do Miradouro","Ilha do Guaxinim ","Ilha da Esperança","Ilha do Juremal ","Ilha do Amarracouro ","Ilha do Mendonça ","Ilha do Encalho ","Ilha do Povo ","Itapicuru ","Juremal ","Marreca Velha","Mato Grosso ","Muritiba ","Morro do Anisio ","Nova Iguira ","Novo Juremal ","Nova Boa Vista","Pedras ","Piranhas","Quixaba ","Queimada do Gado","Rumo ","Roçado ","Sitio ","Serra Azul ","Sizino ","Tapera","Umburana","Umbuzeiro ","Vacaria","Vista Nova","Vicente "],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    });
      // owl carousel script
      $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});