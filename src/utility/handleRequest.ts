export function handle(promise: Promise<any>) {
    return promise.then((data) => [data, undefined]).catch((err) => Promise.resolve([undefined, err]));
}
