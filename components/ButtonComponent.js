// import React from "react";
// import styles from "./button.module.css";

// const Button = ({
//   children,
//   onClick,
//   btnColor = "teal",
//   labelColor,
//   disabled,
//   type = "submit",
//   style,
//   ...props
// }) => {
//   return <button className={styles.btn}>{children || "SIGN UP"}</button>;
// };

// export default Button;
import React from "react";
import { Button } from "antd";

function ButtonComponent({ buttonText }) {
  return (
    <div>
      <Button type="primary" block>
        {buttonText}
      </Button>
    </div>
  );
}

export default ButtonComponent;
