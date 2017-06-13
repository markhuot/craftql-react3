import React from 'react';
import styles from './Button.css';
import classNames from './Button.css.json';
import CssSet from '../../lib/CssSet.js';

export default class Button extends React.Component {
  componentWillMount() {
    if (!Button.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      Button.stylesAdded = true;
    }
  }

  render() {
    let classes = [classNames.button];
    if (this.props.primary) { classes.push(classNames.primary); }

    return <a className={classes.join(' ')} href={this.props.href || '#'}>{this.props.children}</a>;
  }
}
