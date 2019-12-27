import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons';



export default class SlideShow extends Component {
    state = {
        currentImage: '', 
        currentIndex: 0
    }
    componentDidMount(){
       let {images = []} = this.props
        this.setState({
            currentImage: images[0]
        })
    }
    indexControl(){
        if(this.state.currentIndex === 2){
            this.setState({
                currentIndex: 0
            })
        }else{
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }
    }
    indexBack(){
        if(this.state.currentIndex === 0){
            this.setState({
                currentIndex: 2
            })
        }else{
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        }
    }
    changeImage = (e) => {
        e.preventDefault()
         this.indexControl()
        
        let index = this.state.currentIndex
        let images = this.props.images
        
        this.setState({currentImage: images[index]})
        
    }
    goBack = (e) => {
        e.preventDefault()
         this.indexBack()
        let index = this.state.currentIndex
        let images = this.props.images
        this.setState({currentImage: images[index]})

    }
render(){
    let {currentImage} = this.state
    return(
        <div className="imageBox">
        <a href="#0" className="button1" onClick={e => this.goBack(e)}><FontAwesomeIcon icon={faAngleLeft} size = '2x' className="icon" /></a>
        <img src={currentImage} alt="website"/>
        <a href="#0" className="button2" onClick={e => this.changeImage(e)}><FontAwesomeIcon icon={faAngleRight} size = '2x' className="icon" /></a>
        </div>
    )
}
}