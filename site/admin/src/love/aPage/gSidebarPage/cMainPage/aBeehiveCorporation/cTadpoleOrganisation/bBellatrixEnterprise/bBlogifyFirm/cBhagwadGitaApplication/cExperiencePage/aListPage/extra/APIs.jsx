import API from "@/love/aAPI/API";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";

const APIs = {
  ListAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.SidebarAPI.MainAPI.ExperienceAPI.ListAPI()
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					List: serverResponse.list.map(each => {
						return {
							id: each._id,
							image: each.aImage,
							title: each.aTitle,
							subtitle: each.aSubtitle,
							slug: each.aSlug,
              status: each.aStatus === true ? 'Active' : 'Inactive',
  
              createdBy: each?.bCreatedBy,
              createdAt: each?.bCreatedAt,
              updatedBy: each?.bUpdatedBy,
              updatedAt: each?.bUpdatedAt,
  
              retrieve: `${FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.RetrieveRoute}/${each._id}`,
              update: `${FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.UpdateRoute}/${each._id}`,
              delete: `${FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.DeleteRoute}/${each._id}`,
						}
					})
				} })
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
}

export default APIs