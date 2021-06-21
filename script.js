const preguntas = ["1. Me conecto a las redes sociales por lo menos una vez al día.", 
"2. Paso mucho tiempo en las redes sociales donde comparto mi vida personal o me entero de la vida personal de otras personas (Facebook, Instagram, etc.).",
"3. Paso mucho tiempo en las redes sociales de contenido multimedia (YouTube, TikTok, etc.).",
"4. Paso mucho tiempo en las redes sociales de opinión (Twitter, etc.).",
"5. He dejado de dormir horas de sueño para pasar tiempo en las redes sociales.",
"6. Paso más tiempo en las redes sociales que relacionándome con las personas de mi entorno próximo cara a cara (familiares, amigos, pareja, etc.).",
"7. Las redes sociales, el contenido que consumo en ellas y la gente con la que me contacto gracias a ellas tienen una gran influencia en mi personalidad y mis ideas.",
"8. Cuando comparto mis opiniones o aspectos de mi vida personal (gustos, experiencias, acontecimientos, etc.) en las redes sociales me es muy importante la aprobación de los demás para sentirme feliz.",
"9. La imagen que tengo de mí persona ha mejorado gracias al contenido que consumo en redes sociales o a la gente con que me he contactado gracias a ellas.",
"10. Una de las principales razones por las que me conecto a las redes sociales es para sentirme parte de un grupo social.",
"11. Tengo la sensación de que si no me conecto a las redes sociales me perderé de algo importante en la vida de los demás.",
"12. Me siento escuchado/a fuera de las redes sociales por las personas que me rodean (familia, amigos cercanos, conocidos, etc.).",
"13. Me siento inseguro/a de mostrar quién soy o de compartir mis gustos, opiniones o preocupaciones con los demás fuera de las redes sociales.",
"14. He desarrollado vínculos afectivos fuertes con las personas fuera de las redes sociales (familia, amigos, pareja, etc.).",
"15. Tengo por lo menos un amigo/a cercano/a fuera de las redes sociales en el que pueda confiar y quedar para reunirnos en persona y conversar."];

// const opciones = ["Totalmente de acuerdo", "De acuerdo", "Ni de acuerdo ni en desacuerdo", "En desacuerdo", "Totalmente en desacuerdo"]; 
const form = document.getElementById("formulario");
const respuestas=[];
const valores= new Array(2,6,2,4,5,10,7,7,-6,8,8,-9,9,-9,-8);
const puntuacion= new Array(15);
let probabilidad=0;
const resulatdosDiv = document.getElementById("resultados");
const datosUsuairio = document.getElementById("datosUsuario");

function createForm(){
    form.style.display="";
    resulatdosDiv.style.display="none";
    let html = `<h2>Instrucciones: Contesta la siguiente serie de preguntas seleccionando la opción que mejor te parezca.</h2>
    <table><tr class="tHeader"><th>Pregunta</th><th>Totalmente en desacuerdo</th><th>En desacuerdo</th><th>Ni de acuerdo ni en desacuerdo</th>
                <th>De acuerdo</th><th>Totalmente de acuerdo</th>
    </tr>`;
    for(let i=1; i<=15; i++){
        html+=`<tr><td class="preguntas">${preguntas[i-1]}</td>`;
        for(let j=1; j<=5; j++){
                html+=`<td><input type="radio" name="p${i}" id="p${i}o${j}" /></td>`;
        }
        html+=`</tr>`;
    }
    html+=`</table>
    <div class="sendContainer">
    <input type="submit" value="Enviar"/>
    </div>`;
    form.innerHTML=html;
}

const validarRespuestas = ()=>{
    for(let i=1; i<=15; i++){
        for(let j=1; j<=5; j++){
            if(document.getElementById(`p${i}o${j}`).checked){
                respuestas[i-1]=j;
            }
        }
    }
    return respuestas.length;
};

const imprimirRespuestas = ()=>{
    respuestas.map((value, i) => {
        console.log(`P${i+1}: ${value}`);
    });
}; 

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(validarRespuestas() === 15){
        imprimirRespuestas();
        obtenValores();
        //Se oculta el formulario y se muestran los resulatdos o gráficas
        form.style.display="none"; 
        resulatdosDiv.style.display="";
        let html = `<h2>Tus respuestas sugieren que tienes un perfil con '${Math.round(probabilidad)}'% probabilidad de ser depresivo/a</h2>`;
        datosUsuairio.innerHTML=html;
    }else{
        alert("Favor de contestar todas las respuestas");
    }
});

function obtenValores(){
    let i;
    probabilidad=0;
    for(i=0;i<respuestas.length;i++){
        if(valores[i]<0){
            switch(respuestas[i]){
                case 1:
                    puntuacion[i] = (((valores[i]*-1)/5)*5);
                    break;
                case 2:
                    puntuacion[i] = (((valores[i]*-1)/5)*4);
                    break;
                case 3:
                    puntuacion[i] = (((valores[i]*-1)/5)*3);
                    break;
                case 4:
                    puntuacion[i] = (((valores[i]*-1)/5)*2);
                    break;
                case 5:
                    puntuacion[i] = (((valores[i]*-1)/5)*1);
                    break;
            } 
        }else{
            puntuacion[i] = (respuestas[i]*valores[i])/5;
        }
    }
    for(i=0;i<respuestas.length;i++){
        probabilidad += puntuacion[i];
    }
    return probabilidad;
}
