import {unwrapOptional} from "./utils";

/**
 * Интерфейс взаимодействия с Canvas context API
 *
 * @group System
 */
export class Canvas {
    private htmlElement: HTMLCanvasElement;
    private canvasDrawContext: CanvasRenderingContext2D;

    constructor(html_element: HTMLCanvasElement) {
        this.htmlElement = html_element;
        this.canvasDrawContext = unwrapOptional(this.htmlElement.getContext("2d"));
    }

    public resizeWindow() {
        this.htmlElement.width = window.innerWidth;
        this.htmlElement.height = window.innerHeight;
    }

    public clearCanvas() {
        this.canvasDrawContext.imageSmoothingEnabled = false;
        this.canvasDrawContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    public drawSpriteFrame(
        source: CanvasImageSource,
        sourceX: number,
        sourceY: number,
        sourceWidth: number,
        sourceHeight: number,
        destinationX: number,
        destinationY: number,
        destinationWidth: number,
        destinationHeight: number,
    ) {
        this.canvasDrawContext.drawImage(
            source,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            destinationX,
            destinationY,
            destinationWidth,
            destinationHeight,
        );
    }
}
