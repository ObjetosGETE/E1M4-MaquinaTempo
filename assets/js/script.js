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

    function efeitoDeDigitacao() {
        function typeWrite(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = ' ';
            textoArray.forEach(function (letra, i) {

                setTimeout(function () {
                    elemento.innerHTML += letra;
                }, 75 * i);

            });
        }
        const titulo = document.querySelector('.titulo-principal');
        typeWrite(titulo);
    }

    function limparCampoTexto() {
        $("#texto").val('');
        campoText = '';
    }

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

    function pecasVoltando() {
        function voltaTopo() {
            $("#p-top").removeClass('peca-top');
            $("#p-top").addClass('volta-topo');
        }

        function voltaTeclado() {
            $("#p-teclado").removeClass('peca-teclado');
            $("#p-teclado").addClass('volta-peca-teclado');
        }

        function voltaPecaLeft() {
            $("#p-left").removeClass('peca-left');
            $("#p-left").addClass('volta-peca-left');
        }

        function voltaPecaRigth() {
            $("#p-rigth").removeClass('peca-rigth');
            $("#p-rigth").addClass('volta-peca-right');
        }

        function voltaPecaLeftTeclado() {
            $("#p-teclado-left").removeClass('peca-left-teclado');
            $("#p-teclado-left").addClass('volta-left-teclado');
        }

        function voltaPecaLeftTeclado2() {
            $("#p-teclado-left2").removeClass('peca-left-teclado-2');
            $("#p-teclado-left2").addClass('volta-left-teclado-2');
        }

        function voltaPecaRigthTeclado2() {
            $("#p-teclado-rigth2").removeClass('peca-right-teclado');
            $("#p-teclado-rigth2").addClass('volta-right-teclado');
        }


        voltaTopo();
        voltaTeclado();
        voltaPecaLeft();
        voltaPecaRigth();
        voltaPecaLeftTeclado();
        voltaPecaLeftTeclado2();
        voltaPecaRigthTeclado2();
    }

    function posicaoInicial() {

        $("#p-top").addClass('peca-top');
        $("#p-top").removeClass('volta-topo');

        $("#p-teclado").addClass('peca-teclado');
        $("#p-teclado").removeClass('volta-peca-teclado');

        $("#p-left").addClass('peca-left');
        $("#p-left").removeClass('volta-peca-left');

        $("#p-rigth").addClass('peca-rigth');
        $("#p-rigth").removeClass('volta-peca-right');

        $("#p-teclado-left").addClass('peca-left-teclado');
        $("#p-teclado-left").removeClass('volta-left-teclado');

        $("#p-teclado-left2").addClass('peca-left-teclado-2');
        $("#p-teclado-left2").removeClass('volta-left-teclado-2');

        $("#p-teclado-rigth2").addClass('peca-right-teclado');
        $("#p-teclado-rigth2").removeClass('volta-right-teclado');

    }

    function btnVoltar() {
        $('.btn-voltar').on('click', function () {
            limparCampoTexto();
            $('.anos30, .anos70, .anos80, .anos90, .anos00').addClass('d-none');
            $('#vortice').addClass('d-none');
            $('#btnValidarAno').css({
                display: 'block'
            });
            setTimeout(function () {
                $('#h1-maquina').css({
                    display: 'block'
                });
                efeitoDeDigitacao();
            }, 4000);


            $("#texto").fadeIn(3000);
            $("#bgpadrao").fadeIn(1000);
            pausarTodasMusicas();

            posicaoInicial();
        });
    }

    function vorticeNaTela() {
        $('#h1-maquina').css({
            display: 'none'
        });
        $("#texto").fadeOut(1000);
        $("#bgpadrao").fadeOut(2000);
        $("#btnValidarAno").fadeOut(2000);


        setTimeout(function () {

            $('#vortice')
                .removeClass('d-none')
                .css({
                    top: '452px',
                    left: '455px',
                    width: '1px'
                })

                .animate({
                    top: '0px',
                    left: '0px',
                    round: '1%',
                    width: '100%'
                }, 3000);
        }, 3000);

    }

    function validacaoAno() {
        var textoCompleto = $('#texto').val().trim();

        var matchAno = textoCompleto.match(/\d{2}$/);

        if (matchAno) {
            var doisUltimosDigitos = matchAno[0];

            switch (doisUltimosDigitos) {
                case '30':
                    setTimeout(function () {
                        $('#musica30')[0].play();
                        $('.meuBotao i').text('volume_up');
                    }, 3000);
                    pecasVoltando();
                    vorticeNaTela();
                    setTimeout(function () {
                        $('.anos30').removeClass('d-none');
                    }, 8000);
                    break;
                case '70':
                    setTimeout(function () {
                        $('#musica70')[0].play();
                        $('.meuBotao i').text('volume_up');
                    }, 3000);
                    pecasVoltando();
                    vorticeNaTela();
                    setTimeout(function () {
                        $('.anos70').removeClass('d-none');
                    }, 5000);
                    break;
                case '80':
                    setTimeout(function () {
                        $('#musica80')[0].play();
                        $('.meuBotao i').text('volume_up');
                    }, 3000);
                    pecasVoltando();
                    vorticeNaTela();
                    setTimeout(function () {
                        $('.anos80').removeClass('d-none');
                    }, 5000);
                    break;
                case '90':
                    setTimeout(function () {
                        $('#musica90')[0].play();
                        $('.meuBotao i').text('volume_up');
                    }, 3000);
                    pecasVoltando();
                    vorticeNaTela();
                    setTimeout(function () {
                        $('.anos90').removeClass('d-none');
                    }, 5000);
                    break;
                case '00':
                    setTimeout(function () {
                        $('#musica2000')[0].play();
                        $('.meuBotao i').text('volume_up');
                    }, 3000);
                    pecasVoltando();
                    vorticeNaTela();
                    setTimeout(function () {
                        $('.anos00').removeClass('d-none');
                    }, 5000);
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

    efeitoDeDigitacao();
    playNextAnimation();
    btnVoltar();
    audioClick();
    enviarTextoInput();
    resizeBodyConteudo();
});
