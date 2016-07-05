function persona(_nombre,_apellido){
	this.nombre=_nombre;
	this.apellido=_apellido;
}

persona.prototype.saludar = function() {
	alert('Hola, soy ' + this.nombre);
};

// var nombre = document.getElementById('nombre').value;
// nombre = new persona('Rosario','Rosales')
var rosario = new persona('mati','Rosales');
rosario.saludar();
// nombre.saludar();