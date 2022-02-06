class FooterLinks extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const template = document.getElementById("footer-links").content.cloneNode(true);
        shadowRoot.appendChild(template);
      }
    
      // component attributes
      static get observedAttributes() {
        return ["heading", "lists"];
      }
    
      // attribute change
      attributeChangedCallback(prop, oldVal, newVal) {
        if (oldVal === newVal) return;
        this[prop] = newVal;
      }
    
      // connect component
      connectedCallback() {
        this.shadowRoot.firstElementChild.nextElementSibling.addEventListener('slotchange', (e) => {
            Array.from(e.target.assignedElements()).forEach((list, ind) => {
                list.innerHTML = `<a href="#">${this.lists.split(', ')[ind].toUpperCase()}</a>`
            })
        })
        this.shadowRoot.firstElementChild.nextElementSibling.firstElementChild.textContent = this.heading.toUpperCase()
      }
}

export default FooterLinks;