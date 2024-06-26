import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";
import FinalRouteName from "../../../../gRoute/FinalRouteName";
import clearFormObject from "../../../../dFunction/aClearFormObject";

const APIs = {
  // ForgotPassword API
  ForgotPasswordAPI: (Redux, navigate, ReduxUltimate, toast) => {
    loading(ReduxUltimate, true)

    API.AuthAPI.ForgotPasswordAPI({
      data: {
        eEmail: Redux.state.FormObject.FormValue.email,
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast({
          description: serverResponse.message,
        });
        clearFormObject(Redux)
        navigate(`${FinalRouteName.AuthRoute.ResetPasswordRoute}/${serverResponse.token}`)
      }
    })
    .catch(error => {
      // console.log(error.response.data);
      const serverResponse = error.response.data
      toast({
        description: serverResponse.message,
      });
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
}

export default APIs