let carrinho = [];

function toggleMenu(){
document.getElementById("sidebar").classList.toggle("active");
}

function adicionarCarrinho(nome,preco){
carrinho.push({nome,preco});
atualizarCarrinho();
}

function atualizarCarrinho(){
document.getElementById("contador").innerText = carrinho.length;

let lista = document.getElementById("listaCarrinho");
lista.innerHTML="";

let total = 0;

carrinho.forEach(item=>{
let li = document.createElement("li");
li.innerText = item.nome + " - R$ " + item.preco;
lista.appendChild(li);
total += item.preco;
});

document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
}

function abrirCarrinho(){
document.getElementById("carrinhoModal").style.display="block";
}

function fecharCarrinho(){
document.getElementById("carrinhoModal").style.display="none";
}

function finalizarCompra(){
alert("Compra finalizada!");
carrinho=[];
atualizarCarrinho();
fecharCarrinho();
}

function filtrarProdutos(){
let valor = document.getElementById("pesquisa").value.toLowerCase();
document.querySelectorAll(".produto").forEach(p=>{
p.style.display = p.innerText.toLowerCase().includes(valor) ? "block":"none";
});
}

function filtrarCategoria(cat){
document.querySelectorAll(".produto").forEach(p=>{
p.style.display = (cat==="todos" || p.dataset.categoria===cat) ? "block":"none";
});
}