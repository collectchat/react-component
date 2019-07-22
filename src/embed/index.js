import React, { Component } from 'react';

export default class Embed extends Component {
    componentWillMount() {
        if (this.props.config) {
            window.collectchat = window.collectchat || {};
            window.collectchat.ready = () => {
                window.collectchat.config(this.props.config);
            }
        }
    }
    render() {
        const width = this.props.width ? this.props.width : '100%';
        const height = this.props.height ? this.props.height : '600';

        return (
            <div>
                { this.props.id ? <iframe src={`https://links.collect.chat/${this.props.id}`} width={width} height={height} frameBorder="0"></iframe> : null }
            </div>
        )
    }
}

Embed.propTypes = {
    id: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    height: React.PropTypes.string
};