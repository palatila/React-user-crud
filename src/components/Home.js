import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {Link } from "react-router-dom";

const Home = () => {

  useEffect( () => {
    window.scrollTo(0, 0);
    alluser();
  }, []); 

  const [isuser, setuser] = useState([]);
  const alluser = async (ids) => {
    try {
      axios.get(`http://localhost:8080/vizsga_crud/api/users.php`)
      .then(res => {
        console.log(res.data.userlist.userdata)
        setuser(res.data.userlist.userdata);
      })
    } catch (error) { throw error;}    
  }

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };
  const deleteUser = async (id) => {
    try {
      axios.post(`http://localhost:8080/vizsga_crud/api/deleteusers.php`, { 
        userids: id,
      })
      .then(res => {
        setuser([]);
        alluser();
        return;
       })
    } catch (error) { throw error;}    
  }

  return (
    <div className='container text-center'>
      <h1 className='mt-5'>Felhasználók listája</h1>
    <Link to="/insert" className='btn btn-success my-5'> Regisztráció </Link>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {isuser.map((item,index)=>(    
        <div className="list card shadow mx-auto" key={item.user_id}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Date: {item.date}</p>
          <Link  to={`edit/${item.user_id}`} className="btn default-btn"> Edit </Link>
          <p onClick={() => deleteConfirm(item.user_id)} className="btn default-btn"> Delete </p> 
        </div>      
      ))}
    </div>
    </div>
  )
}

export default Home