import "../styles/thirdLayer.css"

function ThirdLayer(props) {
    const {
        ThirdLayerData,
        ThirdLayerImage,
        ThirdLayerHead
    } = props
  return (
      <div className="thirdLayer">
          <div className="left">
              <div className="head">{ThirdLayerHead}</div>
              <div className="insdata">{ThirdLayerData}</div>
          </div>
          <div className="right">
              <img src={ThirdLayerImage} alt="ima" />
          </div>
      </div>
  )
}

export default ThirdLayer;
