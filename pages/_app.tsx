import { AppProps } from 'next/app';
import Head from 'next/head';
// import Header from './layouts/Header.js';
// import Footer from './layouts/Footer.js';
import '../public/styles/globals.css';
import '../public/styles/k.css';

const App = ({ Component, pageProps }: AppProps):JSX.Element => {
  return (
    <>
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME}</title>
        <meta name="charset" content="utf-8"/>,
        <meta name="keywords" content={process.env.NEXT_PUBLIC_REACT_APP_KEYWORDS}/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
        <meta name="imageToolbar" content='no'/>
        <meta name="XUACompatible" content='IE=10,chrome=1'/>
        <meta name="robots" content="index, follow"/>
        <meta name="Author" content="이민호"/>
        <meta name="refresh" content="Split vertical out"/>
        <meta name="formatDetection" content="telephone=no"/>
      </Head>
    </div>
    {/* <BranchPcMobile/> */}
        {/* <Header/> */}
    {/* 서버와 브라우저의 랜더링 결과값이 일치하지 않을경우의 에러가 지속 발생중
        근데 컴포넌트 자체를 서버에서 랜더링 안시키는건 무의미한거같아
        컴포넌트 자체를 동일하게 랜더링하되,
        컴포넌트 내에서 브라우저 전용 API 사용시에만 오차가 나지않게
        서버 랜더링되지 않도록 처리하는게 맞을거같음 */}
    {/* <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div> */}
    <Component {...pageProps} />
    {/* <Footer/> */}
    </>
  );
}

export default App;