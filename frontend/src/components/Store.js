import React, { Component } from 'react'
import './Store.css'
import axios from 'axios';

export default class Store extends Component {

    state= {
        store: [
            {
                image: "https://img.icons8.com/plasticine/96/000000/gender-neutral-user.png",
                price: 3
            },
            {
                image: "https://img.icons8.com/office/96/000000/guest-female.png",
                price: 3
            },
            {
                image: "https://img.icons8.com/color/96/000000/stepper.png",
                price: 7
            },
            {
                image: "https://img.icons8.com/color/96/000000/triceps.png",
                price: 12
            },
            {
                image: "https://img.icons8.com/color/96/000000/treadmill.png",
                price: 7
            },
            {
                image: "https://img.icons8.com/color/96/000000/bench-press-with-dumbbells.png",
                price: 7
            },
            {
                image: "https://img.icons8.com/color/96/000000/pushups.png",
                price: 7
            },
            {
                image: "https://img.icons8.com/color/96/000000/exercise.png",
                price: 7
            },
            {
                image: "https://img.icons8.com/color/96/000000/deadlift.png",
                price: 7
            },
            {
                image: "https://img.icons8.com/color/96/000000/badminton-2.png",
                price: 7
            },
            {
                image: "https://img.icons8.com/ios/96/000000/adobe-premiere-pro-filled.png",
                price: 15
            },
            {
                image: "https://img.icons8.com/ios/96/000000/adobe-premiere-pro.png",
                price: 15
            },
            {
                image: "https://img.icons8.com/color/96/000000/best-seller.png",
                price: 22
            },
            {
                image: "https://img.icons8.com/color/96/000000/trophy.png",
                price: 22
            }
        ]
    }

    purchaseHandler=(img, price) => {
        console.log('click');
        
        var currPoints= this.props.points
        var newPoints= currPoints- price

        axios.put(`http://localhost:4000/api/users/${this.props.user._id}`, { icon: img, points:  newPoints})
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    render() {

    return (
      <div className='container mt-5'>
        <div className="user">
            <img src={`${this.props.user.icon}`} alt=""/>
            <h3> Current Points: {this.props.points}</h3>
        </div>
        <div className="row">
            <div className="col-3">
                <img src="https://img.icons8.com/plasticine/96/000000/gender-neutral-user.png"/>
                <p>Price: 3 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/plasticine/96/000000/gender-neutral-user.png", 3)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/office/96/000000/guest-female.png"/>
                <p>Price: 3 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/office/96/000000/guest-female.png", 3)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/stepper.png"/>
                <p>Price: 7 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/stepper.png", 7)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/triceps.png"/>
                <p>Price: 12 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/triceps.png", 12)}
                alt="purchase"></img>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/treadmill.png"/>
                <p>Price: 7 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/treadmill.png", 7)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/bench-press-with-dumbbells.png"/>
                <p>Price: 7 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/bench-press-with-dumbbells.png", 7)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/pushups.png"/>
                <p>Price: 7 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/pushups.png", 7)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/exercise.png"/>
                <p>Price: 7 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/exercise.png", 7)}
                alt="purchase"></img>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/deadlift.png"/>
                <p>Price: 7 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/deadlift.png", 7)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/badminton-2.png"/>
                <p>Price: 7 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/badminton-2.png", 7)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/ios/96/000000/adobe-premiere-pro-filled.png"/>
                <p>Price: 15 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/ios/96/000000/adobe-premiere-pro-filled.png", 15)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/ios/96/000000/adobe-premiere-pro.png"/>
                <p>Price: 15 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/ios/96/000000/adobe-premiere-pro.png", 15)}
                alt="purchase"></img>
            </div>
        </div>
        <div className="row">
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/best-seller.png"/>
                <p>Price: 22 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/best-seller.png", 22)}
                alt="purchase"></img>
            </div>
            <div className="col-3">
                <img src="https://img.icons8.com/color/96/000000/trophy.png"/>
                <p>Price: 22 points</p>
                <img src="https://img.icons8.com/color/48/000000/buy.png" 
                onClick={()=> this.purchaseHandler("https://img.icons8.com/color/96/000000/trophy.png", 22)}
                alt="purchase"></img>
            </div>
        </div>
      </div>
    )
  }
}
