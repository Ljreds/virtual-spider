
class EventMessage {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class GameEventNotifier {
  handlers = [];
  event = new EventMessage('No one', 0);

  broadcastEvent(from, value) {
    const event = new EventMessage(from, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.event = event;

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }

}

const GameNotifier = new GameEventNotifier();
export { GameNotifier };
