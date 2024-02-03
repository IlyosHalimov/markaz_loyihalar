import React, { useEffect, useState } from "react";
import "../Form.css";
// import * as bootstrap from "bootstrap";
import * as bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import M from "materialize-css";
function Menus() {
    const history = useHistory();
    const [regName, setRegName] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setLogPassword] = useState("");
    const LogPost = () => {
        if (!regName || !regEmail || !regPassword) {
            console.log("Barcha maydonlar to'ldirilishi zarur");
            var toastElement = document.getElementById("emailErrorToasts");
                var emailErrorToast = new bootstrap.Toast(toastElement);
                emailErrorToast.show();
        } else {
            if (
                !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    regEmail
                )
            ) {
                console.log("Email manzilingizni to'g'ri kiriting");
                var toastElement = document.getElementById("emailErrorToast");
                var emailErrorToast = new bootstrap.Toast(toastElement);
                emailErrorToast.show();
                // M.toast({html: 'I am a toast!'})
                return;
            } else {
                console.log(regName);
                console.log(regEmail);
                console.log(regPassword);
                document
                    .getElementById("container")
                    .classList.remove("right-panel-active");
            }
        }
    };
    const DataPost = () => {
        if (!logEmail || !logPassword) {
            console.log("Barcha maydonlar to'ldirilishi zarur");
        } else {
            if (
                !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    regEmail
                )
            ) {
                console.log("Email manzilingizni to'g'ri kiriting");
                // M.toast({html:"Email manzilingizni to'g'ri kiriting", classes:"#d81b60 pink darken-1"});
                return;
            } else {
                console.log(logEmail);
                console.log(logPassword);
            }
        }
    };
    useEffect(() => {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });
    }, []);
    return (
        <>
            <div
                id="emailErrorToast"
                class="toast position-absolute top-1 end-0 mt-1 bg-danger"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-bs-delay="1000"
            >
                <div class="toast-header">
                    <strong class="me-auto">Xato</strong>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="toast-body">Emailingiz xato</div>
            </div>
            <div
                id="emailErrorToasts"
                class="toast position-absolute top-1 end-0 mt-1 bg-danger"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-bs-delay="1000"
            >
                <div class="toast-header">
                    <strong class="me-auto">Bo'sh maydon mavjud</strong>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="toast-body">Barcha maydonlarni to'ldiring!</div>
            </div>
            <div className="signin">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <div className="form">
                            <h1>Hisob yaratish</h1>
                            <div className="social-container">
                                <a href="/" className="social">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                            <span>
                                yoki ro'yxatdan o'tish uchun elektron
                                pochtangizdan foydalaning
                            </span>
                            <input
                                value={regName}
                                onChange={(e) => setRegName(e.target.value)}
                                type="text"
                                placeholder="Nomingizni kiriting"
                            />
                            <input
                                value={regEmail}
                                onChange={(e) => setRegEmail(e.target.value)}
                                type="email"
                                placeholder="Emailingizni kiriting"
                            />
                            <input
                                value={regPassword}
                                onChange={(e) => setRegPassword(e.target.value)}
                                type="password"
                                placeholder="Parolingizni kiriting"
                            />
                            <button onClick={() => LogPost()}>
                                Ro'yxatdan o'tish
                            </button>
                        </div>
                    </div>
                    <div className="form-container sign-in-container">
                        <div className="form">
                            <h1>Tizimga kirish</h1>
                            <div className="social-container">
                                <a href="/" className="social">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                                <a href="/" className="social">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                            <span>yoki hisobingizdan foydalaning</span>
                            <input
                                value={logEmail}
                                onChange={(e) => setLogEmail(e.target.value)}
                                type="email"
                                placeholder="Emailingizni kiriting"
                            />
                            <input
                                value={logPassword}
                                onChange={(e) => setLogPassword(e.target.value)}
                                type="password"
                                placeholder="Parolingizni kiriting"
                            />
                            <a href="/">Parolingiz esdan chiqdimi?</a>
                            <button onClick={() => DataPost()}>
                                Tizimga kirish
                            </button>
                        </div>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Mentorga xush kelibsiz!</h1>
                                <p>
                                    Biz bilan aloqada bo'lish uchun o'z
                                    hisobingiz bilan tizimga kiring shaxsiy
                                    ma'lumotlar
                                </p>
                                <button className="ghost" id="signIn">
                                    Tizimga kirish
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Salom do'stim!</h1>
                                <p>
                                    Shaxsiy ma'lumotlarni kiriting va sayohatni
                                    boshlang
                                </p>
                                <button className="ghost" id="signUp">
                                    Ro'yxatdan o'tish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menus;
