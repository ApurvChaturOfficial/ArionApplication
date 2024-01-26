import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "src/love/dFunction/bValidateFormObject"

const Data = (Redux, EventHandler) => {
  return (
    {
      header: {
        label: "Hero Create",
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
                  label: "Tag",
                  placeholder: "Tag",
                  type: "text",
                  name: "tag",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Type",
                  placeholder: "Type",
                  type: "radio-new",
                  name: "type",
                  onChange: event => handleInput(event, Redux),
                  options: [
                    { label: "Frontend", value: "Frontend" },
                    { label: "Admin", value: "Admin" },
                  ]
                },
                {
                  label: "Web Links",
                  placeholder: "Web Links",
                  type: "dynamic-multiple",
                  name: "webLinks",
                  onChange: (event, index) => EventHandler.WebLink.Change(event, Redux, index),
                  onAdd: () => EventHandler.WebLink.Add(Redux),
                  onRemove: (index) => EventHandler.WebLink.Remove(Redux, index),
                  inputs: Redux.state.FormObject.FormValue?.webLinks
                },
                {
                  label: "Social Links",
                  placeholder: "Social Links",
                  type: "dynamic-multiple",
                  name: "socialLinks",
                  onChange: (event, index) => EventHandler.SocialLink.Change(event, Redux, index),
                  onAdd: () => EventHandler.SocialLink.Add(Redux),
                  onRemove: (index) => EventHandler.SocialLink.Remove(Redux, index),
                  inputs: Redux.state.FormObject.FormValue?.socialLinks
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