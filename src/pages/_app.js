import '@styles/global.css';
import Script from 'next/script';
import Header from '@components/header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YOUR GOOGLE ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YKNPYBQ0ZC');
          `}
            </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
