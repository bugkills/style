import * as firebase from 'firebase';

const url = "https://learning-5043a.firebaseio.com";
export default class Firebase 
{
    static async init()
    {
        const conf = {
            apiKey: "AIzaSyCRHg-n5M7NxHKCWQOO-I0AD8fvdjUiHNY",
            authDomain: "learning-5043a.firebaseapp.com",
            databaseURL: url,
            projectId: "learning-5043a",
            storageBucket: "learning-5043a.appspot.com",
            messagingSenderId: "179787677882"
        }
        this.fb = firebase.initializeApp(conf);

        this.db = this.fb.database();

        this.tables = {
            post: this.db.ref('/post')
        };
        this.files = this.fb.storage();
        this.photo = this.files.ref('uploads/');
        
        this.auth = this.fb.auth();
    }

    static async post(data,id = new Date())
    {
        const index = 
        id.getFullYear()+""
        +id.getMonth()+""
        +id.getDate()+""
        +id.getHours()+""
        +id.getMinutes()+""
        +id.getSeconds()+""
        +id.getMilliseconds(); 
        return new Promise((resolve) =>{
            const res = this.tables.post.child(index).set({...data,id:index})
            .then(resp => {resolve({error:false, resp, res})})
            .catch(e => {resolve({error:true,message:e,code:e.code})});
        });
    }

    static async getPosts()
    {
        return new Promise((resolve)=>{
            const res = this.tables.post;
            res.on('value',function(snapshot){
                resolve({response:snapshot.val(), res});
            });
        });
    }
}