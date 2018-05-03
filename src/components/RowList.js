import React, {Component} from 'react';

export default class Item extends Component {
    render()
    {
        const data = this.props.data;
        const dataSplited = data.split(',');
        let myData = dataSplited[0];
        return(
            <div className="row content">
              <div className="col-5 col-sm-5">
                <img 
                  className="img-fluid"
                  alt="postImage"
                  src={this.props.src}
                />
              </div>
              <div className="col-7 col-sm-7 p-2">
                <p>
                    <b>{this.props.title}</b> <br/>
                    <span/> {myData} <br/>
                    <span/> {dataSplited[1]} - {dataSplited[2]}
                </p>
              </div>
            </div>
        );
    }
}