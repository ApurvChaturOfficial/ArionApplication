import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import { Outlet, useNavigate } from 'react-router-dom';
import FinalRouteName from '../../gRoute/FinalRouteName';

import AuthenticatedComponent from '@/love/aComponent/dAuthenticatedComponent';


const AuthenticatedLayout = ({ ReduxUltimate }) => {
	// Variables
	const navigate = useNavigate()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.AuthenticatedLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// All Renders
	// First Render
	useEffect(() => {
		ReduxUltimate.state?.ReceivedObject?.ProfileRetrieve ?
			navigate(FinalRouteName.GlobalRoute.HomeRoute)
			:
			null
	}, [ReduxUltimate.state])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
		<React.Fragment>
			<AuthenticatedComponent>
				<Outlet />
			</AuthenticatedComponent>
		</React.Fragment>
  )
}

export default AuthenticatedLayout