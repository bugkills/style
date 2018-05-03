import React, { Component } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Item from './components/RowList';

class App extends Component {
  render() {
    return (
      <div className='root'>
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor:"rgb(0,128,183)"}}>

        </div>
        <div className="row content">
          
          <div className="col-12 col-sm-4">
            <Avatar
              name={{first:'windersson',second:'Lixo'}}
              src="https://i.pinimg.com/564x/77/60/3a/77603a46fca174e9ad20d89cafc3414e.jpg"
            />
          </div>

          <div className="col-12 col-sm-4">
            <Item
              title="titulo"
              src="https://i.pinimg.com/564x/77/60/3a/77603a46fca174e9ad20d89cafc3414e.jpg"
              data="12 abr, 6:30, 7:50"
            />
            <Item
              title="titulo"
              src="https://i.pinimg.com/564x/77/60/3a/77603a46fca174e9ad20d89cafc3414e.jpg"
              data="12 abr, 6:30, 7:50"
            />
            <Item
              title="titulo"
              src="https://i.pinimg.com/564x/77/60/3a/77603a46fca174e9ad20d89cafc3414e.jpg"
              data="12 abr, 6:30, 7:50"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
