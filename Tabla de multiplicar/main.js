//Escribe aquí tu código

function multiplicar(){
	var tabla=document.getElementById('operador').value;
	tabla=parseInt(tabla);

	for( var i=0; i<=12; i++){
		var resultado= tabla*i;

		var lista=document.createElement('li');
		var contenidoLista=document.createTextNode(tabla+ ' ' + 'x' + ' ' + i + ' '+ '=' + resultado);
		lista.appendChild(contenidoLista);
		document.body.appendChild(lista);
	}
}

function borrar() {

 //    var el = document.getElementById('myList');
	// el.nextElementSibling.remove();

	var a= document.getElementById("myList");
	var b=document.getElementsByTagName(li);
    var borrador = a.removeChild(b);
}

      // var top = document.getElementById("top");
      // var nested = document.getElementById("nested");

      // var garbage = top.removeChild(nested); // This first call remove correctly the node

      // // ......
      // garbage = top.removeChild(nested);   // Test Case 1: the method in the second call here, throws the exception (1)
