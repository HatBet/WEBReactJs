import { Component } from "react"

export default class Card extends Component {
    render() {
        
        const { cardData } = this.props;
        return (
            <div  className="column">
            <div className="ui card">
                <div className="ui slide masked reveal image flex-row">
                    { cardData.pictures ? cardData.pictures.map(i => {
                            return(
                                <img src={i.pictures} className="visible content" key={i.id} />
                            )
                        }): <img src={cardData.picture} className="handle content" />
                    }
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