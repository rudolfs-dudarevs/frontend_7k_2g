import { BaseElement } from "./BaseElement.js";
import { ImageElement } from "./ImageElement.js";
import { TextElement } from "./TextElement.js";
import { EmailElement } from "./EmailElement.js";

export class PersonCard extends BaseElement {
    constructor(cardConfig) {
        super("div", "person-card");
        this.image = new ImageElement(cardConfig.image, "person-image").render(this.baseElement);
        this.name = new TextElement(cardConfig.name, "person-name").render(this.baseElement);
        this.nationality = new TextElement(cardConfig.nationality, "person-nationality").render(this.baseElement);
        this.email = new EmailElement(cardConfig.email, "person-email").render(this.baseElement);
        this.render(cardConfig.container);
    }
}