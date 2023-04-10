function Product(id, name, price, quantity, amount){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.amount = amount;
    
    this.renderRow = function() {
        const row = `
        <tr>
             <td>
                <input type="checkbox" id="chk${this.id}
                "onchange="enable(this, ${this.id})" class="checkInput">
                </td>
                <td>${this.name}</td>
                <td>${this.price}</td>
                <td>
                    <input type="text" id="qty${this.id}" value="${
                        this.quantity > 0 ? this.quantity : ""} 
                        " disabled onchange="calculateAmount(this, ${this.id}, ${this.price})"
                        class="quantity">
                </td>
                <td> <span id="amount${this.id}" class="amount">
                    ${this.quantity > 0 ? this.quantity * this.price : ""}
                    </span>
                </td>
        </tr>`;
        return row;
    };
}

const productList = [
    new Product(1, "iphone 8", 100, 0, 0),
    new Product(2, "iphone XS Max", 200, 0, 0),
    new Product(4, "iphone 11", 300, 0, 0),
    new Product(5, "iphone 12", 400, 0, 0),
    new Product(6, "iphone 13", 500, 0, 0),
    new Product(7, "Samsung S22", 500, 0, 0),
    new Product(8, "Sony Xperia", 350, 0, 0),
    new Product(9, "Oppo Reno 7Z", 300, 0, 0),
    new Product(10, "Samsung A90 5G", 150, 0, 0),
];

function filterPriceLevel(){
    const tbodyCtrl = document.getElementById("tbody");
    const priceLevelCtrl = document.getElementById("priceLevel");
    const priceLevel = Number(priceLevelCtrl.value);

    let tbodyContent = "";
    for (const element of productList) {
        switch(priceLevel) {
            case 0:
                tbodyContent += element.renderRow();
                break;
            case 1:
                if(element.price <= 100)
                tbodyContent += element.renderRow();
                break;    
            case 2:
                if(element.price >= 101 && element.price <= 200)
                tbodyContent += element.renderRow();
                break; 
            case 3:
                if(element.price >= 201 && element.price <= 300)
                tbodyContent += element.renderRow();
                break;    
            case 4:
                if(element.price >= 301)
                tbodyContent += element.renderRow();
                break;       
        }
        tbodyCtrl.innerHTML = tbodyContent;
    }
}
function enable(chk, id) {
    const qtyCtrl = document.getElementById('qty' + id)
    if (chk.checked){
        qtyCtrl.removeAttribute('disabled')
    }else{
        qtyCtrl.setAttribute('disabled', "");
        const amountCtrl = document.getElementById('amount' + id)
        amountCtrl.innerText = "";
        qtyCtrl.value = "";
    }
    calculateTotal();
}

function calculateAmount(qty, id, price) {
    const value = Number(qty.value);
    const amountCtrl = document.getElementById('amount' + id);

    if (value > 0){
        amountCtrl.innerText = (value * price);
    }else{
        amountCtrl .innerText= '';
    }
    calculateTotal();
}
function calculateTotal(){
    const amountSpans = document.getElementsByClassName('amount')
    const totalSpan = document.getElementById("total");

    if (!!amountSpans && amountSpans.length > 0) {
        let total = 0;
        for (const spn of amountSpans) {
            if (spn.innerText != ""){
                total += Number(spn.innerText);
            }
        }
        totalSpan.innerText = total;
        return;
    }
    totalSpan.innerText = 0;
}

function checkAll(chk) {
    const checkInputCtrls = document.getElementsByClassName('checkInput');

    for (const element of checkInputCtrls) {
        element.checked = chk.checked;
        var event = new Event("change");
        element.dispatchEvent(event);
    }
}