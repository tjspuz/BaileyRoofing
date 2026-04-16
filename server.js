const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 4173);
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function send(res, statusCode, body, contentType) {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(body);
}

function resolvePath(urlPath) {
  const cleaned = decodeURIComponent(urlPath.split("?")[0]);
  const requested = cleaned === "/" ? "/index.html" : cleaned;
  const absolute = path.normalize(path.join(root, requested));

  if (!absolute.startsWith(root)) {
    return null;
  }

  return absolute;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url || "/");
  if (!filePath) {
    send(res, 403, "Forbidden", "text/plain; charset=utf-8");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === "ENOENT") {
        send(res, 404, "Not Found", "text/plain; charset=utf-8");
        return;
      }

      send(res, 500, "Server Error", "text/plain; charset=utf-8");
      return;
    }

    const type = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    send(res, 200, data, type);
  });
});

server.listen(port, () => {
  console.log(`Bailey Roofing prototype running at http://localhost:${port}`);
});
