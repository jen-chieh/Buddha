import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuddaList from './BuddaWorld/BuddaList'
import {budda} from './BuddaWorld/Budda'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'
import {setSearchField} from './action'
import {connect} from 'react-redux'
const mapStateztoProps= state =>{
  return{
    searchField: state.searchField
  }
}
const mapDispatchToProps=(dispath)=>{
  return{
    onsearchChange: event=>setSearchField(event.target.value)//action
    }
}
console.log("connsect",mapStateztoProps)
class  App extends React.Component{
  constructor(){
      super()
      this.state ={
        budda: budda
           // searchField: ''
      }
    }
  componentDidMount(){
    console.log('store',this.props.store1.getState());
  }  
   // onsearchChange=(event)=>{
   //  this.setState({searchFiled:event.target.value})
   //   const filterBudda= this.state.budda.filter(buddas =>{return buddas.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())})
   //   console.log(event.target.value)
   //   console.log("filter",filterBudda)
   // }
   showHint =(event)=>{
    console.log(event.target.value)

   }
  render(){
       const {budda} = this.state;
       const {searchField , onsearchChange}=this.props;
       const filterBudda= budda.filter(buddas =>{return buddas.name.toLowerCase().includes(searchField.toLowerCase())})

    return(
      <div className='tc'>
        <h1 className="f1">Buddhas</h1>
        <SearchBox searchChange={onsearchChange}/>
        <Scroll>
          <ErrorBoundry>
              <BuddaList budda={filterBudda} />
          </ErrorBoundry>    
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateztoProps,mapDispatchToProps)(App);
// state{
// bud:budda
// searchfield:''

// }

// const onsearch()={
//   this.setState({searchfield:event.target.value})
// }
// const filterB = this.state.bud.filter(buds =>{return buds.name.includes(this.state.searchfield)})
