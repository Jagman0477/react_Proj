import React, { useState } from 'react'
import './CustomerRow.css'
import APIServices from '../../../../API/ApiServices'

export default function CustomerRow(props) {

    let callBackVal = false;

    const deleteUser = async(e) => {
        e.preventDefault()
        if(props?.userData?.id === 'admin'){
            return false
        } else {
            let res = await APIServices.deleteUser(props?.userData)
            console.log(res)
            if(res){
                props.parentCallback(!callBackVal)
            }
        }
    }

  return (
    <tr>
        <th scope="row">{props?.userData?.id}</th>
        <td>{props?.userData?.userName}</td>
        <td>{props?.userData?.name}</td>
        <td>{props?.userData?.email}</td>
        <td>{props?.userData?.address}</td>
        <td><button className='deleteUserBtn btn btn-dark border border-rounded text-light' onClick={(e) => deleteUser(e)}>Delete</button></td>
    </tr>
  )
}
