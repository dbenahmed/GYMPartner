import { useRef, useState } from 'react'
import backendSchema from "../../data/schema.json"
import { SelectMenu, Button } from "../../components/index.jsx"
import { ExerciseBigContainer as ExerciseBigContainer } from "../../components/index.jsx"
import searchForExercises from '../../utils/searchForExercises.jsx'
import { Link, useSearchParams } from 'react-router-dom'


export default function WorkoutsPage() {
	const [exos, setExos] = useState([])
	// Getting the list of available options inside each search-type toggle
	const primaryMusclesOptions = backendSchema.properties.primaryMuscles;
	const levelsOptions = backendSchema.properties.level;
	const forcesOptions = backendSchema.properties.force;
	const categoriesOptions = backendSchema.properties.category;
	const equipmentsOptions = backendSchema.properties.equipment;


	const searchParams = useRef({
	})

	function searchFunction(event) {
		const searchParameters = searchParams.current
		const exercises = searchForExercises(searchParameters)

		const exercisesJsx = exercises.map(exercise => {
			return <ExerciseBigContainer key={exercise.id} props={{ ...exercise }} />
		})
		setExos(exercisesJsx)

	}
	return (
		<div className='w-full flex flex-col items-center'>
			<div className='w-3/6 pt-8 flex flex-col gap-4'>
				<Link className='underline text-main underline-offset-8' to={`..`}>
					<p> Home </p>
				</Link>
				<div className='grid grid-cols-2 gap-2'>
					<SelectMenu
						placeholder={primaryMusclesOptions.name}
						name="primaryMuscles"
						optionsArray={primaryMusclesOptions.items.enum}
						searchParams={searchParams}
						text='sm'
					/>
					<SelectMenu
						placeholder={levelsOptions.name}
						name="level"
						optionsArray={levelsOptions.enum}
						searchParams={searchParams}
						text='sm'
					/>
					<SelectMenu
						placeholder={forcesOptions.name}
						name="force"
						optionsArray={forcesOptions.enum}
						searchParams={searchParams}
						text='sm'
					/>
					<SelectMenu
						placeholder={categoriesOptions.name}
						name="category"
						optionsArray={categoriesOptions.enum}
						searchParams={searchParams}
						text='sm'
					/>
					<SelectMenu
						placeholder={equipmentsOptions.name}
						name="equipment"
						optionsArray={equipmentsOptions.enum}
						searchParams={searchParams}
						text='sm'
					/>
				</div>
				<Button primary={true} width='full' onClick={searchFunction}>
					Search Exercises
				</Button>
			</div>


			<div className='grid  grid-cols-4 gap-4 p-8'>
				{exos}
			</div>
		</div>
	)
}