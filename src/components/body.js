import React from 'react'
import './CSS/body.css'
import Chatbot from './Chatbot'
import CarSuggestChatbot from './CarSuggestChatbot'
import EmiCalculator from './EmiCalculator'
class Body extends React.Component {
    state = {  } 
    render() { 
        
        return (
            <>
            <div id='body'>
            <div id='indexposter'>
            <a href="https://www.google.com/maps/search/mercedes+near+me/" id="mercedeslogo" class="carslogoindex" target='#'><img src={require('./CSS/images/carlogos for index page/mercedeslogo.png')} alt="" height="130px"/></a>
            <a href="https://www.google.com/maps/search/bentley+near+me/" id="bentleylogo" class="carslogoindex" target='#'><img src={require('./CSS/images/carlogos for index page/bentley.png')} alt="" height="110px"/></a>
            <a href="https://www.google.com/maps/search/maserati+near+me/" id="maseratilogo" class="carslogoindex" target='#'><img src={require('./CSS/images/carlogos for index page/maseratilogo.png')} alt="" height="140px"/></a>
            <a href="https://www.google.com/maps/search/rollsroyce+near+me/" id="rollsroycelogo" class="carslogoindex" target='#'><img src={require('./CSS/images/carlogos for index page/rolls royce.png')} alt="" height="190px"/></a>
            <a href="https://www.google.com/maps/search/porche+car+near+me/" id="porchelogo" class="carslogoindex" target='#'><img src={require('./CSS/images/carlogos for index page/porche.png')} alt="" height="190px"/></a>
            </div>
            <div id='carhealthhelp'>
                Car Health Tips Center
                <Chatbot/>
            </div>
            <div id='carsuggest'>
                <div id='findcar'>Finding the Right Car?<br/>
                Let's Find together...</div>
                <CarSuggestChatbot/>
            </div>
            <div id='emicalculator'>
                <div id='emicaluclatortext'>
                    Want to Budget Smartly?<br/>Plan Your EMIs with Us!
                </div>
                <EmiCalculator/>
            </div>
            </div>
            </>
        );
    }
}
 
export default Body;