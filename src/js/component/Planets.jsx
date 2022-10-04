import React, { useContext, useState, useEffect } from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import planetas from "../img/planetas.jpg"

export const Planets = props => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="card mx-3 mb-4">
        <img src={ planetas } className="card-img-top" alt="..." />
        <div className="card-body">
              <h5 className="card-title"><strong>{props.name}</strong></h5>
              <p className="card-text">
                <strong>Diameter:</strong> {props.diameter}
              </p>
              <p className="card-text">
                <strong>Climate:</strong> {props.climate}
              </p>
              <p className="card-text">
                <strong>Population:</strong> {props.population}
              </p>
              <p className="card-text">
                <strong>Terrain:</strong> {props.terrain}
              </p>
              <div className="row">
                <div className="botones">
                  <Link to={`/PlanetsDetails/${props.id}`}>
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

Planets.propTypes = {
  name: PropTypes.string,
  diameter: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string
};