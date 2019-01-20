import React from 'react'
import ActionSheet from '../../src'

export default class ActionSheetDemo extends React.Component {

    state = {
        open: false
    }

    render() {

        return (
            <div>
                <button
                    type={'button'}
                    onClick={() => this.setState({open: true})}
                >
                    Open
                </button>
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
            </div>
        )
    }
}