
class EventMessage {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

class GameEventNotifier {
  handlers = [];
  event = new EventMessage('No one', 0);

  broadcastEvent(name, score) {
    const event = new EventMessage(name, score);
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
