// web component
class NavItem extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.getElementById("nav").content.cloneNode(true);
    shadowRoot.appendChild(template);
  }

  // component attributes
  static get observedAttributes() {
    return ["txt"];
  }

  // attribute change
  attributeChangedCallback(prop, oldVal, newVal) {
    if (oldVal === newVal) return;
    this[prop] = newVal;
  }

  // connect component
  connectedCallback() {
    if (!this.hasAttribute("txt")) {
      this.setAttribute("txt", "Lorem, Ipsum, Dolor");
    }
    this.shadowRoot.firstElementChild.nextElementSibling.addEventListener('slotchange', (e) => {
      Array.from(e.target.assignedElements()).forEach((list, ind) => list.innerHTML = `<a href="#">${this.txt.split(', ')[ind]}</a>`);
    })
  }
}

export default NavItem;
