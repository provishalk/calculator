import React from 'react'
import "./Card.css"
import "./Calculator"

const Card = (props) => {
    console.log(props.title)
    return (
        <div className="col  cardDiv">
            <div className="card text-center" >
                <div className="card-body resultCard bg-success">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">First No: {props.firstNo}</p>
                    <p className="card-text">Second No: {props.SecondNo}</p>
                    <p className="card-text">Result: {props.Result}</p>
                    <button className="btn btn-danger" onClick={() => {
                        // props.methodd("My Value")
                        // props.parentMethod()
                        fetch('http://localhost:5050/cal/show', {
                            method: 'POST',
                            body: JSON.stringify({
                                key:props._id
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                        }).then((response) => response.json())
                            .then(data => {
                                props.methodd(data)
                            });
                    }}>Go somewhere</button>
                </div>
            </div>
        </div>
    )
}

export default Card
