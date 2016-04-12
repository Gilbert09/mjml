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
      margin: "0 auto"
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
      background: mjAttribute('background-color')
    }

    return _.merge({}, this.constructor.baseStyles, {
      td: {
        fontSize: 0,
        verticalAlign: mjAttribute('vertical-align'),
        paddingTop: mjAttribute('padding-top'),
        paddingBottom: mjAttribute('padding-bottom'),
        paddingRight: mjAttribute('padding-right'),
        paddingLeft: mjAttribute('padding-left'),
        padding: mjAttribute('padding'),
        textAlign: mjAttribute('text-align')
      },
      div: {
        maxWidth: mjAttribute('parentWidth'),
        borderLeft :mjAttribute('border-left'),
        borderTop :mjAttribute('border-top'),
        borderRight :mjAttribute('border-right'),
        borderBottom :mjAttribute('border-bottom')
      }
    }, {
      div: this.isFullWidth() ? {} : _.cloneDeep(background),
      table: this.isFullWidth() ? {} : _.cloneDeep(background),
      tableFullwidth: this.isFullWidth() ? _.cloneDeep(background) : {}
    })
  }

  renderFullWidthSection() {
    const { mjAttribute } = this.props

    let mcEdit = mjAttribute('mc-edit');
    let mcHide = mjAttribute('mc-hide');

    return (
      <table data-legacy-background={mjAttribute('background-url')}
             data-mc-edit={mcEdit}
             data-mc-hide={mcHide}
             border="0"
             cellPadding="0"
             cellSpacing="0"
             data-width={mjAttribute('parentWidth')}
             className={mjAttribute('class') + '-table' || ''}
             style={_.merge({}, this.styles.tableFullwidth, this.styles.table)}>
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

    let className = '';

    let customClassName = mjAttribute('class');
    let noOutlookFix = mjAttribute('no-outlook-fix');

    if (customClassName) {
      className += customClassName;
    }

    if (!noOutlookFix) {
      className += " outlook-background-fix-open"
    }

    let mcEdit = mjAttribute('mc-edit');
    let mcHide = mjAttribute('mc-hide');

    return (
        <div style={this.styles.div} data-mc-edit={mcEdit} className={mjAttribute('class') + '-div' || ''}>
          <table className={className}
                 data-url={mjAttribute('background-url') || ''}
                 data-legacy-background={fullWidth ? undefined : mjAttribute('background-url')}
                 data-mc-edit={mcEdit}
                 data-mc-hide={mcHide}
                 border="0"
                 cellPadding="0"
                 cellSpacing="0"
                 data-legacy-align="center"
                 data-width={mjAttribute('parentWidth')}
                 style={this.styles.table}>
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
