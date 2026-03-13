export default {
  async fetch(request) {
    const url = new URL(request.url);
    const actualUrl = 'https://api.telegram.org' + url.pathname + url.search;
    
    const modifiedRequest = new Request(actualUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    
    return fetch(modifiedRequest);
  }
}
