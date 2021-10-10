import { handle } from './handleRequest';

test('the response should return hello', () => {
    const promise = Promise.resolve('hello');
    return handle(promise).then(([data, _]) => {
        expect(data).toBe('hello');
    });
});

test('the response should return an error', () => {
    const err = new Error('Failed to load');
    const promise = Promise.reject(err);
    return handle(promise).then(([_, error]) => {
        expect(error).toBe(err);
    });
});
