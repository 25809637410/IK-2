import shoppingList from "./data.js"; //shoppinglist로 변수 받기


const bestSection = document.querySelector('.best_product')


for (let i = 1; i <= 20; i++) {
    //for (let i = 0; i < shoppingList.length; i++) {
    const bestDiv = document.createElement('div')
    bestDiv.setAttribute('class', 'best_box')

    const imgDiv = document.createElement('div')
    imgDiv.setAttribute('class', 'img_box')
    const bestImg = document.createElement('img')
    bestImg.setAttribute('src', shoppingList[i].src)
    bestDiv.appendChild(bestImg)

    const textDiv = document.createElement('div')
    textDiv.setAttribute('class', 'txt_box')
    const bestName = document.createElement('p')
    const bestNameText = document.createTextNode(shoppingList[i].name)
    bestName.appendChild(bestNameText)
    textDiv.appendChild(bestName)

    const bestPrice = document.createElement('span')
    const bestPriceText = document.createTextNode(shoppingList[i].price)
    bestPrice.appendChild(bestPriceText)
    textDiv.appendChild(bestPrice)

    bestSection.appendChild(bestDiv)
    bestDiv.appendChild(imgDiv)
    imgDiv.appendChild(bestImg)
    //bestSection.appendChild(textDiv)
    bestDiv.appendChild(textDiv)

} //shoppingList_for


function filterAlign() {
    //정렬 함수
    
    function filterNew() {
        //새 상품 순으로 재배열
        let thisInput = document.querySelector("#line04")
        thisInput.addEventListener("change", filterTry)
        function filterTry() {
          items.map((item) => {
            return (item.style.order = item.dataset.release)
          })
        }
      }
      filterNew()

    function filterBest() {
      //초기값 배열
      let thisInput = document.querySelector("#line01")
      thisInput.addEventListener("change", filterTry)
      function filterTry() {
        items.map((item) => {
          return (item.style.order = item.dataset.num)
        })
      }
    }
    filterBest()
  
    function filterRowPrice() {
      //낮은 가격 순으로 재배열
      let thisInput = document.querySelector("#line02")
      thisInput.addEventListener("change", filterTry)
      function filterTry() {
        items.sort((a, b) => {
          return a.dataset.price - b.dataset.price
        })
        items.map((item, i) => {
          return (item.style.order = `${i}`)
        })
      }
    }
    filterRowPrice()
  
    function filterHighPrice() {
      //높은 가격 순으로 재배열
      let thisInput = document.querySelector("#line03")
      thisInput.addEventListener("change", filterTry)
      function filterTry() {
        items.sort((a, b) => {
          return b.dataset.price - a.dataset.price
        })
        items.map((item, i) => {
          return (item.style.order = `${i}`)
        })
      }
    }
    filterHighPrice()
  
   
  }
  filterAlign()