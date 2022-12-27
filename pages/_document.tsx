import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../component/footer';
import Title from '../component/title';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="container-fluid bg-dark">
        <Title />
        <div className="container mb-3" style={{ minHeight: '80vh' }}>
          <Main />
          <NextScript />
        </div>
      </body>
      <Footer />
    </Html>
  );
}
