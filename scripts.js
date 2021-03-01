const items=[
    {
        id:0,
        nome:'camiseta',
        img:'camiseta.png',
        quantidade:0,

    },
    {
        id:1,
        nome:'short',
        img:'shorts.png',
        quantidade:0,

    },
    {
        id:2,
        nome:'sapato',
        img:'sapato.png',
        quantidade:0,

    },
]

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

}



inicializarLoja = () =>{
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= ` 
        
        <div class="produto-sigle">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a  key="`+val.id+`" href="#">adicionar ao carrinho</a>
        
        </div>
        
        `;

    })
    
}

inicializarLoja();


atualizarCarrinho = ()=>{
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{

        if(val.quantidade > 0 ){
         containerCarrinho.innerHTML+= ` 
         <div class="info-sigle-">
         <p style="float-left">Produto: `+val.nome+`</p>
         <p style="float-right">Quantidade:`+val.quantidade+`</p>
         <div style="clear:both"></div>
         </div>
        
         `;
        }
    })
    console.log(items);

}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;

    })
}