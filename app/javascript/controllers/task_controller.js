import { Controller } from "stimulus"
import {Turbo} from "@hotwired/turbo-rails"

export default class extends Controller {
  static values = {id: String, editUrl: String};
  static targets = ["editLink"];
  
  constructor(context) {
    super(context);
  }
  
  subscribe() {
    return [
      tasks.subscribe(() => this.update())
    ]
  }
  
  handleClick(ev) {
    if (ev.target != this.editLinkTarget) {
      ev.stopPropagation();  
    }
    
    tasks.setState({selectedId: this.idValue});
    this.update();
  }
  
  handleDoubleClick() {
    // console.log("edit link:", this.editLinkTarget);
    this.editLinkTarget.click();
    // const url = this.editUrlValue;
    // Turbo.visit(url);
  }
  
  update() {
    const selectedId = tasks.getState().selectedId;
    this.element.classList.toggle("selected", selectedId == this.idValue);
  }
}

