import { inputs } from "../constants";
import InputFieldView from "./InputFieldViews";

const LoginPageView = ({formik}) => {
    return (
        <div className="login-page">
          <div className="container ">
            <h2 className="d-flex gap-3 justify-content-center align-items-center">
              <img height={60} src="/c-logo.png" />
              <span>Coinmania</span>
            </h2>
            <form onSubmit={formik.handleSubmit}>
              {inputs.map((input, i) => (
                <InputFieldView
                  key={i}
                  formik={formik}
                  data={{
                    label: input.label,
                    name: input.name,
                    type: input.type,
                  }}
                />
              ))}
    
              <button type="submit">Kaydol</button>
            </form>
          </div>
        </div>
      );
}

export default LoginPageView