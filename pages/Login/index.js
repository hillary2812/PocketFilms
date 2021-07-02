import React from "react";
import Header from "../../components/Header";
import InputComponent from "../../components/InputComponent";
import MailOutlined from "@ant-design/icons/MailOutlined";
import PasswordComponent from "../../components/PasswordComponent";
import ButtonComponent from "../../components/ButtonComponent";
import LayoutComponent from "../../components/LayoutComponent";

function index() {
  return (
    <LayoutComponent>
      <InputComponent placeholder="Email" Icon={MailOutlined} />
      <PasswordComponent placeholder="Passowrd" />
      <ButtonComponent buttonText="LOGIN" />
    </LayoutComponent>
  );
}

export default index;
