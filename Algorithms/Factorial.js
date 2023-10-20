function factorial(n) {
  //* Se declara la variable con  valor 1 para que no interrumpa el proceso en el bucle
  let result = 1;

  //*Cuando el parametro es cero su factorial siempre sera 1
  if (n == 0) {
    return 1;
  }

  /*
   *En el bucle se inicializa el indice con el valor del parametro, esto para que comience la cuenta regresiva desde ese valor.
   *Se pone la regla de que sea mayor a 0 esto para evitar ese numero, ya que no lo necesitamos
   *ponermos la accion de resta para descontar los numeros hasta llegar al 1
   */
  for (let index = n; index > 0; index--) {
    //*Aqui le asignamos la multiplicacion al resultado, que al principio se multiplicara por uno.
    result *= index;
  }

  //*Retornamos el resultado
  return result;
}

