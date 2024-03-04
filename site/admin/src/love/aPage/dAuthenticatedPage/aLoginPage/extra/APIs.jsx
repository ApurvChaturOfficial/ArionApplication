import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";
import clearFormObject from "../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../gRoute/FinalRouteName";

const APIs = {
  // Login API
  LoginAPI: (Redux, navigate, ReduxUltimate, toast) => {
    loading(ReduxUltimate, true)

    API.AuthAPI.LoginAPI({
      data: {
        eEmail: Redux.state.FormObject.FormValue.email,
        ePassword: Redux.state.FormObject.FormValue.password
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