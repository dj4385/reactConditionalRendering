import React from 'react'
import { Login } from '../components/Login'
import Product from '../components/ProdcutList'

class Container extends React.Component{
    
    constructor(props){
        super(props)
        this.id = ""
        this.pwd = ""
        this.isLogin = false
        this.state = {
            user: this.id,
            password: this.pwd
        }
    }

    takeUserID(event){
        this.id = event.target.value;
        this.setState({ ...this.state, user: this.id},()=>console.log(this.state))
    }

    takePassword(event){
        this.pwd = event.target.value;
        this.setState({...this.state, password: this.pwd},()=>console.log(this.state))
    }

    login(){
        if(this.id === this.pwd){
            this.isLogin = true
            this.showProduct(this.isLogin)
        } else {
            this.isLogin = false
            this.showProduct(this.isLogin)
            alert('login fail')
        }
    }

    showProduct = (checkLoginResult)=> checkLoginResult === true ? <Product /> : <Login userInput={this.takeUserID.bind(this)} userPass = {this.takePassword.bind(this)} checkLogin = {this.login.bind(this)} />

    render(){
        return(
            <div style={{textAlign: 'center'}}>
                {this.showProduct()}
                {/* <Product></Product> */}
            </div>
        )
    }
}

export default Container