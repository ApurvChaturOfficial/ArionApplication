import validateFormObject from "../../../../dFunction/bValidateFormObject"
import handleInput from "../../../../dFunction/dHandleInput"
import FinalRouteName from "../../../../gRoute/FinalRouteName"
import Function from "./Function"

const Data = (Redux) => {
  return (
    {
      title: "Forgot Password",
      inputs: [
        {
          label: "Email",
          placeholder: "Email",
          type: "email",
          name: "email",
          onChange: event => handleInput(event, Redux),
        },
      ],
      buttons: [
        {
          type: "button",
          label: "Send Link",
          onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
        }
      ],
      links: [
        {
          label: "Login",
          route: FinalRouteName.AuthRoute.LoginRoute
        },
        {
          label: "Register",
          route: FinalRouteName.AuthRoute.RegisterRoute
        },
      ]
    }
  )
}

export default Data