import React from 'react';
import styles from './Backgrounder.css';
import classNames from './Backgrounder.css.json';
import CssSet from '../../lib/CssSet.js';

export default class Backgrounder extends React.Component {
  componentWillMount() {
    if (!Backgrounder.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      Backgrounder.stylesAdded = true;
    }
  }

  render() {
    return <div className={classNames.container}>
      {this.props.children}
    </div>;
  }
}
