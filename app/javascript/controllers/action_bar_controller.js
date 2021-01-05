import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["deleteButtonLabel", "checkbox", "taskIds", "bar"]
  static values = { batchDestroyUrl: String }
  
  connect() {
    this.update();
  }

  update() {
    this.barTarget.classList.toggle('inactive', this.countSelected == 0)
    this.deleteButtonLabelTarget.innerText = `Delete (${this.countSelected})`;
  }

  check() {
    this.update()
  }

  deleteTasks(ev) {
    const ids = this.selectedTasks.map(el => el.value);
    this.taskIdsTarget.value = ids;
  }

  get selectedTasks() {
    return this.checkboxTargets.filter(el => el.checked);
  }

  get countSelected() {
    return this.selectedTasks.length;
  }
}
