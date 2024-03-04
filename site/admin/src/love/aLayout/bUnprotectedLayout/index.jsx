import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import { Outlet, useNavigate } from 'react-router-dom';
import APIs from './extra/APIs';

import UnprotectedComponent from '@/love/aComponent/bUnprotectedComponent';


const UnprotectedLayout = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.UnprotectedLayoutState),
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
			<UnprotectedComponent>
				<Outlet />
			</UnprotectedComponent>
		</React.Fragment>
  )
}

export default UnprotectedLayout