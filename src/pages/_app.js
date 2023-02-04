import '@styles/global.css';
import Header from "@components/header"
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

