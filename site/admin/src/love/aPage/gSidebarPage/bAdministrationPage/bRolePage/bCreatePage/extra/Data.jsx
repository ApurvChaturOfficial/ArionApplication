import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "src/love/dFunction/bValidateFormObject"

const Data = (Redux) => {
  return (
    {
      header: {
        label: "Role Create",
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
                  label: "Menu Access",
                  placeholder: "Special Checkbox",
                  type: "special-checkbox",
                  name: "status",
                  columns: ['Items', 'List', 'Create', 'Retrieve', 'Update', 'Delete' ],
                  data: Redux.state.RequiredObject.MenuList &&
                    Redux.state.RequiredObject.MenuList.map((each, index) => {
                      return (
                        <tr key={index} >
                          <td>{each.title}</td>
                          <td>
                            <input 
                              type="checkbox" 
                              name="list"
                              onChange={event => Function.handleSpecialCheckboxInput(event, Redux, index)}
                            />
                          </td>
                          <td>
                            <input 
                              type="checkbox" 
                              name="create"
                              onChange={event => Function.handleSpecialCheckboxInput(event, Redux, index)}
                            />
                          </td>
                          <td>
                            <input 
                              type="checkbox" 
                              name="retrieve"
                              onChange={event => Function.handleSpecialCheckboxInput(event, Redux, index)}
                            />
                          </td>
                          <td>
                            <input 
                              type="checkbox" 
                              name="update"
                              onChange={event => Function.handleSpecialCheckboxInput(event, Redux, index)}
                            />
                          </td>
                          <td>
                            <input 
                              type="checkbox" 
                              name="delete"
                              onChange={event => Function.handleSpecialCheckboxInput(event, Redux, index)}
                            />
                          </td>
                        </tr>    
                      )
                    })
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