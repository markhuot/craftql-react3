import React from 'react';
import styles from './Split.css';
import classNames from './Split.css.json';
import CssSet from '../../lib/CssSet.js';

export default class Split extends React.Component {
  componentWillMount() {
    if (!Split.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      Split.stylesAdded = true;
    }
  }

  render() {
    const attr = Object.keys(this.props).filter((key) => key.match(/^width/)).reduce((accumulator, key) => {
      accumulator[`data-${key}`] = this.props[key];
      return accumulator;
    }, {});

    let classes = [classNames.split];
    if (this.props.centered) {
      classes.push(classNames.centered);
    }

    return <div className={classes.join(' ')} {...attr}>{this.props.children}</div>
  }
}
