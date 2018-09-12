// Auto-generated. Do not edit.



    //% color=#00ffa6 weight=100
    //% icon="\uf1eb"
declare namespace Profdetech_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="Lorsque le bouton |%btn| est pressé" shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connecter le capteur infrarouge sur le port %pin" shim=IR::init
    function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
