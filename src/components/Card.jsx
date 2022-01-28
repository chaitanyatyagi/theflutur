import "../styles/card.css"
function Card(props) {
    const {Card1,Title,Text,link} = props
    return (
        <div class="card">
            <img src={Card1} class="card-img-top" alt="card"/>
            <div class="card-body">
                <h5 class="card-title">{Title}</h5>
                <p class="card-text">{Text}</p>
                <div className="bdiv" onclick={link}>Go somewhere</div>
            </div>
        </div>
    )
}

export default Card;
