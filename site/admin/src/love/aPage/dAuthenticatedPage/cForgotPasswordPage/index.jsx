import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import submitFormObject from '../../../dFunction/cSubmitFormObject';
import APIs from './extra/APIs';
import AuthFormComponent2 from 'src/love/aComponent/dAuthenticatedComponent/children/bAuthFormComponent2';


const ForgotPasswordPage = ({ ReduxUltimate }) => {
	// Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ForgotPasswordPageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ForgotPasswordAPICall: () => APIs.ForgotPasswordAPI(Redux, navigate, ReduxUltimate)
	}	

  // All Render
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.ForgotPasswordAPICall)
	}, [Redux.state.FormObject.FormError])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			<AuthFormComponent2 Data={Data(Redux)} Redux={Redux} ReduxUltimate={ReduxUltimate} />
    </React.Fragment>
  )
}

export default ForgotPasswordPage