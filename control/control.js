
let cart = [];

function addToCart() {
    const userInput = document.getElementById('userInput');
    const item  =  userInput.value;

    if(item !== ""){
      createTodo(item)
    }else {
      alert('Please write something!');
    }
    userInput.value = ''; //clear the search input

    Render(); //call render function.
};

function createTodo(item) {
    cart.push({
        name: item,
    })
}

function Render(){4
  let cartList = document.getElementById('renderHere');
  cartList.innerHTML = '';

    cart.forEach(function(item){
        const cartItem = document.createElement('div')
        cartItem.textContent = item.name;
        cartItem.classList.add('div-background');
       
        addDeleteButton(cartItem);
      
        cartList.appendChild(cartItem)   //append cartItem to cartList 
    });
}
Render()


function addDeleteButton(cartItem){
   deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'X';
   deleteBtn.classList.add('deleteBtn');

   deleteBtn.addEventListener('click',()=>{
     cartItem.parentNode.removeChild(cartItem)
   });
   
   cartItem.appendChild(deleteBtn); //add delete to each cartItem
}


function handleKeyPress(event) { 
  if (event.key === 'Enter') {
    addToCart();
  }
}