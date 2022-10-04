import React, { useContext } from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import personajes2 from "../img/Personajes2.jpg";

export const People = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card mx-3 mb-4">
         <img src={ personajes2 } className="card-img-top" alt="..."/> 
          <div className="card-body">
              <h5 className="card-title">
                <strong>{props.name}</strong>
              </h5>
              <p className="card-text">
                <strong>Gender:</strong> {props.gender}
              </p>
              <p className="card-text">
                <strong>Height:</strong> {props.height} Cm
              </p>
              <p className="card-text">
                <strong>Mass:</strong> {props.mass} Kg
              </p>
              <p className="card-text">
                <strong>Birth Year:</strong> {props.birth_year}
              </p>
              <div className="row">
                <div className="botones">
                  <Link to={`/PeopleDetails/${props.id}`}>
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

People.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  birth_year: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};
