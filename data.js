export default {
  async fetch(request) {
    let url = new URL(request.url);
    let text = url.searchParams.get("t") || "Default Text"; // Ambil parameter t

    let html = `<!DOCTYPE html>
    <html lang="id">
    <head><title>Contoh Cloudflare Workers</title></head>
    <body>
      <h1>${text}</h1> <!-- Menampilkan nilai t -->
    </body>
    </html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
