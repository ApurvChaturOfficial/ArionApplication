import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "src/love/dFunction/bValidateFormObject"

const Data = (Redux, EventHandler) => {
  const handleCheckboxInput = (event, Redux1) => {
    let list = Redux1.state.FormObject.FormValue?.[event.target.name] || []

    Redux1.dispatch({
      type: Redux1.action.FormObject,
      payload: {
        ...Redux1.state.FormObject,
        FormValue: {
          ...Redux1.state.FormObject?.FormValue,
          [event.target.name]: list.includes(event.target.value) ? 
            list.filter((selectedId) => selectedId !== event.target.value)
            :
            [...list, event.target.value],
        },
      },
    })
  }

  return (
    {
      header: {
        label: "Program Section Create",
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
              display: true,
              title: "Relation Info",
              inputs: [
                {
                  label: "Program",
                  placeholder: "Program",
                  type: "checkbox",
                  name: "programs",
                  onChange: event => handleCheckboxInput(event, Redux),
                  options: Redux.state.RequiredObject?.ProgramList?.map(each => {
                      return (
                        { label: each.title, value: each.id }
                      )
                    })
                },
              ],  
            },
            {
              display: false,
              title: "More Info",
              inputs: [],  
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