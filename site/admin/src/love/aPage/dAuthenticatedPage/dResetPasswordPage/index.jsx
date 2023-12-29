import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';
import Data from './extra/Data';
import submitFormObject from '../../../dFunction/cSubmitFormObject';
import APIs from './extra/APIs';
import AuthFormComponent2 from 'src/love/aComponent/dAuthenticatedComponent/children/bAuthFormComponent2';


const ResetPasswordPage = ({ ReduxUltimate }) => {
 	// Variables
	const navigate = useNavigate()
	const {token} = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.ResetPasswordPageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		ResetPasswordAPI: () => APIs.ResetPasswordAPI(Redux, navigate, ReduxUltimate, token)
	}	

  // All Render
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.ResetPasswordAPI)
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

export default ResetPasswordPage