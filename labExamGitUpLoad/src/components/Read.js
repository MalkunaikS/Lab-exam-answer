import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Read() {
  const navigate = useNavigate();
  const [tvmodels, settvmodels] = useState([]);

  const gettvmodels = () => {
    axios.get('http://localhost:9595/model/all')
      .then(response => {
        console.log(response.data);
        settvmodels(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRegister = () => {
    navigate('/create');
  };

 
  const handleDelete = (id) => {
    axios.delete(`http://localhost:9595/model/delete/${id}`)
      .then(response => {
        console.log(response.data);
        gettvmodels();
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    gettvmodels();
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <button className="btn btn-info m-2" onClick={handleRegister}>AddModels</button>
      <h3>TvModels</h3>
      <div className="row mt-3 mb-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">ModelName</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Size</th>
      
            </tr>
          </thead>
          <tbody>
            {tvmodels.map(model => (
              <tr key={model.id}>
                <td>{model.modelname}</td>
                <td>{model.brand}</td>
                <td>{model.price}</td>
                <td>{model.size}</td>
                
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(model._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
