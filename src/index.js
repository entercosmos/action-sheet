import React from 'react'
import {css, cx, keyframes} from 'emotion'
import PropTypes from 'prop-types'

const ActionSheetOption = ({title, onClick, strong, variant}) => (
    <div
        className={cx(
            css`
                padding: 16px;
                width: 100%;
                background-color: #fff;
                color: #000;
                margin-top: 10px;
                text-align: center;
                border-radius: 3px;
                cursor: pointer;
                user-select: none;
                &:hover {
                    background-color: #f9f9f9;
                }
                &:active {
                    background-color: #eee;
                }
                ${variant === 'danger' ? 'color: red;' : null}
                ${strong ? 'font-weight: 600' : null}
            `
        )}
        onClick={onClick}
    >
        {title}
    </div>
)

export default class ActionSheet extends React.Component {

    static propTypes = {
        options: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                onClick: PropTypes.func.isRequired,
                variant: PropTypes.oneOf(['danger']),
                strong: PropTypes.bool,
            })
        ),
        onClose: PropTypes.func.isRequired
    }

    state = {
        closing: false
    }

    close = () => {

        this.setState({
            closing: true
        })

        setTimeout(this.props.onClose, 390)
    }

    render() {

        const fadeIn = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const fadeOut = keyframes`
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        `


        const slideIn = keyframes`
            0% {
                bottom: -100%;
            }
            100% {
                bottom: 0;
            }
        `

        const slideOut = keyframes`
            0% {
                bottom: 0;
            }
            100% {
                bottom: -100%;
            }
        `

        const backgroundAnimation = this.state.closing ? fadeOut : fadeIn
        const itemAnimation = this.state.closing ? slideOut : slideIn

        return (
            <div
                className={css`
                        position: fixed;
                        z-index: 2100;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    `}
            >
                <div
                    className={cx(css`
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        transition: 200ms ease background-color;
                        background-color: rgba(0, 0, 0, 0.3);
                        &:hover {
                            background-color: rgba(0, 0, 0, 0.28);
                        }
                        &:active {
                            background-color: rgba(0, 0, 0, 0.2);
                        }
                        animation: ${backgroundAnimation} 400ms ease;
                        cursor: pointer;
                    `)}
                    onClick={this.close}
                />
                <div
                    className={cx(css`
                        position: absolute;
                        left: 0;
                        right: 0;
                        padding: 15px;
                        bottom: 0;
                        animation: ${itemAnimation} 400ms ease;
                    `,)}
                >
                    <div
                        className={css`
                            width: 100%;
                            max-width: 500px;
                            margin: 0 auto;
                        `}
                    >
                        {this.props.options.map((item, i) => (
                            <ActionSheetOption
                                key={i}
                                {...item}
                                onClick={() => {
                                    item.onClick()
                                    this.props.onClose()
                                }}
                            />
                        ))}
                        <ActionSheetOption
                            title={'Cancel'}
                            strong={true}
                            onClick={() => {
                                this.close()
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}