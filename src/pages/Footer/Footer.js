import React from "react";
import { BsFillTelephoneFill, BsTwitter, BsWhatsapp } from "react-icons/bs/";
import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import * as Icon from "../../components/Icon";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-circle"></div>
      <div className="footer-circle-bottom"></div>
      <div className="footer-icon">
        <Icon.Logo />
      </div>

      <di className="footer-content">
        <ul className="lift-list">
          <span className="list-title">Lift Media</span>
          <li className="lift-list-item">Info</li>
          <li className="lift-list-item">QuesContact</li>
          <li className="lift-list-item">Contact</li>
          <li className="lift-list-item">Politic and Pravicy</li>
        </ul>
        <ul className="lift-list">
          <span className="list-title">Legal</span>
          <li className="lift-list-item">Info</li>
          <li className="lift-list-item">QuesContact</li>
          <li className="lift-list-item">Contact</li>
        </ul>
        <ul className="lift-list">
          <span className="list-title">contact</span>
          <li className="lift-list-item">
            <BsFillTelephoneFill size={20} color="#0081FE" />
            Contact
          </li>
          <li className="lift-list-item">
            <BsWhatsapp size={20} color="#0081FE" />
            Whatsapp
          </li>
          <li className="lift-list-item">
            <AiOutlineMail size={20} color="#0081FE" />
            Email
          </li>
          <li className="lift-list-item">
            <BiTimeFive size={20} color="#0081FE" />
            Time
          </li>
        </ul>
      </di>
      <div className="footer-link">
        <div className="footer-link-icon">
          <BsTwitter color="#ffff" />
          <GrLinkedinOption color="#ffff" />
          <FaFacebookF color="#ffff" />
        </div>
        <span className="footer-title">&copy; 2022 Lift Media Online S.L</span>
        <span className="footer-title">
          Ronda Sant Pere 52, 08010 Barcelona,
        </span>
        <span className="footer-title">
          Inscripción en el Registro Mercantil de Barcelona. Tomo 46606, Folio
          37, Hoja 525271.
        </span>
      </div>
      <div className="footer-group">
        <div className="footer-box">
          <p className="footer-box-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it t<br></br> <br></br>
            El funcionamiento de la plataforma es muy sencillo. Se debe
            completar la solicitud, ésta información se envía a las entidades
            financieras a tiempo real con el fin de que la herramienta compare,
            negocie y escanee las mejores ofertas. Una vez aceptada la
            propuesta, se ingresa el dinero directamente en la cuenta del
            cliente.
          </p>
        </div>
        <div className="footer-box">
          <p className="footer-box-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it t<br></br> <br></br>
            El funcionamiento de la plataforma es muy sencillo. Se debe
            completar la solicitud, ésta información se envía a las entidades
            financieras a tiempo real con el fin de que la herramienta compare,
            negocie y escanee las mejores ofertas. Una vez aceptada la
            propuesta, se ingresa el dinero directamente en la cuenta del
            cliente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
