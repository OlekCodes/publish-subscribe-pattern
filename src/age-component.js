import { Event } from './event.js';

export class AgeComponent {
    constructor(bus) {
        this.bus = bus
        this.onCreate();
    }

    onCreate() {
        this.bus.subscribe(Event.SUBMIT_FORM, (formData) => {
            console.log('AgeComponent subscriber notified');
            document.querySelector('.age').textContent = `Age: ${formData.age}`;
        });
    }
}
