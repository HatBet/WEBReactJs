import { Component } from "react"
import axios from "axios"
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
                <div className="ui container">
                    <div className="ui form">
                        <div className="field">
                            <input placeholder="Product Name" type="text" name="name" value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="field">
                            <input placeholder="Product Name" type="text" name="job" value={this.state.job}
                                onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <button className="ui blue submit button" onClick={() => this.handleSubmit()}>
                                Create
                            </button>
                        </div>
                    </div>
                    <div>
                        <table className="ui single line table">
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
                        </table>
                    </div>
                </div>
            </PageWrapper>
        )
    }
}