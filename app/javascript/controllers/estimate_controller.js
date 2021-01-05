import { Controller } from "stimulus"
import { previousItem, nextItem } from "../helpers/array_helpers";

export default class extends Controller {
  static targets = ["value", "input", "estimates"];
  // static values = {value: String};
  
  connect() {  
    this.estimate = this.selectedEstimate.text;
    this.update();
  }
  
  update() {
    this.valueTarget.innerText = this.estimate;
    this.selectedEstimate = this.estimate
  }
  
  handleMinus() {
    this.estimate = previousItem(this.availableEstimates, this.estimate);
    this.update();
  }
  
  handlePlus() {
    this.estimate = nextItem(this.availableEstimates, this.estimate);
    this.update();
  }

  get availableOptions() {
    return Array.from(this.estimatesTarget.options);
  }

  get availableEstimates() {
    return this.availableOptions.map(el => el.text);
  }

  get selectedEstimate() {
    return this.availableOptions.find(el => el.selected);
  }

  set selectedEstimate(estimate) {
    this.estimatesTarget.selectedIndex =
      this.availableOptions.findIndex(o => o.text == estimate)
  }
}

