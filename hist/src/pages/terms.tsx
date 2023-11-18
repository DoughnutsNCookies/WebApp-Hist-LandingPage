import Head from "next/head";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import TermsContent from "./terms/TermsContent";

const Terms = () => {
    return (
        <main>
            <Head>
                <title>Hist Terms of Use</title>
                <meta name="title" content="Hist" />
                <meta name="description" content="Connecting Users with Providers" />
                <meta name="keywords" content="hist healtcare booking" />
                <meta name="author" content="Sean Chuah Tse Yung" />
                <meta name="theme-color" content="#FFFFFF" />

                <meta property="og:title" content="Hist" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
                <meta property="og:description" content="Connecting Users with Providers" />

                <meta property="twitter:title" content="Hist" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:image" content="" />
                <meta property="twitter:description" content="Connecting Users with Providers" />
            </Head>
            <NavBar/>
            <TermsContent/>
            {/* <Footer/> */}
        </main>
    )
}

export default Terms