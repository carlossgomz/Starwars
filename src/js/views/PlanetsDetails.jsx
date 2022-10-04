import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import planetas from "../img/planetas.jpg"

export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);

    const params = useParams();

    return (
		<div className="container-details">
			<div className="row">
				<div className="col-12 col-md-6">
					<img
						className="img-fluid"
						src={ planetas }
					/>
				</div>
				<div className="col-12 col-md-6 text-center">
					<h1>{store.planets[params.id].name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
						quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
						rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
						Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
						tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
						dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
						Quisque rutrum. Aenean imperdiet.
					</p>
				</div>
			</div>
			<div className="row text-center mb-3 border">
				<div className="col-12 col-md-3 border  py-3">
					Diameter: {store.planets[params.id].diameter}
				</div>
				<div className="col-12 col-md-3 border  py-3">
					Population: {store.planets[params.id].population}
				</div>
				<div className="col-12 col-md-3 border  py-3">
					Terrain: {store.planets[params.id].terrain}
				</div>
				<div className="col-12 col-md-3 border  py-3">
					Rotation Period: {store.planets[params.id].rotation_period}
				</div>
				<div className="col-12 col-md-3 border  py-3">
					Orbital period: {store.planets[params.id].orbital_period}
				</div>
				<div className="col-12 col-md-3 border  py-3">
					Climate: {store.planets[params.id].climate}
				</div>
				<div className="col-12 col-md-3 border  py-3">
					Gravity: {store.planets[params.id].gravity}
				</div>
				<div className="col-12 col-md-3 border  py-3">
					Surface Water: {store.planets[params.id].surface_water}
				</div>
			</div>
			
			<Link to="/">
					<button className="btn btn-primary btn-lg" href="#" type="button">
					<i className="fas fa-arrow-alt-circle-left"></i>
					</button>
			</Link>
			
		</div>
	);
};

PlanetsDetails.propTypes = {
	name: PropTypes.string
};