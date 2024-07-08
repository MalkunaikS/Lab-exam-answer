
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [id, setid] = useState('');
  const [modelName, setmodelName] = useState('')
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9595/user/add', {
      id,
      modelName,
      brand,
      size,
      price
    })
    .then(response => {
      console.log(response.data);
      navigate('/');
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="container">
      <h2>Add Tv Models</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>ModelName</label>
          <input
            type="text"
            className="form-control"
            value={modelName}
            onChange={(e) => setmodelName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>brand</label>
          <input
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Size</label>
          <input
            type="text"
            className="form-control"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
