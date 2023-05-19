// Recupera el valor actual del contador de localStorage o establece el contador en cero
// var count = parseInt(localStorage.getItem('countdown')) || 0;

// // Incrementa el contador en uno cada vez que la página se recarga manualmente
// if(performance.navigation.type === 1){
//   count++;
//   localStorage.setItem('countdown', count);
// }

// // Actualiza el contenido del elemento HTML con el valor del contador de recargas manuales
// document.getElementById('countdown').textContent = count;

// Recupera el valor actual del contador de localStorage o establece el contador en cero
var count = parseInt(localStorage.getItem('reloadCount')) || 0;

// Incrementa el contador en uno cada vez que la página se recarga manualmente
if(performance.navigation.type === 1){
  count++;
  localStorage.setItem('reloadCount', count);
}

// Actualiza el contenido del elemento HTML con el valor del contador de recargas manuales
document.getElementById('reload-count').textContent = count;
