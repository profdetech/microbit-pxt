namespace profdetech {

	/************************************************************************************************************************************************
	* micro:bit mouronval
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
    export function avancer(): void {
        pins.servoWritePin(AnalogPin.P0, 180);
        pins.servoWritePin(AnalogPin.P14, 0);
    }
	
	/**
     * Faire tourner à droite le robot
     */
    //% subcategory=robot
    //% blockId=robot_TD
    //% block="Tourner_a_droite"
    export function TD(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 90);
    }

    /**
     * Faire tourner à gauche le robot
     */
    //% subcategory=robot
    //% blockId=robot_TG
    //% block="Touner_a_gauche"
    export function TG(): void {
        pins.servoWritePin(AnalogPin.P0, 90);
        pins.servoWritePin(AnalogPin.P14, 180);
    }
}