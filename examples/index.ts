import { Engine } from "../src/lib";
import {KeyProperties} from "../src/keyboardEmitter";
import {BaseEntity} from "../src/entities/base";
import {PlayableObject} from "../src/entities/playableObject";

class Player extends PlayableObject {
    onRender(): void {
        //
    }

    onStep(keyboard: KeyProperties): void {
        //
    }

}

class OtherObject extends BaseEntity {
    onRender(): void {
    }

    onStep(keyboard: KeyProperties): void {
    }

}

document.addEventListener("DOMContentLoaded", function(_) {
    const e = new Engine(<HTMLCanvasElement>document.getElementById("canvas"));
    const p = new Player({});
    e.register(p);
    for (var _i = 0; _i < 100; _i++) {
        const o = new OtherObject({
            position: {
                x: _i * 50,
                y: 50,
            }
        });
        e.register(o);
    }
});
