import styles from './ContactForm.module.scss';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class AddContact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetInput();
  };

  resetInput = e => {
    this.setState({ name: '', number: '' });
  };

  render() {
    console.log(this.state);
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
