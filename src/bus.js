export class Bus {
    events = new Map(); // event -> Set of handlers

    subscribe(event, handler) {
        let handlers = this.events.get(event);

        if (handlers) handlers.add(handler);
        else handlers = new Set([handler]);

        this.events.set(event, handlers);
    }

    publish(event, data) {
        let handlers = this.events.get(event);
        if (handlers) {
            handlers.forEach(handler => {
                handler(data);
            });
        }
    }
}
