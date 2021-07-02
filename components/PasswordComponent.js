import React from "react";
import { Input } from "antd";

function PasswordComponent({ placeholder }) {
  return (
    <div>
      {" "}
      <Input.Password placeholder={placeholder} />
    </div>
  );
}

export default PasswordComponent;
