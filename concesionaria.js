let autos = require("./autos"); 

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patentes){
      for(let i = 0 ; i <autos.length; i++){
      if(patentes === autos[i].patente){
         return autos[i];
      }
   }return null;
   },
   venderAuto: function(patente){
      let auto = this.buscarAuto(patente);
      auto.vendido = true;
   },
   autosParaLaVenta:function(){
      let autosParaVender = this.autos.filter(function (auto) {
         return auto.vendido == false;
      }
      )
      return autosParaVender;
   },
   autosNuevos: function(){
      let autoNuevo = this.autosParaLaVenta().filter(function(auto){
         return auto.km <= 100
      }
      )
      return autoNuevo
   },

   listaDeVentas: function(){
      let acumulador = [] 
      this.autos.filter(function(auto){
         if(auto.vendido == true){
         acumulador.push(auto.precio)}
      }
      )
      return acumulador
   },
   totalDeVentas: function(){
      montoTotal = this.listaDeVentas().reduce(function(acumulador, preciosDeLaLista){
         return acumulador + preciosDeLaLista
      },0
      )
      return montoTotal
   },
   puedeComprar: function(auto, persona){
      let condicion = (persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas * auto.cuotas >= auto.precio )
      let resultado = condicion == true ? true : false;
      return resultado
   },
   autosQuePuedeComprar: function(persona){
      let autosParaVender = this.autosParaLaVenta()
      let puedeComprar = this.puedeComprar
      let autosParaComprar =[]
      autosParaVender.filter(function(auto){
         if(puedeComprar(auto,persona)==true){
         autosParaComprar.push(auto)}
      }
      )
      return autosParaComprar
      }
   }

// console.log(concesionaria.venderAuto("JJK116"));
// console.log(concesionaria.autos);
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.autosNuevos());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());
// console.log(concesionaria.puedeComprar({
//    marca : "Ford",
//    modelo : "Fiesta ",
//    precio : 150000,
//    km: 200,
//    color : "Azul",
//    cuotas : 12,
//    anio : 2019,
//    patente : "APL123",
//    vendido : false
// },{
//    nombre: "Juan",
//    capacidadDePagoEnCuotas: 100,
//    capacidadDePagoTotal: 100000000
//    }));
console.log(concesionaria.autosQuePuedeComprar({
      nombre: "Juan",
      capacidadDePagoEnCuotas: 10011,
      capacidadDePagoTotal: 100000000
      }));
