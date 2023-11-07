// todas essas variáveis estão armazenando os ID criados no cabeçalho do site para fazer a animação

var sobreMim = document.getElementById("sobreMim")
var sobreMimModal = document.getElementById("sobreMimModal")
var formacao = document.getElementById("formacao")
var formacaoModal = document.getElementById("formacaoModal")
var portfolio = document.getElementById("meuPortfolio")
var portfolioModal = document.getElementById("meuPortfolioModal")
var contato = document.getElementById("meuContato")
var contatoModal = document.getElementById("meuContatoModal")


console.log(window.screen.width)
console.log(scrollY)
if(window.screen.width <= 1000){
    window.addEventListener("scroll", function(){
        
        /*nessas sequências de ifs, estou criando as animações de acordo com o total de scroll que a tela der.
        até o momento eu não sei fazer o scroll pelos ids de cada local, como o "sobre mim", "formação" etc
        então, se for usada em uma tela pequena menor que 1360px essa animação pode apresentar falhas e acontecer antes do esperado */
    
    
        /* Se o scroll for menor de 635, então, no cabeçalho, mude a cor do "Sobre mim" para #494848 e o restante para rgb(7, 7, 7)  */
        if(this.window.scrollY <= 1000){
            sobreMimModal.style.backgroundColor = "#494848"
            formacaoModal.style.backgroundColor = "rgb(7, 7, 7)"
            portfolioModal.style.backgroundColor = "rgb(7, 7, 7)"
            contatoModal.style.backgroundColor = "rgb(7, 7, 7)"
        }
    
        /* Se não, se o scroll for maior que 636 e menor que 1199, então, no cabeçalho, mude a cor de "Formação" para #494848 e o restante para rgb(7, 7, 7)   */
        else if(this.window.scrollY >= 1425 && this.window.scrollY <= 1925){
            sobreMimModal.style.backgroundColor = "rgb(7, 7, 7)"
            formacaoModal.style.backgroundColor = "#494848"
            portfolioModal.style.backgroundColor = "rgb(7, 7, 7)"
            contatoModal.style.backgroundColor = "rgb(7, 7, 7)"
        }
    
        
        /* Se não, se o scroll for maior que 636 e menor que 1199, então, no cabeçalho, mude a cor de "Portfólio" para #494848 e o restante para rgb(7, 7, 7)   */
        else if(this.window.scrollY >= 1926 && this.window.scrollY <= 2120){
            sobreMimModal.style.backgroundColor = "rgb(7, 7, 7)"
            formacaoModal.style.backgroundColor = "rgb(7, 7, 7)"
            portfolioModal.style.backgroundColor = "#494848"
            contatoModal.style.backgroundColor = "rgb(7, 7, 7)"
        }
    
        
        /* Se não, se o scroll for maior que 636 e menor que 1199, então, no cabeçalho, mude a cor de "Contato" para #494848 e o restante para rgb(7, 7, 7)   */
        else if(this.window.scrollY >= 3600){
            sobreMimModal.style.backgroundColor = "rgb(7, 7, 7)"
            formacaoModal.style.backgroundColor = "rgb(7, 7, 7)"
            portfolioModal.style.backgroundColor = "rgb(7, 7, 7)"
            contatoModal.style.backgroundColor = "#494848"
        }
    })
}else{
    // aqui eu estou carregando a tela(window) e adicionando um evento para acontecer na tela quando houver o scroll da tela
    window.addEventListener("scroll", function(){
        
        /*nessas sequências de ifs, estou criando as animações de acordo com o total de scroll que a tela der.
        até o momento eu não sei fazer o scroll pelos ids de cada local, como o "sobre mim", "formação" etc
        então, se for usada em uma tela pequena menor que 1360px essa animação pode apresentar falhas e acontecer antes do esperado */
    
    
        /* Se o scroll for menor de 635, então, no cabeçalho, mude a cor do "Sobre mim" para #494848 e o restante para rgb(7, 7, 7)  */
        if(this.window.scrollY <= 635){
            sobreMim.style.backgroundColor = "#494848"
            formacao.style.backgroundColor = "rgb(7, 7, 7)"
            portfolio.style.backgroundColor = "rgb(7, 7, 7)"
            contato.style.backgroundColor = "rgb(7, 7, 7)"
        }
    
        /* Se não, se o scroll for maior que 636 e menor que 1199, então, no cabeçalho, mude a cor de "Formação" para #494848 e o restante para rgb(7, 7, 7)   */
        else if(this.window.scrollY >= 636 && this.window.scrollY <= 1199){
            sobreMim.style.backgroundColor = "rgb(7, 7, 7)"
            formacao.style.backgroundColor = "#494848"
            portfolio.style.backgroundColor = "rgb(7, 7, 7)"
            contato.style.backgroundColor = "rgb(7, 7, 7)"
        }
    
        
        /* Se não, se o scroll for maior que 636 e menor que 1199, então, no cabeçalho, mude a cor de "Portfólio" para #494848 e o restante para rgb(7, 7, 7)   */
        else if(this.window.scrollY >= 1200 && this.window.scrollY <= 1849){
            sobreMim.style.backgroundColor = "rgb(7, 7, 7)"
            formacao.style.backgroundColor = "rgb(7, 7, 7)"
            portfolio.style.backgroundColor = "#494848"
            contato.style.backgroundColor = "rgb(7, 7, 7)"
        }
    
        
        /* Se não, se o scroll for maior que 636 e menor que 1199, então, no cabeçalho, mude a cor de "Contato" para #494848 e o restante para rgb(7, 7, 7)   */
        else if(this.window.scrollY >= 1850){
            sobreMim.style.backgroundColor = "rgb(7, 7, 7)"
            formacao.style.backgroundColor = "rgb(7, 7, 7)"
            portfolio.style.backgroundColor = "rgb(7, 7, 7)"
            contato.style.backgroundColor = "#494848"
        }
    })
}





/* Criando função para quando o botao for clicado e ser enviado a mensagem.
No entanto feito adicionado uma estrutura de decisão onde se os campos estirem vazios, será dado um alert pedindo para
preencher os campos em branco, se não irá dar um alert de sucesso (Eu queria fazer com que a tela não recarregasse
após clicar em OK no alert, mas eu não consegui.)

OBS: Os dados inseridos não serão enviados para lugar algum*/
function enviar(e){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var selecione = document.getElementById("selecione")

    if(name.value == "" ||email.value == "" || selecione.value == ""){
        alert("Por gentileza para enviar os dados de contato preencha todos os campos.")
        e.preventDefault()
    }
    else{
        alert("Mensagem enviada com sucesso!")
    }
    
}

const meuModal = () => {
    var fotos = ["./img/png-clipart-x-button-others-angle-text.png", "./img/barra-de-menu.png"]
    const modal = document.querySelector('.modal')
    const botao = document.querySelector('.btnModal')
    const modalAtual = modal.style.display
    if(modalAtual == 'block'){
        modal.style.display = 'none'
        botao.firstElementChild.src = fotos[1]

  
    }else{
        modal.style.display = 'block'
        botao.firstElementChild.src = fotos[0]

    }

}


const btn = document.querySelector(".btnModal")
btn.addEventListener('click', meuModal)

window.onclick = function(event){
    const modal = document.querySelector('.modal')
    if(event.target == modal){
        meuModal()
    }
}

