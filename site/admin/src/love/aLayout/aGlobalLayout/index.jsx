import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import { Outlet, useNavigate } from 'react-router-dom';
import APIs from './extra/APIs';

import GlobalComponent from '@/love/aComponent/aGlobalComponent';
import { useToast } from '@/components/ui/use-toast';


const GlobalLayout = () => {
	// Variables
  const { toast } = useToast()
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.GlobalLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ProfileRetrieveAPICall: () => APIs.ProfileRetrieveAPI(Redux),
		LogoutAPICall: () => APIs.LogoutAPI(navigate, Redux, toast),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.ProfileRetrieveAPICall()
	}, [])
		
	// Second Render
	useEffect(() => {
		Redux.state.ExtraObject?.Halchal && APICalls.ProfileRetrieveAPICall()
	}, [Redux.state.ExtraObject])
		
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
		<React.Fragment>
			<GlobalComponent Redux={Redux} LogoutAPICall={APICalls.LogoutAPICall} >
				<Outlet />
			</GlobalComponent>
		</React.Fragment>
  )
}

export default GlobalLayout