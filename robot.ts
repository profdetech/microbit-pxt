//% weight=100 color=#00aced icon="\uf1b9"
namespace profdetech_portail{

	/************************************************************************************************************************************************
	* micro:bit / :MOURONVAL blocks
	************************************************************************************************************************************************/

	/*variables et constantes */
	
	
	
	
	
	/**
     * ouvrir le portail (moteur sur P0)
     */
    //% blockId=portail_ouvrir
    //% block="ouvrir le portail"
    export function ouvrir_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
    }

    /**
     * fermer le portail (moteur sur P0)
     */
    //% blockId=portail_fermer
    //% block="fermer le portail"
    export function fermer_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
    }
	
	/**
     * arrêter le portail (moteur sur P0)
     */
    //% blockId=portail_arreter
    //% block="arreter le portail"
    export function arreter_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
    }

	/**
     * allumer le gyrophare (branché sur P14)
     */
    //% blockId=allum_gyro
    //% block="allumer le gyrophare"
    export function allumer_gyro(): void {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
	
	/**
     * éteindre le gyrophare (branché sur P14)
     */
    //% blockId=etein_gyro
    //% block="éteindre le gyrophare"
    export function eteindre_gyro(): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
	
	/**
     * Etat du fin de course ouvert sur P1
     */
    //% blockId=FCO
    //% block="etat fin de course ouvert (0 ou 1)"
    export function FCO(): number {
		return pins.digitalReadPin(DigitalPin.P1);
    }
	
	/**
     * renvoie vrai si le portail est ouvert en entier (FCO sur	 P1)
     */
    //% blockId=PO_entier
    //% block="le portail est ouvert en entier (vrai ou faux)"
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
     * Faire pivoter à gauche le robot à vitesse maximum (P0/P14)
     */
    //% blockId=robot_PGG
    //% block="Pivoter vers la g"
    export function PG(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 180);
		}
		
		/**
     * Faire pivoter à droite le robot à vitesse maximum (P0/P14)
     */
    //% blockId=robot_PDD
    //% block="Pivoter vers la d"
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
    //% subcategory="gestion avancée des moteurs"
    //% blockId=robot_PD90
    //% block="Pivoter vers la droite de 90°"
    export function PD(): void {
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
     * avancer à une vitesse variable en pourcentage (P0/P14)
	 * 100% = vitesse maximum
     */
    //% subcategory="gestion avancée des moteurs"
    //% blockId=robot_vitvar
    //% block="Avancer à la vitesse %speed|%"
    //% speed.min=0 speed.max=100
    export function avancervitvar(speed: number): void {
        /*first convert 0-100 to 0-90*/
        let OutputVal = Math.clamp(0, 100, speed) * 0.9;
		let OutputVal2= 90 - OutputVal;
		pins.servoWritePin(AnalogPin.P0, OutputVal2);
		let OutputVal2= OutputVal + 90;
        pins.servoWritePin(AnalogPin.P14, OutputVal2);
		     
    }
    
	
	/**
     * gestion des deux moteurs à une vitesse variable en pourcentage (P0/P14)
	 * 100% = vitesse maximum
     */
    //% subcategory="gestion avancée des moteurs"
    //% blockId=robot_motvitvar
    //% block="moteur gauche vitesse %speed| % et moteur droit vitesse %speed2| %"
    //% speed.min=0 speed.max=100
	//% speed2.min=0 speed2.max=100
    export function avancermotvitvar(speed: number, speed2: number): void {
        /*first convert 0-100 to 0-90*/
        let OutputVal = Math.clamp(0, 100, speed) * 0.9;
		let OutputVal2= 90 - OutputVal;
		pins.servoWritePin(AnalogPin.P0, OutputVal2);
		let OutputVal = Math.clamp(0, 100, speed2) * 0.9;
		let OutputVal2= OutputVal + 90;
        pins.servoWritePin(AnalogPin.P14, OutputVal2);
		     
    }
	
	/**
     * Etat du capteur de vide sur P15
     */
	 //% subcategory="détection du vide"
    //% blockId=vide
    //% block="etat du capteur de vide (0 ou 1)"
    export function capt_vide(): number {
		return pins.digitalReadPin(DigitalPin.P15);
    }
	
	
	
}

