
const containerMain = document.querySelector('.container-main')


async function news(){

const url = await fetch ('https://newsapi.org/v2/everything?q=apple&from=2024-07-20&to=2024-07-20&sortBy=popularity&apiKey=5cdf6717bb794c55833e4158fa772971')
const data = await url.json()

try{
    data.articles.forEach(element => {



        const template =`
        <div class="container-main">
        
        <div class="container-main1">
            <h1>${element.title}</h1>
          <a href="${element.url}"><img src="${element.urlToImage}"></a>  
          <p>${element.content} -${element.author}</p>
        </div>
        
        
        </div>`
         
        containerMain.innerHTML += template;
        console.log(element)
        
        });
        
}

catch(error){


    window.prompt(error)
}

}

news()
