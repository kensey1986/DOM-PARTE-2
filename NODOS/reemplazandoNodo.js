
let nuevoNodo = document.createElement("span");

nuevoNodo.setAttribute("id", "nuevoNodo");

let contenidoNodo = document.createTextNode("Nuevo nodo Creado para reemplazo");

nuevoNodo.appendChild(contenidoNodo);


let nodoViejo = document.getElementById("nodoHijo");

let nodoPadre = nodoViejo.parentNode;

nodoPadre.replaceChild(nuevoNodo, nodoViejo);

