import React, { Component } from 'react'
import PageWrapper from '../../layouts/pageWrapper';

export default class Contact extends Component {

    //3'ten az 15'den fazla olduğu first name ve lastname
    //message için 200'den fazla olduğu durumlarda
    //hata mesajı
    // diğer durumlarda ise başarılı mesajı 

    constructor(props){
        super(props);
        this.state={value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
       this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('başarılı '+this.state.value);
        event.preventDefault();
    }

    render() {
        const { match } = this.props;
        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment">
                    <form className="ui form attached fluid segment" onSubmit={this.handleSubmit}>
                        <div className="two fields">
                            <div className="field">
                                <label>First Name </label>
                                <input placeholder="First Name" type="text" value={this.state.value} onClick={this.handleChange}/>
                            </div>
                             <div className="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" type="text"value={this.state.value} onClick={this.handleChange} />
                            </div> 
                        </div>
                        <div className="field">
                            <label>Message</label>
                            <input placeholder="message" type="text"value={this.state.value} onClick={this.handleChange} />
                        </div>
                        <button className="ui blue submit button" type="submit"  value="submit">
                            Gönder</button>
                    </form>
                </div>
            </PageWrapper>
        )

    }
}