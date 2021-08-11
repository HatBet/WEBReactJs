import React, { Component } from 'react'
import PageWrapper from '../../layouts/pageWrapper'

export default class Contact extends Component {

    state = {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
        msg: null
    }

    handleSubmit = () => {
        const { firstname, lastname, message, phone, email } = this.state;

        if (firstname.length && lastname.length <= 3 || firstname.length && lastname.length >= 15 || message.length >= 200) {
            this.setState({ msg: "3'ten küçük veya 15'ten büyük olamaz" })
            this.setState({ msg: " mesajınız 200 karakterden fazla olamaz" })
        } else {
            this.setState({ msg: "İşleminiz başarılı" })
        }

        if (phone.length === 10) {
            this.setState({ msg: "işleminiz başarılı" })
        } else {
            this.setState({ msg: "telefon numaranız 10 haneli olmalı, (5xxxxxxxxx)" })
        }

        if (email !== undefined) {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                this.setState({ msg: "email adresini formata uygun giriniz(....@....)" })

            } else {
                this.setState({ msg: "işlem başarılı" })
            }
        }
    }

    onChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({ [name]: value });
    }

    render() {
        const { match } = this.props;
        const { msg } = this.state;
        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment">
                    <div className="ui form attached fluid segment" >
                        <div className="two fields">
                            <div className="field">
                                <label>First Name </label>
                                <input placeholder="First Name" type="text" name="firstname" value={this.state.firstname}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text" name="lastname" value={this.state.lastname}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Phone</label>
                                <input placeholder="5xxxxxxxxx" type="number" name="phone" value={this.state.phone}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input placeholder=".....@....." type="email" name="email" value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>

                        </div>
                        <div className="field">
                            <label>Message</label>
                            <input placeholder="message" type="text" name="message" value={this.state.message}
                                onChange={this.onChange}
                            />
                        </div>
                        <button className="ui blue submit button" type="submit" value="submit" onClick={this.handleSubmit}>
                            Gönder</button>
                    </div>
                    { msg === null ? null : <span>{msg}</span> }
                </div>
            </PageWrapper>
        )
    }
}