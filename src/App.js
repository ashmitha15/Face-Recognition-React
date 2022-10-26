import React,{Component} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Facerecognition from './components/Facerecognition/Facerecognition';
import SignIn from './components/Signin/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank.js';
import ParticlesBg from 'particles-bg';
import ImageLink from './components/imageLink/ImageLink.js';

const initialState= {
      input: '',
          imageUrl:'',
          boundingBox:{},
          route: 'signin',
          isSignedIn : false,
          user: {
             id: '',
             name: '',
             email: '',
             password: '',
             entry: '',
             joinedOn: ''
          }
  }

class App extends Component {

  constructor(){
    super();
    this.state = initialState;   
  }

  calculateSquareBox = (data) => {
   
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('inputimage');
   const width =Number(image.width);
   const height = Number(image.height);
   //console.log(width,height);

   return{
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row *height,
    rightCol: width- (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
   }
  }

  displayFaceBox = (box) =>{
    //console.log(box);
    this.setState({boundingBox : box});
  }

  onChange = (event) => {
    this.setState({input : event.target.value });
  }

  onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://arcane-hollows-77933.herokuapp.com/imageurl',{
                method: 'post',
                headers: {'content-type' : 'application/json'},
                body : JSON.stringify({
                  input: this.state.input
                  })
                }).then(response => response.json()) //taking the res from the backend and reading it as json and then returining as obj or array etc
                   .then((response) => {
                    if(response){
                     fetch('https://arcane-hollows-77933.herokuapp.com/image',{
                      method: 'put',
                      headers: {'content-type' : 'application/json'},
                      body : JSON.stringify({
                        id: this.state.user.id
                        })
                      }).then(response => response.json()).then(count => {
                          this.setState(Object.assign(this.state.user,{entry:count})) //assigns the entry count to the state of the user(entry) 
                    })
                    .catch(console.log);
                }
              this.displayFaceBox(this.calculateSquareBox(response));
            })
            .catch((err) => {
              console.log(err);
            });
        }

  onRouteChange = (route) => {
    if(route === 'signout'){
       this.setState({isSignedIn:false})
      this.setState(initialState) 
    } else if ( route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
 
   loadUser = (data) => {
    this.setState({user: {
       id: data.id,
         name: data.name,
         email: data.email,
         password: data.password,
         entry: data.entry,
         joinedOn: data.joinedOn

    }})
   } 
  

  render(){
    return (
      <div className="App">
         <ParticlesBg type="cobweb" num={150}  bg={true} />
        <Navigation  isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange} />
        {
          this.state.route === 'home' 
        ? <div>
        <Logo />
         <Rank name ={this.state.user.name} entry = {this.state.user.entry}/>
        <ImageLink onInputChange={this.onChange} onPictureSubmit = {this.onPictureSubmit} /> 
        <Facerecognition box = {this.state.boundingBox} imageUrl = {this.state.imageUrl}/>  
        </div>
        : 
         (
          this.state.route==='signin' ? <SignIn onRouteChange = {this.onRouteChange} loadUser={this.loadUser}/>
          :
          <Register onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/>
           )  
      }
      </div>
  );

  }
  
}

export default App;
