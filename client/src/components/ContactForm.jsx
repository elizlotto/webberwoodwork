import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
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
      subject: '',
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
            <div class="control has-icons-left has-icons-right">
              <input
                type="text"
                placeholder="e.g Jane Smith"
                class="input is-success"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="inputEmail">
              Email address
            </label>
            <div class="control has-icons-left has-icons-right">
              <input
                type="email"
                placeholder="jsmith@gmail.com"
                class="input is-danger"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <div className="field">
              <label className="label" htmlFor="InputSubject">
                Subject:
              </label>
              <div className="control">
                {/* add an error prompt for state if Select is the value from dropdown  */}
                <div
                  class="select"
                  value={this.state.subject}
                  onChange={this.onSubjectChange.bind(this)}
                >
                  <select>
                    <option>Select from dropdown</option>
                    <option>General Questions</option>
                    <option>Pricing Inquiry</option>
                    <option>Share a Review</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="message">
              Message
            </label>
            <div class="control">
              <textarea
                class="textarea"
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
  onSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }
  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }
}
export default ContactForm;
