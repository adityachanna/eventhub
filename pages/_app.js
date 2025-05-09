import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

// Import test utility to make it available in browser console
import "../utils/firestoreTest";

// Import Firestore check
import "../utils/checkFirestore";
import "../utils/firestoreDebugger";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
