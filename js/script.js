$(document).ready(function(){
	// JavaScript Document
var preguntas=new Array();
var respuestas=new Array();
preguntas[0]="El agua es ";
preguntas[1]="Las caracteristicas del agua son";
preguntas[2]="El agua se encuentra en la naturaleza en los estados ";
preguntas[3]="Algunas propiedades del agua son  ";
preguntas[4]="El continente donde encontramos mayor disponibilidad de agua es";
preguntas[5]="El ciclo del agua es";
preguntas[6]="El ciclo del agua es importante porque";
preguntas[7]="Las fases del ciclo del agua son";
preguntas[8]="Se le llama ciclo del agua porque ";
preguntas[9]="El agua puede producir enfermedades de diversos tipos como ";
preguntas[10]="La cantidad de agua que necesitaoms para vivir es";
preguntas[11]="Una cuenca hidrografica es";
preguntas[12]="Las principales cuencas venezolanas son";
preguntas[13]="Las caracteristicas de una cuenca hidrografica son";
preguntas[14]="Algunas de las funciones de una cuenca hidrografica son";
preguntas[15]="Los factores principales que afectan a las cuencas hidrograficas son";
preguntas[16]="El crecimiento excesivo de plantas acuáticas se debe a";
preguntas[17]="Un sistema de abastecimiento de agua potable es";
preguntas[18]="El agua potable es";
preguntas[19]="Las fuentes para abastecer un sistema de agua potable son";
preguntas[20]="El suministro de agua potable es importante porque";
respuestas[0]="El agua es 1";
respuestas[1]="El agua es 2";
respuestas[2]="El agua es 1";
respuestas[3]="El agua es 2";
respuestas[4]="El agua es 1";
respuestas[5]="El agua es 2";
respuestas[6]="El agua es 1";
respuestas[7]="El agua es 2";
respuestas[8]="El agua es 1";
respuestas[9]="El agua es 2";
respuestas[10]="El agua es 1";
respuestas[11]="El agua es 2";
respuestas[12]="El agua es 1";
respuestas[13]="El agua es 2";
respuestas[14]="El agua es 1";
respuestas[15]="El agua es 2";
respuestas[16]="El agua es 1";
respuestas[17]="El agua es 2";
respuestas[18]="El agua es 1";
respuestas[19]="El agua es 2";
respuestas[20]="El agua es 1";
respuestas[21]="El agua es 2";
respuestas[22]="El agua es 1";
respuestas[23]="El agua es 2";
respuestas[24]="El agua es 1";
respuestas[25]="El agua es 2";
respuestas[26]="El agua es 1";
respuestas[27]="El agua es 2";
respuestas[28]="El agua es 1";
respuestas[29]="El agua es 2";
respuestas[30]="El agua es 1";
respuestas[31]="El agua es 2";
respuestas[32]="El agua es 1";
respuestas[33]="El agua es 2";
respuestas[34]="El agua es 1";
respuestas[35]="El agua es 2";
respuestas[36]="El agua es 1";
respuestas[37]="El agua es 2";
respuestas[38]="El agua es 1";
respuestas[39]="El agua es 2";
respuestas[40]="El agua es 1";
respuestas[41]="El agua es 2";
for(var i = 1 ;i<11 ;i++){
var np=Math.floor((Math.random()*19));
var nr=Math.floor((Math.random()*2));
$("#pregunta"+i).replaceWith('<div class="pregunta" id="pregunta"'+i+'><p class="preguntatexto">'+preguntas[np]+respuestas[nr]+'</p><a href="#" class="boton" id="verdadero"><img src="img/verdadero.png">Verdadero </a> <a href="#" class="boton" id="falso"><img src="img/falso.png"> falso</a></div>');

}
	


$('.boton').live("click",function() {
	$('.pregunta').animate({top:"-=550"},300,'swing');
	
 });

});
