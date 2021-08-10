import { Component } from "react"
import history from "../../history";
import PageWrapper from "../../layouts/pageWrapper"
import Loading from "../loading/Loading";


export default class Login extends Component {
    state = {
        type: "admasdain",
        loader: false,
    }

    onClick = () => {
       this.setState({ loader: true });

       if(this.state.type === "admin"){
        history.push("/")
       } else{
        setTimeout(() => this.setState({ loader: false }), 3000);
        history.push("/index")
       }
    }

    render() {
        const { match } = this.props;
        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment">
                    <div className="ui placeholder segment">
                        <div className="ui two column very relaxed stackable grid">
                            <div className="column">
                                <div className="ui form">
                                    <div className="field">
                                        <label>Username</label>
                                        <div className="ui left icon input">
                                            <input type="text" placeholder="Username" />
                                            <i className="user icon"></i>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <div className="ui left icon input">
                                            <input type="password" />
                                            <i className="lock icon"></i>
                                        </div>
                                    </div>
                                   
                                     <a className="ui blue submit button" onClick={this.onClick}>
                                        { this.state.loader ? <Loading />: "Login" }
                                     </a>
                                </div>
                            </div>
                            <div className="middle aligned column">
                                <div className="ui big button">
                                    <i className="signup icon"></i>
                                    Sign Up
                                </div>
                            </div>
                        </div>
                        <div className="ui vertical divider">
                            Or
                        </div>
                    </div>
                </div>
            </PageWrapper>

        )
    }
}