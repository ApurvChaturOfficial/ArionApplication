import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";


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
            HeroRetrieve: serverResponse.retrieve?.hero_retrieve?.admin && {
              image: serverResponse.retrieve?.hero_retrieve?.admin?.aImage,
              title: serverResponse.retrieve?.hero_retrieve?.admin?.aTitle,
              subtitle: serverResponse.retrieve?.hero_retrieve?.admin?.aSubtitle,
              description: serverResponse.retrieve?.hero_retrieve?.admin?.aDescription,
              tag: serverResponse.retrieve?.hero_retrieve?.admin?.dTag,
              webLinks: serverResponse.retrieve?.hero_retrieve?.admin?.dWebLinks,
              socialLinks: serverResponse.retrieve?.hero_retrieve?.admin?.dSocialLinks,
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