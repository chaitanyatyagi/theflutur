import Sticky from "react-sticky-el"
import "../styles/sticky.css"

function Stickys() {
  function open(){
    window.open('https://sso.teachable.com/secure/112836/checkout/855737/legal-kit');
}
  return (
    <Sticky>
        <div className="secondnavbar">
            <div className="empty1new"></div>
            <div className="datanew">The Legal Kit</div>
            <div className="empty2new"></div>
            <div className="datanew">Overview</div>
            <div className="datanew">What's Inside</div>
            <div className="empty3new"></div>
            <div className="buynew" onClick={open}><b>BUY NOW</b></div>
            <div className="empty4new"></div>
        </div>
    </Sticky>
  )
}

export default Stickys;
