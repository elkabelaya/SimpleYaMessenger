import EventBus  from "../../../src/js/utils/event_bus/event_bus"

let eventBus:EventBus;

beforeEach(() => {
  eventBus = new EventBus();
});

afterEach(() => {
  
});

describe("EventBus", () => {
  it("on", () => {
    const mockCallback = jest.fn();
    eventBus.on("eventName", mockCallback);
    eventBus.emit("eventName");
    eventBus.emit("eventName");
    expect(mockCallback.mock.calls.length).toBe(2);
  });
  it("off", () => {
    const mockCallback = jest.fn();
    eventBus.on("eventName", mockCallback);
    eventBus.off("eventName", mockCallback);
    eventBus.emit("eventName");
    expect(mockCallback.mock.calls.length).toBe(0);
  });

});
