interface eventClassResponseInterface{
  unsubscribe: () => void
}

interface eventClassInterface {
  name: string
}

interface eventPublishInterface {
  constructor: {
    name: string
  },
}

interface eventSuscribeInterface extends Event {
  detail: never
}


export function subscribe(eventClass:eventClassInterface, handler: (event: Event) => void): eventClassResponseInterface{
  const sugar = function (event: Event) {
    const eventCustom = event as eventSuscribeInterface
    handler(eventCustom.detail);
  };
  document.addEventListener(eventClass.name, sugar, { passive: true });
  return {
    unsubscribe: function unsubscribe() {
      document.removeEventListener(eventClass.name, sugar);
    },
  };
}

export function publish(event: eventPublishInterface ) {
  const nativeEvent = new CustomEvent(event.constructor.name, {
    detail: {...event},
  });
  document.dispatchEvent(nativeEvent);
}