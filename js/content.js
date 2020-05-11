(function () {

    listEntradas = [{
        nombre: 'PATATAS BRAVAS CASERAS.',
        precio: '4,5 €'
    },{
        nombre: 'ENSALADILLA RUSA DE LA CASA.',
        precio: '4,5 €'
    },
    {
        nombre: 'CROQUETA DE LA ABUELA.',
        precio: '4,5€'
    },
    {
        nombre: 'TEQUEÑOS.',
        precio: '5,2€'
    },
    {
        nombre: 'ALITAS DE POLLO AMERICANAS CON PATATAS FRITAS.',
        precio: '5,1€'
    },
    {
        nombre: 'NACHOS MEXICANOS CON GUACAMOLE Y CHEDDAR.',
        precio: '4,5€'
    },
    {
        nombre: 'HABAS CON JAMON SERRANO RESERVA',
        precio: '4,8€'
    },
    {
        nombre: 'QUESO FRITO CON DOS MERMELADAS.',
        precio: '7,0€'
    },
    {
        nombre: 'CHIPIRONES A LA PLANCHA CON AJOS TIERNOS.',
        precio: '6,9€'
    },
    {
        nombre: 'CHORICITOS DEL INFIERNO (PICANTES).',
        precio: '4,8€'
    },
    {
        nombre: 'PUNTILLAS.',
        precio: '6,7€'
    },
    {
        nombre: 'CHAMPIÑONES DE LA CASA CON SALSA VERDE.',
        precio: '4,8€'
    },
    {
        nombre: 'CALAMARES A LA ROMANA.',
        precio: '7,5€'
    },
    {
        nombre: 'ESGARRAET CON MOJAMA Y HUEVO DURO.',
        precio: '7,3€'
    },
    {
        nombre: 'CHICKEN FINGERS (7 uds).',
        precio: '4,5€'
    },
    {
        nombre: 'NUGGETS (8uds).',
        precio: '6,9€'
    },
    {
        nombre: '3 MINI HAMBURGUESAS.',
        precio: '6,9€'
    },
    {
        nombre: 'PATATAS FRITAS.',
        precio: '4,0 €'
    }];

    listBocadillos=[
        'Atun, olivas, tomates y huevo duro.',
        'Queso manchego, tomate,anchoas o mojama.',
        'Atún, huevo duro, lechuga y mahonesa.',
        'Mojama y tomate.',
        'Atún, tomate y anchoas.',
        'Atún, tomate y mahonesa.',
        'Atún, huevo duro, mojama,lechuga y mahonesa.',
        'Tortilla de papata casera.'
    ]

    $(document).ready(function(){
        var entradas = $('#entradas');

        listEntradas.forEach(c=>{
            entradas.append(`<div class="item"><div class="nombre-item">${c.nombre}</div><div class="precio-item">${c.precio}</div></div>`);
        });

        var entradas = $('#bocadillos');

        listBocadillos.forEach(c=>{
            entradas.append(`<div class="item-bocadillos"><div class="nombre-bocadillo">${c}</div></div>`);
        });



    });

}());