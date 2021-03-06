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
const colores = ['rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 112, 67)', 'rgb(255, 205, 0)','rgb(0, 188, 212)'];
const datos = [
    [61.76, 23.53,11.76,2.94,0.00], //Pregunta 1
    [29.41,29.41,17.65,17.65,5.88], //Pregunta 2
    [23.53,52.94, 17.65, 2.94,2.94], //Pregunta 3
    [8.82,23.53, 29.41, 32.35,5.88], //Pregunta 4
    [17.65,32.35,17.65,23.53,8.82], //Pregunta 5
    [14.71,14.71,35.29,23.53,11.76], //Pregunta 6
    [11.76,32.35,23.53,29.41,2.94], //Pregunta 7
    [5.88,26.47,29.41,23.53,14.71], //Pregunta 8
    [0.00,29.41,47.06,14.71,8.82], //Pregunta 9
    [11.76,14.71,32.35,23.53,17.65], //Pregunta 10
    [5.88,26.47,26.47,26.47,11.76], //Pregunta 11
    [20.59,29.41,32.35,11.76,5.88], //Pregunta 12
    [2.94,20.59,35.29,32.35,8.82], //Pregunta 13
    [23.53,29.41,38.24,5.88,2.94], //Pregunta 14
    [47.06,38.24,8.82,2.94,2.94]
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
    document.getElementById("preguntaChart").innerHTML = titulosGrafica[i];
    currentChart.data.datasets[0].data = datos[i];
    currentChart.update();
    
}