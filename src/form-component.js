import { Event } from './event.js';

export class FormComponent {
    constructor(bus) {
        this.bus = bus;
        this.onCreate();
    }

    onCreate() {
        document.querySelector('.form__btn').addEventListener('click', () => {
            const name = document.querySelector('.form__name').value
            const age = document.querySelector('.form__age').value
            this.submitForm(name, age)
        });
    }

    submitForm(name, age) {
        console.log(`Publishing ${Event.SUBMIT_FORM}`)
        this.bus.publish(Event.SUBMIT_FORM, { name, age });
    }
}
