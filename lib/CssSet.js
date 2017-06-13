export default class CssSet {

  static getInstance() {
    if (!CssSet.instance) {
      CssSet.instance = new CssSet();
    }

    return CssSet.instance;
  }

  constructor() {
    this.styles = [];
  }

  addStyles(styles) {
    this.styles.push(styles);
  }

  getStyles() {
    return this.styles.join(' ');
  }

}
