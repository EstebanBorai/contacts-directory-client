class API {
  constructor(controller) {
    this.url = API_URL && API_URL.concat(controller); // eslint-disable-line
  }

  /**
   * Adds a final "/" (slash) to the request URL
   * if it's missing.
   */
  get requestURL() {
    if (this.url.endsWith('/')) {
      return this.url;
    } else {
      return this.url + '/';
    }
  }

  /**
   *
   * @param {string} params - Request params
   * @param {object} options  - Request options
   * @param {string} [options.contentType=application/json] - Define ContentType header
   * @param {string} [options.method=GET] - Define request method
   */
  request(params, options) {
    const headers = new Headers({
      'Content-Type': 'application/json' || (options && options.contentType)
    });

    return fetch(params ? this.requestURL.concat(params) : this.requestURL, {
      method: 'GET' || (options && options.method),
      headers
    }).then(res => {
      if (!res.ok) {
        throw res.json();
      }
      return res.json();
    });
  }
}

export default API;
