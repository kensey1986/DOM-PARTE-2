//   let nuevoNodo = document.createElement("div");

//   nuevoNodo.textContent= ' <p> mi nodo creado con <strong>etiquetas</strong></p>';

//   document.body.appendChild(nuevoNodo);

//   // nuevoNodo.innerHTML= ' mi nodo creado solo con texto como contenido';

//  document.getElementById('parrafo1').appendChild(nuevoNodo);




//  let nodoImagen = document.createElement("img");
//  nodoImagen.setAttribute("src", "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png");
//  //document.getElementById("miSection").appendChild(nodoImagen);
//  document.body.appendChild(nodoImagen)



/** 
 * controlando la insercion del nodo
 */

  let nuevoNodo = document.createElement("div");

  nuevoNodo.innerHTML= ' <p> mi nodo creado con <strong>etiquetas</strong> con control</p>';

  const nodoPadre = document.getElementById("nodoHijo").parentNode;

  console.log('====================================');
  console.log(nodoPadre);
  console.log('====================================');
  const nodoHijo = document.getElementById("nodoHijo"); 

  console.log('====================================');
  console.log(nodoHijo);
  console.log('====================================');


  nodoPadre.insertBefore(nuevoNodo, nodoHijo);



