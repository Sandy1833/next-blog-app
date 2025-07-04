import React from 'react'

const SubTableItem = ({email, mongoId, date, deleteEmail}) => {

    const emailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left text-black'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitesapce-nowrap'>
            {email?email:"No Email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td onClick={()=>deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer'>x</td>
    </tr>
  )
}

export default SubTableItem