import FinalRouteName from "@/love/gRoute/FinalRouteName"
import Function from "./Function"
import handleInput from "@/love/dFunction/dHandleInput"
import validateFormObject from "@/love/dFunction/bValidateFormObject"

const Data = (Redux, id, EventHandler) => {
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
        label: "Program Section Update",
        buttons: [
          {
            label: "Delete",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.DeleteRoute}/${id}`
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
                  type: "text-area",
                  name: "description",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.description
                },  
                {
                  label: "Detail",
                  placeholder: "Detail",
                  type: "text-area",
                  name: "detail",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.detail
                },      
                {
                  label: "Status",
                  placeholder: "Status",
                  type: "radio-new",
                  name: "status",
                  value: Redux.state.FormObject.FormValue?.status,
                  options: [
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                  ],
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
                    }),
                  value: Redux.state.FormObject.FormValue?.programs
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