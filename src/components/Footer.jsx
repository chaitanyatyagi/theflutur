import "../styles/footer.css"

function Footer() {
    function terms(){
        window.open('https://thefutur.com/terms-and-conditions');
    }
    function privacy(){
        window.open('https://thefutur.com/privacy-policy');
    }
    function imgopen1(){
        window.open('https://thefutur.com/learn');
    }
    function imgopen2(){
        window.open('https://thefutur.com/shop');
    }
    function imgopen3(){
        window.open('https://thefutur.com/our-story');
    }
    function v1(){
        window.open('https://thefutur.com/learn');
    }
    function v2(){
        window.open('https://thefutur.com/shop');
    }
  return (
      <div className="footer">
          <div className="top">
              <div className="three">
                  <div className="listhead" onClick={imgopen1}><b>Learn</b></div>
                  <div className="listdata">
                      <li>Pricing</li>
                      <li>Logo Design</li> 
                      <li>Branding</li>
                      <li>Lead Generation</li>
                      <li>Design</li>
                      <li className="hover" onClick={v1}>View All</li>
                  </div>
              </div>
              <div className="three">
                  <div className="listhead" onClick={imgopen2}><b>Shop</b></div>
                  <div className="listdata">
                      <li>Business Skills</li>
                      <li>Creative Skills</li>
                      <li>Business Resouces</li>
                      <li>Merchandise</li>
                      <li>The Pro Group</li>
                      <li>Private Coaching</li>
                      <li className="hover" onClick={v2}>View All</li>
                  </div>
              </div>
              <div className="three">
                  <div className="listhead" onClick={imgopen3}><b>Collaborate</b></div>
                  <div className="listdata">
                      <li>Work With Us</li>
                      <li>Become An Affiliate</li>
                      <li>Advertise With Us</li>
                      <li>Hire Us To Speak</li>
                      <li>FAQs</li>
                      <li>Get Supported</li>
                      <li>Report A Bug</li>
                  </div>
              </div>
              <div className="righthree">
                  <div className="righthead">Be the first to know</div>
                  <div className="emptyvertical"></div>
                  <div className="bar">
                      <div className="barins">Join Our Newsletter</div>
                  </div>
              </div>
          </div>
          <div className="bottom">
              <div className="copy">Copyright © 2012-2022 The Futur LLC</div>
              <div className="terms" onClick={terms}>Terms&Condition</div>
              <div className="privacy" onClick={privacy}>Privacy&Policy</div>
          </div>
      </div>
  )
}

export default Footer;
