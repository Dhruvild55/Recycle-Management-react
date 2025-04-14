/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { ReactToastify } from "../../../shared/utils";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../query/auth/auth.query";
import { useForm } from "react-hook-form";
import { Loader } from "../../../shared/components/Loader";
import { useEffect } from "react";
import { iconWorld } from "../../../assets/images/icons";
import { bgFrame, bgImage } from "../../../assets/images";
import InputField from "../../../shared/components/InputFieldComponent";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../redux/userData/userDataSlice";

const CONSTANT = {
  DOC_TITLE: "Login | Recycle Management",
  SIGN_IN: "Sign In",
  EMAIL_ADDRESS: "Email",
  PASSWORD: "Password",
  LOGIN: "Sign in",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = CONSTANT.DOC_TITLE;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted },
  } = useForm({
    mode: "onSubmit",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("role", data?.data?.roles);
      dispatch(setUserData(data?.data));
      ReactToastify("Login successful", "success");
      navigate("/dashboard");
    },
    onError: (error) => {},
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div
        className="login-form-container"
        style={{ backgroundImage: `url(${bgFrame})` }}
      >
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-header">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <div>
              <p>
                Let’s jump to our website! &nbsp; &nbsp;
                <img src={iconWorld} alt="World Icon" />
              </p>
            </div>
          </div>
          <div className="form-container">
            <div className="login-title">
              <h2>Hi Admin</h2>
              <p>Welcome to Login Fathopes Energy for Admin.</p>
            </div>
            <div className="login-form-group">
              <div className="form-group">
                <InputField
                  label={CONSTANT.EMAIL_ADDRESS}
                  placeholder="Email"
                  type="email"
                  name="email"
                  register={register}
                  errors={errors}
                  validation={{
                    required: "Email is required",
                    maxLength: {
                      value: 100,
                      message: "Email cannot exceed 100 characters",
                    },
                  }}
                />
              </div>

              {/* Password Input */}
              <InputField
                label={CONSTANT.PASSWORD}
                placeholder="Password"
                type="password"
                name="password"
                register={register}
                errors={errors}
                validation={{
                  required: "Password is required",
                  maxLength: {
                    value: 50,
                    message: "Password cannot exceed 50 characters",
                  },
                  validate: (value) => {
                    if (!/[a-z]/.test(value)) {
                      return "Password must contain at least one lowercase letter";
                    }
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }
                    return true;
                  },
                }}
              />

              <div className="login-checkbox">
                <div className="checkbox-section">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember for 30 days</label>
                </div>
                <div>
                  <p style={{ fontWeight: "600", fontSize: "14px" }}>
                    Forgot password
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="login-button"
              disabled={!isDirty || isPending}
            >
              {isPending ? (
                <Loader animation="border" width="20px" height="20px" />
              ) : (
                CONSTANT.LOGIN
              )}
            </button>
            <div className="footer-title">
              <span>Don’t have an account?</span>{" "}
              <span>Please ask your lead for sign up!</span>
              <p></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
