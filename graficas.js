//Datos de la grafica
const titulosGrafica = ["Me conecto a las redes sociales por lo menos una vez al día.", 
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

const etiquetas = ['Totalmente de acuerdo','De acuerdo','Ni de acuerdo ni en desacuerdo','En desacuerdo','Totalmente en desacuerdo'];
const colores = ['rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)', 'rgb(255, 205, 0)','rgb(0, 205, 86)'];
const datos = [
    [21,8,4,1,0], //Pregunta 1
    [10,10,6,6,2], //Pregunta 2
    [8,18,6,1,1], //Pregunta 3
    [3,8,10,11,2], //Pregunta 4
    [6,11,6,8,3], //Pregunta 5
    [5,5,12,8,4], //Pregunta 6
    [4,11,8,10,1], //Pregunta 7
    [2,9,10,8,5], //Pregunta 8
    [0,10,16,5,3], //Pregunta 9
    [4,5,11,8,6], //Pregunta 10
    [2,9,9,9,4], //Pregunta 11
    [7,10,11,4,2], //Pregunta 12
    [1,7,12,11,3], //Pregunta 13
    [8,10,13,2,1], //Pregunta 14
    [16,13,3,1,1]
];
let currentChart;

//Se despliegan los botones para seleccionar la grafica
const chartSelcetor = document.getElementById("chartSelector");
let chartSelectorHtml ="";
for(let i=0; i<15; i++){
    chartSelectorHtml+=`<button onClick="updateChart(${i})">Grafica ${i+1}</button>`;
}
chartSelcetor.innerHTML = chartSelectorHtml;

//Funcion para generar la grafica
function initGrafica(){
    var chart = document.getElementById("chart");
    const data = {
            labels: etiquetas,
            datasets: [{
                label: "Pregunta 1",
                data: datos[0],
                backgroundColor: colores,
                hoverOffset: 4
            }],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        };
        const config = {
            type: 'pie',
            data: data,
        };
        currentChart = new Chart(chart, config);
}
initGrafica();

//Funcion para actualizar los datos de la grafica
function updateChart(i){
    currentChart.data.datasets[0].data = datos[i];
    currentChart.update();
    
}