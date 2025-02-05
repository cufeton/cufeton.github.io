 // Información encontrada en (https://www.w3schools.com/HOWTO/howto_js_search_menu.asp)
function funcionBuscador() { 
let input, filter, ul, li, a, i; // Declaramos todas las variables necesarias dependiendo de que hemos utilizado en nuestra página web.
  input = document.getElementById("Buscador");
  filter = input.value.toUpperCase();
  ul = document.getElementById("navMenu");
  li = ul.getElementsByTagName("li");


// Recorre todos los elementos de la lista y oculta aquellos que no coinciden con la consulta de búsqueda.
//Ctrl+C, Ctrl+V. 
//Vamos a intentar explicar de que se trata junto con la ayuda de Sergi.
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}