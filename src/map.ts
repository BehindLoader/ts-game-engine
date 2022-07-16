import {BaseGameObject} from "./objects/base";
import {objectOverObject, pointInSquare} from "./collision";

export class GameMap {
    private objects: BaseGameObject[]
    private cameraPosition: {
        x: number,
        y: number,
        resolutionWidth: number,
        resolutionHeight: number,
    }

    constructor() {
        this.objects = []
        this.cameraPosition = { // FIXME
            x: 0,
            y: 0,
            resolutionWidth: 150,
            resolutionHeight: 150,
        }
    }

    public register(object: BaseGameObject) {
        this.objects.push(object);
    }

    public getAllObjects(): BaseGameObject[] {
        return this.objects;
    }

    public getVisibleObjects(): BaseGameObject[] {
        return this.objects.filter((object) => {
            const [[objectX, objectY], [objectWidth, objectHeight]] = object.getVisibilityBorders();
            const objectSquare: [number, number, number, number] = [objectX, objectY, objectWidth, objectHeight]

            const leftTopPoint: [number, number] = [objectX, objectY];
            const leftBottomPoint: [number, number] = [objectX, objectY + objectHeight];
            const rightTopPoint: [number, number] = [objectX + objectWidth, objectY];
            const rightBottomPoint: [number, number] = [objectX + objectWidth, objectY + objectHeight];

            const visibleSquare: [number, number, number, number] = [
                this.cameraPosition.x,
                this.cameraPosition.y,
                this.cameraPosition.resolutionWidth,
                this.cameraPosition.resolutionHeight,
            ];

            return pointInSquare(leftTopPoint, visibleSquare) ||
                pointInSquare(leftBottomPoint, visibleSquare) ||
                pointInSquare(rightTopPoint, visibleSquare) ||
                pointInSquare(rightBottomPoint, visibleSquare) ||
                objectOverObject(objectSquare, visibleSquare)
        });
    }

    public getDrawDataFromObject(object: BaseGameObject): DrawData {
        let draw_data = object.handleRender();
        draw_data.destinationCenterX = (this.cameraPosition.x + draw_data.destinationCenterX) * window.innerWidth / this.cameraPosition.resolutionWidth;
        draw_data.destinationCenterY = (this.cameraPosition.y + draw_data.destinationCenterY) * window.innerHeight / this.cameraPosition.resolutionHeight;
        draw_data.destinationWidth *= window.innerWidth / this.cameraPosition.resolutionWidth;
        draw_data.destinationHeight *= window.innerHeight / this.cameraPosition.resolutionHeight;
        return draw_data;
    }
}
