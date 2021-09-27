// import { Icon } from "@iconify/react";

export default function LoginSignupModal() {
  return (
    <>
      <div className="login-modal">
        <div
          className="login modal fade"
          id="loginModal"
          tabIndex={-1}
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="login-container">
                <ul className="nav nav-tabs" id="tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="login-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#login"
                      type="button"
                      role="tab"
                      aria-controls="login"
                      aria-selected="true"
                    >
                      Đăng nhập
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="signup-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#signup"
                      type="button"
                      role="tab"
                      aria-controls="signup"
                      aria-selected="false"
                    >
                      Đăng ký
                    </button>
                  </li>
                </ul>
                {/* Tab Content */}
                <div className="tab-content px-3 py-3" id="tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="login"
                    role="tabpanel"
                    aria-labelledby="login-tab"
                  >
                    <form className="row needs-validation">
                      <div className="error-noti error mb-3 text-danger" />
                      <div className="form-input mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="login-email"
                          placeholder="Email *"
                          autoComplete="email"
                        />
                        <small className="email-error error text-danger">
                          Error message
                        </small>
                      </div>
                      <div className="form-input mb-3">
                        <input
                          className="form-control"
                          type="password"
                          id="login-password"
                          placeholder="Mật khẩu *"
                          autoComplete="current-password"
                        />
                        <small className="pass-error error text-danger">
                          Error message
                        </small>
                      </div>
                      <div className="form-check mb-2 show-hide-pass">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="show-hide password"
                          id="show-hide-pass-login"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="show-hide-pass-login"
                        >
                          Ẩn/Hiện mật khẩu
                        </label>
                      </div>
                      <div className="form-check mb-3 remember-acc">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="remember-acc"
                          id="remember-acc"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-acc"
                        >
                          Ghi nhớ tài khoản
                        </label>
                      </div>
                      <div className="col-12 mb-3">
                        <button
                          className="section__btn btn-login d-block w-100"
                          type="button"
                        >
                          ĐĂNG NHẬP
                        </button>
                      </div>
                      {/* <div
                        className="forgot-password"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-dismiss="#loginModal"
                        data-bs-target="#forgotPassModal"
                      >
                        <span className="iconify">
                          <Icon icon="codicon:question" />
                        </span>
                        <span>Quên mật khẩu?</span>
                      </div> */}
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="signup"
                    role="tabpanel"
                    aria-labelledby="signup-tab"
                  >
                    <form className="row needs-validation">
                      <div className="form-input mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="signup-email"
                          placeholder="Email *"
                          autoComplete="email"
                        />
                        <small className="error">Error message</small>
                      </div>
                      <div className="form-input mb-3">
                        <input
                          className="form-control"
                          type="password"
                          id="signup-password"
                          placeholder="Mật khẩu *"
                          autoComplete="new-password"
                        />
                        <small className="error">Error message</small>
                      </div>
                      <div className="form-check mb-3 show-hide-pass">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="show-hide password"
                          id="show-hide-pass-signup"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="show-hide-pass-signup"
                        >
                          Ẩn/Hiện mật khẩu
                        </label>
                      </div>
                      <div className="form-input mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="signup-first-name"
                          placeholder="Họ tên"
                        />
                        <small className="error">Error message</small>
                      </div>
                      <div className="form-input mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="signup-phone"
                          placeholder="Số điện thoại *"
                          autoComplete="phone"
                        />
                        <small className="error">Error message</small>
                      </div>
                      <div className="col-12">
                        <button
                          className="section__btn btn-signup d-block w-100"
                          type="button"
                        >
                          ĐĂNG KÝ
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//  Modal Forgot Password

// function ForgotPassword() {
//   return (
//     <div className="forgotpass-modal">
//       <div
//         className="forgotpass modal fade"
//         id="forgotPassModal"
//         tabIndex={-1}
//         aria-labelledby="forgotPassModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="forgotPassModalLabel">
//                 Quên mật khẩu?
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               />
//             </div>
//             <div className="modal-body p-3">
//               <form>
//                 <div className="form-input mb-3">
//                   <input
//                     className="form-control send-recovery-email"
//                     type="text"
//                     placeholder="Email"
//                   />
//                   <small className="error">Error message</small>
//                 </div>
//                 <div className="col-12">
//                   <button
//                     className="section__btn btn-send-email d-block w-100"
//                     type="button"
//                     data-bs-dismiss="modal"
//                   >
//                     GỬI EMAIL TRỢ GIÚP
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
