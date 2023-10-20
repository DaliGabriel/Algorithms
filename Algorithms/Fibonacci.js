function fibonacci(n) {
  //*Declaramos el array
  let array = [];
  //* Si n es mayor o igual a 0 se le agrega 0 al array, pasa lo mismo si es un numero negativo
  if (n >= 0 || n < 0) {
    array.push(0);
  }
  //* Si n es mayor a 1 se  agrega 1
  if (n > 1) {
    array.push(1);
  }

  /*
   *Comenzamos el bucle en el indice 2, gracias a las validaciones anteriores.
   *aqui nuestro array deberia ser asi:
   *[0,1]
   */
  for (let index = 2; index < n; index++) {
    //*Nos movemos dos elementos hacia la izquierda para obtener el primer elemento de la suma
    const elementA = array[index - 2];
    //*Aqui solo nos movemos una vez hacia la izquierda
    const elementB = array[index - 1];
    //*Insertamos en el array la suma de ambos elementos
    array.push(elementA + elementB);
  }
  //*Mostramos el resultado
  return array;
}

