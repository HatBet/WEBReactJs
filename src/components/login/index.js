import { Component } from "react"

import PageWrapper from "../../layouts/pageWrapper/index"

export default class index extends Component {


    handleSubmit = async () => {
        const { name } = this.state;
        const user = { name };
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

        return (
            <PageWrapper match={match}>
                <div className="ui container">
                    <div>Ürün ekleme alanı
                        <div className="field">
                            <label> Name </label>
                            <input placeholder="Product Name" type="text" name="name" value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <button className="ui blue submit button" onClick={() => this.handleSubmit()}>
                                       Create
                                    </button>
                    </div>
                    <div><table class="ui single line table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Registration Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Lilki</td>
                                <td>September 14, 2013</td>
                            </tr>

                        </tbody>
                    </table></div>
                </div>
            </PageWrapper>
        )
    }
}