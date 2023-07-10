import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewdata = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            setData(response.data)
        })
        .catch(err=>console.log(err))
    })






    return (
        
        <div className="container App">
            <div className="row">
            <p class="fw-light fs-4">EMPLOYEE DATA</p>
                <div className="col col-12 col-sm-12 col-md-12">

                    <div className="row g-3">
                            {data.map((val,i)=>{

                           
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            {/* //card starts */}
                            <div class="card" >
                                <div class="card-header">
                                    Employee Data
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{val.id}hi</li>
                                    <li class="list-group-item">{val.name}</li>
                                    <li class="list-group-item">{val.email}</li>
                                </ul>
                            </div>

                        </div>
                         }
                                
                         )}




                    </div>
                </div>
            </div>
        </div>

    )
}

export default Viewdata