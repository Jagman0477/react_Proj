import React, { useEffect, useState } from 'react'
import APIServices from '../../../../API/ApiServices'
import CustomerRow from './CustomerRow'
import './Customers.css'

export default function Customers() {

    const [userData, setUserData] = useState([])
    const [userDataError, setUserDataError] = useState('')
    const [childData, setChildData] = useState(false)

    const handleCallback = (childData) => {
        console.log(childData);   
        setChildData(childData)
    }
    
    const getCustomers = async() => {
        let customerData = await APIServices.getUsers();
        if(customerData?.data?.length>0)
            setUserData(customerData.data)            
        else 
            setUserDataError("No customers exist yet.")
    }

    useEffect(() => {
        getCustomers()
        console.log(childData);
    }, [childData])

  return (
    <>
        <div  className='container'>
            <h2  className='text-start mt-5 text-dar mb-5'>Customer details: </h2>
                {userDataError}
            <table  className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData?.map((user, i) => {
                        return <CustomerRow key={i} parentCallback={handleCallback} userData={user}/>
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}
