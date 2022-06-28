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

let gastoTotal = 0;
const sumarProducto = (gen,vi) => {
    let cual = prompt (`Elija el tipo de Ticket:
                1.Campo General - $${gen}
                2.VIP Standing - $${vi}
                3.Salir
                Ingrese el numero de la izquierda para comprar`)
                if (cual==1) {
                    gastoTotal += gen
                } else if(cual==2) {
                    gastoTotal += vi
                } else if(cual==3) {
                    continuar = false;
                }else {
                    alert("El valor ingresado no es valido");
                }
};

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
