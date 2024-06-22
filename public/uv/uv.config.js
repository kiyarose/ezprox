/*global Ultraviolet*/
self.__uv$config = {
  prefix : "/service/",
  bare : "/bare/",
  // Replace these lines
  encodeUrl : function(url) {
    // Remove leading https:// if present
    url = url.replace(/^https?:\/\/+/, "");
    return url;
  },
  decodeUrl : function(url) {
    // Add https:// if not present
    if (!url.startsWith("https://")) {
      url = "https://" + url;
    }
    return url;
  },
  handler : "/uv/uv.handler.js",
  client : "/uv/uv.client.js",
  bundle : "/uv/uv.bundle.js",
  config : "/uv/uv.config.js",
  sw : "/uv/uv.sw.js",
};
