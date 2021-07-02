import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Row, Col } from "antd";

function InputComponent({ placeholder, Icon }) {
  return (
    <Col span={24}>
      <div>{Icon && <Input placeholder={placeholder} prefix={<Icon />} />}</div>
    </Col>
  );
}

// InputComponent.propTypes = { placeholder: PropTypes.string };

export default InputComponent;
