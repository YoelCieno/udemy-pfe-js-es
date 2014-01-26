var usuarios = 
[
	{
		nombre: 'Lucy',
		genero: 'F',
		aficion: 'pets',
		avatar: 'avatar1.png'
	},
	{
		nombre: 'Betty',
		genero: 'F',
		aficion: 'pets',
		avatar: 'avatar2.png'
	},
	{
		nombre: 'Ronald',
		genero: 'M',
		aficion: 'music',
		avatar: 'avatar3.png'
	},
	{
		nombre: 'Christopher',
		genero: 'M',
		aficion: 'sports',
		avatar: 'avatar4.png'
	},
	{
		nombre: 'Ximena',
		genero: 'F',
		aficion: 'reading',
		avatar: 'avatar5.png'
	},
	{
		nombre: 'Paul',
		genero: 'M',
		aficion: 'shopping',
		avatar: 'avatar6.png'
	},
	{
		nombre: 'Charlie',
		genero: 'M',
		aficion: 'pets',
		avatar: 'avatar7.png'
	},					
];

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
		
		//conseguir hobby o afición	
		var aficionCampo = document.getElementById('aficion');
		var aficion = aficionCampo.value;
		console.log(aficion);

		//conseguir género
		var generoCampo = document.getElementById('genero');
		var selected = generoCampo.selectedIndex;
		var genero = generoCampo.options[selected].value;
		/*(Otra opción igual)
		var genero = generoCampo.options[generoCampo.selectedIndex].value;
		*/
		console.log(genero);


		var resultadosHTML = '';
		var numUsuarios = usuarios.length;

		for(var i = 0; i < numUsuarios; i++)
		{
			resultadosHTML = resultadosHTML + ' ' + usuarios[i].nombre;
		}

		resultados.innerHTML = resultadosHTML;
	});
});
