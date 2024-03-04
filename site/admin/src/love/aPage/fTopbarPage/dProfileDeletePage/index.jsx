import React, { useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import APIs from './extra/APIs';

// Component
import ProfileDeleteComponent from 'src/love/aComponent/fTopbarComponent/children/dProfileDeleteComponent';


const ProfileDeletePage = ({ ReduxUltimate }) => {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ProfileDeletePageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ProfileRetrieveAPICall: () => APIs.ProfileRetrieveAPI(Redux, ReduxUltimate),
		ProfileDeleteAPICall: () => APIs.ProfileDeleteAPI(Redux, ReduxUltimate)
	}	

  // All Render
	// First Render
	useEffect(() => {
		APICalls.ProfileRetrieveAPICall()
	}, [])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
      {ReduxUltimate.state.RequiredObject?.Loading ? "Loading..." :
				<ProfileDeleteComponent Redux={Redux} OnClick={() => APICalls.ProfileDeleteAPICall()} />
			}
    </React.Fragment>
  )
}

export default ProfileDeletePage