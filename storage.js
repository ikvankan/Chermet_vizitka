let cart = {
    
};





document.onclick = event => {
    if(event.target.classList.contains('pos_name')||event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
        
    }
    if(event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
        
    }
}

const plusFunction = id =>{
    
    if(isNaN(cart[id])){
        cart[id] = 0;
    }
    cart[id]++;
    renderCart();
}


const minusFunction = id =>{
    if(cart[id]-1==0){
        delFunction(id);
        return;
    }
    cart[id]--;
    renderCart();
}


const delFunction = id =>{
    delete cart[id];
    renderCart();
}
const renderCart = () =>{
    function displayObject(obj) {
        // Очистка содержимого body
        document.getElementById('zakaz').innerHTML = '';
        
        for (let key in obj) {



            let div = document.createElement('div');
            div.className='stroka';
            div.style.display = 'flex';
            div.style.height = '3vw';
            div.style.width = '16vw';
            
            // Создание нового элемента p
            let p = document.createElement('p');
            p.style.width= '10vw';
            p.style.color= "white";
            p.style.fontSize = "1.3vw";
            p.style.height = '3vw';
            p.textContent = `${key}: ${obj[key]}`;
    
            // Создание новой кнопки
            let buttonplus = document.createElement('button');
            buttonplus.style.height = '3vw';
            buttonplus.style.width = '3vw';
            buttonplus.textContent = '+';
            buttonplus.className = 'plus'
            buttonplus.dataset.id = key;


            let buttonminus = document.createElement('button');
            buttonminus.style.height = '3vw';
            buttonminus.style.width = '3vw';
            buttonminus.textContent = '-';
            buttonminus.className = 'minus'
            buttonminus.dataset.id = key;

            div.appendChild(p);
            div.appendChild(buttonplus);
            div.appendChild(buttonminus);
            // Добавление элемента p и кнопки в body
            document.getElementById('zakaz').appendChild(div);
            
        }
    }
    
    // Вызов функции
    displayObject(cart);
    console.log(cart);
}
renderCart();