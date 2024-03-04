import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import APIs from './extra/APIs';
import submitFormObject from 'src/love/dFunction/cSubmitFormObject';

import MainSection2 from 'src/love/aComponent/gSidebarComponent/children/aMain2';
import EventHandler from './extra/EventHandler';


const PortfolioCardCreatePage = ({ ReduxUltimate }) => {
	// Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioCardCreatePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		CreateAPICall: () => APIs.CreateAPI(Redux, ReduxUltimate, navigate)
	}		

  // All Render
	// First Render
	useEffect(() => {
		Redux.dispatch({ type: Redux.action.FormObject, payload: {
			...Redux.state.FormObject,
			FormValue: {
				...Redux.state.FormObject.FormValue,
				links: [{
					title: "",
					icon: "",
					url: "",
				}],
				references: [{
					title: "",
					image: "",
					url: "",
				}],
			}
		} })
	}, [])
	
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.CreateAPICall)
	}, [Redux.state.FormObject.FormError])
		
	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			{ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Portfolio Card')[0]?.access?.create ? 
				<MainSection2 Data={Data(Redux, EventHandler)} Redux={Redux} ReduxUltimate={ReduxUltimate} />
				:
				"Fuck Off! You don't have access to this route."
			}
    </React.Fragment>
  )
}

export default PortfolioCardCreatePage