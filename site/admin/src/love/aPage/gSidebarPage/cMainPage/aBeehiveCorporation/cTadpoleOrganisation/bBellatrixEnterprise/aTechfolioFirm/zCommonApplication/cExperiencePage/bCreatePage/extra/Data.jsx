import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "src/love/dFunction/bValidateFormObject"

const Data = (Redux, EventHandler) => {
  return (
    {
      header: {
        label: "Experience Create",
        buttons: []
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
                },
                {
                  label: "Title",
                  placeholder: "Title",
                  type: "text",
                  name: "title",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Subtitle",
                  placeholder: "Subtitle",
                  type: "text",
                  name: "subtitle",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Description",
                  placeholder: "Description",
                  type: "text",
                  name: "description",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Status",
                  placeholder: "Status",
                  type: "radio",
                  name: "status",
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
                  onChange2: (event, index, index2) => EventHandler.Point.Change(event, Redux, index, index2),
                  onAdd2: (index) => EventHandler.Point.Add(Redux, index),
                  onRemove2: (index, index2) => EventHandler.Point.Remove(Redux, index, index2),
                  inputs: Redux.state.FormObject.FormValue?.cards
                },
              ],  
            },
          ],
          buttons: [
            {
              type: "button",
              label: "Create",
              onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
            },
          ],
        }
      }
    }
  )
}

export default Data