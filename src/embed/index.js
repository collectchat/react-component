import React, { Component } from 'react';

export default class index extends Component {
    componentWillMount() {
        if (this.props.config) {
            window.collectchat = window.collectchat || {};
            window.collectchat.ready = () => {
                window.collectchat.config(this.props.config);
            }
        }
    }
    render() {
        return (
            <div>
                { this.props.collectChatId ? <iframe src={`https://links.collect.chat/${this.props.collectChatId}`} width="100%" height="600" frameBorder="0"></iframe> : null }
            </div>
        )
    }
}
