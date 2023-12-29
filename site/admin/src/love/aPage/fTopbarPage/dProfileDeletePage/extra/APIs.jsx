import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";


const APIs = {
  // Profile Retrieve API
  ProfileRetrieveAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.TopbarAPI.ProfileAPI.RetrieveAPI()
    .then(response => {
    //   console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
          ...Redux.state.ReceivedObject,
          Retrieve: {
            image: serverResponse.profile_retrieve.aImage,
            firstName: serverResponse.profile_retrieve.first_name,
            lastName: serverResponse.profile_retrieve.last_name,
            email: serverResponse.profile_retrieve.email,
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

  // Profile Delete API
  ProfileDeleteAPI: (Redux, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.ContentAPI.TopbarAPI.ProfileAPI.DeleteAPI()
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        window.location.reload()
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