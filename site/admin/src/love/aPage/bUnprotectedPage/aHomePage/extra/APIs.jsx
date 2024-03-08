import API from "@/love/aAPI/API";
import clearFormObject from "@/love/dFunction/aClearFormObject";
import loading from "@/love/dFunction/fLoading";
import FinalRouteName from "@/love/gRoute/FinalRouteName";


const APIs = {
  // Home Page Retrieve API
  HomePageAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.GlobalAPI.HomeAPI.RetrieveAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
          ...Redux.state.ReceivedObject,
          Retrieve: {
            HeroRetrieve: serverResponse.retrieve?.hero_retrieve && {
              image: serverResponse.retrieve?.hero_retrieve?.aImage,
              title: serverResponse.retrieve?.hero_retrieve?.aTitle,
              subtitle: serverResponse.retrieve?.hero_retrieve?.aSubtitle,
              description: serverResponse.retrieve?.hero_retrieve?.aDescription,
              tag: serverResponse.retrieve?.hero_retrieve?.dTag,
              webLinks: serverResponse.retrieve?.hero_retrieve?.dWebLinks,
              socialLinks: serverResponse.retrieve?.hero_retrieve?.dSocialLinks,
            },
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
}

export default APIs