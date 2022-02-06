class MyButton extends HTMLElement {
  
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.getElementById("btn").content.cloneNode(true);
    shadowRoot.appendChild(template);
  }

  //   component attributes
  static get observedAttributes() {
    return ["bordercolor", "textcolor"];
  }

  //   component attribute changed
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  //   Connect component to the DOM
  connectedCallback() {
      this.shadowRoot.firstElementChild.nextElementSibling.firstElementChild.style.border = `2px solid ${this.bordercolor}`;
      this.shadowRoot.firstElementChild.nextElementSibling.firstElementChild.style.color = `${this.textcolor}`;
  }
}

export default MyButton;