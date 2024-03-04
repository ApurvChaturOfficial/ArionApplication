import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "src/love/dFunction/bValidateFormObject"

const Data = (Redux, EventHandler) => {
  return (
    {
      header: {
        label: "Event Card Create",
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
                  type: "rich-text",
                  name: "description",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.description
                },
                {
                  label: "Detail",
                  placeholder: "Detail",
                  type: "rich-text",
                  name: "detail",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.detail
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
                  label: "Links",
                  placeholder: "Links",
                  type: "dynamic-multiple",
                  name: "links",
                  onChange: (event, index) => EventHandler.Link.Change(event, Redux, index),
                  onAdd: () => EventHandler.Link.Add(Redux),
                  onRemove: (index) => EventHandler.Link.Remove(Redux, index),
                  inputs: Redux.state.FormObject.FormValue?.links
                },
                {
                  label: "References",
                  placeholder: "References",
                  type: "dynamic-multiple",
                  name: "references",
                  onChange: (event, index) => EventHandler.Reference.Change(event, Redux, index),
                  onAdd: () => EventHandler.Reference.Add(Redux),
                  onRemove: (index) => EventHandler.Reference.Remove(Redux, index),
                  inputs: Redux.state.FormObject.FormValue?.references
                },
                {
                  label: "Date",
                  placeholder: "Date",
                  type: "static-multiple",
                  name: "date",
                  // onChange: event => handleInput(event, Redux),
                  inputs: [
                    {
                      label: "Start",
                      placeholder: "Start",
                      type: "text",
                      name: "start",
                      onChange: event => EventHandler.Date.Change(event, Redux),
                    },    
                    {
                      label: "Target",
                      placeholder: "Target",
                      type: "text",
                      name: "target",
                      onChange: event => EventHandler.Date.Change(event, Redux),
                    },    
                    {
                      label: "Complete",
                      placeholder: "Complete",
                      type: "text",
                      name: "complete",
                      onChange: event => EventHandler.Date.Change(event, Redux),
                    },    
                  ]
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