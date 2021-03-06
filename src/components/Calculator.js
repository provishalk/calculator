import React, { useState } from 'react'
import "./Calculator.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Card.js'
const Calculator = () => {
    let [v1, setV1] = useState("");
    const [v2, setV2] = useState("")
    const [AddSum, setAddSum] = useState("")
    const [previousData, setPreviousData] = useState([])
    const [lastData, setLastData] = useState("")
    const  parentMethod = (data)=>{
        setLastData(data)
    }
    return (
        <div>
            <h1 className="display-4">Addition Of Two Number</h1>
            <input type="text" name="v1" value={v1} onChange={(event) => {
                setV1(event.target.value);
            }} />
            <input type="text" name="v2" value={v2} onChange={(event) => {
                setV2(event.target.value);
            }} />
            <button className="btn btn-warning ml-3" onClick={() => {
                fetch('http://localhost:5050/cal', {
                    method: 'POST',
                    body: JSON.stringify({
                        n1: v1,
                        n2: v2
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }).then((response) => response.json())
                    .then(data => {
                        setAddSum(data[0].result);
                    });
            }}>Save to Database</button>
            <button className="btn btn-warning ml-3" onClick={() => {
                fetch("http://localhost:5050/calc").then(response => response.json())
                    .then((data) => {
                        setPreviousData(data)
                        console.log(data);
                    })

            }}>Get Data From DataBase</button>

            <div className="result">
                <span>Result : {AddSum}{lastData.result},</span>
            </div>
            <div className="container">
            <div className="row justify-content-center">
            {
                previousData.map(item => {
                    return <div >
                        <Card
                            title="Results"
                            firstNo={item.first}
                            SecondNo={item.second}
                            Result={item.result}
                            _id = {item._id}
                            methodd = {parentMethod}

                        />
                    </div>
                })
            }
            </div>
            </div>
        </div>
    )
}
export default Calculator
      // fetch("http://localhost:5050/").then(response => response.json())
                //     .then((data)=>{
                //     console.log("Hello");
                // })
                // <button onClick={()=>{
                //     fetch("http://localhost:5050/").then(response => response.json())
                //     .then((data)=>{
                //         console.log(data[0].name);
                //     })
                //     console.log(v1,v2)
                // }}>Get Data</button>
