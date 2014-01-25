//si queremos seleccionar la ventana del navegador
window.addEventListener('load', function()
{	
	/*Si queremos seleccionar un elemento de la página
	lo haremos con document*/
	var resultados = document.getElementById('resultados');	
	var btn_buscar = document.getElementById('btn_buscar');
	btn_buscar.addEventListener('click', function()
	{
		resultados.innerHTML = 'Hola, que tal<br/>¿Todo bien? <div style="background-color:#f16f51;">Espero que todo bien</div>';
	});
});
