import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Bootstrap CSS from CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />

        {/* Custom script with 'async' or 'defer' */}
        <script
          src="https://example.com/script.js"
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Bootstrap JS with 'defer' to avoid blocking rendering */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </body>
    </Html>
  );
}
