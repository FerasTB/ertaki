import React, { Component } from "react";
import ReactPlayer from "react-player";
import user from "./../img/users.png";
import couriers from "./../img/orders-annually.png";
import quizz from "./../img/quizes.png";
import productivity from "./../img/productivity.png";
import moreUnderstanding from "./../img/more-understanding.png";
import interactiveLessons from "./../img/interactive-lessons.png";
import helping from "./../img/helping.png"
import moreTime from "./../img/more-time.png"
import car from "./../img/car.png";
import CountUp from "react-countup";
import TypeIt from "typeit-react";
import { Link } from "react-router-dom";
import { ButtonContainer,ButtonMobileContainer } from "./Layout/Button";
import deliveryman from "./../img/deliveryman.png";
import store from "./../img/store.png";
import ReactWOW from "react-wow";
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="">
        <header className="header">
          <div>
            <p className="ml-5 float-right text-right">
              
              <TypeIt element={"h1"} className="site-title  text-success">
                نعمل سويا لكي تصل إلى <br />
                مرادك وتحقق أهدافك
              </TypeIt>
              {" "}
            </p>
          </div>
          <div className="d-block ">
            <ButtonMobileContainer id="mobileHeaderButton" className="mt-2">
              ابدأ الان
            </ButtonMobileContainer>
          </div>
          
        </header>
        
        <section className="section1">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 ">
                <ReactWOW animation="fadeIn">
                  <h2 className="">ما هو ارتقِ؟</h2>
                </ReactWOW>
              </div>
              <div className="col-md-12 ">
                <p>
                  ارتقِ هو موقع اكتروني يمكنك من اجراء اختبارات للمواد اللمية
                  المختلفة بطريقة سهلة ومبسطة عن طريق اجراء عدة اختبارات
                  <br />
                  التي تريدها يتضمن جميع المواد العلمية والأدبية المخلفة
                </p>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <ReactPlayer
                  controls
                  url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=300s"
                />
              </div>
              <div className="col-md-12 mt-5 ">
                <div className="container">
                <section className="section3 mt-5 text-center">
          <h1 >لماذا تستخدم ارتقِ؟</h1>

          <div className="container mt-4">
            <div className="row">
            <div className="col-md-4">
                <div class="">
                  <img
                    className="card-img-top"
                    src={moreTime}
                    alt="Card image cap"
                  />
                </div>
                  <div className="card-body">
                    <h3 className="card-text">وقت اضافي</h3>
                    <p className="card-text">
                      وفر الوقت الضائع في الدروس الخصوصية<br />
                      لتستغله بامر اخر
                    </p>
                  </div>
              
              </div>
              <div className="col-md-4 ">
              <div class="">
                  <img
                    className="card-img-bottom"
                    src={moreUnderstanding}
                    alt="Card image cap"
                  />
                </div>
                  <div className="card-body">
                    <h3 className="card-text">فهم اعمق</h3>
                    <p className="card-text">
                      مع النطام الجديد للدروس و طرق الاختبار سنضمن
                      لك الفهم الكامل للمنهاج
                    </p>
                  </div>
                  
              </div>

              <div className="col-md-4">
              <div class="">
                  <img
                    className="card-img-bottom"
                    src={productivity}
                    alt="Card image cap"
                  />
                </div>
                  <div className="card-body">
                    <h3 className="card-text">انتاجية اكير</h3>
                    <p className="card-text">
                      لقد حضرنا المناهج كاملة 
                      و هي بانتظارك لتدرسها<br/> باي وقت {" "}
                    </p>
                  </div>
                  
              </div>
            </div>
          </div>
        </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2  mt-5 ">
          <div className="row">
            <div className="col-md-6">
              <img src={store} />
            </div>
            <div className="col-md-6 text-right">
              {" "}
              <h1 className=" pr-5 ">سجل معنا كطالب</h1>
              <p className="mt-3 pr-5">
                يقدم لك ارتقِ شرح مبسط لجميع المواد العلمية باستخدام الصور
                <br /> وبطريقة حديثة وسلسة تمكنك من فهم المادة واجراء اخبار
                بعدوالفيديوهات كل فقرة بحيث تتاكد أنك فهمت موادك بشكل كامل
              </p>
              <ButtonContainer className="m-5">
                <span className="mr-2">سجل الآن</span>
              </ButtonContainer>
            </div>
          </div>
        </section>
        <section className="section3 mt-5 text-center">
          <h1>ماذا سنقدم لك ؟</h1>

          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-1">
                <div class="">
                  <img
                    className="card-img-top"
                    src={interactiveLessons}
                    alt="Card image cap"
                  />

                  <div className="card-body">
                    <h3 className="card-text">دروس تفاعلية</h3>
                    <p className="card-text">
                      التعلم بالتطبيق هو المبدأ المتبع في ارتقي <br/>
                      فمن خلال المنهج الجديد للدروس ستتعلم و تطبق فورا 
                      وهذه من انجح الطرق التعليمية
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="">
                  <img
                    className="card-img-top"
                    src={helping}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h3 className="card-text">(24 / 7) موجودون لمساعدتك</h3>
                    <p className="card-text">
                      فريق مختص من الاساتذة سيجيبون على اي سؤال يخطر لك <br/>
                      لنضمن لك الفهم الكامل للمادة
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="">
                  <img
                    className="card-img-top"
                    src={quizz}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h3 className="card-text">اختبارات لجميع المستويات</h3>
                    <p className="card-text">
                      نحرص في ارتقي ان تنال الدرجة الكاملة <br/>
                      ولهذا اختباراتنا المكثفة ستضمن لك التفوق{" "}
                    </p>
                  </div>
                </div>
                <ButtonContainer className="m-auto mt-2" id="mobileButton">
                <span className="mr-2">ابدأ التعلم</span>
              </ButtonContainer>
              </div>
            </div>
          </div>
        </section>
        <section className="section4 mt-5">
          <div className="row">
            <div className="col-md-6 text-right">
              <h1 className="mr-5 mt-3 mb-3">سجل معنا كمعهد</h1>
              <p className="mr-5 mt-3">
                {" "}
                ستتمكن عبر منصتنا من تقديم اختبارت بطريقة فعالة لطلابك <br/>
                و يمكنك متابعة الطلاب و درجاتهم كما ستوفر لهم مرجع لشرح الدروس و مراجعتها
              </p>
              <ButtonContainer className="mt-5 mr-5">
                <span>سجل الآن</span>
              </ButtonContainer>
            </div>
            <div className="col-md-4 mr-0">
              <img src={car} className="carsec4" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
