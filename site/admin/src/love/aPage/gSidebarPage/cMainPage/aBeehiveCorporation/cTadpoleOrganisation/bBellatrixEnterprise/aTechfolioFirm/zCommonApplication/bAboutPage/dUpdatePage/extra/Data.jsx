import FinalRouteName from "src/love/gRoute/FinalRouteName"
import Function from "./Function"
import handleInput from "src/love/dFunction/dHandleInput"
import validateFormObject from "src/love/dFunction/bValidateFormObject"

const Data = (Redux, id, EventHandler) => {
  return (
    {
      header: {
        label: "About Update",
        buttons: [
          {
            label: "Delete",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}/${id}`
          },
        ]
      },
      component: "Create",
      content: {
        create: {
          cards: [
            {
              display: false,
              title: "Critical Info",
              inputs: [],  
            },
            {
              display: true,
              title: "Basic Info",
              inputs: [
                {
                  label: "Image",
                  placeholder: "Image",
                  type: "file",
                  name: "image",
                  onChange: event => handleInput(event, Redux),
                  // value: Redux.state.FormObject.FormValue?.image
                },
                {
                  label: "Title",
                  placeholder: "Title",
                  type: "text",
                  name: "title",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.title
                },    
                {
                  label: "Subtitle",
                  placeholder: "Subtitle",
                  type: "text",
                  name: "subtitle",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.subtitle
                },    
                {
                  label: "Description",
                  placeholder: "Description",
                  type: "text",
                  name: "description",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.description
                },    
                {
                  label: "Status",
                  placeholder: "Status",
                  type: "radio",
                  name: "status",
                  value: Redux.state.FormObject.FormValue?.status === 'Active' ? true : false,
                  onChange: event => Redux.dispatch({
                    type: Redux.action.FormObject,
                    payload: {
                      ...Redux.state.FormObject,
                      FormValue: {
                        ...Redux.state.FormObject?.FormValue,
                        [event.target.name]: event.target.checked ? 'Active' : 'Inactive',
                      },
                    },
                  })
                },          
              ],
            },
            {
              display: false,
              title: "Personal Info",
              inputs: [],  
            },
            {
              display: false,
              title: "Relation Info",
              inputs: [],  
            },
            {
              display: true,
              title: "More Info",
              inputs: [
                {
                  label: "Cards",
                  placeholder: "Cards",
                  type: "dynamic-multiple",
                  name: "cards",
                  onChange: (event, index) => EventHandler.Card.Change(event, Redux, index),
                  onAdd: () => EventHandler.Card.Add(Redux),
                  onRemove: (index) => EventHandler.Card.Remove(Redux, index),
                  inputs: Redux.state.FormObject.FormValue?.cards
                },
              ],  
            },
          ],
          buttons: [
            {
              type: "button",
              label: "Update",
              onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
            },
          ],
        }
      }
    }
  )
}

export default Data