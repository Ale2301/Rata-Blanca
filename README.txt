Acá voy a explicar de manera fácil y accesible qué carajo significa cada variable de instancia, en el caso de que haya que cambiarlas de balace. Este documento no es definitorio y será cambiado en el futuro

VARS EN TODOS LOS OBJETOS FUERA DE LAYOUT:

Casi todos los objetos tienen variables manejables por código. No deben ser bajo ningún concepto editados ya que pueden provocar fallos críticos en el programa.
Estos son: BelongsToRoom, isInTemplate, BelongsToUID, xRelative, yRelative y movingTo

ITEMS:
Los ítems serán gestionados por código. Cada uno tendrá su propio espacio. El uso de variables ralentiza la generación, y no queremos eso

PLAYER: 
vulnerable: Si el jugador puede recibir daño. 0 = Invulnerable 1 = vulnerable
playerCanDash: Si el jugador puede realizar el dash. 0 = Dash en cooldown, 1 = listo
energy: Cantidad de energía sin consumir
energyConsumed: Cantidad de energía consumida
damage: Daño que realiza el jugador
resistance: Porcentaje del daño mitigado por el jugador
playerFireRate: Cadencia de fuego del jugador. Tiempo entre disparo y disparo
playerShootSpeed: Que tantos m/s recorre el proyectil
playerMaxHealth: Vida máxima que puede obtener el jugador
playerCurrentHealth: Vida actual del jugador


ENLOQUECIDO:
life: Vida máxima
damage: Daño que realiza (Por ahora, en todo lo que haga)
energyDropRate: Porcentaje de que el enemigo dropee energía al morir

CUERVO:
life: Vida máxima
damage: Daño que realiza
vulnerable: Si el cuervo esta en estado "volador" o no
energyDropRate: Porcentaje de que el enemigo dropee energía al morir
attacking: Identifica si el cuervo está o no atacando. No debe ser editado
canAttack: Identifica si el cuervo puede o no atacar. No debe ser editado

BULLETCUERVO
damage: Daño que realiza