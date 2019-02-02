import API from 'api/API';
const fetchMock = require('fetch-mock');

describe('test API class', () => {
  global.console = {
    error: jest.fn()
  }
  
  it('it fetches and returns a sample object', () => {
    window.__contacts__API__URL = 'api-url-1';
    fetchMock.get('api-url-1', { foo: 'bar' });
    const api = new API();
    api.request()
      .then(data => expect(data).toEqual({ foo: 'bar' }))
      .catch(error => console.error(error));
  });
});
