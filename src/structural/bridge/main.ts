import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoveControl } from "./remove-control/remote-control";
import { RemoveControlWithVolume } from "./remove-control/remote-control-with-volume";

function clientCode(abstraction: RemoveControl | RemoveControlWithVolume){

    abstraction.togglePower()

    // Type Guard
    if(!('volumeUp' in abstraction)) return;

    abstraction.volumeUp()
    abstraction.volumeUp()
    abstraction.volumeDown()

}

const tv = new Tv
const radio = new Radio
const radioRemoteControl = new RemoveControlWithVolume(radio)

clientCode(radioRemoteControl)

const tvRemoteControl = new RemoveControlWithVolume(tv)

clientCode(tvRemoteControl)