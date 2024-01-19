import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import ILogoTitleProps from "../../../types/component/LogoTitle";

const LogoTitle = (props: ILogoTitleProps) => (
  <>
    <div className={styles.container}>
      <Typography
        variant={props.level}
        gutterBottom
        sx={{
          fontFamily: "Lemon",
          color: "#9DBC98",
        }}
        align="center"
      >
        Get Ur Meals!
      </Typography>
    </div>
  </>
);

export default LogoTitle;
