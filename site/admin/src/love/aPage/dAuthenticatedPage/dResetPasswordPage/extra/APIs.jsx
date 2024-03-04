import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";
import clearFormObject from "../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../gRoute/FinalRouteName";

const APIs = {
  // ResetPassword API
  ResetPasswordAPI: (Redux, navigate, ReduxUltimate, token, toast) => {
    loading(ReduxUltimate, true)

    API.AuthAPI.ResetPasswordAPI({
      token,
      data: {
        new_password: Redux.state.FormObject.FormValue.newPassword,
        confirm_password: Redux.state.FormObject.FormValue.confirmPassword,
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        ReduxUltimate.dispatch({ type: ReduxUltimate.action.ExtraObject, payload: {
          ...ReduxUltimate.state.ExtraObject,
          Halchal: !ReduxUltimate.state.ExtraObject?.Halchal || true
        }})
        toast({
          description: serverResponse.message,
        });
        clearFormObject(Redux)
        navigate(FinalRouteName.GlobalRoute.HomeRoute)
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