// Otra forma:

let fifteen = Promise.resolve(15);

fifteen.then((value) => console.log(`Got ${value}`)); // Got 15

// Ejemplo:
function storage(nest, name) {
  return new Promise((resolve) => {
    nest.readStorage(name, (result) => resolve(result));
  });
}

storage(bigOak, "enemies").then((value) => console.log("Got", value));

new Promise((_, reject) => rejected(new Error("Fail")))
  .then((value) => console.log("Handler 1"))
  .catch((reason) => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then((value) => console.log("Handler 2", value));
// --> Caught failure Error: Fail
// --> Handler 2 nothing

function requestType(name, handle) {
  defineRequestType(name, (nest, content, source, callback) => {
    try {
      Promise.resolve(handler(nest, content, source)).then(
        (response) => callback(null, response),
        (failure) => callback(failure)
      );
    } catch (exception) {
      callback(exception);
    }
  });
}

// Collection of promises:
requestType("ping", () => "pong"),
  function availableNeighbors(nest) {
    let requests = nest.neightbors.map((neightbor) => {
      return request(nest, neightbor, "ping").then(
        () => true,
        () => false
      );
    });
    return Promise.all(requests).then((result) => {
      return nest.neightbors.filter((_, i) => result[i]);
    });
  };
