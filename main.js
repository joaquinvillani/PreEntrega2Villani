class corredor {
    constructor(nombre, apellido, edad, sexo, numero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.numero = numero;
        this.averiguaNum = function () {
            console.log("el numero de " + this.nombre + " es " + this.numero);
        };
        this.saluda = function () {
            if (this.sexo == "M") {
                alert("Bienvenido " + this.nombre + " " + this.apellido);
            } else alert("Bienvenida " + this.nombre + " " + this.apellido);
        };
    }
}

//LOTE DE DATOS A FORMA DE PRUEBA. LOS DATOS SERIAN INGRESADOS POR LOS CORREDORES
const vecCorredores = [
    { nombre: "ALEXIS", apellido: "MACALLISTER", edad: 30, sexo: "M", numero: 123 },
    { nombre: "LUCIA", apellido: "FERNANDEZ", edad: 24, sexo: "F", numero: 456 },
    { nombre: "RODRIGO", apellido: "DE PAUL", edad: 27, sexo: "M", numero: 235 },
    { nombre: "LAUTARO", apellido: "MARTINEZ", edad: 31, sexo: "M", numero: 147 },
    { nombre: "MARIA", apellido: "GONZALEZ", edad: 36, sexo: "F", numero: 741 },
    { nombre: "JULIAN", apellido: "ALVAREZ", edad: 24, sexo: "M", numero: 159 },
    { nombre: "JULIETA", apellido: "LOPEZ", edad: 30, sexo: "F", numero: 412 },
    { nombre: "GONZALO", apellido: "MONTIEL", edad: 25, sexo: "M", numero: 789 },
];


    function mostrarLista(arrai) {
    for (const x of arrai) {
        console.log(x.nombre + " " + x.apellido)
    }
}

    function buscarXNumero(vecCorredores, num) {
        const buscado = vecCorredores.find(corredor => corredor.numero === num);
        return buscado
    }

    function generarNum() {
        let num;
        do {
            num = Math.floor(Math.random() * 999) + 1; 
        } while (vecCorredores.some(corredor => corredor.numero === num)); 
        return num;
    } //funcion creada con ayuda de chatGPT ya que no sabia como generar un numero aleatorio entre 1 y 999 que no se encontrara en el vector

    function inscribir(){
        const nombre = prompt("Ingrese su nombre").toUpperCase()
        const apellido = prompt("Ingrese su apellido").toUpperCase()
        const edad = parseInt(prompt("Ingrese su edad"))
        const sexo = prompt("Ingrese su sexo (M/F)").toUpperCase()
        const numero = generarNum()
        const nuevoCorredor = new corredor(nombre, apellido,edad,sexo,numero)
        vecCorredores.push(nuevoCorredor)
        alert("Gracias por inscribirse a la maraton 2024. Su numero de corredor es "+ numero)

    }

    alert("Bienvenido al sistema de inscripciones para la maraton 2024");
    const ingreso = prompt("Ingrese una de las siguientes opciones\n<ACCEDER> (si ya se encuentra inscripto)\n<INSCRIBIRME> (si aun no lo esta)").toUpperCase();
    while (ingreso != "ACCEDER" && ingreso != "INSCRIBIRME") {
        ingreso = prompt("Ingrese una opcion valida\n<ACCEDER> (si ya se encuentra inscripto)\n<INSCRIBIRME> (si aun no lo esta)").toUpperCase();
    }

    if (ingreso == "ACCEDER") {
        let num = parseInt(prompt("Ingrese su numero de corredor"));
        if (num == "000") {
            let salir=true
            console.log("MENU\n0 - MOSTRAR LISTA DE TODOS LOS CORREDORES\n1 - BUSCAR CORREDOR POR NUMERO \n2 - CALCULAR EDAD PROMEDIO DE CORREDORES\n3 - VISUALIZAR SOLO CORREDORAS MUJERES\n4 - VISUALIZAR SOLO CORREDORES HOMBRES\n5 - SALIR DEL MENU")
            do {
                let menu = parseInt(prompt("Ingrese una opcion numerica del menu"))
                while (menu < 0 || menu > 5)
                    menu = parseInt(prompt("Ingrese una opcion numerica valida del menu"))
                switch (menu) {
                    case 0: mostrarLista(vecCorredores)
                    break
                    case 1:{
                        num = parseInt(prompt("Ingrese el numero de corredor que desea buscar"))
                        let encontrado = buscarXNumero(vecCorredores,num)
                        console.log(encontrado.nombre+" "+encontrado.apellido)
                    }break
                    case 2:{
                        let acumulador=0
                        for (let i of vecCorredores)
                        {acumulador=acumulador+i.edad}
                        console.log("Edad promedio de los corredores " + parseFloat(acumulador/vecCorredores.length))
                    }break
                    case 3: {
                        const mujeres = vecCorredores.filter(vecCorredores=>vecCorredores.sexo=="F")
                        mostrarLista(mujeres)
                    }break
                    case 4:{
                        const hombres = vecCorredores.filter(vecCorredores=>vecCorredores.sexo=="M")
                        mostrarLista(hombres)
                    }break
                    case 5: salir=false
                }
                } while (salir)
    } else {
                const encontrado = buscarXNumero(vecCorredores,num)
                if (encontrado) {
                    //alert(encontrado.saluda())
                    //usaria el metodo corredor.saluda() pero no se xq no funciona, asi que construyo la funcion saluda nuevamente a mano
                    if (encontrado.sexo == "M") {
                        alert("Bienvenido " + encontrado.nombre + " " + encontrado.apellido);
                    } else
                        alert("Bienvenida " + encontrado.nombre + " " + encontrado.apellido);
                } else {
                    alert("Numero de corredor inexistente");
                }
            }
        } else if (ingreso == "INSCRIBIRME") {
            inscribir()
            mostrarLista(vecCorredores)
        }


