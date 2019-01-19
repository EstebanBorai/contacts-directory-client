class API {
  constructor(controller) {
    this.url = API_URL && API_URL.concat(controller); // eslint-disable-line
  }

  /**
   *
   * @param {string} params - Request params
   * @param {object} options  - Request options
   * @param {object} [options.body] - Define the request body
   * @param {string} [options.contentType=application/json] - Define ContentType header
   * @param {string} [options.method=GET] - Define request method
   */
  async request(params, options) {
    return await fetch(params ? this.url.concat('/' + params) : this.url, {
      method: (options && options.method) || 'GET',
      headers: {
        'Content-Type': (options && options.contentType) || 'application/json'
      },
      body: options && options.body ? JSON.stringify(options.body) : undefined
    })
      .then(res => {
        if (!res.ok) {
          throw res.json();
        }
        return res.json();
      })
      .catch(error => {
        throw error;
      });
  }
}

export default API;
