import React, { useContext } from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import vehicles from "../img/vehicles.jpg";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card mx-3 mb-4">
         <img src={ vehicles } className="card-img-top" alt="..."/> 
          <div className="card-body">
              <h5 className="card-title">
                <strong>{props.name}</strong>
              </h5>
              <p className="card-text">
                <strong>Model:</strong> {props.model}
              </p>
              <p className="card-text">
                <strong>Length:</strong> {props.length} 
              </p>
              <p className="card-text">
                <strong>Consumables:</strong> {props.consumables}
              </p>
              <div className="row">
                <div className="botones">
                  <Link to={`/VehiclesDetails/${props.id}`}>
                    <button className="btn btn-primary" type="button">Ver Detalles</button>
                  </Link>
                  <div className="favorite-icon">
                    <div onClick={() => actions.addFavorite(props.name)}>
                      <div className="btn btn-outline-info">
                        <i className="fas fa-heart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};

Vehicles.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  length: PropTypes.string,
  consumables: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};
