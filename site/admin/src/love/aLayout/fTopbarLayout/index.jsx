import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import { Outlet, useNavigate } from 'react-router-dom';
import APIs from './extra/APIs';

import TopbarComponent from '@/love/aComponent/fTopbarComponent';


const TopbarLayout = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.TopbarLayoutState),
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
			<TopbarComponent>
				<Outlet />
			</TopbarComponent>
		</React.Fragment>
  )
}

export default TopbarLayout