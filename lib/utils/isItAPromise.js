export default (something) =>
    (something instanceof Promise) ||
    (something && (something.then && something.catch));
