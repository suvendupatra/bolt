import { define, props } from '@bolt/core/utils';
import classNames from 'classnames/bind';
import { withLitHtml, html } from '@bolt/core/renderers/renderer-lit-html';

import styles from './_unordered-list-item.scss';

let cx = classNames.bind(styles);

@define
class BoltUnorderedListItem extends withLitHtml() {
  static is = 'bolt-unordered-list-item';

  static props = {
    last: props.boolean,
  };

  render() {
    const { last } = this.props;

    const classes = cx('c-bolt-unordered-list-item', {
      [`c-bolt-unordered-list-item--last-item`]: last,
    });

    return html`
      ${this.addStyles([styles])}
      <li class="${classes}">${this.slot('default')}</li>
    `;
  }
}

export { BoltUnorderedListItem };
