import './App.css';
import Image1 from "../src/image/img1.jpeg"
import Image2 from "../src/image/img2.jpeg"
import Image3 from "../src/image/img3.jpeg"
import Header from './components/Header';
import Stickys from './components/Stickys';
import ThirdLayer from './components/ThirdLayer';
import ThirdLayerReverse from './components/ThirdLayerReverse';
import Line from './components/Line';
import FourthLayer from './components/FourthLayer';
import Footer from './components/Footer';
import FifthLayer from './components/FifthLayer';
import SixthLayer from './components/SixthLayer';

function App() {
  const Headings = {
    one : "Every new client and new project is a risk.",
    two : "At some point, you’re going to get burned.",
    three : "You’re a professional. Act like it."
  }
  const Data = {
    one : "You’ve probably experienced, or at least heard, some of the horror stories. “The client ghosted me and I haven't been paid.” “We agreed on three revisions, but they wanted more.” “I quoted them 12 pages for the site, but the scope kept growing.”",
    two : "It happens to the best of us. And while it does tug on your spirit, there’s not much you can do about unpredictability. But you can at least be prepared for whatever may come, and set yourself up for success.",
    three : "If you enter a new client relationship prepared, not only will you be setting the terms of the engagement, but you let the client know that you take their business seriously.The Legal Kit includes agreements that are template versions of what we use for our business here in the US, and they are applicable internationally. If you're unsure, consider having a lawyer check them out as well."
  }
  return (
    <div className="App">
      <Header />
      <Stickys />
      <ThirdLayer ThirdLayerHead = {Headings.one} ThirdLayerImage = {Image1} ThirdLayerData = {Data.one} />
      <ThirdLayerReverse ThirdLayerHead = {Headings.two} ThirdLayerImage = {Image2} ThirdLayerData = {Data.two} />
      <ThirdLayer ThirdLayerHead = {Headings.three} ThirdLayerImage = {Image3} ThirdLayerData = {Data.three} />
      <Line />
      <FourthLayer />
      <FifthLayer />
      <SixthLayer />
      <Footer />

    </div>
  );
}

export default App;
