import MJMLColumnElement from './decorators/MJMLColumnElement'
import React, { Component } from 'react'
import _ from 'lodash'

/**
 * Displays a customizable button
 */
@MJMLColumnElement({
  tagName: 'mj-button',
  content: ' ',
  attributes: {
    'align': 'center',
    'background-color': '#414141',
    'border-radius': '3px',
    'border': 'none',
    'color': '#ffffff',
    'font-size': '13px',
    'font-weight': 'bold',
    'href': '',
    'padding': '15px 30px',
    'text-decoration': 'none',
    'vertical-align': 'middle'
  }
})
class Button extends Component {

  static baseStyles = {
    a: {
      display: 'block',
      textDecoration: 'none'
    }
  };

  getStyles() {
    const { mjAttribute } = this.props

    return _.merge({}, this.constructor.baseStyles, {
      td: {
        background: mjAttribute('background-color'),
        borderRadius: mjAttribute('border-radius'),
        color: mjAttribute('color'),
        fontStyle: mjAttribute('font-style'),
        cursor: "auto"
      },
      table: {
        backgroundColor: mjAttribute('container-background-color'),
        border: mjAttribute('border'),
        borderRadius: mjAttribute('border-radius'),
        width: mjAttribute('width')
      },
      a: {
        background: mjAttribute('background-color'),
        border: `1px solid ${mjAttribute('background-color')}`,
        borderRadius: mjAttribute('border-radius'),
        color: mjAttribute('color'),
        fontFamily: mjAttribute('font-family'),
        fontSize: mjAttribute('font-size'),
        fontStyle: mjAttribute('font-style'),
        fontWeight: mjAttribute('font-weight'),
        padding: mjAttribute('padding'),
        textDecoration: mjAttribute('text-decoration'),
        textTransform: mjAttribute('text-transform'),
        lineHeight: mjAttribute('line-height'),
        letterSpacing: mjAttribute('letter-spacing')
      }
    })
  }

  renderButton() {
    const { mjContent, mjAttribute } = this.props

    let innerHtml = mjContent();

    if (mjAttribute('icon')) {
      innerHtml = "<i style=\"padding-right: 6px;\" class=\"fa fa-" + mjAttribute('icon') + "\"></i>" + innerHtml
    }

    return (
        <a
            className="mj-content"
            dangerouslySetInnerHTML={{ __html: innerHtml }}
            href={mjAttribute('href')}
            style={this.styles.a}
            target="_blank" />
    )
  }

  render() {
    const { mjAttribute } = this.props

    this.styles = this.getStyles()

    let mcEdit = mjAttribute('mc-edit');

    return (
      <table
        data-mc-edit={mcEdit}
        border="0"
        cellPadding="0"
        cellSpacing="0"
        data-legacy-align={mjAttribute('align')}
        style={this.styles.table}>
        <tbody>
          <tr>
            <td
              data-legacy-align="center"
              data-legacy-bgcolor={mjAttribute('background-color')}
              data-legacy-valign={mjAttribute('vertical-align')}
              style={this.styles.td}>
              {this.renderButton()}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

}

export default Button
