import Card1 from "../image/card1.jpeg"
import Card2 from "../image/card2.jpg"
import Card3 from "../image/card3.jpg"
import Card from './Card';
import "../styles/sixth.css"

function Sixthlayer() {
    function link1(){
        window.open('https://sso.teachable.com/secure/112836/checkout/2664488/style-guide-kit');
    }
    function link2(){
        window.open('https://sso.teachable.com/secure/112836/checkout/822390/perfect-proposal');
    }
    function link3(){
        window.open('https://sso.teachable.com/secure/112836/checkout/822343/complete-case-study');
    }
    const title = {
        one: "Brand Style Guide Kite",
        two:"The Perfect Proposal",
        three:"The Complete Case Study"
    }
    const text = {
        one:"Brand Style Guide Kit is an easy-to-use, done-for-you brand book template that has everything you need to deliver branding projects successfully, grounded in decades of experience.",
        two:" Everything you need to craft winning proposals: backed by decades of experience and millions of dollars in closed business.",
        three:"Your work won't speak for itself. Feel confident about sharing your projects and process with this fast and easy-to-use framework."
    }
  return (
      <div className="sixth">
          <di className="sixthleft">
                <div className="written">RELATED PRODUCTS</div>
                <div className="sixthline"></div>
          </di>
          <div className="sixthright">
                <Card Card1={Card1} Title={title.one} Text={text.one} link={link1} />
                <Card Card1={Card2} Title={title.two} Text={text.two} link={link2} />
                <Card Card1={Card3} Title={title.three} Text={text.three} link={link3} />
          </div>
      </div>
  )
}

export default Sixthlayer;
