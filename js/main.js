$(document).ready(function() {

    $("#carrossel-imagens").slick({
        autoplay: true,
        arrows: false,
        speed: 600,
    })

    $("#carrossel-imagens2").slick({
        autoplay: true,
        arrows: false,
        speed: 400
    })

    $("#carrossel-imagens3").slick({
        autoplay: true,
        arrows: false,
        speed: 900
    })

    $("#carrossel-imagens4").slick({
        autoplay: true,
        arrows: false,
        speed: 400
    })

    $("#carrossel-imagens5").slick({
        autoplay: true,
        arrows: false,
        speed: 600
    })

    $("#carrossel-imagens6").slick({
        autoplay: true,
        arrows: false,
        speed: 800
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: false,
            },
            telefone: {
                required: true,
            },
            cep: {
                required: true,
            },
            viagemInteresse: {
                required: true,
            },
            mensagem: {
                required: false,
            }
            
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            telefone: 'Por favor, digite um telefone',
            cep: 'Por favor, digite seu CEP',
            telefone: 'Por favor, digite seu telefone',
            viagemInteresse: 'Por favor, informe qual destino tem interesse',
        },
        
        submitHandler: function(){
            $('.mensagem-enviada').slideToggle()
            $('#nome').val('')
            $('#telefone').val('')
            $('#email').val('')
            $('#cep').val('')
            $('#viagemInteresse').val('')
            $('#mensagem').val('')
        }
    })

    $('.lista-locais button').click(function() {
        const destino = $('#contato')

        const viagemDestino = $(this).parent().find('h3').text()

        $('#viagemInteresse').val(viagemDestino)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 200)

    })
})

window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    // Mostra o botão quando o usuário rola para baixo 200px da parte superior da página
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  function scrollToTop() {
    // Scroll suave para o topo da página
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  