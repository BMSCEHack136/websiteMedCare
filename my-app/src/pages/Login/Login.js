import React from "react";
// import "./Login.css";

export default function Login() {
  return (
    <>
      <body>
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">HOSPITAL LOGIN</div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form action="" method="post" className="login">
                <div className="field">
                  <input type="text" placeholder="Hospital_id" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field">
                  <input type="submit" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
