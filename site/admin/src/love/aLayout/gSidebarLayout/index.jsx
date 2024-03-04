import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import { Outlet, useNavigate } from 'react-router-dom';
import APIs from './extra/APIs';

import SidebarComponent from '@/love/aComponent/gSidebarComponent';


const SidebarLayout = () => {
	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.SidebarLayoutState),
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
			<SidebarComponent>
				<Outlet />
			</SidebarComponent>
		</React.Fragment>
  )
}

export default SidebarLayout