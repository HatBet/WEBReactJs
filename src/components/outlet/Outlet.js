import { Component } from "react"
import axios from "axios"

import "../../App.css"
import PageWrapper from "../../layouts/pageWrapper/index"
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'QpwL5tke4Pnpja7X4'
}
export default class index extends Component {

    state = {
        name: "",
        job: "",
        prevState: []
    }



    handleSubmit = async () => {
        const { name, job } = this.state;
        const user = { name: name, job: job };
        await axios.post("https://reqres.in/api/users", user, {
            headers: headers
        }).then(res => {
            var names = JSON.parse(localStorage.getItem('userList')) || [];
            names.push({ name: res.data.name, job: res.data.job });
            localStorage.setItem('userList', JSON.stringify(names));
            window.location.reload();
        });
    };


    removeDevice = async (name, id) => {
        const data = JSON.parse(localStorage.getItem("userList")) || [];
        // await axios.delete("https://reqres.in/api/users", id, {
        //     headers: headers
        // }).then(res => {
        //     console.log("çalışıyor ama saçma")
        // });
        for (var i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                data.splice(i, 1);
                localStorage.setItem('userList', JSON.stringify(data));
                window.location.reload();
            }
        }
    };


    onChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }

    render() {
        const { match } = this.props;
        const data = JSON.parse(localStorage.getItem("userList")) || [];
        return (
            <PageWrapper match={match}>
                <div className="container">
                    <div id="urun" class="ui two column centered grid">
                        <div class="four column centered row">
                            <div class="column"><div className="ui form">
                                <div className="field">
                                    <input placeholder="Product Name" type="text" name="name" value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="field">
                                    <input placeholder="Product Name" type="text" name="job" value={this.state.job}
                                        onChange={this.onChange}
                                    />
                                </div></div>
                                <div class="column">
                                    <div class="field">
                                        <button id="create" className="ui blue submit button" onClick={() => this.handleSubmit()}>
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="column"> <table className="ui single line table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((i, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{i.name}</td>
                                                    <td>
                                                        <button className="ui blue submit button" onClick={() => this.removeDevice(i.name, index)} >Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table></div>

                        </div>

                    </div>
                </div>


            </PageWrapper>
        )
    }
}