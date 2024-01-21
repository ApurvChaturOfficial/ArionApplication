import validateFormObject from "../../../../dFunction/bValidateFormObject"
import handleInput from "../../../../dFunction/dHandleInput"
import FinalRouteName from "../../../../gRoute/FinalRouteName"
import Function from "./Function"

const Data = (Redux) => {
  return (
    {
      title: "Register",
      inputs: [
        {
          label: "First Name",
          placeholder: "First Name",
          type: "text",
          name: "firstName",
          onChange: event => handleInput(event, Redux),
        },
        {
          label: "Last Name",
          placeholder: "Last Name",
          type: "text",
          name: "lastName",
          onChange: event => handleInput(event, Redux),
        },
        {
          label: "Email",
          placeholder: "Email",
          type: "email",
          name: "email",
          onChange: event => handleInput(event, Redux),
        },
        {
          label: "Password",
          placeholder: "Password",
          type: "password",
          name: "password",
          onChange: event => handleInput(event, Redux),
        },    
      ],
      buttons: [
        {
          type: "button",
          label: "Register",
          onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
        }
      ],
      links: [
        {
          note: "Already have an account?",
          label: "Login",
          route: FinalRouteName.AuthRoute.LoginRoute
        },
        {
          note: "Forgot password?",
          label: "Reset",
          route: FinalRouteName.AuthRoute.ForgotPasswordRoute
        },
      ]
    }
  )
}

export default Data