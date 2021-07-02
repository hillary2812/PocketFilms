import React from "react";
import InputComponent from "../../components/InputComponent";
import Header from "../../components/Header";
import MailOutlined from "@ant-design/icons/MailOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import PasswordComponent from "../../components/PasswordComponent";
import DateComponent from "../../components/DateComponent";
import CheckboxComponent from "../../components/CheckboxComponent";
import ButtonComponent from "../../components/ButtonComponent";
import Footer from "../../components/Footer";
import { Row, Col, Space } from "antd";
import LayoutComponent from "../../components/LayoutComponent";

function index() {
  return (
    <LayoutComponent>
      <Row>
        <Row gutter={32}>
          {/* <Space size={"large"} direction="vertical"> */}
          <InputComponent placeholder="Email" Icon={MailOutlined} />
          {/* </Space> */}
          <InputComponent placeholder="Phone" Icon={PhoneOutlined} />
          <PasswordComponent placeholder="Passowrd" />
          <DateComponent />
          <CheckboxComponent checkboxText="I accept " />
          <CheckboxComponent checkboxText="Subscribe to mobile updatess" />
          <CheckboxComponent checkboxText="Subscribe to newsletter" />
          <ButtonComponent buttonText="SIGN UP" />
        </Row>
        <Row>
          <span>-OR-</span>
          <div>
            <span>SIGN UP WITH</span>
          </div>
          <div>
            <span className="icon icon-alipay" />
            <span className="icon icon-taobao" />
            <span className="icon icon-weibo" />
          </div>
        </Row>
      </Row>
    </LayoutComponent>
  );
}

export default index;
