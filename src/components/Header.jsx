import "../styles/header.css"
import Image from "../image/thefutur.svg"
import Tick from "../image/tick.png"

function Header() {
    function imgopen(){
        window.open('https://thefutur.com/');
    }
    function imgopen1(){
        window.open('https://thefutur.com/shop');
    }
    function imgopen2(){
        window.open('https://thefutur.com/learn');
    }
    function imgopen3(){
        window.open('https://thefutur.com/our-story');
    }
    function open(){
        window.open('https://sso.teachable.com/secure/112836/checkout/855737/legal-kit');
    }
    return (
        <div className="header">
            <div className="navbar">
                <div className="empty1"></div>
                <div className="icon">
                    <img src={Image} alt="ima" onClick={imgopen} className="img"/>
                </div>
                <div className="empty3"></div>
                <div className="data" onClick={imgopen1}>Courses & Tools</div>
                <div className="data" onClick={imgopen2}>Content</div>
                <div className="data" onClick={imgopen3}>Our Mission</div>
                <div className="empty2"></div>
                <div className="option"></div>
            </div>
            <div className="bodyinsimg">
                <div className="heading"><b>The Legal Kit</b></div>
                <div className="line">
                    <div className="real"></div>
                </div>
                <div className="money"><b>$99</b></div>
                <div className="material"><div className="matins">Free your mind from worrying about the what-ifs and focus <br />on the important stuff with these industry standard legal <br />agreements.</div></div>
                <div className="list">
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">15 page guidebook</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">MSA & SOW templates</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">Employee agreement templates</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">NDA & media release templates</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata"><div className="inside">Lifetime updates</div><div className="insideempty"></div></div>
                    </div>
                </div>
                <div className="buy">
                    <div className="buyinside" onClick={open}><b>BUY NOW</b></div>
                </div>
            </div>
            <img src="https://assets-global.website-files.com/5d816b07d269382588dbcab1/5e45a476d989b8b39814ba56_the-legal-kit-cover.jpg" alt="header"/>
            <div className="bodyinsimg2">
                <div className="heading"><b>The Legal Kit</b></div>
                <div className="line">
                    <div className="real"></div>
                </div>
                <div className="money"><b>$99</b></div>
                <div className="material"><div className="matins">Free your mind from worrying about the what-ifs and focus <br />on the important stuff with these industry standard legal <br />agreements.</div></div>
                <div className="list">
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">15 page guidebook</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">MSA & SOW templates</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">Employee agreement templates</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata">NDA & media release templates</div>
                    </div>
                    <div className="eachline">
                        <div className="tickicon">
                            <img src={Tick} alt="tick" className="tickiconimg" />
                        </div>
                        <div className="listdata"><div className="inside">Lifetime updates</div><div className="insideempty"></div></div>
                    </div>
                </div>
                <div className="buy">
                    <div className="buyinside"><b>BUY NOW</b></div>
                </div>
            </div>
        </div>
    )
}

export default Header;
