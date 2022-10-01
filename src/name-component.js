import { Event } from './event.js';

export class NameComponent {
    constructor(bus) {
        this.bus = bus;
        this.onCreate();
    }

    onCreate() {
        this.bus.subscribe(Event.SUBMIT_FORM, (formData) => {
            console.log('NameComponent subscriber notified');
            document.querySelector('.name').textContent = `Name: ${formData.name}`;
        });
    }
}
