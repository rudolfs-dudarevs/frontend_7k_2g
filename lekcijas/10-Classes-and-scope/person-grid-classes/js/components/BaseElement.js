export class BaseElement {
    constructor(tagName, className) {
        this.tagName = tagName;
        this.className = className;
        this.baseElement;
        this.createBaseElement();
    }

    createBaseElement() {
        this.baseElement = document.createElement(this.tagName);
        this.baseElement.classList.add(this.className);
    }

    addText(text) {
        this.baseElement.innerText = text;
    }

    render(container) {
        container.append(this.baseElement);
    }
}