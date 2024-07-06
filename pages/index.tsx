import type { NextPage } from "next";
import ShareYourTravelsForm from "../components/share-your-travels-form";
import styles from "./index.module.css";

const DemoForm: NextPage = () => {
  return (
    <div className={styles.demoForm3}>
      <div className={styles.dRenderingIsometricFdgdf2Parent}>
        <img
          className={styles.dRenderingIsometricFdgdf2Icon}
          alt=""
          src="/3drenderingisometricfdgdf-2@2x.png"
        />
        <ShareYourTravelsForm />
      </div>
      <div className={styles.demoForm3Inner}>
        <div className={styles.poweredByParent}>
          <div className={styles.poweredBy}>powered by</div>
          <img
            className={styles.letterLogo2}
            alt=""
            src="/letter-logo-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
