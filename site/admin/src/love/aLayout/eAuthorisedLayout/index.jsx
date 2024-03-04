import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import { Outlet, useNavigate } from 'react-router-dom';
import FinalRouteName from '../../gRoute/FinalRouteName';

import AuthorisedComponent from '@/love/aComponent/eAuthorisedComponent';


const AuthorisedLayout = ({ ReduxUltimate }) => {
	// Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.AuthorisedLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// All Renders
	// First Render
	useEffect(() => {
		ReduxUltimate.state?.ReceivedObject?.ProfileRetrieve ?
			null
			:
			navigate(FinalRouteName.AuthRoute.LoginRoute)
	}, [ReduxUltimate.state])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
		<React.Fragment>
			<AuthorisedComponent ReduxUltimate={ReduxUltimate} >
				<Outlet />
			</AuthorisedComponent>
		</React.Fragment>
  )
}

export default AuthorisedLayout