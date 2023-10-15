let cart = {
    
};

let items ={
    _1:{price: 0.64,Name:"Кефир"},
    _2:{price: 0.7,Name:"Напиток из плодов шиповника"},
    _3:{price:0.32,Name:"Напиток лимонный"},
    _4:{price:0.78,Name:"Кофе на молоке (растворимый)"},
    _5:{price:0.53,Name:"КАША ГРЕЧНЕВАЯ ВЯЗКАЯ"},
    _6:{price:1.11,Name:"ПЮРЕ КАРТОФЕЛЬНОЕ"},
    _7:{price:1.50,Name:"КАРТОФЕЛЬ ЖАРЕНЫЙ"},
    _8:{price:3.01,Name:"СМЕСЬ ОВОЩНАЯ ОТВАРНАЯ"},
    _9:{price:0.76,Name:"КЕКС ТВОРОЖНЫЙ ЛЮБИТЕЛЬСКИЙ"},
    _10:{price:0.58,Name:"БУЛОЧКА С ОРЕХОВОЙ НАЧИНКОЙ"},
    _11:{price:0.42,Name:"БУЛОЧКА ДЕСЕРТНАЯ"},
    _12:{price:1.00,Name:"ПЕЧЕНЬЕ ДЕТСКОЕ"},
    _13:{price:0.78,Name:"УШКИ СЛОЕНЫЕ"},
    _14:{price:0.97,Name:"КЕКС СТОЛИЧНЫЙ"},
    _15:{price:0.53,Name:"БУЛОЧКА ВАНИЛЬНАЯ"},
    _16:{price:0.65,Name:"СДОБА ДЕТСКАЯ ФИГУРНАЯ"},
    _17:{price:0.69,Name:"БУЛОЧКА СНЕЖИНКА"},
    _18:{price:0.64,Name:"ПЛЮШКА С МАКОМ"},
    _19:{price:0.05,Name:"БАТОН"},
    _20:{price:0.10,Name:"ХЛЕБ"},
    _21:{price:0.59,Name:"ВАРЕНЬЕ"},
    _22:{price:1.76,Name:"ТВОРОГ СО СМЕТАНОЙ И САХАРОМ"},
    _23:{price:2.12,Name:"БЛИНЧИКИ С ТВОРОГОМ"},
    _24:{price:2.76,Name:"ЗАПЕКАНКА ИЗ ТВОРОГА Б/С"},
    _25:{price:3.13,Name:"ЗАПЕКАНКА ИЗ ТВОРОГА"},
    _26:{price:1.12,Name:"БЕЛЯШИ"},
    _27:{price:2.69,Name:"ТЕФТЕЛИ  ПО-ДЕРЕВЕНСКИ"},
    _28:{price:2.21,Name:"КОТЛЕТЫ АППЕТИТНЫЕ"},
    _29:{price:3.61,Name:"ПОДЖАРКА ИЗ СВИНИНЫ"},
    _30:{price:4.51,Name:"ЯЗЫК ОТВАРНОЙ"},
    _31:{price:3.92,Name:"БАКЛАЖАНЫ ФАРШИРОВАННЫЕ МЯСОМ И РИСОМ"},
    _32:{price:4.37,Name:"ШАШЛЫК ИЗ СВИНИНЫ"},
    _33:{price:4.33,Name:"МЯСО ОТ ШЕФА"},
    _34:{price:4.09,Name:"РЫБА, ЗАПЕЧЕННАЯ В СМЕТАНЕ С МОРКОВЬЮ"},
    _35:{price:0.99,Name:"СУП КАРТОФЕЛЬНЫЙ С РИСОМ И ЦЫПЛЯТАМИ"},
    _36:{price:1.06,Name:"СУП ПЕРЛОВЫЙ С ГРИБАМИ"},
    _37:{price:2.23,Name:"СОЛЯНКА ДОМАШНЯЯ"},
    _38:{price:0.54,Name:"ХРЕН"},
    _39:{price:0.40,Name:"ГОРЧИЦА"},
    _40:{price:0.38,Name:"КЕТЧУП"},
    _41:{price:1.49,Name:"СМЕТАНА"},
    _42:{price:0.80,Name:"МОРСКАЯ КАПУСТА"},
    _43:{price:0.98,Name:"САЛАТ ИЗ СВЕЖИХ ОГУРЦОВ СО СМЕТАНОЙ"},
    _44:{price:1.09,Name:"САЛАТ ИЗ СВЕЖИХ ПОМИДОРОВ СО СМЕТАНОЙ"},
    _45:{price:0.93,Name:"САЛАТ ИЗ ПЕКИНСКОЙ КАПУСТЫ С ПОМИДОРАМИ"},
    _46:{price:1.79,Name:"САЛАТ ИЗ ЗЕЛЕНОГО ЛУКА"},
    _47:{price:0.31,Name:"КАПУСТА АППЕТИТНАЯ ПО-СЛУЦКИ"},
    _48:{price:1.21,Name:"САЛАТ ИЗ ПРЯНОЙ МОРКОВИ С КРАБОВЫМИ ПАЛОЧКАМИ"},
    _49:{price:0.24,Name:"САЛАТ ИЗ СВЕКЛЫ С МАСЛОМ РАСТИТЕЛЬНЫЙ"},
    _50:{price:0.51,Name:"САЛАТ ИЗ СВЕКЛЫ С ИЗЮМОМ"},
    _51:{price:1.30,Name:"САЛАТ ИЗ СВЕКЛЫ С СЕЛЬДЬЮ"},
    _52:{price:1.48,Name:"САЛАТ СЛОЕНЫЙ"},
    _53:{price:2.04,Name:"САЛАТ ИЗ МОРСКОЙ КАПУСТЫ С ЯЙЦОМ"},
    _54:{price:1.91,Name:"САЛАТ ИЗ ПТИЦЫ С ЯБЛОКАМИ"},
    _55:{price:1.81,Name:"САЛАТ ГРЕЧЕСКАЯ СМОКОВНИЦА"},
    _56:{price:2.45,Name:"САЛАТ ПРАЗДНИЧНЫЙ"},
    _57:{price:1.75,Name:"САЛАТ ИЗ ОВОЩЕЙ С ВЕТЧИНОЙ"},
    _58:{price:1.36,Name:"ЯЙЦА, ФАРШИРОВАННЫЕ ГРИБАМИ"},
    _59:{price:1.09,Name:"СЕЛЬДЬ ФИЛЕ С ЛУКОМ"},
    _60:{price:1.87,Name:"БАКЛАЖАНЫ, ФАРШИРОВАННЫЕ СЫРОМ И ЧЕСНОКОМ"},
    _61:{price:2.60,Name:"РЫБА ЖАРЕНАЯ ПОД МАРИНАДОМ"},
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
            buttonplus.style.height = '4vw';
            buttonplus.style.width = '4vw';
            buttonplus.textContent = '+';
            buttonplus.className = 'plus'
            buttonplus.dataset.id = key;

            let buttonminus = document.createElement('button');
            buttonminus.style.height = '4vw';
            buttonminus.style.width = '4vw';
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

