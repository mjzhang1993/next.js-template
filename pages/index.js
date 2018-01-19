import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import Link from 'next/link';
import initializeStore from '../store/initializeStore';

const Basic = () => (
   <div>
      <Head>
         <title>index page</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div>this is index page</div>
      <Link href="/about">
         <a>to about page</a>
      </Link>
   </div>
);

export default withRedux(initializeStore)(Basic);
