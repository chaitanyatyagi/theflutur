import "../styles/thirdLayer.css"

function ThirdLayerReverse(props) {
    const {
        ThirdLayerData,
        ThirdLayerImage,
        ThirdLayerHead
    } = props
  return (
      <div className="thirdLayer">
          <div className="right">
              <img src={ThirdLayerImage} alt="ima" />
          </div>
          <div className="left">
              <div className="head">{ThirdLayerHead}</div>
              <div className="insdata">{ThirdLayerData}</div>
          </div>
      </div>
  )
}

export default ThirdLayerReverse;