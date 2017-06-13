import React from 'react';
import styles from './Navigation.css';
import classNames from './Navigation.css.json';
import CssSet from '../../lib/CssSet.js';
import Button from '../Button/Button.jsx';
import Container from '../Container/Container.jsx';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
    }
  }

  componentWillMount() {
    if (!Navigation.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      Navigation.stylesAdded = true;
    }
  }

  toggle(event) {
    event.preventDefault();
    this.setState({"shown": !this.state.shown});
  }

  render() {
    return <Container>
      <div className={[classNames.container, this.state.shown ? classNames.shown : ''].join(' ')}>
        <p className={classNames.toggle}><a href="#" onClick={this.toggle.bind(this)}>Menu</a></p>
        <ul className={classNames.list}>
          <li><a href="#">Tour</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <a className={classNames.logo} href={this.props.logoUrl || '/'}><b>New</b>Providence</a>
        <ul className={classNames.list}>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contacts</a></li>
          <li><Button primary>Get App</Button></li>
        </ul>
      </div>
    </Container>;
  }
}
