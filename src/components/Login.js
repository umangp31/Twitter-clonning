import { useState } from 'react';
import Applelogo from "../Assests/apple_logo.svg";
import Googlelogo from "../Assests/google_logo.svg";
import Home from './Home';
import "./login.css";
export default function Login() {
    // const [{ }, dispatch] = useStateValue();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isWalletConnected, setIsWalletConnected] = useState(true);
    const [currentAccount, setCurrentAccount] = useState("");
    const [isMetamsk, setIsMetamsk] = useState(true);
    const signIn = () => {
        // auth.signInWithPopup(Googleprovider).then(result =>
        //     dispatch({
        //         type: actionTypes.SET_USER,
        //         user: result.user,
        //     })
        // )
        // .then(()=>setIsLoggedIn(true))
        //     .catch(error => alert(error.message));
        setIsLoggedIn(true)
    };
    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                setIsMetamsk(false);
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            setCurrentAccount(accounts[0]);
            setIsWalletConnected(true);
            console.log(currentAccount);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {
                (!isLoggedIn && !isWalletConnected) ? (
                    <>
                        <div className='login_container'>
                            <div className="login_img">
                                <svg viewBox="0 0 24 24" fill='white' aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-labphf r-1777fci r-dnmrzs r-e65kyq r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                            </div>
                            <div className="login_main">
                                <div className="login_subBox1">
                                    <div className='login_logo'>
                                        <svg viewBox="0 0 24 24" fill='white' aria-hidden="true" class=""><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                                    </div>
                                    <span className="login_title">Happening Now</span>
                                </div>
                                <div className="login_subBox2">
                                    <h3>Join Twitter today</h3>
                                    <div className='login_btns' >
                                        <button className="login_google login_btn" onClick={signIn}>
                                            <img src={Googlelogo} alt="" className="icon_google" />
                                            <span className="btn_content">Sign up with Google</span>
                                        </button>
                                        <button className="login_apple login_btn">
                                            <img src={Applelogo} alt="" className="icon_apple" />
                                            <span className="btn_content">Sign up with Apple</span>
                                        </button>
                                    </div>
                                    <div className='login_divider'>
                                        <span></span>
                                        Or
                                        <span></span>
                                    </div>
                                    <div className='login_conditions'>
                                        <button className="login_email login_btn">
                                            <span className="btn_content">Sign up with phone or email</span>
                                        </button>
                                        <button className="login_web3 login_btn">
                                            <span className="btn_content" onClick={connectWallet} >Connect Your Wallet</span>
                                        </button>
                                        <p>
                                            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                                        </p>
                                    </div>
                                </div>
                                <div className="login_subBox3">
                                    <h4>Already have an account
                                    </h4>
                                    <button className="login_already login_btn">Sign in</button>
                                </div>
                            </div>
                            <footer>Hi</footer>
                        </div>
                    </>
                ) : (<Home />)
            }

        </>
    )
}
