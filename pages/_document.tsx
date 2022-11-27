import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  } 
  render() {
    return (
      <Html lang='pl-PL'>
        <Head />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8'/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument