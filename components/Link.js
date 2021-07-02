import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter, withRouter } from "next/router";

const Link = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/SignUp");
  });
  return <div>{console.log("Return")}</div>;
};

Link.propTypes = { path: PropTypes.string };

export default Link;
