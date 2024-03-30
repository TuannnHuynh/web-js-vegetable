const products = [
    {
      "id": 1,
      "name": "Brocolli - 1 Kg",
      "price": 120,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      "category": "vegetables"
    },
    {
      "id": 2,
      "name": "Cauliflower - 1 Kg",
      "price": 60,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
      "category": "vegetables"
    },
    {
      "id": 3,
      "name": "Cucumber - 1 Kg",
      "price": 48,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
      "category": "vegetables"
    },
    {
      "id": 4,
      "name": "Beetroot - 1 Kg",
      "price": 32,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
      "category": "vegetables"
    },
    {
      "id": 5,
      "name": "Carrot - 1 Kg",
      "price": 56,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
      "category": "vegetables"
    },
    {
      "id": 6,
      "name": "Tomato - 1 Kg",
      "price": 16,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
      "category": "vegetables"
    },
    {
      "id": 7,
      "name": "Beans - 1 Kg",
      "price": 82,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
      "category": "vegetables"
    },
    {
      "id": 8,
      "name": "Brinjal - 1 Kg",
      "price": 35,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
      "category": "vegetables"
    },
    {
      "id": 9,
      "name": "Capsicum",
      "price": 60,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
      "category": "vegetables"
    },
    {
      "id": 10,
      "name": "Mushroom - 1 Kg",
      "price": 75,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
      "category": "vegetables"
    },
    {
      "id": 11,
      "name": "Potato - 1 Kg",
      "price": 22,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
      "category": "vegetables"
    },
    {
      "id": 12,
      "name": "Pumpkin - 1 Kg",
      "price": 48,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
      "category": "vegetables"
    },
    {
      "id": 13,
      "name": "Corn - 1 Kg",
      "price": 75,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
      "category": "vegetables"
    },
    {
      "id": 14,
      "name": "Onion - 1 Kg",
      "price": 16,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
      "category": "vegetables"
    },
    {
      "id": 15,
      "name": "Apple - 1 Kg",
      "price": 72,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
      "category": "fruits"
    },
    {
      "id": 16,
      "name": "Banana - 1 Kg",
      "price": 45,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
      "category": "fruits"
    },
    {
      "id": 17,
      "name": "Grapes - 1 Kg",
      "price": 60,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
      "category": "fruits"
    },
    {
      "id": 18,
      "name": "Mango - 1 Kg",
      "price": 75,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
      "category": "fruits"
    },
    {
      "id": 19,
      "name": "Musk Melon - 1 Kg",
      "price": 36,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
      "category": "fruits"
    },
    {
      "id": 20,
      "name": "Orange - 1 Kg",
      "price": 75,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
      "category": "fruits"
    },
    {
      "id": 21,
      "name": "Pears - 1 Kg",
      "price": 69,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
      "category": "fruits"
    },
    {
      "id": 22,
      "name": "Pomegranate - 1 Kg",
      "price": 95,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
      "category": "fruits"
    },
    {
      "id": 23,
      "name": "Raspberry - 1/4 Kg",
      "price": 160,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
      "category": "fruits"
    },
    {
      "id": 24,
      "name": "Strawberry - 1/4 Kg",
      "price": 180,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
      "category": "fruits"
    },
    {
      "id": 25,
      "name": "Water Melon - 1 Kg",
      "price": 28,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
      "category": "fruits"
    },
    {
      "id": 26,
      "name": "Almonds - 1/4 Kg",
      "price": 200,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
      "category": "nuts"
    },
    {
      "id": 27,
      "name": "Pista - 1/4 Kg",
      "price": 190,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg",
      "category": "nuts"
    },
    {
      "id": 28,
      "name": "Nuts Mixture - 1 Kg",
      "price": 950,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/nuts-mixture.jpg",
      "category": "nuts"
    },
    {
      "id": 29,
      "name": "Cashews - 1 Kg",
      "price": 650,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg",
      "category": "nuts"
    },
    {
      "id": 30,
      "name": "Walnuts - 1/4 Kg",
      "price": 170,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/walnuts.jpg",
      "category": "nuts"
    }
]

const carts = []

const product = document.querySelector(".products .container")
const cart = document.querySelector(".cart-product")
const cartImg = document.querySelector(".cart-icon img")
const listCart = document.querySelector(".cart-product ul")
const header = document.querySelector("header")
const session = document.querySelector(".products")
const footer = document.querySelector("footer")
const items = document.querySelector("#items")
const total = document.querySelector("#total")
const search = document.querySelector("#value-search")
let checkCart = false
let temp = []

header.addEventListener("click",function(e){
  const cartIcon = e.target.closest(".cart-icon img")
  if(cartIcon){
    if(!checkCart){
      checkCart = true
      cart.classList.remove("none")
      cart.classList.add("block")
      if(carts.length === 0){
        renderCartEmpty()
        return
      }
      document.querySelector(".btn-checkout").classList.remove("empty")
      renderCarts(carts)
      return
    }
    checkCart = false
    cart.classList.remove("block")
    cart.classList.add("none")
    return
  }
})

listCart.addEventListener("click",function(e){
    const btnDelete = e.target.closest(".btn-delete")
    if(btnDelete){
      const id = btnDelete.dataset.id
      const idx = carts.findIndex((val) => val.id === +id)
      let temp = carts[idx].sub
      carts.splice(idx,1)
      items.textContent = carts.length
      total.textContent -= temp
      if(carts.length === 5){
        listCart.removeAttribute("style")
      }
      if(carts.length === 0){
        renderCartEmpty()
        return
      }
      renderCarts(carts)
      return
    }
})

renderProduct(products)

search.addEventListener("keyup",function(e){
  const keyWord = search.value
  const result = products.filter((val)=> val.name.toLowerCase().includes(keyWord.toLowerCase()))
  if(result.length > 0){
    temp = result
    renderProduct(result)
    return
  }
  renderEmptyProduct()
  return
})


session.addEventListener("click",function(e){
  if(checkCart){
    checkCart = false
    cart.classList.remove("block")
    cart.classList.add("none")
    return
  }
})

footer.addEventListener("click",function(e){
  if(checkCart){
    checkCart = false
    cart.classList.remove("block")
    cart.classList.add("none")
    return
  }
})

const input = document.getElementsByClassName("number-value")
const modelView = document.querySelector(".model")
let model = false

product.addEventListener("click", function(e){
    e.preventDefault()
    if(checkCart){
      checkCart = false
      cart.classList.remove("block")
      cart.classList.add("none")
      return
    }
    const btnPlus = e.target.closest(".btn-plus")
    const btnMinus = e.target.closest(".btn-minus")
    const modelImg = e.target.closest(".product-img img")
    const btnAdd = e.target.closest(".btn-add")
    
    if(btnPlus){
        const id = btnPlus.dataset.id
        const idx = temp.findIndex((val) => val.id === +id)
        input[idx].value = Number(input[idx].value) + 1
        return
    }
    if(btnMinus){
        const id = btnMinus.dataset.id
        const idx = temp.findIndex((val) => val.id === +id)
        let val = Number(input[idx].value)
        if(val !== 1){
            input[idx].value = val - 1
        }
        return
    }
    if(btnAdd){
      const id = btnAdd.dataset.id
      const item = temp.find((val) => val.id === +id)
      const idxCart = carts.findIndex((val)=> val.id === item.id)
      const idxFilter = temp.findIndex((val) => val.id === item.id)
      if(idxCart === -1){
        carts.push({...item,quantity: Number(input[idxFilter].value),sub: Number(input[idxFilter].value) * item.price})
        input[idxFilter].value = 1 //rest
      }else{
        carts[idxCart].quantity += Number(input[idxFilter].value)
        carts[idxCart].sub = carts[idxCart].quantity * carts[idxCart].price
      }
      if(carts.length === 6){
        listCart.style.overflowY= "scroll";
      }
      cartImg.classList.add("scale-cart")
      setTimeout(()=>{
        cartImg.classList.remove("scale-cart")
      },500)
      items.textContent = carts.length
      total.textContent = carts.reduce((acc,val) =>{
        return acc + val.sub
      },0)
      btnAdd.classList.add("btn-added")
      btnAdd.classList.remove("btn-add")
      btnAdd.textContent = "ADDED"
      setTimeout(() =>{
        btnAdd.classList.remove("btn-added")
        btnAdd.classList.add("btn-add")
        btnAdd.textContent = "ADD TO CART"
      },2000)
    }
    if(modelImg){
      const id = modelImg.dataset.id
      const item = products.find((val) => val.id === +id)
      renderModel(item)
      modelView.classList.remove("none")
      modelView.classList.add("block")
      return
    }
})


modelView.addEventListener("click",function(e){
  const btnClose = e.target.closest(".close")
  if(e.target == e.currentTarget){
    modelView.classList.remove("block")
    modelView.classList.add("none")
    return
  }
  if(btnClose){
    modelView.classList.remove("block")
    modelView.classList.add("none")
    return
  }
})

function renderCarts(carts){
  let str = ''
  for(item of carts){
    str += `
    <li class="cart-item">
      <div class="product-img">
          <img src="${item.image}"
              alt="">
      </div>
      <div class="product-inf">
          <div class="name-price">
              <p class="name">${item.name}</p>
              <span class="price currency">${item.price}</span>
          </div>
          <div class="quanlity-total">
              <p class="quanlity">${item.quantity} Nos.</p>
              <span class="total currency">${item.sub}</span>
          </div>
      </div>
      <button data-id=${item.id} class="btn-delete"><i class="fa-solid fa-xmark"></i></button>
    </li>
    
    `
  }
  listCart.innerHTML = str
}

function renderCartEmpty(){
  let str = ''
  str += `
    <li class="cart-empty">
      <img class="img-empty" src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="">
      <h2>Your cart is empty!</h2>
    </li>
  
  `
  document.querySelector(".btn-checkout").classList.add("empty")
  listCart.innerHTML = str
}

function renderModel(item){
  let str = `
      <div class="model-inner">
          <button class="close"><i class="fa-solid fa-xmark"></i></button>
          <div class="model-header">
              <img src="${item.image}"
                  alt="">
          </div>
          <div class="model-footer">
              <p class="product-name">${item.name}</p>
              <span class="product-price currency">${item.price}</span>
          </div>
      </div>
  `
  modelView.innerHTML = str
}

function renderProduct(products){
    let str = ""
    for(item of products){
        str += `
            <div class="col">
                <div class="product">
                    <div class="product-img">
                        <img data-id=${item.id} src="${item.image}"
                            alt="">
                    </div>
                    <h4 class="product-name">${item.name}</h4>
                    <span class="product-price currency">${item.price}</span>
                    <div class="step-input">
                        <button data-id=${item.id} class="btn-minus"><i class="fa-solid fa-minus"></i></button>
                        <input class="number-value" type="number" min="1" value="1">
                        <button data-id=${item.id} class="btn-plus"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button data-id=${item.id} class="btn-add">ADD TO CART</button>
                </div>
            </div>
        `
    }
    return product.innerHTML = str
}

function renderEmptyProduct(){
  let str = ''
  str += `
    <div class="no-result">
      <img src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png" alt="">
      <h2>Sorry, no products matched your search!</h2>
      <p>Enter a different keyword and try.</p>
    </div>
  
  `
  return product.innerHTML = str
}
