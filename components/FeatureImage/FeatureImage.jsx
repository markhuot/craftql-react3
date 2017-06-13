import React from 'react';
import styles from './FeatureImage.css';
import classNames from './FeatureImage.css.json';
import CssSet from '../../lib/CssSet.js';
import Container from '../Container/Container.jsx';
import Button from '../Button/Button.jsx';

export default class FeatureImage extends React.Component {
  componentWillMount() {
    if (!FeatureImage.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      FeatureImage.stylesAdded = true;
    }
  }

  render() {
    return <div className={classNames.container}>
      <Container>
        <div className={classNames.content}>
          <h2>Your day is protected</h2>
          <p>There have not been any since we have lived here, said my mother.</p>
          <p>We thought - Mr. Copperfield thought - it was quite a large rookery; but the nests were very old ones, and the birds have deserted them a long while.</p>
          <p><Button primary>Try to hack us</Button> <Button>Learn more</Button></p>
        </div>
      </Container>
    </div>;
  }
}
