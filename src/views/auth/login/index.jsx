import { useNavigate } from "react-router-dom";
import { ReactToastify } from "../../../shared/utils";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../../query/auth/auth.query";
import { useForm } from "react-hook-form";
import { Loader } from "../../../shared/components/Loader";
import { useEffect } from "react";
import { iconWorld } from "../../../assets/images/icons";
import { bgFrame, bgImage } from "../../../assets/images";

const CONSTANT = {
  DOC_TITLE: "Login | Recycle Management",
  SIGN_IN: "Sign In",
  EMAIL_ADDRESS: "Email",
  PASSWORD: "Password",
  LOGIN: "Sign in",
};

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = CONSTANT.DOC_TITLE;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted },
  } = useForm({
    mode: "onSubmit", // Ensures errors appear on submit immediately
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.accessToken);
      ReactToastify("Login successful", "success");
      navigate("/dashboard");
    },
    onError: (error) => {
      ReactToastify(error?.response?.data?.message || "Login failed", "error");
    },
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
                <label htmlFor="email">{CONSTANT.EMAIL_ADDRESS}</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    maxLength: {
                      value: 100,
                      message: "Email cannot exceed 100 characters",
                    },
                  })}
                />
                {errors.email && isSubmitted && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">{CONSTANT.PASSWORD}</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
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
                  })}
                  onPaste={(e) => e.preventDefault()}
                />
                {errors.password && isSubmitted && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>
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
