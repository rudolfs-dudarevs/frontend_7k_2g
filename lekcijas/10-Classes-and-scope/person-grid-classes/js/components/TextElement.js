import { BaseElement } from "./BaseElement.js";

export class TextElement extends BaseElement {
    constructor(text, className) {
        super("p", className);
        this.addText(text);
    }
}