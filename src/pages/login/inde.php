import './login.scss';

export default function (){
 return(
    <form action= "login.php" method="post"> 
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MyFacebook</h3>
                <span className="loginDesc">
                    Link with friends and the world around you on MyFacebook
                </span>
            </div>
            <div className="loginRight">
                <div className='loginBox'>
                    <?php if (isset($_GET['error'])) { ?>
                        <p class="error"><?php echo $_GET['error']; ?></p>
                        <?php }?>
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        Create a New Account
                    </button>


                </div>
            </div>
        </div>

    </div>
    </form>
 )
 
}