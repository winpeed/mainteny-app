import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, session, pageProps }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        {" "}
        <>
          <Head>
            <title>MaintenyUni - An application by winpeed</title>
            <meta name="description" content="An application by winpeed" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
