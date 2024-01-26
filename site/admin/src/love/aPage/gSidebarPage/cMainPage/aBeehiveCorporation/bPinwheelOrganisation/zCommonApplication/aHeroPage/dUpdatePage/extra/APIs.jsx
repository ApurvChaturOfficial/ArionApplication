import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";

const APIs = {
  // Retrieve API
  RetrieveAPI: (Redux, ReduxUltimate, id) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.MainAPI.HeroAPI.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.FormObject, payload: {
          ...Redux.state.FormObject,
          FormValue: {
            id: serverResponse.retrieve._id,
            image: serverResponse.retrieve.aImage,
            title: serverResponse.retrieve.aTitle,
            subtitle: serverResponse.retrieve.aSubtitle,
            description: serverResponse.retrieve.aDescription,
            slug: serverResponse.retrieve.aSlug,
            status: serverResponse.retrieve.aStatus === true ? 'Active' : 'Inactive',

            createdBy: serverResponse.retrieve.bCreatedBy,
            createdAt: serverResponse.retrieve.bCreatedAt,
            updatedBy: serverResponse.retrieve.bUpdatedBy,
            updatedAt: serverResponse.retrieve.bUpdatedAt,

            tag: serverResponse.retrieve.dTag,
            type: serverResponse.retrieve.dType,
            socialLinks: serverResponse.retrieve.dSocialLinks,
            webLinks: serverResponse.retrieve.dWebLinks,
          }
        }})
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
  
   // Update API
   UpdateAPI: (Redux, ReduxUltimate, id, navigate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.MainAPI.HeroAPI.UpdateAPI({
      id,
			data: {
        aTitle: Redux.state.FormObject.FormValue.title,
        aSubtitle: Redux.state.FormObject.FormValue.subtitle,
        aDescription: Redux.state.FormObject.FormValue.description,
        aImage: Redux.state.FormObject.FormValue.image,
        aStatus: Redux.state.FormObject.FormValue.status === 'Active' ? true : false,

        dTag: Redux.state.FormObject.FormValue.tag,
        dType: Redux.state.FormObject.FormValue.type,
        dSocialLinks: Redux.state.FormObject.FormValue.socialLinks,
        dWebLinks: Redux.state.FormObject.FormValue.webLinks,
			}
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast.success(serverResponse.message, { position: "top-center" });
        clearFormObject(Redux)
        navigate(FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute)
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