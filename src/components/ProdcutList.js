import React from 'react'
import axios from 'axios'

export default class Product extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: this.StringData
        }
    }
    componentWillMount(){
        this.makeApiCall()
    }

    makeApiCall(){
        var url = 'http://localhost:3000/products'
        axios.get(url).then(
            res=>{
                var StringData = res.data.map((element,index)=>{
                    return <div key={index} style={{border: '2px solid red'}}> <span> <b>Name : </b> {element.name} </span><br/>
                             <span ><b>Price : </b> {element.price} </span><br/>
                             <span ><b>Category : </b> {element.category} </span><br/>
                             <span ><b>Description : </b> {element.description} </span><br/>
                 </div>
                })
                this.setState({

                    name: StringData
                })
            }
        )

    }

    // makeApiCall(){
    //     var url = 'http://localhost:3000/products'
    //     var pr = fetch(url)
    //     pr.then(res=>{
    //         res.json().then(data=>{
    //             var StringData = data.map((element,id)=>{
    //                return <div style={{border: '2px solid red'}}> <span key={id}> <b>Name : </b> {element.name} </span><br/>
    //                             <span key={id}><b>Price : </b> {element.price} </span><br/>
    //                             <span key={id}><b>Category : </b> {element.category} </span><br/>
    //                             <span key={id}><b>Description : </b> {element.description} </span><br/>
    //                 </div>
    //             })
    //             this.setState({
    //                 name: StringData
    //             })
    //         }).catch(err=>{
    //             console.log(err)
    //         })
    //     }).catch(err=>{
    //         alert(err)
    //     })
    // }
    
    render(){
        return (
            <div>
                <h1>Product List</h1>
                {this.state.name}
            </div>
        )
    }
}