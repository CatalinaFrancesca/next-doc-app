import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import classes from "./signup-view.module.css";
import { Grid, InputAdornment } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { CustomTextField } from "../../components/CustomTextField/CustomTextField";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Notification } from "../../components/Notification/Notification";
import EmailIcon from "@mui/icons-material/Email";

const SignUpView = () => {
  const [successLogin, setSuccessLogin] = useState(null);
  const [open, setOpen] = useState(true);
  const navigation = useNavigate();

  const handleCloseAlert = () => {
    if (successLogin === true) {
      navigation("/Home");
    }
    setOpen(false);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={yup.object({
          username: yup.string().required("You must enter your usename"),
          password: yup.string().required("You must enter your password"),
        })}
        onSubmit={() => {
          // handleLogin(values);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,

          errors,
          touched,
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              <Grid className={classes.background}>
                <Box className={classes.signupCard}>
                  <span className={classes.loginTitle}>Sign up</span>
                  <Grid className={classes.signupInput}>
                    <CustomTextField
                      id="demo-helper-text-misaligned"
                      label="Email"
                      placeholder="Please enter your email account"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {touched.email && (
                      <FormHelperText error>{errors.email}</FormHelperText>
                    )}
                  </Grid>
                  <Grid className={classes.signupInput}>
                    <CustomTextField
                      id="demo-helper-text-misaligned"
                      label="Username"
                      placeholder="Please enter your username account"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {touched.username && (
                      <FormHelperText error>{errors.username}</FormHelperText>
                    )}
                  </Grid>
                  <Grid className={classes.signupInput}>
                    <CustomTextField
                      id="demo-helper-text-misaligned"
                      label="Password"
                      placeholder="Please enter your password account"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HttpsIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {touched.password && (
                      <FormHelperText error>{errors.password}</FormHelperText>
                    )}
                  </Grid>
                  <Grid className={classes.signupInput}>
                    <CustomTextField
                      id="demo-helper-text-misaligned"
                      label="Confirm Password"
                      placeholder="Please confirm your password account"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HttpsIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {touched.confirmPassword && (
                      <FormHelperText error>
                        {errors.confirmPassword}
                      </FormHelperText>
                    )}
                    <Grid className={classes.signUp}>
                      <CustomButton
                        className={classes.btnSignUp}
                        buttonMessage="SIGN UP"
                        disabled={false}
                        variant="text"
                        type="submit"
                      />
                    </Grid>
                    <Grid className={classes.signUp}>
                      <span className={classes.loginText}>Or Login Using</span>
                      <Grid className={classes.login}>
                        <CustomButton
                          className={classes.btnLogin}
                          buttonMessage="LOGIN"
                          disabled={false}
                          variant="text"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </form>
          </>
        )}
      </Formik>
      {successLogin !== null && (
        <Notification
          handleClose={handleCloseAlert}
          alertDuration={2000}
          open={open}
          title={successLogin ? "Login Successful!" : "Login failed!"}
          type={successLogin ? "success" : "error"}
        />
      )}
    </React.Fragment>
  );
};

export default SignUpView;
