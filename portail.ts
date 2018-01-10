namespace profdetech {

	/************************************************************************************************************************************************
	* micro:bit M. MOURONVAL
	************************************************************************************************************************************************/

    /**
     * ouvrir le portail (moteur sur P0)
     */
    //% subcategory=portail
    //% blockId=portail_ouvrir
    //% block="ouvrir le portail"
    export function ouvrir(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
    }

    /**
     * fermer le portail (moteur sur P0)
     */
    //% subcategory=portail
    //% blockId=portail fermer
    //% block="fermer le portail"
    export function fermer(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
    }
	
	/**
     * arrêter le portail (moteur sur P0)
     */
    //% subcategory=portail
    //% blockId=portail_arreter
    //% block="arreter le portail"
    export function PD(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
    }

    
}