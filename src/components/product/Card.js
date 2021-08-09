import { Component } from "react"
import pictures from "./begonvil.jpg"

//image ifadesi birden fazla olduğunda oluşturulması gereken döngü türü?
//yani birden fazla ürün cardı için

export default class Card extends Component {
    render() {
        const { cardData } = this.props;
        return (
            <div  className="column">
            <div className="ui card">
                <div className="ui slide masked reveal image">
                    <img src={pictures} className="visible content" />
                    <img src={pictures} className="hidden content" />
                </div>
                <div className="content">
                    <div className="meta">
                        <span className="date">Created in {cardData.date}</span>
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="users icon"></i>
                        {cardData.members} Members
                    </a>
                </div>
            </div>
            </div>
        )
    }
}