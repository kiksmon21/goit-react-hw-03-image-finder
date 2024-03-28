import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { search: '' };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <FaSearch />
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}