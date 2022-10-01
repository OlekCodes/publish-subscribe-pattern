import { FormComponent } from './form-component.js';
import { NameComponent } from './name-component.js';
import { AgeComponent } from './age-component.js';
import { Bus } from './bus.js';

const bus = new Bus();
new FormComponent(bus); // publisher
new NameComponent(bus); // subscriber
new AgeComponent(bus);  // subscriber
