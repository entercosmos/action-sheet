import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import ActionSheetDemo from './ActionSheetDemo'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Demo extends Component {
    render() {
        return <div>
            <h1>ActionSheet Demo</h1>
            <ActionSheetDemo/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
