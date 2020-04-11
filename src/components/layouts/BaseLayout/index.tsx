import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const BaseLayout : React.FC = (props) => (
  <>
    <main>{props.children}</main>
  </>
)

export default BaseLayout;
