import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["editLink"];
  
  edit() {
    this.editLinkTarget.click()
  }
}

