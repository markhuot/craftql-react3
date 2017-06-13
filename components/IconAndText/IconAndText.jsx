import React from 'react';
import styles from './IconAndText.css';
import classNames from './IconAndText.css.json';
import Icon from '../Icon/Icon.jsx';
import CssSet from '../../lib/CssSet.js';

export default class IconAndText extends React.Component {
  componentWillMount() {
    if (!IconAndText.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      IconAndText.stylesAdded = true;
    }
  }

  render() {
    return <div className={classNames.block} data-spacing="xxl">
      <Icon primary/>
      <h2 className={classNames.title}>Real-time all the time</h2>
      <div className={classNames.body}>
        <p>Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.</p>
        <p>Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.</p>
      </div>
    </div>;
  }
}
