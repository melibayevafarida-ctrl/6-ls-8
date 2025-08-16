const products = [
    { name: "Mars rug", price: 100, image: "img.tovar/image 10.png" },
    { name: "Keyboard sticker", price: 40, image: "img.tovar/image 22.png" },
    { name: "Smart watch", price: 899, image: "img.tovar/image 23.png" },
    { name: "Wireless keyboard", price: 399, image: "img.tovar/image 24.png" },
    { name: "Mouse", price: 359, image: "img.tovar/image 25.png" },
    { name: "AirPods", price: 499, image: "img.tovar/image 26.png" },
    { name: "Powerbank", price: 899, image: "img.tovar/image 27.png" },
    { name: "USB flash drive", price: 299, image: "img.tovar/image 28.png" },
    { name: "Smartphone", price: 3999, image: "img.tovar/image 29.png" },
    { name: "Playstation 5", price: 7499, image: "img.tovar/image 30.png" },
    { name: "Yandex Station", price: 3999, image: "img.tovar/image 31.png" },
    { name: "Planshet Samsung", price: 4999, image: "img.tovar/image 32.png" }
];



let mainCard = document.getElementById('mainCard')
let input = document.getElementById('input')
function renderList(items) {
    mainCard.innerHTML = "",
    items.forEach(product => {
        const div = document.createElement("div")
    div.innerHTML = `
<div class="">
    
  <div class"">
    <div class="flex mx-auto rounded-xl border w-50 h-60 flex-col items-center justify-center">
    <figure>
      <img src="${product.image}" alt="Shoes" />
    </figure>
        <div className="card-body" class="flex flex-col justify-center items-center">
          <h2 className="card-title">${product.name}</h2>
          <h2 class="card-title text-center">${product.price}</h2>
        </div>
      </div>
  </div> 
    
</div>
`;
            mainCard.appendChild(div);
        })
}


renderList(products);
input.addEventListener('input', () => {
    const inputValue =  input.value.toLowerCase()
    const filterProducts = products.filter(productFilter =>
        productFilter.name.toLowerCase().includes(inputValue)
    )
    renderList(filterProducts)
})
// students.forEach(oquvchi => {
//     console.log(oquvchi);
    
// })


// students.map(marslik => {
//     console.log(marslik.name);
    
// })

// let studentName = students.map(prosto => {
//     return prosto.name
    
// })



// console.log(studentName); 


// let filter = students.filter(student => student.name.length > 8)

// console.log(filter);


// students.map(student => {
//     let div = document.createElement('div')
//     div.innerHTML = `
    
//     <h2>${student.name}</h2>
//     <h2>${student.surname}</h2>
//     <h2>${student.age}</h2>


//     `
// })


// input.addEventListener