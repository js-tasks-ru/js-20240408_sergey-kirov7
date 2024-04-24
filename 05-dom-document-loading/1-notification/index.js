export default class NotificationMessage {
    static lastShownComponent;
    element;
    timerID;
    constructor(message, {
        duration,
        type,
    } = {}) {
      this.duration = duration;
      this.message = message;
      this.type = type;
      this.element = this.createElement(this.createTemplate());
    }

    createElement(template) {
      const element = document.createElement('div');

      element.innerHTML = template;

      return element.firstElementChild;
    }

    createTemplate() {
        return (`
            <div class="notification ${this.type}" style="--value:20s">
                <div class="timer"></div>
                <div class="inner-wrapper">
                    <div class="notification-header">${this.type}</div>
                    <div class="notification-body">
                        ${this.message}
                    </div>
                </div>
            </div>`);
    }

    show(outerElem = this.element) {
        if (NotificationMessage.lastShownComponent) {
            if (NotificationMessage.lastShownComponent.timerID) {
                NotificationMessage.lastShownComponent.destroy();
            }
            this.remove()
        }
        NotificationMessage.lastShownComponent = this;

        document.getElementById('btn1').after(outerElem);

        this.timerID = setTimeout(() => {
            this.remove();
        }, this.duration)
    }
    
    remove() {
      this.element.remove();
    }

    destroy() {
      this.remove();
      clearTimeout(this.timerID);
    }
}
