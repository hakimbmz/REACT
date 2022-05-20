import { Link } from "react-router-dom";
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import google from '../assets/google.png'
import "./Footer.css";
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Nous sommes une organisation associative indépendante. Sous l'égide de
        la Croix-Rouge tunisienne, elle fait partie du Mouvement et du
        Croissant-Rouge</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
              <li><a href="/home/">statistique </a></li>
              <li><a href="/signup">Sign up </a></li>
              <li><a href="/signin">Sign in </a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a to="#"><img src={facebook}alt=''  className='facebook'/> </a></li>
              <li><a  to="#"><img src={twitter} alt='' className='twitter'/></a></li>
              <li><a  to="#"><img src={google} alt='' className='google'/></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>


  );
}

export default Footer;
