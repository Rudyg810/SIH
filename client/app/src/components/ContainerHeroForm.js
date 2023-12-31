import styles from "./ContainerHeroForm.module.css";

const ContainerHeroForm = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.heroChild} alt="" src="/rectangle-33@2x.png" />
      <b className={styles.recycleShop}>{`Recycle & Shop: Join the Cycle`}</b>
      <div
        className={styles.recycleShop1}
      >{`Recycle & Shop: Your eco-friendly marketplace for unique recycled treasures. Join the cycle of sustainability with each purchase, making a positive impact on the environment. Start shopping consciously today!`}</div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.purchaseProduct}>Purchase product</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.startSelling}>Start selling</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerHeroForm;
