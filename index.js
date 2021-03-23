const fruits = [
  {id: 1, title: 'Яблоки', price: 35, img: 'https://lifeglobe.net/x/entry/6259/1a-0.jpg' },
  {id: 2, title: 'Апельсины', price: 60, img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg' },
  {id: 3, title: 'Манго', price: 110, img: 'https://freshmart.com.ua/storage/web/cache/product/1921/mango-eat-me-1.jpeg?w=700&h=525&fit=resize&q=80&fm=pjpg&t=1582645359&s=7bd3b4ed7ed98c26f61a325b317161a1' },
  
]


const toHTML = fruit => `
        <div class="col">
          <div class="card" >
            <img src="${fruit.img}" alt="${fruit.title}" style="height: 250px; width: 300px;"  class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title">${fruit.title}</h5>
              <a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
              <a href="#" class="btn btn-danger">Удалить</a>
            </div>
          </div>
        </div>
`

function render() {
  const html = fruits.map(toHTML).join('')
  document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
    width: '400px',
    footerButtons: [
      {text:'Close', type:'primary', handler() {
       priceModal.close()
      }},
    ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  if (btnType === 'price') {
    priceModal.open()
  }
}
)