import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBQC2JN"
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
