import LoadingSpinner from "../../components/splash/LoadingSpinner";

import styles from "./styles.module.scss";

/**
 * component for displaying loading page (fill horizontally and vertically)
 *
 * @function {@link LoadingScreen}
 */
const LoadingScreen = () => {
  return (
    <>
      <div className={styles.layoutContainer}>
        <LoadingSpinner />
      </div>
    </>
  );
};

export default LoadingScreen;
