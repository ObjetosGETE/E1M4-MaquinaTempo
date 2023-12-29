function escalaProporcao(largura, altura) {

    var larguraScreen = $(window).width();
    var alturaScreen = $(window).height();
    var proporcaoAltura = (alturaScreen * 100) / altura;
    var proporcaoLargura = (larguraScreen * 100) / largura;
    var proporcao, larguraAltura, larguraAlturaAuto;

    if (proporcaoAltura < proporcaoLargura) {
        larguraAltura = "height";
        larguraAlturaAuto = "width";
        proporcao = proporcaoAltura / 100;
    } else {
        larguraAltura = "width";
        larguraAlturaAuto = "height";
        proporcao = proporcaoLargura / 100;
    }

    return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyConteudo() {

    var proporcao1920 = escalaProporcao(1920, 1080)[0];

    $(".conteudo").css({
        "transform": "scale(" + proporcao1920 + ")",
        "transform-origin": "center center"
    });

    var proporcao900;

    if ($(window).width() < 992) {
        proporcao900 = escalaProporcao(900, 576)[0];
    } else {
        proporcao900 = 1;
    }
}

function audioClick() {
    $('.som-clique').on('click', function () {
        $('#somBotao')[0].play();
    });
}

$(document).ready(function () {
    audioClick();
    resizeBodyConteudo()
    $(window).resize(function () {
        resizeBodyConteudo()
    })

});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".peca-top,  .peca-left, .peca-right");
    const animationContainer = document.querySelector(".animation-container");
    const delayBetweenAnimations = 1000;

    let index = 0;

    function playNextAnimation() {
        if (index < elements.length) {
            elements[index].style.animationPlayState = "running";
            index++;
            setTimeout(playNextAnimation, delayBetweenAnimations);
        }
    }

    playNextAnimation();
});

