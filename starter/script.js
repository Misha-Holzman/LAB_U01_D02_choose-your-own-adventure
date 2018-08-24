

//Monty Python and the Holy Grail Adventure Game


let name = prompt("Hello brave Knight! I am King Arthur, and this is my faithful servant, Patsy. What is your name?")
alert(`Join me ${name} on my quest to find the Holy Grail!`)

let frenchCastle = prompt(`The knights of the round table journey to a castle occupied by impolite Frenchmen where the Holy Grail is rumored to be. When asked to enter the castle, the gaurd replies, "You don't frighten us, English pig-dogs! Go and boil your bottom, sons of a silly person. I blow my nose at you, so-called Arthur King, you and all your silly English k-nnnnniggets."  To use your english charm and ask the French gaurd politely to see the Grail, enter - 'ask' -   To attack the castle, enter - 'attack'`)

if (frenchCastle === '1') {
	let frenchTeasing = prompt(`Your charm is lost on the gaurd and only makes him ruder. The gaurd yells, "I don't wanna talk to you no more, you empty headed animal food trough wiper! I fart in your general direction! Your mother was a hamster and your father smelt of elderberries!" | - attack - | - run away - |`)
		if (frenchTeasing === 'attack') {
			alert('The attack is useless! The Frenchmen are catapulting cows and chickens at you. Run Awayyyyy!!') 
		} else {
			let trojanRabbit = prompt(`As you attack the castle, it becomes clear you and your fellow squad of knights are outmatched. Time for plan B. To catch the Frenchmen off-gaurd with the ol' wooden Trojan Rabbit trick, enter | - rabbit - |`)
				if (trojanRabbit === 'rabbit') {
					alert(`The crew builds a giant hollow wooden rabbit and sends it to the gates. The Frenchmen won't know what hit 'em...`)
					alert(`As the knights watch the giant rabbit enter the castle, they realize nobody got inside. You really are some bad knights.`)
		}
		}
} else {
	let trojanRabbit = prompt(`As you attack the castle, it becomes clear you and your fellow squad of knights are outmatched. Time for plan B. To catch the Frenchmen off-gaurd with the ol' wooden Trojan Rabbit trick, enter | - rabbit - |`)
		if (trojanRabbit === 'rabbit') {
			alert(`The crew builds a giant hollow wooden rabbit and sends it to the gates. The Frenchmen won't know what hit 'em...`)
			alert(`As the knights watch the giant rabbit enter the castle, they realize nobody got inside. You really are some bad knights.`)
		}
} 

let knightsWhoSayNi = prompt(`Having failed at the French Castle, the Knights journey on and come across the Knights Who Say Ni!. No, not the knights who say Ni! They demand a shrubbery, or you shall not pass alive.  Do you want to return with a shrubbery or fight the Knights? | - shrubbery - | - fight - |`)
	if (knightsWhoSayNi === 'shrubbery') {
		let knightsWhoNoLongerSayNi = prompt(`You brought the Knights who say Ni a shrubbery and a quite nice one at that. However, the knights are greedy, and make another demand! Another shrubbery, just slightly taller this time, and to cut down the tallest tree in the forest...with a Herring! How do you reply? | - It can't be done! - | - Fight - |`)
			if (knightsWhoNoLongerSayNi === `It can't be done!` || `It can't be done`) {
				alert(`You have found the Knights who say Ni's secret weekness! It is the word 'it'! Using the word 'it' against them, the brave knights are able to pass.`)
			} else {
				alert('Bad idea. The Knights Who Say Ni defeat all the knights of the round table and the quest is in vain.')
			}
	} else {
		alert('Bad idea. The Knights Who Say Ni defeat all the knights of the round table and the quest is in vain.')
	}

alert(`Traveling far and wide in search of the Grail, the Knights of the Round Table next run into the Enchanter named Tim. He is a busy man, blowing up rocks and such, but Tim decides to help the brave Knights. He exclaims, "To the north there lies a cave-- the cave of Caerbannog-- wherein, carved in mystic runes upon the very living rock, the last words of Olfin Bedwere of Rheged...make plain the last resting place of the most Holy Grail!" He also warns of a great beast gaurding the cave.`)



let killerRabbit = prompt(`The knights arive at mouth of the cave and, expecting a terrible beast, hide behind some rocks just outside. The beast turns out to merely be a cute little bunny rabbit, who proceeds to viciously kill several of the knights. Do you attack with full force, run for your lives, or use the Holy Hand Grenade?   | - attack - | - run away - | - Holy Hand Grenade - |`) 
	switch(killerRabbit) {
  		case 'attack':
    		alert('The rabbit, being the most foul, cruel, and bad-tempered rodent you ever set eyes on, tore everyone to shreds. The quest is in vain.');
    	break;
  		case 'run away':
    		alert(`Knighthood isn't for you. Stick to coding.`);
    	break;
  		case 'Holy Hand Grenade':
    		let holyHandGrenade = prompt(`Yes, of course! The Holy Hand Grenade of Antioch! 'Tis one of the sacred relics Brother Maynard carries with him! Brother Maynard! Bring up the Holy Hand Grenade!...Pie Iesu domine, dona eis requiem. Pie Iesu domine, dona eis requiem.... To throw the grenade, thou must count to three. Not four nor two, but three.`);
    			if (holyHandGrenade === '123' || '1,2,3' || 'one two three' || 'one, two, three')
    				alert(`BANG!!! It worked, the bunny was blown to smithereens. Enter the cave. The knights find the last words of Joseph of Arimathea carved into a rock. It reads: "'Here may be found the last words of Joseph of Arimathea. He who is valiant and pure of spirit may find the Holy Grail in the Castle of aaarrrrggh". The knights are again almost killed by a giant animated beast that's only defeated when the animator has a heart attack.`)
    	break;
};



alert(`The knights travel on in search of the Castle of aaarrrrggh and come to.....THE BRIDGE OF DEATH!! spaning the Gorge of Eternal Peril. The bridgekeeper appears.`)

let bridgeOfDeath = prompt(`The Bridgekeeper makes the brave knights answer three very random questions. Arthur, Bedevere, and Lancelot make it across, and now it is your turn to answer correctly or be cast into the Gorge of Eternal Peril. The three questions are.... 1) What.. is your name?  2) What.. is your quest?  3) What.. is the air-speed velocity of an unladen swallow? Please enter each answer seperated by a comma.`)
	switch(bridgeOfDeath) {
  		case `${name}, I seek the Grail, An African or European swallow?`:
  			alert(`Cross the bridge and carry on your quest, brave knight`);
  			break;
  		case `${name}, To find the Holy Grail, An African or European swallow?`:
  		  	alert(`Cross the bridge and carry on your quest, brave knight`);
  			break;
  		case `${name}, Holy Grail, An African or European swallow?`:
  			alert(`Cross the bridge and carry on your quest, brave knight`);
    		break;
    	default:
    		alert(`auuuuuuuugh! You are falling into the Gorge of Eternal Peril! Knighthood just isn't for you. Stick to coding.`)
};


let finalBattle = prompt(`Your band of knights continue on and find the castle which supposedly has the Grail, but it's already been occupied by the same rude Frenchmen as before. You have two options, attack or make a deal with the Frenchmen. To summon an army and lay seige to the castle, enter "charge". To give the frenchmen some fresh baguettes and some fine french wine, enter "deal"`)

if (finalBattle === 'charge') {
	alert(`Your army led to a lot of sound complaints from the locals who called the police on you. Having unregistered swords, you and the knights all get arrested. The quest is in vain. Guess its back to coding!`)
} else if ('deal') {
	alert(`The french gladly except the trade of bread and fine wine for the Holy Grail. Congratulations!! You have completed your Holy Quest!!`)
};






































