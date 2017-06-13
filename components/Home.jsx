import React from 'react';
import styles from './Home.css';
import classNames from './Home.css.json';
import CssSet from '../lib/CssSet.js';

import Hero from 'Components/Hero';
import IconAndText from 'Components/IconAndText';
import Split from 'Components/Split';
import Navigation from 'Components/Navigation';
import Container from 'Components/Container';
import Backgrounder from 'Components/Backgrounder';
import FeatureImage from 'Components/FeatureImage';

export default class Home extends React.Component {
  componentWillMount() {
    if (!Home.stylesAdded) {
      CssSet.getInstance().addStyles(styles._getCss());
      Home.stylesAdded = true;
    }
  }

  render() {
    return <div>
      <div className={classNames.home} data-spacing="120">
        <Backgrounder>
          <Navigation/>
          <Hero />
        </Backgrounder>
        <Container>
          <Split centered width-at-medium="1/2">
            <IconAndText/>
            <IconAndText/>
          </Split>
        </Container>
        <Container>
          <hr/>
        </Container>
        <FeatureImage/>
        <FeatureImage/>
      </div>
      <script src="/browser.bundle.js"></script>
    </div>;
  }
}
