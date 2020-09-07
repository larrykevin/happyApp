let userValue =  document.getElementById('user');
let button =  document.getElementById('buttonSubmit');

function saludar() {
   let nombreUsuario =  userValue.value;
   let malAugurio = 'Ingresa bien tu nombre! no mames ya te levantas y la estas regando :V';
   let imprimirSuerte = document.getElementById('imprimirSuerte');

   if(nombreUsuario.length >= 1 && nombreUsuario.length < 3 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase1}`;
   } 
   else if (nombreUsuario.length === 3 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase2}`;
   } 
   else if (nombreUsuario.length === 4 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase3}`;
   }
   else if (nombreUsuario.length === 5 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase4}`;
   }
   else if (nombreUsuario.length === 6 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase5}`;
   }
   else if (nombreUsuario.length === 7 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase6}`;
   }
   else if (nombreUsuario.length === 8 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase7}`;
   }
   else if (nombreUsuario.length >= 9 ) {
      imprimirSuerte.innerHTML = `Hola ${nombreUsuario}, ${this.frase8}`;
   }
   else {
      imprimirSuerte.innerHTML = `${malAugurio}`;
   }
}

const frases = {
   frase1: `tu nombre es muy corto, pero tu día y tu felicidad serán muy grandes. 	&#128516;`,
   frase2: `comienza ahora a ser desde hoy lo que serás en el futuro. 	&#128516;`,
   frase3: `así se te cruce un gato negro, nada te detiene 	&#128516;`,
   frase4: `recuerda siempre, progreso antes de perfección. Vamos tu puedes! 	&#128516;`,
   frase5: `la magia es creer en ti mismo. Si puedes hacer eso, puedes hacer que suceda cualquier cosa. 	&#128516;`,
   frase6: `todo lo que siempre has querido está al otro lado del miedo. 	&#128516;`,
   frase7: `así se te cruce un gato negro nadie te detiene 	&#128516;`,
   frase8: `casi casi te ponen de nombre esternocleidomastoideo xD. Pero igual eres el mejor!! 	&#128516;`
}

button.addEventListener('click', function() {
   saludar.call(frases)
});
