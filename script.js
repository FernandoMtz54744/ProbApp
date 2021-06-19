const form = document.getElementById("formulario");
const preguntas = ["Me conecto a las redes sociales por lo menos una vez al día.", 
"Paso mucho tiempo en las redes sociales donde comparto mi vida personal o me entero de la vida personal de otras personas (Facebook, Instagram, etc.).",
"Paso mucho tiempo en las redes sociales de contenido multimedia (YouTube, TikTok, etc.).",
"Paso mucho tiempo en las redes sociales de opinión (Twitter, etc.).",
"He dejado de dormir horas de sueño para pasar tiempo en las redes sociales.",
"Paso más tiempo en las redes sociales que relacionándome con las personas de mi entorno próximo cara a cara (familiares, amigos, pareja, etc.).",
"Las redes sociales, el contenido que consumo en ellas y la gente con la que me contacto gracias a ellas tienen una gran influencia en mi personalidad y mis ideas.",
"Cuando comparto mis opiniones o aspectos de mi vida personal (gustos, experiencias, acontecimientos, etc.) en las redes sociales me es muy importante la aprobación de los demás para sentirme feliz.",
"La imagen que tengo de mí persona ha mejorado gracias al contenido que consumo en redes sociales o a la gente con que me he contactado gracias a ellas.",
"Una de las principales razones por las que me conecto a las redes sociales es para sentirme parte de un grupo social.",
"Tengo la sensación de que si no me conecto a las redes sociales me perderé de algo importante en la vida de los demás.",
"Me siento escuchado/a fuera de las redes sociales por las personas que me rodean (familia, amigos cercanos, conocidos, etc.).",
"Me siento inseguro/a de mostrar quién soy o de compartir mis gustos, opiniones o preocupaciones con los demás fuera de las redes sociales.",
"He desarrollado vínculos afectivos fuertes con las personas fuera de las redes sociales (familia, amigos, pareja, etc.).",
"Tengo por lo menos un amigo/a cercano/a fuera de las redes sociales en el que pueda confiar y quedar para reunirnos en persona y conversar."];

const opciones = ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"];

function createForm(){
    let html = `<table><tr class="tHeader"><th>Totalmente de acuerdo</th><th>De acuerdo</th>
    <th>Ni de acuerdo ni en desacuerdo</th><th>En desacuerdo</th><th>Totalmente en desacuerdo</th></tr>`;
    for(let i=1; i<=15; i++){
        html+=`<tr><td class="preguntas">${preguntas[i-1]}</td>`;
        for(let j=1; j<=4; j++){
                html+=`<td><input type="radio" name="p${i}" id="p${i}o${j}"></td>`;
        }
        html+=`</tr>`;
    }
    form.innerHTML=html;
}
