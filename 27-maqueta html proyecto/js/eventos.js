//si queremos seleccionar la ventana del navegador
window.addEventListener('load', function()
{	
	console.log('Se ha cargado la página');
	/*Si queremos seleccionar un elemento de la página
	lo haremos con document*/
	var btn_buscar = document.getElementById('btn_buscar');
	btn_buscar.addEventListener('click', function()
	{
		console.log('click');
	});
});
