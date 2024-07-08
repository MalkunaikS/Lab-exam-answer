import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container mt-3 mb-3">
        <h1>Tv Showrom</h1>
        <div className="row mt-5 mb-t p-3">
          <div className="col-xl-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Tv Models</h5>
                <p class="card-text">
                  Please click button to get Tv Details.
                </p>
                <Link to="/read" class="btn btn-primary">
                TvModels
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Add Models</h5>
                <p class="card-text">
                  Please click for registration of new Model.
                </p>
                <Link to="/create" class="btn btn-primary">
                AddModels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
