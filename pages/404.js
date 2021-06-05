import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import Link from "next/link";
import NotFoundAnimation from '../404Lottie-Animation.json'
import LottieAnimation from "@/components/Lottie";

function NotFoundPage() {
  return (
    <Layout title="Page Not Found | Musical Events">
      <div className={styles.error}>
          <LottieAnimation lotti={NotFoundAnimation} height="50vh" width="100%" styleProp={{marginLeft: "25px"}} />
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
