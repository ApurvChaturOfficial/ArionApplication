import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";

const APIs = {
  // Retrieve API
  RetrieveAPI: (Redux, ReduxUltimate, id) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.SettingAPI.AdminHeroAPI.RetrieveAPI({id})
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
            detail: serverResponse.retrieve.aDetail,
            slug: serverResponse.retrieve.aSlug,
            status: serverResponse.retrieve.aStatus === true ? 'Active' : 'Inactive',

            // createdBy: serverResponse.retrieve.bCreatedBy,
            // createdAt: moment(serverResponse.retrieve.bCreatedAt).format('MMM Do YYYY, h:mm:ss a'),
            // updatedBy: serverResponse.retrieve.bUpdatedBy,
            // updatedAt: moment(serverResponse.retrieve.bUpdatedAt).format('MMM Do YYYY, h:mm:ss a'),

            tag: serverResponse.retrieve.dTag,
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
   UpdateAPI: (Redux, ReduxUltimate, id, navigate, toast) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.SettingAPI.AdminHeroAPI.UpdateAPI({
      id,
			data: {
        aTitle: Redux.state.FormObject.FormValue.title,
        aSubtitle: Redux.state.FormObject.FormValue.subtitle,
        aDescription: Redux.state.FormObject.FormValue.description,
        aDetail: Redux.state.FormObject.FormValue.detail,
        aImage: Redux.state.FormObject.FormValue.image,
        aStatus: Redux.state.FormObject.FormValue.status === 'Active' ? true : false,

        dTag: Redux.state.FormObject.FormValue.tag,
        dSocialLinks: Redux.state.FormObject.FormValue.socialLinks,
        dWebLinks: Redux.state.FormObject.FormValue.webLinks,
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
        navigate(FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.ListRoute)
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