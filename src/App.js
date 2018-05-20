import React, { Component } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Item from './components/RowList';
import Firebase from './firebaseFuncs/firebase';

const img = "https://i.pinimg.com/564x/77/60/3a/77603a46fca174e9ad20d89cafc3414e.jpg";
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      text:'',
      data:[

      ],
      file:{name:null},
      fileReader:null
    }
    this.setToUpload = this.setToUpload.bind(this);
    this.bindText = this.bindText.bind(this);
  }
  async componentDidMount()
  {
    Firebase.tables.post.on('value',res => {
      this.setState({data:res.val()})
    })
  }
  async componentWillMount()
  {
    await Firebase.init();
   
    Firebase.tables.post.on('value', res => {
      this.setState({data:res.val()});
    })
  }
  bindText(txt)
  {
    let texto = txt.target.value;
    this.setState({text:texto});
  }
  async submit()
  {
    let data = this.state.text;
    let postar =  await Firebase.post({txt:data,img:img,date:new Date(2005,10,6)});
    console.log(postar)
  }
  setToUpload(e)
  {
    let file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.setState({fileReader:fileReader.result});
    };
    fileReader.readAsDataURL(file);
    this.setState({file: file});
  }
  proced()
  {
    console.log(this.state.file.name)
    let strRand = ((Math.random()).toString(36).substr(2))+(new Date()).toLocaleDateString()+((Math.random()).toString(36).substr(2));
    strRand = strRand.replace('/',"");
    let ref = strRand+strRand+this.state.file.name;
    ref = ref.replace("/","");
    ref = ref.replace(" ","");
    ref = ref.replace("/","");
    Firebase.photo.child(ref).put(this.state.file);
  }
  render() {
    return (
      <div className='root'>
        <div className="jumbotron jumbotron-fluid" style={{backgroundColor:"rgb(0,128,183)"}}>

        </div>
        <div className="row content">
          
          <div className="col-12 col-sm-2">
            <Avatar
              name={{first:'windersson',second:'Lixo'}}
              src="https://i.pinimg.com/564x/77/60/3a/77603a46fca174e9ad20d89cafc3414e.jpg"
            />
          </div>

          <div className="col-12 col-sm-6">
            <div className="bg-primary p-2 m-3 rounded">
              <label className="text-white">faça um post aqui</label>
              <textarea
                className="form-control"
                value={this.state.text}
                onChange={this.bindText}/>
              <input 
                type="button" 
                className="btn btn-light m-1"
                value={"submit".toUpperCase()} 
                onClick={()=>{this.submit()}}
              />
              
            </div>
            <div>
              <label htmlFor="set" className="btn btn-primary">Select File</label>
              <input 
                type="file"
                id="set"
                className="noShow"
                onChange={this.setToUpload}
              />
              <img alt={"Imagem"} src={this.state.fileReader} style={{display:this.state.fileReader === null ? 'none' : 'block'}}/>
              <input 
                type='button' 
                className="btn btn-dark" 
                value="Enviar" 
                onClick={() => {this.proced()}} 
              />
              <button className="btn btn-dark" onClick={()=>{this.setState({fileReader:null,file:null})}}>Cancel</button>
            </div>
            {
              Object.values(this.state.data).map((item,index)=>{
                return(
                  <Item 
                    title={item.txt}
                    src={item.img}
                    key={index}
                    data="12 abr, 6:30, 7:50"
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
