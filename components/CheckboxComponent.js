import React from "react";
import { Checkbox } from "antd";

function CheckboxComponent({ checkboxText }) {
  return (
    <div>
      <Checkbox>{checkboxText}</Checkbox>
    </div>
  );
}

export default CheckboxComponent;
