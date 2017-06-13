import React from 'react';
import styles from './Container.css';
import classNames from './Container.css.json';
import CssSet from '../../lib/CssSet.js';

export default class Container extends React.Component {
  componentWillMount() {
    if (!Container.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      Container.stylesAdded = true;
    }
  }

  render() {
    return <div className={classNames.container}>
      {this.props.children}
    </div>;
  }
}
