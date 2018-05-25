# E-learning-autoplay

##### Pourquoi ? Pour qui ?
Etant étudiant on m'a forcé à faire du E-learning avec des notions que j'avais déjà acquis. En effet dans certaines formations il y a un quota d'heures à faire pour valider une épreuve, année, diplôme,.. Il faut tout simplement regarder la vidéo. Dans certains cas, le site est équipé de lecture automatique mais dans mon cas il fallait appuyer sur "suivant" ou "vidéo suivante" la parade de mettre suivant a toute vitesse suivant comptabiliser les heures mais les logs d'accès au site trahissais que 10min sur le site ne peu pas comptabiliser 4H de vidéo. C'est pourquoi j'ai mis en place avec un ami ce bout de code.**Pourquoi une extension et pas un script sur tampermonkey ?**
Tout simplement les développeurs du site y ont pensé et donc bloqué l'accès au flux vidéo.

_**Prerequis**_ : Il faut que la platforme soit fournis par upgraduate.com

#### Adapter à votre Elarning

Etape 1 : 
-> Allez dans le fichier "popup.html"
	remplacer à la ligne 24
		`https://f2i.upgraduate.com` par l'ardresse du site de votre E-Learning.

Etape 2 : 
-> Allez dans le fichier "manifest.json"
	remplacer à la ligne 8 
		 `"https://f2i.upgraduate.com/*"` par le site de l'e-learning rajouter /* 
	remplacer également à la ligne 20
		`"https://f2i.upgraduate.com/*/*"` par le site de l'e-learning rajouter /*/*

Etape 3 :
-> Ouvrer chrome
	Plus d'outils > Extentions
	*cliquer sur "CHARGEZ L'EXTENTION NON EMPACTEE" 
	

##### Sans rancune upgraduate :kissing_closed_eyes:
_*Veuillez activer sur la page le "Mode Devloppeur"._ \n
Veuillez conserver ce dossier pour l'exectution de l'extension.
  