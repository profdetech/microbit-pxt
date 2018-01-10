namespace profdetech {

	/************************************************************************************************************************************************
	* micro:bit M. MOURONVAL
	************************************************************************************************************************************************/

    /**
     * Faire avancer le robot
     */
    //% subcategory=robot
    //% blockId=robot_avancer
    //% block="avancer"
    export function avancer(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 180);
    }

    /**
     * Faire reculer le robot
     */
    //% subcategory=robot
    //% blockId=robot_reculer
    //% block="reculer"
    export function reculer(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
        pins.servoWritePin(AnalogPin.P14, 0);
    }
	
	/**
     * Faire pivoter à droite le robot à vitesse maximum
     */
    //% subcategory=robot
    //% blockId=robot_PD
    //% block="Pivoter vers la droite"
    export function PD(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 90);
    }

    /**
     * Faire pivoter à gauche le robot à vitesse maximum
     */
    //% subcategory=robot
    //% blockId=robot_PG
    //% block="Pivoter vers la gauche"
    export function PG(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 180);
    }
}