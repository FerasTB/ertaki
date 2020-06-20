import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./../context";

function LoginteacherForm () {
  const initialValues = {
    name: "",
    number: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object ({
    name: Yup.string().required("الاسم مطلوب"),
    number: Yup.number().max(999999999,"الرقم غير صالح").min(99999999,"الرقم غير صالح").required("رقم الهاتف مطلوب"),
    email: Yup.string().required("الايميل مطلوب"),
    password: Yup.string().min(6,"كلمة المرور قصيرة").required("كلمة المرور مطلوبة"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    this.formik.resetForm({});
  };

  return (
    <ProductConsumer>
      {(value) => {
        return (
        <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <div className="container d-flex justify-content-center login ">
                    <form action="">
                      <h1 className="m-3">
                      {console.log(value.isLogin)}
                        {value.isLogin ? "تسجيل دخول" : "إنشاء حساب"}
                      </h1>
                      <div className="mb-4">
                        {value.isLogin ? null : (
                        <input
                          type="string"
                          name="name"
                          id="name"
                          placeholder="الاسم"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          className="mb-1 shadow-sm rounded border border-primary text-right pr-3 pl-3 pt-1 pb-1 mt-2"
                        /> )}
                        {formik.touched.name && formik.errors.name ? (
                          <small className="text-danger d-block text-right">{formik.errors.name}</small>
                        ) : null}
                        
                      </div>
                      <div className="mb-4">
                        {value.isLogin ? null : (
                        <input
                          type="string"
                          name="email"
                          id="email"
                          placeholder="الايميل"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className="mb-1 shadow-sm rounded border border-primary text-right pr-3 pl-3 pt-1 pb-1 mt-2"
                        /> )}
                        {formik.touched.email && formik.errors.email ? (
                          <small className="text-danger d-block text-right">{formik.errors.email}</small>
                        ) : null}
                        
                      </div>
                      <div className="mb-4">
                        <input
                          type="string"
                          name="number"
                          id="number"
                          placeholder=" رقم هاتفك"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.number}
                          className="mb-1 shadow-sm rounded border border-primary text-right pr-3 pl-3 pt-1 pb-1 mt-2"
                        />
                        {formik.touched.number && formik.errors.number ? (
                          <small className="text-danger d-block text-right">{formik.errors.number}</small>
                        ) : null}
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          placeholder="كلمة السر"
                          name="password"
                          id="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          className="mb-1 shadow-sm rounded border border-primary text-right pr-3 pl-3 pt-1 pb-1"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <small className="text-danger d-block text-right">
                            {formik.errors.password}
                          </small>
                        ) : null}
                      </div>
                      <div className='mb-5'>
                        <input
                          type="submit"
                          disabled={!formik.isValid}
                          value={value.isLogin ? "تسجيل دخول" : "إنشاء حساب"}
                          className="shadow-sm  mr-2"
                        /> 
                        <Link onClick={value.toggleLogin}>
                          {console.log(value.isLogin)}
                          {value.isLogin ? "إنشاء حساب" : "تسجيل دخول"}
                        </Link>
                      </div >
                      <div className="text-right ">
                        {value.isLogin ? (
                        <Link>نسيت كلمة المرور ؟</Link>) : null }
                      </div>
                    </form>                 
                </div>
            )
          }
          }
        </Formik>)
      }}
    </ProductConsumer>
  )
}

export default LoginteacherForm;
