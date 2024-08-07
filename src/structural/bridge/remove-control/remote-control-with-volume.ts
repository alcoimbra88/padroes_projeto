import { DeviceImplementation } from "../device/device-implementation";
import { RemoveControl } from "./remote-control";

export class RemoveControlWithVolume extends RemoveControl{

    volumeUp(): void{
        const oldVolume = this.device.getVolume()
        this.device.setVolume(this.device.getVolume() + 10)
        console.log(
            `${this.device.getName()} tinha o volume em ${oldVolume}, agora tem ${this.device.getVolume()}`
        )
    }

    volumeDown(): void{
        const oldVolume = this.device.getVolume()
        this.device.setVolume(this.device.getVolume() - 10)
        console.log(
            `${this.device.getName()} tinha o volume em ${oldVolume}, agora tem ${this.device.getVolume()}`
        )
    }

}