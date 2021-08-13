import axios from "axios";
import { Component } from "react"
import PageWrapper from "../../layouts/pageWrapper"
import Loading from "../loading/Loading";
import SignUP from "./SignUp";



export default class Login extends Component {


    state = {
        type: "adasdmin",
        loader: false,
        password: "",
        email: ""
    }

    onClick = () => {
        this.setState({ loader: true });
        this.handleSubmit();
        if (!localStorage.user) {
            this.props.history.push("/login")
        } else {
            setTimeout(() => {
                this.setState({ loader: false })
                this.props.history.push("/")
            }, 3000);
        }
    }

    if(user) {
        return (
            <div>{user.name} is Logged in </div>
        )
    }


    handleSubmit = async () => {
        const { password, email } = this.state;
        const user = { password, email };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'QpwL5tke4Pnpja7X4'
        }
        await axios.post("https://reqres.in/api/login", user, {
            headers: headers
        }).then(res => {
            localStorage.setItem('user', res.data.token);
        });
    };
    onChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }

    render() {
        const { password, email } = this.state;
        const { match } = this.props;

        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment">
                    <div className="ui placeholder segment">
                        <div className="ui two column very relaxed stackable grid">
                            <div className="column">
                                <div className="ui form" >
                                    <div className="field">
                                        <label>Username</label>
                                        <div className="ui left icon input">
                                            <input type="email" placeholder="E-Mail" name="email" value={email} onChange={this.onChange} />
                                            <i className="user icon"></i>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <div className="ui left icon input">
                                            <input type="password" value={password} name="password" onChange={this.onChange} />
                                            <i className="lock icon"></i>
                                        </div>
                                    </div>

                                    <button className="ui blue submit button" onClick={() => this.onClick()}>
                                        {this.state.loader ? <Loading /> : "Login"}
                                    </button>
                                </div>
                            </div>
                            <div className="middle aligned column">
                                <div className="ui big button" >
                                    <i className="signup icon"></i>
                                    {this.state.loader ? <SignUP /> : "sign up"}
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