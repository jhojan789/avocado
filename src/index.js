/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const app = document.getElementById('app');

const baseURL = 'https://platzi-avo.vercel.app';
//1-connects with the server
window.fetch(`${baseURL}/api/avo`)
//2-converts into json  
.then(response => response.json())
//3-manipulates the data  
.then(dataJSON => {
  const fetchItems = [];
  
    dataJSON.data.forEach(e => {
      const h2 = document.createElement('h2');
      h2.textContent = e.name;

      const img = document.createElement('img');
      img.src = `${baseURL}${e.image}`;
      img.alt = e.name;
      
      const span = document.createElement('span');
      span.textContent = formatPrice(e.price);
      

      const div = document.createElement('div');


      div.append(h2,img,span);
      fetchItems.push(div);
    });
    console.log(fetchItems);
    app.append(...fetchItems);
  })

function formatPrice(price){
  const formattedPrice = new Intl.NumberFormat('en-EN',{
    style: 'currency',
    currency: 'USD'
  }).format(price);
  return formattedPrice;
}