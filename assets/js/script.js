$(document).ready(function () {
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

    var musica30 = $('#musica30')[0];
    var musica70 = $('#musica70')[0];
    var musica80 = $('#musica80')[0];
    var musica90 = $('#musica90')[0];
    var musica2000 = $('#musica2000')[0];

    $('#botaoMusic30').click(function () {
        controlarMusica(musica30, $(this));
    });

    $('#botaoMusic70').click(function () {
        controlarMusica(musica70, $(this));
    });

    $('#botaoMusic80').click(function () {
        controlarMusica(musica80, $(this));
    });

    $('#botaoMusic90').click(function () {
        controlarMusica(musica90, $(this));
    });

    $('#botaoMusic2000').click(function () {
        controlarMusica(musica2000, $(this));
    });

    function controlarMusica(musica, botao) {
        var icone = botao.find('i');

        if (icone.text() === 'volume_off') {
            pausarTodasMusicas();
            icone.text('volume_up');
            musica.volume = 0.1;
            musica.play();
        } else {
            icone.text('volume_off');
            musica.pause();
            musica.currentTime = 0;
        }
    }

    function pausarTodasMusicas() {

        $('.meuBotao i').text('volume_off');
        musica30.pause();
        musica30.currentTime = 0;
        musica70.pause();
        musica70.currentTime = 0;
        musica80.pause();
        musica80.currentTime = 0;
        musica90.pause();
        musica90.currentTime = 0;
        musica2000.pause();
        musica2000.currentTime = 0;
    }



    function digitacao() {
        var campoText = '';

        function enviarTextoInput() {
            $('#texto').val(campoText);
        }

        $('.btn-teclado').on('click', function () {
            var buttonText = $(this).text();

            if (this.id === 'es') {
                campoText += ' ';
            } else if (this.id === 'del') {
                campoText = campoText.slice(0, -1);
            } else {
                campoText += buttonText;
            }

            enviarTextoInput();
        });
    }

    function limparCampoTexto() {
        $("#texto").val('');
    }

    function btnVoltar() {
        $('.btn-voltar').on('click', function () {
            $('.anos30, .anos70, .anos80, .anos90, .anos00').addClass('d-none');
            $('.maquina-tempo').removeClass('d-none');
            pausarTodasMusicas();
            limparCampoTexto();
        });
    }

    function validacaoAno() {
        var textoCompleto = $('#texto').val().trim();

        var matchAno = textoCompleto.match(/\d{2}$/);

        if (matchAno) {
            var doisUltimosDigitos = matchAno[0];

            $('.maquina-tempo').addClass('d-none');

            switch (doisUltimosDigitos) {
                case '30':
                    $('.anos30').removeClass('d-none');
                    reproduzirMusica("caminho_da_musica.mp3", 0.3);
                    console.log('está aqui');
                    break;
                case '70':
                    $('.anos70').removeClass('d-none');
                    break;
                case '80':
                    $('.anos80').removeClass('d-none');
                    break;
                case '90':
                    $('.anos90').removeClass('d-none');
                    break;
                case '00':
                    $('.anos00').removeClass('d-none');
                    break;
                default:
                    console.log('Ano não reconhecido:', doisUltimosDigitos);
            }
        } else {
            console.log('Nenhum ano encontrado no texto:', textoCompleto);
        }
    }


    $('#btnValidarAno').on('click', function () {
        validacaoAno();
    });

    $(window).resize(function () {
        resizeBodyConteudo();
    });

    const elements = $(".peca-top, .peca-left, .peca-right");
    const animationContainer = $(".animation-container");
    const delayBetweenAnimations = 1000;

    let index = 0;

    function playNextAnimation() {
        if (index < elements.length) {
            $(elements[index]).css("animation-play-state", "running");
            index++;
            setTimeout(playNextAnimation, delayBetweenAnimations);
        }
    }

    playNextAnimation();
    btnVoltar();
    audioClick();
    digitacao();
    resizeBodyConteudo();
});
