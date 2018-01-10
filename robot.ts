namespace profdetech {

	/************************************************************************************************************************************************
	* micro:bit mouronval
	************************************************************************************************************************************************/

        /**
     * avancer
     */
    //% subcategory=robot
    //% blockId=robot_avancer
    //% block="avancer"
    export function avancer(): void {
        pins.servoWritePin(AnalogPin.P0, 0);
        pins.servoWritePin(AnalogPin.P14, 180);
    }

    