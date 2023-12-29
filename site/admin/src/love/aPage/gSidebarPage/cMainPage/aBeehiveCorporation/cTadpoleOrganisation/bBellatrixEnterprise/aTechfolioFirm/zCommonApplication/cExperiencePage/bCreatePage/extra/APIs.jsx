import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";

const APIs = {
  CreateAPI: (Redux, ReduxUltimate, navigate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.MainAPI.ExperienceAPI.CreateAPI({
			data: {
        aTitle: Redux.state.FormObject.FormValue.title,
        aSubtitle: Redux.state.FormObject.FormValue.subtitle,
        aDescription: Redux.state.FormObject.FormValue.description,
        aImage: Redux.state.FormObject.FormValue.image,
        aStatus: Redux.state.FormObject.FormValue.status === 'Active' ? true : false,

        dCards: Redux.state.FormObject.FormValue.cards,
			}
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast.success(serverResponse.message, { position: "top-center" });
        clearFormObject(Redux)
        navigate(FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.ListRoute)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
}

export default APIs