//Acceso a las propiedades del objeto


function myFunction(obj, key) {

    return obj[key];
  }

  console.log(myFunction({ name: 'khriztian', 'fav-number': 33, age: 18 }, 'fav-number'))

