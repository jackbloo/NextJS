import '../styles/globals.css'

function MyApp({ Component, pageProps, appProps }) {
  return <Component {...pageProps} {...appProps} />
}

MyApp.getInitialProps = async () => {
  return { appProps: []};
};

export default MyApp
