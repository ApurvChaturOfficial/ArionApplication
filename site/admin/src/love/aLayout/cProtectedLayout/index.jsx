import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import { Outlet, useNavigate } from 'react-router-dom';
import APIs from './extra/APIs';

import ProtectedComponent from '@/love/aComponent/cProtectedComponent';


const ProtectedLayout = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ProtectedLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

	// JSX
  return (
		<React.Fragment>
			<ProtectedComponent>
				<Outlet />
			</ProtectedComponent>
		</React.Fragment>
  )
}

export default ProtectedLayout