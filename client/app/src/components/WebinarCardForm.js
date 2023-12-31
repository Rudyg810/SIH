import styles from "./WebinarCardForm.module.css";

const WebinarCardForm = () => {
  return (
    <div className={styles.webinar}>
      <div className={styles.webinarChild} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <div className={styles.learnWithExpertsParent}>
        <b className={styles.learnWithExperts}>Learn with experts</b>
        <div className={styles.atEcoengageplayWe}>
          At EcoEngagePlay, we believe in the power of collaboration to drive
          positive change.
        </div>
        <div className={styles.groupChild} />
        <button className={styles.learnMore}>learn more</button>
      </div>
      <img
        className={styles.webinarItem}
        alt=""
        src="/rectangle-34624111@2x.png"
      />
    </div>
  );
};

export default WebinarCardForm;
