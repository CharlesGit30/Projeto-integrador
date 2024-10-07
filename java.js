let menu = document.querySelector('#menu-icone');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('fa-solid');
     navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('fa-solid');
    navlist.classList.remove('open')
}

/* Barra de Pesquisa */

document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('search-toggle');
    const searchBar = document.getElementById('search-bar');
    const closeBtn = document.getElementById('close-btn');

    searchToggle.addEventListener('click', () => {
        searchBar.classList.add('active');
        searchBar.querySelector('input').focus();
    });

    closeBtn.addEventListener('click', () => {
        searchBar.classList.remove('active');
    });
});


// Cart btn //

document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('fa-solid fa-cart-shopping');
    const cart = document.getElementById('cart');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    const cartItems = [];
    
    // Event Listener para abrir/fechar o carrinho
    cartBtn.addEventListener('click', () => {
        cart.classList.toggle('hidden');
    });
    
    closeCartBtn.addEventListener('click', () => {
        cart.classList.remove('hidden');
    });

    // Função para atualizar o carrinho
    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cartItems.length;
    }

    // Adicionar produto ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productDiv = event.target.closest('.product');
            const id = productDiv.getAttribute('data-id');
            const name = productDiv.getAttribute('data-name');
            const price = parseFloat(productDiv.getAttribute('data-price'));
            
            cartItems.push({ id, name, price });
            updateCart();
        });
    });

     // Finalizar compra
     checkoutBtn.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('O carrinho está vazio!');
            return;
        }
        
        // Simulação de envio dos dados para um servidor ou processamento
        alert('Compra finalizada com sucesso!');
        
        // Limpar o carrinho
        cartItems.length = 0; // Limpa o array
        updateCart(); // Atualiza a visualização
        cart.classList.add('hidden'); // Fecha o carrinho
    });
});






