import React from 'react'
import './styles.css'
export const Filtrar = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

	return (
		<section className='filtrar'>
			<input
				type='text'
				placeholder='Nombre del estudiante'
				name='buscar'
				onChange={handleInput}
				value={filter}
				autocomplete='off'
			/>
		</section>
	)
}