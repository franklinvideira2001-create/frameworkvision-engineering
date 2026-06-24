import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-PT">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A1633" />
        <title>FrameworkVision Engineering</title>
        <meta name="description" content="Plataforma SaaS inteligente para Engenharia, Arquitetura e Construção" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
