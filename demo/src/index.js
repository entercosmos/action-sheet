import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import ActionSheet from '../../src'
import Button from '@cmds/button'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`



export default class ActionSheetDemo extends React.Component {

    state = {
        open: false
    }

    render() {

        return (
            <Canvas>
                <Paragraph>
                    Default
                </Paragraph>
                <Box>
                    <Button
                        onClick={() => this.setState({open: true})}
                    >
                        Open Action Sheet
                    </Button>
                    {this.state.open ? (
                        <ActionSheet
                            options={[{
                                title: 'Primary Option',
                                strong: true,
                                onClick: () => {
                                    alert('Primary Option')
                                }
                            }, {
                                title: 'Option A',
                                onClick: () => {
                                    alert('Option A')
                                }
                            }, {
                                title: 'Remove',
                                variant: 'danger',
                                onClick: () => {
                                    alert('Remove')
                                }
                            }]}
                            onClose={() => this.setState({open: false})}
                        />
                    ) : null}
                </Box>
            </Canvas>
        )
    }
}

class Demo extends Component {
    render() {
        return <div>
            <ActionSheetDemo/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
