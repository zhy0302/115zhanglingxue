import React, { Component } from 'react';
import './tab.css';

export default class List extends Component {
    changeButton = (id, index, event) => {
        const { items, radioIndex } = this.props;
        const copeIndex = items.messages[id].idx.slice();
        const copeMessages = items.messages.slice();
        const dele = copeMessages[id];
        items.isActive = true;
        copeMessages.splice(id, 1);
        copeMessages.unshift(dele);
        for (let i in copeIndex) {
            if (copeIndex[i].index === index) {
                const temp = copeIndex[i];
                copeIndex.splice(i, 1)
                copeIndex.unshift(temp)
            }
        }
        radioIndex({
            id: id,
            copeIndex: copeIndex,
            copeMessages: copeMessages,
            isActive: items.isActive,
            event:event
        })
    }

    renderList = (id) => {
        const { items } = this.props;
        return items.messages[id].idx.map((item, index) => {
            if(index === 0){
                return (
                    <span onClick={this.changeButton.bind(this, id, item.index)} key={index} className='chance-box active'>
                        {item.index}
                    </span>
                )
            }else {
                return (
                    <span onClick={this.changeButton.bind(this, id, item.index)} key={index} className='chance-box'>
                        {item.index}
                    </span>
                )
            }
            
        })
    }

    renderImgs = () => {
        const { items } = this.props;
        return items.messages.map((item, index) => {
            return (
                <li className='list-all' key={index} >
                    <div className='list-name'>{item.name}</div>
                    <span>
                        {this.renderList(index)}
                    </span>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderImgs()}
                </ul>
            </div>
        )
    }
} 