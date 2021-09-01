const API_KEY = '';
let h = document.getElementById("TN");

onload = () => {
    h.innerHTML = "Principais Notícias";
    h.style.background = 'rgba(255, 0, 0, 0.959)';
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    //               https://newsapi.org/v2/everything?q=        &apiKey=
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    xhr.send();
    //---------------------|Botões|------------------------
    let PN = document.getElementById("PN");
    PN.onclick = () => {
            executaPesquisaPN("top-headlines");
            h.innerHTML = "Principais Notícias";
            h.style.background = 'rgba(255, 0, 0, 0.959)';
        }
        //---------------------------------------------
    let TC = document.getElementById("TC");
    TC.onclick = () => {
            executaPesquisaC("Tecnologia");
            h.innerHTML = "Tecnologia";
            h.style.background = 'rgb(49, 49, 199)';
        }
        //---------------------------------------------
    let EC = document.getElementById("EC");
    EC.onclick = () => {
            executaPesquisaC("Economia");
            h.innerHTML = "Economia";
            h.style.background = 'rgb(0, 126, 0)';
        }
        //---------------------------------------------
    let PL = document.getElementById("PL");
    PL.onclick = () => {
            executaPesquisaC("Política");
            h.innerHTML = "Política";
            h.style.background = 'orange';
        }
        //---------------------------------------------
    let EP = document.getElementById("EP");
    EP.onclick = () => {
        executaPesquisaC("Esporte");
        h.innerHTML = "Esporte";
        h.style.background = 'rgba(0, 0, 0, 0.959)';
        h.style.color = 'white';
    }
    let CD = document.getElementById("CD");
    CD.onclick = () => {
            executaPesquisaC("Covid-19");
            h.innerHTML = "Covid-19";
            h.style.background = 'rgba(0, 255, 42, 0.959)';
        }
        //-----------------------------------------------------------------------------------------------------
        //---------------------|Botões 2|------------------------
        //-------------------------------------------------------------------------------------------------------
    let PN2 = document.getElementById("PN2");
    PN2.onclick = () => {
            executaPesquisaPN("top-headlines");
            h.innerHTML = "Principais Notícias";
            h.style.background = 'rgba(255, 0, 0, 0.959)';
        }
        //---------------------------------------------
    let TC2 = document.getElementById("TC2");
    TC2.onclick = () => {
            executaPesquisaC("Tecnologia");
            h.innerHTML = "Tecnologia";
            h.style.background = 'rgb(49, 49, 199)';
        }
        //---------------------------------------------
    let EC2 = document.getElementById("EC2");
    EC2.onclick = () => {
            executaPesquisaC("Economia");
            h.innerHTML = "Economia";
            h.style.background = 'rgb(0, 126, 0)';
        }
        //---------------------------------------------
    let PL2 = document.getElementById("PL2");
    PL2.onclick = () => {
            executaPesquisaC("Política");
            h.innerHTML = "Política";
            h.style.background = 'orange';
        }
        //---------------------------------------------
    let EP2 = document.getElementById("EP2");
    EP2.onclick = () => {
        executaPesquisaC("Esporte");
        h.innerHTML = "Esporte";
        h.style.background = 'rgba(0, 0, 0, 0.959)';
        h.style.color = 'white';
    }
    let CD2 = document.getElementById("CD2");
    CD2.onclick = () => {
            executaPesquisaC("Covid-19");
            h.innerHTML = "Covid-19";
            h.style.background = 'rgba(0, 255, 42, 0.959)';
        }
        //-------------------------------------------------------
        // Fontes de Noticia
        //--------------------------------------------------------
    let Globo = document.getElementById("Globo");
    Globo.onclick = () => {
        executaPesquisaF("globo");
        h.innerHTML = "Globo";
        h.style.background = 'rgb(155, 6, 6)';
    }
    let infomoney = document.getElementById("info-money");
    infomoney.onclick = () => {
        executaPesquisaF("info-money");
        h.innerHTML = "InfoMoney";
        h.style.background = 'rgba(0, 150, 42, 0.959)';
    }
    let Google = document.getElementById("Google");
    Google.onclick = () => {
        executaPesquisaF("google-news-br");
        h.innerHTML = "Google News";
        h.style.background = 'rgb(36, 105, 151)';
    }
    let BBC = document.getElementById("BBC");
    BBC.onclick = () => {
            executaPesquisaF("bbc-news");
            h.innerHTML = "BBC";
            h.style.background = 'rgb(155, 6, 6)';
        }
        //-------------------------------------------------------
        // Fontes de Noticia
        //--------------------------------------------------------
    let Globo2 = document.getElementById("Globo2");
    Globo2.onclick = () => {
        executaPesquisaF("globo");
        h.innerHTML = "Globo";
        h.style.background = 'rgb(155, 6, 6)';
    }
    let infomoney2 = document.getElementById("info-money2");
    infomoney2.onclick = () => {
        executaPesquisaF("info-money");
        h.innerHTML = "InfoMoney";
        h.style.background = 'rgba(0, 150, 42, 0.959)';
    }
    let Google2 = document.getElementById("Google2");
    Google2.onclick = () => {
        executaPesquisaF("google-news-br");
        h.innerHTML = "Google News";
        h.style.background = 'rgb(36, 105, 151)';
    }
    let BBC2 = document.getElementById("BBC2");
    BBC2.onclick = () => {
        executaPesquisaF("bbc-news");
        h.innerHTML = "BBC";
        h.style.background = 'rgb(155, 6, 6)';
    }
};

function exibeNoticias() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);

    for (i = 0; i < dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);
        if (i % 2 == 0) {
            texto = texto + ` 
            <div class="card-group">
            <div class="card">
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">    
            <div class="creditos">             
            <span>${data.toLocaleDateString()} - 
            ${noticia.source.name} - 
            ${noticia.author}</span><br>
            </div>
            <span class="text">
            ${noticia.content} <a href="${noticia.url}" target="_blank">Leia mais...</a>
            </span></p>    
            </div>
            </div>
        `;
        } else {
            texto = texto + `
            <div class="card">
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">    
            <div class="creditos">            
            <span>${data.toLocaleDateString()} - 
            ${noticia.source.name} - 
            ${noticia.author}</span><br>
            </div>
            <span class="text">
            ${noticia.content} <a href="${noticia.url}" target="_blank">Leia mais...</a>
            </span></p>  
            </div>
            </div>
            </div>
        `;
        }

    };
    if (texto.length == 0) {
        texto = `<div id="mERRO"><p>ERRO: Desculpe, mas não encontramos resultados para essa pesquisa.</p></div>`;
    }

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}
// execultar noticias da barra de pesquisa 1
function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    //               https://newsapi.org/v2/everything?q=                    &apiKey=
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=${API_KEY}`);
    xhr.send();
    h.innerHTML = "Pesquisa";
    h.style.background = 'darkslategray';
}
// execultar noticias da barra de pesquisa 2
function executaPesquisaD() {
    let query = document.getElementById('txtPesquisa2').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    //               https://newsapi.org/v2/everything?q=                    &apiKey=
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=${API_KEY}`);
    xhr.send();
    h.innerHTML = "Pesquisa";
    h.style.background = 'darkslategray';
}
// execultar pesquisa dos botões 
function executaPesquisaC(query) {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=${API_KEY}`);
    xhr.send();
}
// executar pesquisa de noticias principais 
function executaPesquisaPN(query) {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    xhr.send();
}

function executaPesquisaF(query) {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${query}&apiKey=${API_KEY}`);
    xhr.send();
}


// Barra de pesquisa 1
document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);
//Barra de pesquisa 2
document.getElementById('btnPesquisa2').addEventListener('click', executaPesquisaD);