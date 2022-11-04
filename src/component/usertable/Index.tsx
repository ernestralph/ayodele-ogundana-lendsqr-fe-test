import React from 'react'
import {RiFilter3Line} from 'react-icons/ri'
import {RiMore2Fill} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {BiUserCheck} from 'react-icons/bi'
import {BiUserX} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import moment from 'moment'


interface Props{
  users: {
    id: string; 
    orgName: string;
    profile: object;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
  }[],
}


const Index: React.FC<Props> = ({users}) => {
  // console.log(users);
  
  return (
    <>
     
     <div className="userTable w-100 table-reponsive">
      <table className="userTable__table table">
       <thead>
        <tr className='text-uppercase '>
         <th>oganization <RiFilter3Line /></th>
         <th>username <RiFilter3Line /></th>
         <th>email <RiFilter3Line /></th>
         <th>phone number <RiFilter3Line /></th>
         <th>date joined <RiFilter3Line /></th>
         <th>status <RiFilter3Line /></th>
         <th></th>
        </tr>
       </thead>
       <tbody>
        {
          users.map((user)=>{
            // console.log(user.id);
            
            return <tr key={user.id}>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{moment(user.createdAt).format('LTS') } </td>
                    <td ><span className='bg__inactive'>inactive</span></td>
                    <td className='dropdown'>
                      <p className='' data-bs-toggle="dropdown" aria-expanded="false"><RiMore2Fill /></p> 
                      <ul className="dropdown-menu">
                          <li><Link className="dropdown-item fs-11" to={`/user/${user.id}`}><AiOutlineEye /> View Details</Link></li>
                          <li><Link className="dropdown-item fs-11" to="#"><BiUserX /> Blacklist User</Link></li>
                          <li><Link className="dropdown-item fs-11" to="#"><BiUserCheck /> Activate User</Link></li>
                        </ul>
                    </td>
                  </tr>
          })
        }
        
       </tbody>
      </table>
     </div>
    </>
  )
}

export default Index