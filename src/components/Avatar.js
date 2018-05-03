import React, { Component } from 'react';

export default class Avatar extends Component {
    render()
    {
        return(
            <div style={{padding:16}}>
                <div className="avatar-container">
                <img 
                    className="avatar"
                    alt="avatar"
                    src={this.props.src}
                />
                </div>
                <div className="dashboard">
                    <hr/>
                    <h5 style={{textAlign:'center',color:'#000'}}>{this.props.name.first}</h5>
                </div>
            </div>
        );
    }
}