class Card extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const template = document.getElementById("card").content.cloneNode(true);
        shadowRoot.appendChild(template);
      }
    
      // component attributes
      static get observedAttributes() {
        return ["icon", "perk", "text"];
      }
    
      // attribute change
      attributeChangedCallback(prop, oldVal, newVal) {
        if (oldVal === newVal) return;
        this[prop] = newVal;
      }
    
      // connect component
      connectedCallback() {
        this.shadowRoot.firstElementChild.nextElementSibling.querySelector('.bx').classList.add(`${this.icon}`);
        this.shadowRoot.firstElementChild.nextElementSibling.querySelector('.card__title').textContent = this.perk;
        this.shadowRoot.firstElementChild.nextElementSibling.querySelector('.card__text').textContent = this.text;
      }
}

export default Card;