import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";
import clearFormObject from "../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../gRoute/FinalRouteName";

const APIs = {
  // Register API
  RegisterAPI: (Redux, navigate, ReduxUltimate, toast) => {
    loading(ReduxUltimate, true)

    API.AuthAPI.RegisterAPI({
      data: {
        eFirstName: Redux.state.FormObject.FormValue.firstName,
        eLastName: Redux.state.FormObject.FormValue.lastName,
        eEmail: Redux.state.FormObject.FormValue.email,
        ePassword: Redux.state.FormObject.FormValue.password,

        aTitle: `This is ${Redux.state.FormObject.FormValue.firstName}`,
        aSubtitle: "Hi there I am using Beehive",
        aDescription: "This is some detailed description",
        aStatus: true,

        cRole: import.meta.env.VITE_APPLICATION ? '65915580e476907a9789160e' : null
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