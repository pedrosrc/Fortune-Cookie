import { Component } from "react";
import cookie from '../assets/biscoito.png'
import styles from './Lucky.module.css'



export class Lucky extends Component{

    constructor(props){
        super(props)
        this.state = {
            textPhrase:''
        }
        this.brakeCookie = this.brakeCookie.bind(this)

        this.frases =['When you don’t take any risks, you risk everything.', 'Follow your dreams, work hard, practice and persevere.', 'Dreaming big and dreaming small gives the same work.', 'The only way to do great work is to love what you do.', 'Change your thoughts and you change your world.', 'You can get what you want or you can just get old', 'If you want to do it, do it now. If you don’t, you’re going to regret it.', 'Do not be embarrassed by your failures, learn from them and start again.' ]
    }
    brakeCookie(){
        let state = this.state
        let numberRandom = Math.floor(Math.random() * this.frases.length);
        state.textPhrase = '"'+ this.frases[numberRandom] + '"';
        this.setState(state)
    }


    render(){
        return(
            <div className={styles.container}>
                <h1 className={styles.tittle}><a href="#">FORTUNE</a> COOKIE</h1>                
                <img src={cookie} />
                <Button name="Open Cookie" actionBtn={this.brakeCookie}/>
                <h3 className={styles.text}>{this.state.textPhrase}</h3>

            </div>
        )
    }
}
class Button extends Component{
    constructor(props){
        super(props)
        this.setState={

        }
        
    }
    render(){
        return(
            <div>
                <button className={styles.button} onClick={this.props.actionBtn}>{this.props.name}</button>
            </div>
        )
    }
}