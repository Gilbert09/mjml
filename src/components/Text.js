import MJMLColumnElement from './decorators/MJMLColumnElement'
import React, { Component } from 'react'
import _ from 'lodash'


/**
 * This tag allows you to display the most basic kind of text in your email
 */
@MJMLColumnElement({
  tagName: 'mj-text',
  content: '',
  attributes: {
    'align': 'left',
    'color': '#000000',
    'font-family': 'Helvetica, Arial, sans-serif',
    'font-size': '13px',
    'line-height': '22px',
    'padding-bottom': '10px',
    'padding-left': '25px',
    'padding-right': '25px',
    'padding-top': '10px'
  }
})
class Text extends Component {

  static baseStyles = {
    div: {
      cursor: 'auto'
    }
  };

  getStyles() {
    const { mjAttribute, color } = this.props

    return _.merge({}, this.constructor.baseStyles, {
      div: {
        color: mjAttribute('locked') ? color : mjAttribute('color'),
        fontFamily: mjAttribute('font-family'),
        fontSize: mjAttribute('font-size'),
        fontStyle: mjAttribute('font-style'),
        fontWeight: mjAttribute('font-weight'),
        lineHeight: mjAttribute('line-height'),
        letterSpacing: mjAttribute('letter-spacing'),
        textDecoration: mjAttribute('text-decoration'),
        textAlign: mjAttribute('text-align'),
        textTransform: mjAttribute('text-transform'),
        border: mjAttribute('border')
      }
    })
  }

  render() {
    const { mjContent, mjAttribute } = this.props

    this.styles = this.getStyles()

    let customClassName = mjAttribute('class');

    if (!customClassName) {
      customClassName = "mj-content";
    } else {
      customClassName = customClassName + " mj-content";
    }

    let mcEdit = mjAttribute('mc-edit');

    return (
      <div
        data-mc-edit={mcEdit}
        className={customClassName}
        dangerouslySetInnerHTML={{ __html: mjContent() }}
        style={this.styles.div} />
    )
  }

}

export default Text
