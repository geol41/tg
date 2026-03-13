export default {
  async fetch(request) {
    const url = new URL(request.url);
    const actualUrl = 'https://api.telegram.org' + url.pathname + url.search;
    return fetch(actualUrl, request);
  }
}
