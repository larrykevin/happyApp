let userValue =  document.getElementById('user');
let button =  document.getElementById('buttonSubmit');

function saludar() {
   let nombreUsuario =  userValue.value;
   let malAugurio = 'Ingresa tu nombre bien no mames ya te levantas y la estas cagando :V';
   let imprimirSuerte = document.getElementById('imprimirSuerte');

   if(nombreUsuario.length > 1 && nombreUsuario.length < 4 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario} ${this.frase1}`;
   } 
   else if (nombreUsuario.length >= 4 && nombreUsuario.length < 7 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario} ${this.frase2}`;
   } 
   else if (nombreUsuario.length >= 7 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario} ${this.frase3}`;
   } 
   else {
      imprimirSuerte.innerHTML = `${malAugurio}`;
   }
}

const frases = {
   frase1: `te va a ir muy cabron eso no lo dudes`,
   frase2: `así se te cruce un gato negro nadie te detiene`,
   frase3: `, casi casi te ponen de nombre esternocleidomastoideo xD. Pero igual eres el mejor!!`
}

button.addEventListener('click', function() {
   saludar.call(frases)
});
