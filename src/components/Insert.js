import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Insert = () => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: '',
    email: '',
    pwd: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
  // Inserting a new user into the Database.
  const submitUser = async(event) => {
    try {
      event.preventDefault();
      event.persist();
     
      axios.post(`http://localhost:8080/vizsga_crud/api/addusers.php`, { 
        username: userInfo.name,
        useremail: userInfo.email,
        userpwd: userInfo.pwd,
      })
      .then(res => {
        console.log(res.data);
        navigate(`/`);
        return;
       })
    } catch (error) { throw error;}    
  };

return (
  <div className='container'>
    <form className="insertForm text-center mx-auto w-50" onSubmit={submitUser}>
      <h2 className='py-5'> Regisztráció </h2>
      <label htmlFor="_name" className='form-label py-2'>Név:</label>
      <input
        type="text"
        id="_name"
        name="name"
        onChange={onChangeValue}
        className="form-control py-2"
        placeholder="Enter name"
        autoComplete="off"
        required
      />
      
      <label htmlFor="_email" className='form-label py-2'>Email:</label>
      <input
        type="email"
        id="_email"
        name="email"
        onChange={onChangeValue}
        className="form-control py-2"
        placeholder="Enter email"
        autoComplete="off"
        required
      />
      <label htmlFor="_pwd" className='form-label py-2'>Jelszó:</label>
      <input
        type="password"
        id="_pwd"
        name="pwd"
        onChange={onChangeValue}
        className="form-control py-2"
        placeholder="Enter jelszó"
        autoComplete="off"
        required
      />
      <input type="submit" value="Regisztáció" />
    </form>
  </div>
);
};

export default Insert;