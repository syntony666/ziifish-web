import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Introduce from '../component/introduce';

export default function Home() {
  const title = '姊妹小舖';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Introduce />
    </>
  );
}
