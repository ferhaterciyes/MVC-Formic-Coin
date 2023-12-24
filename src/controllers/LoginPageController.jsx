import { useFormik } from "formik";
import LoginPageView from "../views/LoginPageView";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";

const LoginPageController = () => {
const navigate = useNavigate()
    const formik = useFormik({
        // Form da tutulacak verilerin ilk değeri
        initialValues: {
          email: "",
          age: "",
          password: "",
          passwordConfirm: "",
        },
        validationSchema: schema,
        // form gönderilince calışır
        // bu metot otomatik olarak sayfayı yeninelmeyi engeller
        // 1-param: 2 parametre alır,
        //obje formatındaki inputların verisi,
        // formda bazı işlemler örn(sıfırlama)
        onSubmit: (values, actions) => {
          
          navigate("/home")
        },
      });

  return (
    <LoginPageView formik={formik} />
  )
}

export default LoginPageController