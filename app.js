const objetivoDeMinutosDiarios = 360
class MesTrabajado{
    constructor (mes, diasLaborales, totalMinutos, promedio){
        this.mes = mes;
        this.diasLaborales = +(diasLaborales);
        this.totalMinutos = +(totalMinutos);
        this.mesValido = false;
        this.promedio = promedio
    }
    mesCompletado(){
        if (this.diasLaborales < 20){
            this.mesValido = false;
        }else this.mesValido = true;
    }
    calculoDinero(){
        if (this.mesValido == true){
            console.log("Promedio de " + this.mes + " = " + this.promedio +" minutos");
        }else console.log("Faltan completar dias en " + this.mes);
    }
    objetivo(){
        if (this.promedio < objetivoDeMinutosDiarios){
            console.log("Promedio debajo de objetivo")
        }else if (this.promedio == objetivoDeMinutosDiarios){
            console.log("Promedio dentro de objetivo")
        }else if (this.promedio > objetivoDeMinutosDiarios){
            console.log("Promedio por encima del objetivo");
        }else console.log("Error");

    }
}

const meses = []

for (i = 0; i < 3; i++){
    let mes = prompt ("Ingrese el mes trabajado");
    let diasLaborales = +prompt("Ingrese la cantidad de dias trabajados");
    let totalMinutos = +prompt("Ingrese el total de minutos trabajados en " + mes);
    let promedio = +(totalMinutos / diasLaborales);
    meses.push(new MesTrabajado(mes, diasLaborales, totalMinutos, promedio));
    meses [i] .mesCompletado();
    
    meses [i] .calculoDinero();
    meses [i] .objetivo();
    console.log(meses[i]);
}