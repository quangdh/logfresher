import React from "react";
import { Container } from "react-bootstrap";
import "./styles.scss";
// import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faPinterestP, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Brand(props: any) {
  return (
    <div className="ml-4">
        <a href={props.linkTo} >
          <FontAwesomeIcon icon={props.brand} />
        </a>
    </div>
  )
}

function Contact(props: any) {
  return (
    <div className="ml-3">
        <a href={props.linkTo} >
        {props.contact}
        </a>
    </div>
  )
}

const BaseHeader: React.FC = () => (
  <footer className="footer">
    <Container className="text-center text-white p-4 d-flex justify-content-between">
      <div className="col-4 d-flex justify-content-start ">
        <span>
          @2019 Logwork. All right reserved
        </span>
      </div>
      <div className="col-4 d-flex justify-content-center">
        <Contact linkTo={"#"} contact="Home" />
        <Contact linkTo={"#"} contact="Recipes" />
        <Contact linkTo={"#"} contact="Article" />
        <Contact linkTo={"#"} contact="Contact" />
        <Contact linkTo={"#"} contact="Purchase" />
      </div>
      <div className="col-4 d-flex justify-content-end brands" >
        <Brand linkTo={"#"} brand={faFacebook} />
        <Brand linkTo={"#"} brand={faTwitter} />
        <Brand linkTo={"#"} brand={faGooglePlus} />
        <Brand linkTo={"#"} brand={faPinterestP} />
        <Brand linkTo={"#"} brand={faInstagram} />
      </div>
    </Container>
  </footer>
)

export default BaseHeader
