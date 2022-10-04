const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://swapi.dev/api/",
			urlPeople: "people/",
			urlPlanets: "planets/",
			urlVehicles: "vehicles",
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			
		},
		actions: {

			loadPeople: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}${store.urlPeople}`)
					if(response.ok){
						let data = await response.json()
						if(response.status != 404){
							setStore({...setStore,
								people: data.results})
						}
					}
				} catch (error) {
					console.log(error)
				}
			},

			loadPlanets: async () => {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}${store.urlPlanets}`)
					if(response.ok){
						let data = await response.json()
						if(response.status != 404){
							setStore({...store,
								planets: data.results})
						}
					}
				} catch (error) {
					console.log(error)
				}
			},

			loadVehicles: async ()=> {
				const store = getStore()
				try {
					let response = await fetch(`${store.urlBase}${store.urlVehicles}`)
					if (response.ok){
					let data = await response.json()
						if(response.status != 404){
							setStore({...store,
								vehicles: data.results})
						}
					}

				} catch (error) {
					
				}
			},

			addFavorite: name => {
				let count = 0;
				const store = getStore();
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name
							}
						]
					});
				}
			},

			removeFavorite: id => {
				const store = getStore();
				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			},		
			
			
		}
	};
};

export default getState;

