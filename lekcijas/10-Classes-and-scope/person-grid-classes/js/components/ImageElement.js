import { BaseElement } from "./BaseElement.js";

export class ImageElement extends BaseElement {
    constructor(src, className) {
        super("img", className);
        this.baseElement.src = src;
    }
}