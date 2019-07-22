import React, { Component } from 'react'

export default class Launcher extends Component {
    componentWillMount() {
        if (this.props.config) {
            window.collectchat = window.collectchat || {};
            window.collectchat.ready = () => {
                window.collectchat.config(this.props.config);
            }
        }
        if (this.props.id) {
            window.CollectId = this.props.id;
            const h = document.head || document.getElementsByTagName("head")[0];
            var s = document.createElement("script");
            s.setAttribute("type", "text/javascript");
            s.setAttribute("src", "https://collectcdn.com/launcher.js");
            h.appendChild(s);
        }
    }
    render() {
        return null;
    }
}

Launcher.propTypes = {
    id: React.PropTypes.string.isRequired,
    config: React.PropTypes.array
};