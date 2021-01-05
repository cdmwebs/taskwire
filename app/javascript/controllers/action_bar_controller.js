import {Turbo} from "@hotwired/turbo-rails"
import { Controller } from "stimulus"

  static targets = ["deleteButtonLabel"]
export default class extends Controller {
  
  connect() {
    this.update();
  }
  
  subscribe() {
	  return [
		  tasks.subscribe(() => this.update())
	  ]
  }
  
  update() {
    const {selectedId} = tasks.getState();
    this.element.classList.toggle('inactive', !selectedId);
    
    const countSelected = selectedId ? 1 : 0;
    this.deleteButtonLabelTarget.innerText = `Delete (${countSelected})`;
  }
  
  deleteTasks() {
    const {selectedId} = tasks.getState();
    const ids = [selectedId].join(",");
    Turbo.visit(`/tasks/batch_destroy?ids=${ids}`);
    tasks.setState({selectedId: undefined});
  }
}
