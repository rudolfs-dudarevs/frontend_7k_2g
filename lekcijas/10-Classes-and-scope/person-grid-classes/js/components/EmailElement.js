import { BaseElement } from "./BaseElement.js";

export class EmailElement extends BaseElement {
    constructor(email, className) {
        super("a", className);
        this.formattedEmail = `mailto:${email}`;
        this.baseElement.href = this.formattedEmail;
        this.addText(email);
    }
}