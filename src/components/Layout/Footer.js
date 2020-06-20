import React, { Component } from "react";
import googleplay from "./../../img/googleplay.png";
import appstore from "./../../img/appstore.png";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small footer pt-4 ">
          <div className="container text-center text-md-left ">
            <div className="row text-center text-md-left mt-3 pb-3">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  حول ارتقِ
                </h6>
                <p>
                  ارتقِ هو موقع الكتروني يمكنك من الحصول على شرح للمواد العلمية
                  وإجراء اخبارات فعالة لطلاب الثانوية في الجمهورية العربية
                  السورية
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  تواصل معنا
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i>ارتقِ
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> irtaqe@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 963-0951572322
                </p>
              </div>
              <div className="col-md-4 col-xl-3 mx-auto mt-3">
                <img src={googleplay} alt="google play" />

                <img src={appstore} alt="app store" />
              </div>
            </div>

            <hr />

            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8">
                <p className="text-center text-md-left">
                  © 2020 Copyright:
                  <Link to="https://sre3.com/">
                    <strong> irtaqe.com</strong>
                  </Link>
                </p>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
