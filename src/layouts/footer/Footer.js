import { Component } from "react"

import "../..//index.css"
import pictures from "../../components/product/begonvil.jpg"

export default class Footer extends Component {
    render() {
        return (
            <div className="ui horizontal list" id="footer">
                <div className="item">
                    <img src={pictures} className="ui mini circular image" />
                    <div className="content">
                        <div className="ui sub header">Molly</div>
                        Coordinator
                    </div>
                </div>
                <div className="item">
                    <img src={pictures} className="ui mini circular image" />
                    <div className="content">
                        <div className="ui sub header">Elyse</div>
                        Developer
                    </div>
                </div>
                <div className="item">
                    <img src={pictures} className="ui mini circular image" />
                    <div className="content">
                        <div className="ui sub header">Eve</div>
                        Project Manager
                    </div>
                </div>
            </div>
        )
    }
}