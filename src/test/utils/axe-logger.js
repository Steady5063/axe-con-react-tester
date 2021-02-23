'use-strict'
const fs = require('fs')
const pathDir = require('path');

/**
 * Writes out violation results to a text file
 * @param {object} results requires an instance of aXe's results object
 * (https://github.com/dequelabs/axe-core/blob/develop-2x/doc/API.md#results-object)
 * @param {string} path path string to where you want your file to be written to.
 */
function reportViolations (results, path) {
  const violations = results.violations
  const incomplete = results.incomplete
  if (typeof violations === 'undefined') {
    throw new Error('No violations found in aXe results object')
  }

  const reporter = violations => {
    if (violations.length === 0) {
      return []
    }

    const lineBreak = '\n\n'

    return violations.map(violation => {
      const errorBody = violation.nodes.map(node => {
        const selector = node.target.join(', ')
        const expectedText = `Expected the HTML found at $('${selector}') to have no violations:` + lineBreak 
        return (
          expectedText +
          `Issue Description:` +
          `${violation.help} (${violation.id})` +
          `HTML:` + lineBreak +
          node.html + 
          lineBreak +
          node.failureSummary +
          lineBreak +
          `You can find more information on this issue here: \n` +
          violation.helpUrl
          +
          lineBreak 
         
        )
      }).join(lineBreak)

      return (errorBody)
    }).join(lineBreak+  `-------------------------------------------------------------` +lineBreak)
  }
  
  const incompleteReporter = incomplete => {
    if (incomplete.length === 0) {
      return []
    }

    const lineBreak = '\n\n'

    return incomplete.map(inc => {
      const errorBody = inc.nodes.map(node => {
        const selector = node.target.join(', ')
        const expectedText = `HTML found at $('${selector}') needs to be reviewed:` + lineBreak 
        return (
          expectedText +
          `Issue Description:` +
          `${inc.help} (${inc.id})` +
          `HTML:` +
          node.html +
          lineBreak +
          node.failureSummary +
          lineBreak +
          `You can find more information on this issue here: \n` +
          inc.helpUrl + lineBreak   
        )
      }).join(lineBreak)

      return (errorBody)
    }).join(lineBreak+  `-------------------------------------------------------------` +lineBreak)
  }


  const formatedViolations = reporter(violations)
  const formatedIncomplete = incompleteReporter(incomplete)
  let message = `Report Date: ${new Date() + '\n\n'}` + `${formatedViolations}` + `${formatedIncomplete}`;
  if (message.length === 0) message = `No violations found!`
  fs.writeFile(path, message, () => {})
}

module.exports = reportViolations;