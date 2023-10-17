/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const API = 'https://platzi-avo.vercel.app/api/avo';
//1-connects with the server
window.fetch(API)
//2-converts into json  
.then(response => response.json())
//3-manipulates the data  
.then(dataJSON => {
  const fetchItems = [];
  
    dataJSON.data.forEach(e => {
      const h2 = document.createElement('h2');

      const img = document.createElement('img');

      const span = document.createElement('span');

      const div = document.createElement('div');


      div.append(h2,img,span);
      fetchItems.push(div);
    });
    console.log(fetchItems);
    document.body.append(...fetchItems);
  })
