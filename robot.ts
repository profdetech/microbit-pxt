//% weight=100 color=#00aced icon="\uf1b9"
namespace profdetech_portail{

	
	/**
	 * P0 = Moteur du portail 
	 * P14 = Gyrophare
	 * P1 = Fin de course ouvert
	 * P15 = Fin de course fermé
	 */
    //% blockId=portail_descriptif
    //% block="Descriptif branchement portail"
    export function portail_descriptif(): void {
    }
	
	
	
	/**
     * ouvrir le portail (moteur sur P0)
     */
    //% blockId=portail_ouvrir
    //% block="Ouvrir le portail"
    export function ouvrir_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
    }

    /**
     * fermer le portail (moteur sur P0)
     */
    //% blockId=portail_fermer
    //% block="Fermer le portail"
    export function fermer_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
    }
	
	/**
     * arrêter le portail (moteur sur P0)
     */
    //% blockId=portail_arreter
    //% block="Arreter le portail"
    export function arreter_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
    }

	/**
     * allumer le gyrophare (branché sur P14)
     */
    //% blockId=allum_gyro
    //% block="Allumer le gyrophare"
    export function allumer_gyro(): void {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
	
	/**
     * éteindre le gyrophare (branché sur P14)
     */
    //% blockId=etein_gyro
    //% block="Eteindre le gyrophare"
    export function eteindre_gyro(): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
	
	/**
     * Etat du fin de course ouvert sur P1
     */
    //% blockId=FCO
    //% block="Etat fin de course ouvert (0 ou 1)"
    export function FCO(): number {
		return pins.digitalReadPin(DigitalPin.P1);
    }
	
	/**
     * renvoie vrai si le portail est ouvert en entier (FCO sur	 P1)
     */
    //% blockId=PO_entier
    //% block="Le portail est ouvert en entier (vrai ou faux)"
    export function portail_ouvert(): boolean {
		 if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            return false;
        } else return true;
    }
	
	/**
     * Etat du fin de course fermé sur P15
     */
    //% blockId=FCF
    //% block="etat fin de course fermé (0 ou 1)"
    export function FCF(): number {
		return pins.digitalReadPin(DigitalPin.P15);
    }
	
	/**
     * renvoie vrai si le portail est fermé est entier (FCF sur P15)
     */
    //% blockId=PF_entier
    //% block="le portail est fermé en entier (vrai ou faux)"
    export function portail_ferme(): boolean {
		if (pins.digitalReadPin(DigitalPin.P15) == 1) {
            return false;
        } else return true;
    }
	
	
}

//% weight=100 color=#0084b4 icon="\uf17b"
namespace profdetech_robot{

	/**
     * P0 = Moteur gauche
	 * P14 = Moteur droit
	 * P1 = Fin de course detection obstacle
	 * P15 = capteur de vide
     */
    //% blockId=robot_descriptif
    //% block="descriptif branchement robot"
    export function robot_descriptif(): void {
    }




/**
     * Faire pivoter à gauche le robot à vitesse maximum (P0/P14)
     */
    //% blockId=robot_PGG
    //% block="Pivoter vers la gauche"
    export function PG(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 180);
		}
		
		/**
     * Faire pivoter à droite le robot à vitesse maximum (P0/P14)
     */
    //% blockId=robot_PDD
    //% block="Pivoter vers la droite"
    export function PD(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 90);
    }
	
	/**
     * Arrêter le robot (P0/P14)
     */
    //% blockId=robot_stop
    //% block="arrêter"
    export function arreter(): void {
        // pins.servoWritePin(AnalogPin.P0, 90);
        // pins.servoWritePin(AnalogPin.P14, 90);
		//solution kitronic servolite
		pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 90);
	}
	
	
    /**
     * Faire avancer le robot (P0/P14)
     */
    //% blockId=robot_avancer
    //% block="avancer"
    export function avancer(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 180);
    }

    /**
     * Faire reculer le robot (P0/P14)
     */
    //% blockId=robot_reculer
    //% block="reculer"
    export function reculer(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
        pins.servoWritePin(AnalogPin.P14, 0);
    }
	

	
	/**
     * Faire pivoter à droite le robot de 90° (P0/P14)
     */
    //% subcategory="Moteurs option sup"
    //% blockId=robot_PD90
    //% block="Pivoter vers la droite de 90°"
    export function PD90(): void {
		let item = 0
		item = input.compassHeading()
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 90);
		while (input.compassHeading() < item + 90) {
	
		}
		pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 90);
    }


	/**
     * Avancer à une vitesse variable en pourcentage (P0/P14) 100% = vitesse maximum
     */
	 //% subcategory="Moteurs option sup"
    //% blockId=robot_vitvar
    //% block="Avancer à la vitesse %speed|%"
    //% speed.min=0 speed.max=100
    export function avancervitvar(speed: number): void {
        /*first convert 0-100 to 0-90*/
        let OutputVal = Math.clamp(0, 100, speed) * 0.9;
		let OutputVal2= 90 - OutputVal;
		pins.servoWritePin(AnalogPin.P0, OutputVal2);
		OutputVal2= OutputVal + 90;
        pins.servoWritePin(AnalogPin.P14, OutputVal2);
		     
    }
    
	
	/**
     * gestion des deux moteurs à une vitesse variable en pourcentage (P0/P14) 100% = vitesse maximum
     */
	 //% subcategory="Moteurs option sup"
    //% blockId=robot_motvitvar
    //% block="Moteur gauche vitesse %speed| % et moteur droit vitesse %speed2| %"
    //% speed.min=0 speed.max=100
	//% speed2.min=0 speed2.max=100
    export function avancermotvitvar(speed: number, speed2: number): void {
        /*first convert 0-100 to 0-90*/
        let OutputVal3 = Math.clamp(0, 100, speed) * 0.9;
		let OutputVal4= 90 - OutputVal3;
		pins.servoWritePin(AnalogPin.P0, OutputVal4);
		OutputVal3 = Math.clamp(0, 100, speed2) * 0.9;
		OutputVal4= OutputVal3 + 90;
        pins.servoWritePin(AnalogPin.P14, OutputVal4);
		     
    }
	
		/**
     * Etat du capteur de fin de course détection obstacle sur P1
     */
	 //% subcategory="Détection obstacle"
    //% blockId=obstacle
    //% block="Etat du capteur obstacle (0 ou 1)"
    export function capt_obstacle(): number {
		return pins.digitalReadPin(DigitalPin.P1);
    }
	
	/**
     * Etat du capteur de vide sur P15
     */
	 //% subcategory="Détection du vide"
    //% blockId=vide
    //% block="Etat du capteur de vide (0 ou 1)"
    export function capt_vide(): number {
		return pins.digitalReadPin(DigitalPin.P15);
    }
	
	
	
}

//% weight=100 color=#0084b4 icon="\uf206"
namespace profdetech_parking_trottinettes{

/**
     * P0 = Fin de course trottinette 1
	 * P14 = Fin de course trottinette 2
	 * P1 = Fin de course trottinette 3
     */
    //% blockId=park_descriptif
    //% block="descriptif branchement maquette parking"
    export function park_descriptif(): void {
    }


/**
     * Etat du fin de course n°1 sur P0
     */
    //% blockId=FC1
    //% block="Etat fin de course 1ere place de parking (0 ou 1)"
    export function FC1(): number {
		return pins.digitalReadPin(DigitalPin.P0);
    }
	
/**
     * Etat du fin de course n°2 sur P14
     */
    //% blockId=FC2
    //% block="Etat fin de course 2eme place de parking (0 ou 1)"
    export function FC2(): number {
		return pins.digitalReadPin(DigitalPin.P14);
    }
	
	
	/**
     * Etat du fin de course n°3 sur P1
     */
    //% blockId=FC3
    //% block="Etat fin de course 3eme place de parking (0 ou 1)"
    export function FC3(): number {
		return pins.digitalReadPin(DigitalPin.P1);
    }

	/**
     * renvoie vrai si la trottinette 1 est présente (P0)
     */
    //% blockId=trott1
    //% block="la trottinette active le fin de course 1 (vrai ou faux)"
    export function trot1(): boolean {
		if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            return false;
        } else return true;
    }
	
		/**
     * renvoie vrai si la trottinette 2 est présente (P14)
     */
    //% blockId=trott2
    //% block="la trottinette active le fin de course 2 (vrai ou faux)"
    export function trot2(): boolean {
		if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            return false;
        } else return true;
    }
	
		/**
     * renvoie vrai si la trottinette 3 est présente (P1)
     */
    //% blockId=trott3
    //% block="la trottinette active le fin de course 3 (vrai ou faux)"
    export function trot3(): boolean {
		if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            return false;
        } else return true;
    }
	
		/**
     * initialisation afficheur nombre de places restantes
     */
    //% blockId=init_aff_place
    //% block="initialisation afficheur du nombre de place sur P2 et P16"
    export function aff_place(): void {
        profdetech_grove.createDisplay(DigitalPin.P2, DigitalPin.P16): TM1637
    }
	
	
	
	
}