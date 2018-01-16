namespace profdetech {

	/************************************************************************************************************************************************
	* micro:bit / :MOURONVAL blocks
	************************************************************************************************************************************************/

	/*variables et constantes */
	
	
	
	
	/**
     * Arrêter le robot (P0/P14)
     */
    //% subcategory=robot
    //% blockId=robot_stop
    //% block="arrêter"
    export function arreter(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 90);
	}
	
	
    /**
     * Faire avancer le robot (P0/P14)
     */
    //% subcategory=robot
    //% blockId=robot_avancer
    //% block="avancer"
    export function avancer(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 180);
    }

    /**
     * Faire reculer le robot (P0/P14)
     */
    //% subcategory=robot
    //% blockId=robot_reculer
    //% block="reculer"
    export function reculer(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
        pins.servoWritePin(AnalogPin.P14, 0);
    }
	
	/**
     * Faire pivoter à droite le robot à vitesse maximum (P0/P14)
     */
    //% subcategory=robot
    //% blockId=robot_PD
    //% block="Pivoter vers la droite"
    export function PD(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 90);
    }

    /**
     * Faire pivoter à gauche le robot à vitesse maximum (P0/P14)
     */
    //% subcategory=robot
    //% blockId=robot_PG
    //% block="Pivoter vers la gauche"
    export function PG(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 180);
    }
	
	
	/**
     * ouvrir le portail (moteur sur P0)
     */
    //% subcategory=portail
    //% blockId=portail_ouvrir
    //% block="ouvrir le portail"
    export function ouvrir_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
    }

    /**
     * fermer le portail (moteur sur P0)
     */
    //% subcategory=portail
    //% blockId=portail_fermer
    //% block="fermer le portail"
    export function fermer_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
    }
	
	/**
     * arrêter le portail (moteur sur P0)
     */
    //% subcategory=portail
    //% blockId=portail_arreter
    //% block="arreter le portail"
    export function arreter_portail(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
    }

	/**
     * allumer le gyrophare (branché sur P14)
     */
    //% subcategory=portail
    //% blockId=allum_gyro
    //% block="allumer le gyrophare"
    export function allumer_gyro(): void {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
	
	/**
     * éteindre le gyrophare (branché sur P14)
     */
    //% subcategory=portail
    //% blockId=etein_gyro
    //% block="éteindre le gyrophare"
    export function eteindre_gyro(): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
	
	/**
     * Etat du fin de course ouvert sur P1
     */
    //% subcategory=portail
    //% blockId=FCO
    //% block="etat fin de course ouvert (0 ou 1)"
    export function FCO(): number {
		return pins.digitalReadPin(DigitalPin.P1);
    }
	
	/**
     * renvoie vrai si le portail est ouvert en entier (FCO sur	 P1)
     */
    //% subcategory=portail
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
    //% subcategory=portail
    //% blockId=FCF
    //% block="etat fin de course fermé (0 ou 1)"
    export function FCF(): number {
		return pins.digitalReadPin(DigitalPin.P15);
    }
	
	/**
     * renvoie vrai si le portail est fermé est entier (FCF sur P15)
     */
    //% subcategory=portail
    //% blockId=PF_entier
    //% block="le portail est fermé en entier (vrai ou faux)"
    export function portail_ferme(): boolean {
		if (pins.digitalReadPin(DigitalPin.P15) == 1) {
            return false;
        } else return true;
    }
	
	
}