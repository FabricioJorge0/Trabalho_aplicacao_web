// todas essas variaveis estão armazenando os ID criados no cabeçalho do site para fazer a animção

var sobreMim = document.getElementById("sobreMim")
var formacao = document.getElementById("formacao")
var chegar = document.getElementById("footer")


// aqui eu estou carregando a tela(window) e adicionando um evento para acontecer na tela quando houver o scroll da tela
window.addEventListener("scroll", function(){
    
    /*nessas sequências de ifs, estou criando as animação de acordo com o total de scroll que a tela der.
    até o momento eu não sei fazer o scroll pelos ids de cada local, como o "sobre mim", "formação" etc
    então, se for usada em uma tela pequena menor que 1360px essa animação pode apresentar falhas e acontecer antes do esperado */
    
    if(this.window.scrollY <= 635){
        sobreMim.style.backgroundColor = "#494848"
        formacao.style.backgroundColor = "rgb(7, 7, 7)"
    }
    else if(this.window.scrollY >= 636){
        sobreMim.style.backgroundColor = "rgb(7, 7, 7)"
        formacao.style.backgroundColor = "#494848"
    }
})

// alert(window.scrollY)
