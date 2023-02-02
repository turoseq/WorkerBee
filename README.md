# WorkerBee
Game Design for Mobile Games
Target group: children, age 6-12
Short description:

In the game player is moving the bee, collecting differently coloured flowers by walking into its collision box in specified quantities and avoiding increasing number of wasps.
If the player unwittingly exceeds the number of collected flowers of specific color needed to complete the level, number of flowers needed of all other colors increases.

Examplary quantities of objects in each level:
Level 1: Flowers: 5 blue, 2 red; 1 wasp Level 2: Flowers: 7 blue, 4 red, 2 green; 2 wasps Level 3: Flowers: 10 blue, 6 red, 4 green, 1 purple; 3 wasps Level 4: Flowers: 12 blue, 8 red, 6 green, 3 purple, 1 yellow; 3 wasps etc.

There will be a limited number of flowers on the map of random colors, of which not every one will be giving the progress for the current level, nonetheless there will be a restriction, that at least one flower will be the one that player needs. 

The map is going to be wider than player’s vision range and the vision will move along with the bee. 

Wasps will chase the bee inside specific lure area, but will have slower movement rate than the bee to give a chance to dodge them. On higher levels wasps could show up from upper border of the map. The player will have limited time to finish the level. The time will be indicated by sunset, the map will get darker with each minute and when the specified time passes, the vision around the bee will shrink. 

Player will have 3 lifes, losing each by colliding with the wasp. After losing a life the level is restarting, except the flowers’ counter – player’s progress will be saved. 

UI description: Graphics in the game will be a cartoon type (game for children). Player is moving the bee by using accelerometer in his mobile phone. 
HUD describing how many flowers are needed to finish the level will be shown above the map. 


History of best results and the player’s nickname will be stored in Firebase Firestore.