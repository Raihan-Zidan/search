export default {
  async fetch(request) {
    let url = new URL(request.url);
    let text = url.searchParams.get("t") || "Default Text";
    let q = url.searchParams.get("q") || "";

    let searchlang = ""; // Pastikan ini sesuai dengan kebutuhan
    let searchParam = ""; // Pastikan ini sesuai dengan kebutuhan

    let html = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Search Page</title>
    </head>
    <body>
      <div class="root">
        <div class="kwuND KwbMG"><div class="cbKRN"></div></div>
        <div class="xzBdP"></div>
        <div class="hVhvp BbmqH">
          <div class="KArDf">
            <div class="header">
              <div class="search-box">
                <div class="search-field">
                  <input type="search" value="${q}" id="sear_21829_input" name="q" class="search-input" autocorrect="off" autocomplete="off" autocapitalize="off" placeholder="Type to search...">
                  <div role="button" class="search-toggle"></div>
                  <div role="button" class="cleartext"></div>
                </div>
              </div>
              <div class="search-menu">
                <div class="search-item">
                  <a href="/search?q=${encodeURIComponent(q).replace(/%20/g, '+')}${searchlang}${searchParam}" class="tab-wrapper" tab-id="all">
                    <div class="label">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="#6e7780" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C2.68629 1 0 3.68629 0 7C0 10.3137 2.68629 13 6 13C7.64669 13 9.13845 12.3366 10.2226 11.2626L14.7873 14.8403C15.1133 15.0959 15.5848 15.0387 15.8403 14.7127C16.0958 14.3867 16.0387 13.9153 15.7126 13.6597L11.1487 10.0826C11.6892 9.18164 12 8.12711 12 7C12 3.68629 9.31371 1 6 1ZM1.5 7C1.5 4.51472 3.51472 2.5 6 2.5C8.48528 2.5 10.5 4.51472 10.5 7C10.5 9.48528 8.48528 11.5 6 11.5C3.51472 11.5 1.5 9.48528 1.5 7Z"></path>
                      </svg>
                      <span>All</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="QZjVU hWOQY">
            <div class="result-wrapper">
              <div class="main-result"></div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
  
