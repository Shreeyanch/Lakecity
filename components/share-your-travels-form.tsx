import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./share-your-travels-form.module.css";

export type ShareYourTravelsFormType = {
  className?: string;
};

const ShareYourTravelsForm: NextPage<ShareYourTravelsFormType> = ({
  className = "",
}) => {
  const onGoogleReviewClick = useCallback(() => {
    window.open("https://reviewthis.biz/lakecitycoffeee");
  }, []);

  const onTripAdvisorReviewClick = useCallback(() => {
    window.open(
      "https://www.tripadvisor.com/UserReviewEdit-g293891-d27138085-Lakecity_Coffee-Pokhara_Gandaki_Zone_Western_Region.html"
    );
  }, []);

  return (
    <div className={[styles.shareYourTravelsForm, className].join(" ")}>
      <form className={styles.form}>
        <button className={styles.googleReview} onClick={onGoogleReviewClick}>
          <img className={styles.ssoIcon} alt="" src="/sso-icon@2x.png" />
          <div className={styles.label}>Google Review</div>
        </button>
        <button
          className={styles.googleReview}
          onClick={onTripAdvisorReviewClick}
        >
          <img className={styles.ssoIcon} alt="" src="/sso-icon@2x.png" />
          <div className={styles.label}>TripAdvisor Review</div>
        </button>
      </form>
    </div>
  );
};

export default ShareYourTravelsForm;
