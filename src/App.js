import './App.css';
import React,{useEffect, useState} from 'react'
import Display from './components/Display/Display';

function App() {
  return (
<div className='App'>

<Watch></Watch>

</div>
  );
}

const Watch = ()=>{
	const [steps, setSteps]= useState(0)
	const increaseStep = () =>{
		const newStepCount = steps +1;
		setSteps(newStepCount)


	}

	useEffect(()=>	console.log('useEffect:',steps),[])

	return(
		<div>
			<h1>Steps: {steps}</h1>
			<button className='btn btn-outline-secondary  btn-app' onClick={increaseStep}>Submit</button>
			<Display name={'Bosch'} steps={steps}>t</Display>

		</div>
	)
}

export default App;
