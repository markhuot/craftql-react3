import React from 'react';
import styles from './Hero.css';
import classNames from './Hero.css.json';
import CssSet from '../../lib/CssSet.js';

import Button from 'Components/Button';

export default class Hero extends React.Component {
  componentWillMount() {
    if (!Hero.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      Hero.stylesAdded = true;
    }
  }

  render() {
    return <div className={classNames.container}>
      <div className={classNames.content} data-spacing="xxl">
        <h1 className={classNames.heading}>What Happens tomorrow?</h1>
        <p className={classNames.subhead}>The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed since his interview with his landlady. His face brightened up, and he began to feel quite convivial.</p>
        <p><Button>Watch Video</Button></p>
      </div>
    </div>;
  }
}
