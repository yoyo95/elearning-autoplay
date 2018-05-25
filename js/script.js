$(document).ready(function(){

	setTimeout(function() {
			$e = $(".jw-text-duration").html(); // variable récupérer le temps de la vidéo
			$f = 0; // Pour quitter la boucle for
			while( ($e != "00:00") && ($f ==0)){ // Tant qu'il n'y a pas de durée
				$f =1; // Pour quitter la boucle
				//console.log($(".jw-text-duration").html()); // Debuggage
				$a = parseInt($(".jw-text-duration").html().split(":")[0], 10); //Récuperer le nombre de minute(s)
				$a = $a*60; // Transformer les minutes en secondes 
				$b =parseInt($(".jw-text-duration").html().split(":")[1], 10);  //Récuperer le nombre de seconde(s) 
				$c = $a + $b; // Variable contenant la durée en secondes
				console.log("il reste "+$c+" seconde(s)"); //Message affichant le nombre de  seconde(s) avec éxecution du processus
				$c = $c * 1000; //Transformation de la durée de seconde(s) => milisecondes
				setInterval(function(){ $('.nav-next-step').get(0).click(); }, $c); //Execution du script appuie sur le bouton #nextstep
			}
	 }, 3900); //Effectuer le script au bout de 3.9 secondes.
});
