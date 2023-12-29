import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import APIs from './extra/APIs';
import { useParams } from 'react-router-dom';

import MainSection2 from 'src/love/aComponent/gSidebarComponent/children/aMain2';


const EventCardRetrievePage = ({ ReduxUltimate }) => {
	// Variables
	const { id } = useParams();

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.EventCardRetrievePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		RetrieveAPICall: () => APIs.RetrieveAPI(Redux, ReduxUltimate, id)
	}		

  // All Render
	// First Render
	useEffect(() => {
		APICalls.RetrieveAPICall()
	}, [])

	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			{ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Event Card')[0]?.access?.retrieve ? 
				<MainSection2 Data={Data(Redux, id)} Redux={Redux} ReduxUltimate={ReduxUltimate} />
				:
				"Fuck Off! You don't have access to this route."
			}
    </React.Fragment>
  )
}

export default EventCardRetrievePage