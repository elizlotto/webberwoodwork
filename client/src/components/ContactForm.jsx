import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit(e) {
    console.log(this.state);
    console.log('in handle Submit');
    e.preventDefault();
    fetch('/send', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          alert('Your message has been sent.'); //change the state for a new view
        } else if (response.status === 'fail') {
          alert('Message failed to send.');
        }
      });

    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    return (
      <div className="contact">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="InputEmail">
              Email address
            </label>
            <div className="control">
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="message">
              Message
            </label>
            <div className="control">
              <textarea
                className="form-control"
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
          </div>
          <div class="field">
            <div className="control">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }
}
export default ContactForm;
