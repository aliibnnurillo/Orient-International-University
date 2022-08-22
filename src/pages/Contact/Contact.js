import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.scss";
const Contact = () => {
  //   const code = (Math.random() + 1).toString(36).substring(7);
  //   console.log("random", code);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      appeal: "",
      kode: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      appeal: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <div className="contact">
      <h2 className="contact-title">Aloqa</h2>
      <NavLink to="/" className="to-home">
        Asosiy &rarr;
      </NavLink>
      <div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <h3 className="form-title">
            Ushbu formadan foydalanib bizga e-mail jo'nating. Biz siz bilan tez
            orada bog'lanamiz.
          </h3>
          <div className="form-group">
            <div className="col-1">
              <input
                id="fullName"
                type="text"
                placeholder="Ism-sharif"
                className="col-1-input"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              {formik.errors.fullName ? <p>{formik.errors.fullName}</p> : null}
              <input
                id="email"
                type="email"
                placeholder="Elektron pochta"
                className="col-1-input"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <p>{formik.errors.email}</p> : null}
              <input
                id="appeal"
                type="text"
                placeholder="Murojat mavzusi"
                className="col-1-input"
                value={formik.values.appeal}
                onChange={formik.handleChange}
              />
              {formik.errors.appeal ? <p>{formik.errors.appeal}</p> : null}
            </div>
            <div className="col-2">
              <textarea type="textarea" placeholder="Xabar matni" />
            </div>
          </div>
          <div className="form-btn-box">
            {/* <span className="code-title">{code}</span> */}
            <input
              id="kode"
              type="text"
              placeholder="Xavfsizlik kodi"
              className="code-text"
              onChange={formik.handleChange}
              value={formik.values.kode}
            />
            <buton type="submit" className="form-btn">
              Jo'natish
            </buton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
