import MJMLElement from './decorators/MJMLElement'
import React, { Component } from 'react'
import _ from 'lodash'

/**
 * Sections are intended to be used as rows within your email. They will be used to structure the layout.
 */
@MJMLElement({
  tagName: 'mj-section',
  attributes: {
    'background-repeat': 'repeat',
    'padding-top': '20px',
    'padding-bottom': '20px',
    'background-size': 'auto'
  }
})
class Section extends Component {

  static baseStyles = {
    div: {
      margin: "0 auto",
      maxWidth: "600px"
    },
    table: {
      width: "100%",
      fontSize: "0"
    },
    td: {
      textAlign: 'center',
      verticalAlign: 'top'
    }
  };

  isFullWidth() {
    const { mjAttribute } = this.props

    return mjAttribute('full-width') == 'full-width'
  }

  getStyles() {
    const { mjAttribute } = this.props

    const background = mjAttribute('background-url') ? {
      background: `url(${mjAttribute('background-url')}) top center / ${mjAttribute('background-size') || ''} ${mjAttribute('background-repeat') || ''}`
    } : {
      backgroundColor: mjAttribute('background-color')
    }

    return _.merge({}, this.constructor.baseStyles, {
      div: this.isFullWidth() ? {} : _.cloneDeep(background),
      table: this.isFullWidth() ? {} : _.cloneDeep(background),
      tableFullwidth: this.isFullWidth() ? _.cloneDeep(background) : {},
      td: {
        fontSize: 0,
        verticalAlign: mjAttribute('vertical-align'),
        paddingTop: mjAttribute('padding-top'),0
        paddingBottom: mjAttribute('padding-bottom'),
        paddingRight: mjAttribute('padding-right'),
        paddingLeft: mjAttribute('padding-left'),
        padding: mjAttribute('padding')
      }
    })
  }

  renderFullWidthSection() {
    const { mjAttribute } = this.props

    return (
      <table data-legacy-background={mjAttribute('background-url')}border="0" cellPadding="0" cellSpacing="0" style={_.merge({}, this.styles.tableFullwidth, this.styles.table)}>
        <tbody>
          <tr>
            <td>
              {this.renderSection()}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  renderSection() {
    const { renderWrappedOutlookChildren, mjAttribute } = this.props
    const fullWidth = this.isFullWidth()

    return (
      <div style={this.styles.div}>
        <table className="outlook-background-fix-open" data-url={mjAttribute('background-url') || ''} data-legacy-background={fullWidth ? undefined : mjAttribute('background-url')} border="0" cellPadding="0" cellSpacing="0" data-legacy-align="center" style={this.styles.table}>
          <tbody>
            <tr>
              <td style={this.styles.td}>
                {renderWrappedOutlookChildren()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    this.styles = this.getStyles()

    return this.isFullWidth() ? this.renderFullWidthSection() : this.renderSection()
  }
}

export default Section
