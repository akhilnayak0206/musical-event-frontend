import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import Showcase from "./Showcase";

function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {router.pathname === "/" && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Musical Events | Find the coolest parties",
  description: "Find the latest DJ, EDM and other musical events",
  keywords: "music, dj, edm, events",
};

export default Layout;
