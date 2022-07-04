// DESAFIO COMPLEMENTARIO ARRAYS

class Preventa {
    constructor(nombre, fecha, ciudad) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.ciudad = ciudad;
    }
}
const preventas = [];
preventas.push(new Preventa("FATBOY", "4/11/22" , "CORDOBA"));
preventas.push(new Preventa("MISSMONIQUE", "15/7/22" , "CARLOS PAZ"));
preventas.push(new Preventa("SASHA", "5/8/22" , "CORDOBA"));
console.log(preventas);

function buscarPrev(info, dj){
    return info.find(objeto => objeto.nombre === dj.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarPrev(preventas, prompt(`Bienvenido! Ingrese la preventa para mas info:
    -FATBOY
    -MISSMONIQUE
    -SASHA
    Por favor ingrese el nombre como figura en las opciones anteriores`));
    if(busqueda != undefined){
        alert('PREVENTA '+ busqueda.nombre+' FECHA '+busqueda.fecha+' CIUDAD DE '+busqueda.ciudad);
    }else{
        alert('NO EXISTE ESTA PREVENTA, VUELVA A INTENTARLO');
    }
}

// DESAFIO ENTREGRABLE 1 CORREGIDO
class Ticket {
    constructor (nombre,fecha,lugar,general,vip, id){
        this.nombre = nombre;
        this.fecha = fecha;
        this.lugar = lugar;
        this.general = general;
        this.vip = vip;
        this.id = id;
    }
}
const claptoneTicket = new Ticket ("Claptone", "5/11/22","GEBA",7000,15000,"1");
const cattaneoTicket = new Ticket ("Cattaneo", "6/12/22","FORJA",8000,16000,"2");
const solomunTicket = new Ticket ("Solomun", "8/12/22","LAESTACION",6000,12000,"3");
const taleofusTicket = new Ticket ("Tale Of Us", "29/12/22","LAFABRICA",5000,10000,"4");

const entradas = [{nombre:"Claptone",fecha:"5/11/22",lugar:"GEBA",general:7000,vip:15000, id:"1"},
{nombre:"Cattaneo",fecha:"6/12/22",lugar:"FORJA",general:8000,vip:16000, id:"2"},
{nombre:"Solomun",fecha:"8/12/22",lugar:"LAESTACION",general:6000,vip:12000, id:"3"},
{nombre:"Tale Of Us",fecha:"29/12/22",lugar:"LAFABRICA",general:5000,vip:10000, id:"4"}]

let gastoTotal = 0;
const sumarProducto = (gen,vi) => {
    let cual = prompt (`Elija el tipo de Ticket:
                1.Campo General - $${gen}
                2.VIP Standing - $${vi}
                3.Salir
                Ingrese el numero de la izquierda para comprar`);
    let datoE = true;
    while (datoE){
        switch (cual) {
            case '1':
                gastoTotal += gen;
                datoE = false;
                break;
            case '2':
                gastoTotal += vi;
                datoE = false;
                break;
            case '3':
                continuar = false;
                datoE = false;
                break;
            default:
                alert("El valor ingresado no es valido");
                cual = prompt (`Elija el tipo de Ticket:
                1.Campo General - $${gen}
                2.VIP Standing - $${vi}
                3.Salir
                Ingrese el numero de la izquierda para comprar`);
                break;
        }
    };
}

function comprar() {
    let continuar = true;
    alert("Bienvenido a E-Ticket, ¿Cuál va a ser tu proxima fiesta?");

    while (continuar) {
        let producto = prompt(`Tickets a la venta:
        ${claptoneTicket.id}- ${claptoneTicket.nombre} ${claptoneTicket.lugar} ${claptoneTicket.fecha}
        ${cattaneoTicket.id}- ${cattaneoTicket.nombre} ${cattaneoTicket.lugar} ${cattaneoTicket.fecha}
        ${solomunTicket.id}- ${solomunTicket.nombre} ${solomunTicket.lugar} ${solomunTicket.fecha}
        ${taleofusTicket.id}- ${taleofusTicket.nombre} ${taleofusTicket.lugar} ${taleofusTicket.fecha}
        5- Finalizar compra
        Ingrese el numero de la izquierda para comprar
        Vas sumando: $${gastoTotal}
        `);

        switch (producto) {
            case "1":
                sumarProducto(claptoneTicket.general,claptoneTicket.vip);
                break;

            case "2":
                sumarProducto(cattaneoTicket.general,cattaneoTicket.vip);
                break;

            case "3":
                sumarProducto(solomunTicket.general,solomunTicket.vip);
                break;

            case "4":
                sumarProducto(taleofusTicket.general,taleofusTicket.vip);
                break;

            case "5":
                continuar = false;
                break;
            default:
                alert("El valor ingresado no es valido");
                break;
        }

        if (producto != "5") continuar = confirm("¿Desea continuar con la compra?");
    }

    alert(`El monto de su compra es de $${gastoTotal}`);
}

comprar();
