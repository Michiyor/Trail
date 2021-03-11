import React from 'react';
import './style.scss';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    validation = {
        name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: /^[A-Za-z]+$/,
    };

    render() {
        return (
            <section className="all__contact">
                <div className='film'>
                    <iframe title='Downhill is awesome'
                            width="560" height="315" src="https://www.youtube.com/embed/qCTAHXL8pvA" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen> </iframe>
                </div>
                <form id="contact" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <h5 className='form__title'>Leave your bike trail</h5>
                    <div className="form-group">
                        <label>
                            <input type="text" className="form-control" value={this.state.name}
                                   onChange={this.onNameChange.bind(this)} placeholder="Wpisz swoje imię"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                   value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                   placeholder="Wpisz swój e-mail"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <textarea className="form-control" rows="5" value={this.state.message}
                                      onChange={this.onMessageChange.bind(this)}
                                      placeholder="To miejsce na Twoją wiadomość"/>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-contact">Wyślij</button>
                </form>
            </section>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

}

export default Contact;