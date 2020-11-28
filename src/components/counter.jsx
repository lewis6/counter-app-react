import React, { Component } from 'react';

class Counter extends Component {

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() { 

        return (
        <div className="row">
            <div className="col-1">
                 <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                <button 
                className="btn btn-secondary btn-sm" 
                onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                <button 
                className="btn btn-secondary btn-sm m-2" 
                onClick={() => this.props.onDecrement(this.props.counter)}
                disabled={this.props.counter.value === 0}>-</button>
                <button 
                className="btn btn-secondary badge-danger" 
                onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;