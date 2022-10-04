import React, {  useContext } from "react";
import { Context } from "../store/appContext";
import { Vehicles } from "../component/Vehicles.jsx";
import { Link } from "react-router-dom";


export const Demo = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
		<div className="container mb-5 pb-5 pt-5">
			<div className="col-12 mt-5 mb-3">
				<h1 className="title">Vehicles</h1>
			</div>
			<div className="row" >
				{store.vehicles.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-4">
							<Vehicles
								key={index}
								id={index}
								url={item.url}
								name={item.name}
								model={item.model}
								length={item.length}
								consumables={item.consumables}
							/>
						</div>
					);
				})}
			</div>
            <Link to="/">
					<button className="btn btn-primary btn-lg" href="#" type="button">
					<i className="fas fa-arrow-alt-circle-left"></i>
					</button>
			</Link>
		</div>
		</>
	);
};

