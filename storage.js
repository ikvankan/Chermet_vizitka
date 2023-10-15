let cart = {
    
};

let items ={
    _1:{price: 0.64,Name:"Кефир"},
    _2:{price: 0.7,Name:"Напиток из плодов шиповника"},
    _3:{price:0.32,Name:"Напиток лимонный"},
    _4:{price:0.78,Name:"Кофе на молоке (растворимый)"},
    _5:{price:0.00,Name:""},
    _6:{price:0.00,Name:""},
    _7:{price:0.00,Name:""},
    _8:{price:0.00,Name:""},
    _9:{price:0.00,Name:""},
    _10:{price:0.00,Name:""},
    _11:{price:0.00,Name:""},
    _12:{price:0.00,Name:""},
    _13:{price:0.00,Name:""},
    _14:{price:0.00,Name:""},
    _15:{price:0.00,Name:""},
    _16:{price:0.00,Name:""},
    _17:{price:0.00,Name:""},
    _18:{price:0.00,Name:""},
    _19:{price:0.00,Name:""},
    _20:{price:0.00,Name:""},
    _21:{price:0.00,Name:""},
    _22:{price:0.00,Name:""},
    _23:{price:0.00,Name:""},
    _24:{price:0.00,Name:""},
    _25:{price:0.00,Name:""},
    _26:{price:0.00,Name:""},
    _27:{price:0.00,Name:""},
    _28:{price:0.00,Name:""},
    _29:{price:0.00,Name:""},
    _30:{price:0.00,Name:""},
    _31:{price:0.00,Name:""},
    _32:{price:0.00,Name:""},
    _33:{price:0.00,Name:""},
    _34:{price:0.00,Name:""},
    _35:{price:0.00,Name:""},
    _36:{price:0.00,Name:""},
    _37:{price:0.00,Name:""},
    _38:{price:0.00,Name:""},
    _39:{price:0.00,Name:""},
    _40:{price:0.00,Name:""},
    _41:{price:0.00,Name:""},
    _42:{price:0.00,Name:""},
    _43:{price:0.00,Name:""},
    _44:{price:0.00,Name:""},
    _45:{price:0.00,Name:""},
    _46:{price:0.00,Name:""},
    _47:{price:0.00,Name:""},
    _48:{price:0.00,Name:""},
    _49:{price:0.00,Name:""},
    _50:{price:0.00,Name:""},
}



document.onclick = event => {
    if(event.target.classList.contains('pos_name')||event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
        
    }
    if(event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
        
    }
}

const plusFunction = id =>{
    
    if (cart[id]) {
        cart[id].quantity += 1; 
    } else {
        let elem = document.querySelector(`[data-id="${id}"]`);
        elem.style.color= "#dfbc71";
        cart[id] = {quantity: 1, price: items[id].price, Name: items[id].Name}; 
    }
        renderCart();
}


const minusFunction = id =>{
    if(cart[id].quantity-1==0){
        delFunction(id);
        return;
    }
    cart[id].quantity--;
    renderCart();
}


const delFunction = id =>{
    delete cart[id];
    let elem = document.querySelector(`[data-id="${id}"]`);
        elem.style.color= "white";
    renderCart();
}
const renderCart = () =>{
    
    function displayObject(obj) {
        document.getElementById('zakaz').innerHTML = '';
        for (let key in obj) {
            let div = document.createElement('div');
            div.className='stroka';
            div.style.display = 'flex';
            div.style.height = '4vw';
            div.style.width = '25vw';

            let p = document.createElement('p');
            p.style.width= '19vw';
            p.style.color= "white";
            p.style.fontSize = "0.9vw";
            p.style.height = '3vw';
            let cost = obj[key].price*obj[key].quantity;
            p.textContent = `${obj[key].Name}: ${obj[key].quantity}шт. Цена: ${cost.toFixed(2)}р`;

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
            
            document.getElementById('zakaz').appendChild(div);
        }
        let totalCost = 0;
        for(let key in obj){
            let quantity = obj[key].quantity;
            let price = obj[key].price;
            let cost = quantity * price;
            totalCost += cost;
        }
        console.log(totalCost);
        let itog = document.createElement('div');
        itog.className='itog';
        itog.textContent = `Цена заказа: ${totalCost.toFixed(2)}р`;
        document.getElementById('zakaz').appendChild(itog);
    }
    displayObject(cart);
    console.log(cart);
}
renderCart();

function send(){
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let data = JSON.stringify({cart: cart, email: email, name: name});
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
}

