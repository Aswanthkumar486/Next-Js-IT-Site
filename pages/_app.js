// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional if you're using CDN in _document.js
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
