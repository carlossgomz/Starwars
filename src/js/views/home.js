import React, { useEffect, useState, useContext } from "react";
import { People } from "../component/People.jsx";
import { Planets } from "../component/Planets.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
	<>
		<div className="container mb-5 pb-5 pt-5">
			<div className="col-12 mt-5 mb-3">
				<h1 className="title">People</h1>
			</div>
			<div className="card-row">
				{store.people.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-4">
							<People
								key={index}
								id={index}
								name={item.name}
								gender={item.gender}
								height={item.height}
								mass={item.mass}
								birth_year={item.birth_year}
							/>
						</div>
					);
				})}
			</div>
			<div className="col-12 mt-5 mb-3">
				<h1 className="title">Planets</h1>
			</div>
			<div className="card-row">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-4">
							<Planets
								key={index}
								id={index}
								url={item.url}
								name={item.name}
								diameter={item.diameter}
								climate={item.climate}
								population={item.population}
								terrain={item.terrain}
							/>
						</div>
					);
				})}
			</div>
			
		</div>
	</>
	);
};

