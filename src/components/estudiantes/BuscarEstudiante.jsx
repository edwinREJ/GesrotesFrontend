import { Filtrar } from './Filtrar'
import CardEstudiante from './CardEstudiante'
import { useState, useEffect } from 'react'

const BuscarEstudiantes = () => {
	const [personajes, setPersonajes] = useState([])
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')

	useEffect(() => {
		const getPersonajes = async () => {
			try {
				const response = await fetch(
					'https://rickandmortyapi.com/api/character'
				)
				const data = await response.json()
				setPersonajes(data.results)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		}
		getPersonajes()
	}, [])

	const personjesFiltrados = personajes.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

	return (

		<div className='container-buscar'>
			{/* form filtrar */}
			<Filtrar filter={filter} setFilter={setFilter} />
			{/* form filtrar */}

			{/* section estudiantes */}

			<section className='card-container-busqueda '>
				{loading ? (
					<p>Cargando...</p>
				) : filter === '' ? null : personjesFiltrados.length > 0 ? (
					personjesFiltrados.map((personaje) => (
						<CardEstudiante
							key={personaje.name}
							ima={personaje.image}
							nombre={personaje.name}
							p1={personaje.p1}
							p2={personaje.p2}
							isEliminar={false}
						/>
					))
				) : (
					<p >
						No se encontro la busqueda
					</p>
				)}
			</section>
			{/* section estudiantes */}
		</div>


	);

};

export default BuscarEstudiantes;




