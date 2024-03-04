import handleInput from "@/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "@/love/dFunction/bValidateFormObject"

const Data = (Redux, EventHandler) => {
  return (
    {
      header: {
        label: "Base Create",
        buttons: []
      },
      component: "Create",
      content: {
        create: {
          cards: [
            {
              display: true,
              title: "Critical Info",
              inputs: [
                {
                  label: "Image",
                  placeholder: "Image",
                  type: "file",
                  name: "image",
                  value: Redux.state.FormObject.FormValue?.image?.url,
                  onChange: event => handleInput(event, Redux),
                },
                {
                  label: "First Name",
                  placeholder: "First Name",
                  type: "text",
                  name: "firstName",
                  onChange: event => handleInput(event, Redux),
                },
                {
                  label: "Last Name",
                  placeholder: "Last Name",
                  type: "text",
                  name: "lastName",
                  onChange: event => handleInput(event, Redux),
                },
                {
                  label: "Email",
                  placeholder: "Email",
                  type: "email",
                  name: "email",
                  onChange: event => handleInput(event, Redux),
                },
                {
                  label: "Password",
                  placeholder: "Password",
                  type: "password",
                  name: "password",
                  onChange: event => handleInput(event, Redux),
                },  
                {
                  label: "Mobile",
                  placeholder: "Mobile",
                  type: "text",
                  name: "mobile",
                  onChange: event => handleInput(event, Redux),
                },
              ],  
            },
            {
              display: true,
              title: "Basic Info",
              inputs: [
                {
                  label: "Image",
                  placeholder: "Image",
                  type: "file",
                  name: "coverImage",
                  value: Redux.state.FormObject.FormValue?.coverImage?.url,
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
                  type: "text-area",
                  name: "description",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Detail",
                  placeholder: "Detail",
                  type: "text-area",
                  name: "detail",
                  onChange: event => handleInput(event, Redux),
                },    
                {
                  label: "Status",
                  placeholder: "Status",
                  type: "radio-new",
                  name: "status",
                  options: [
                    { label: "Active", value: "Active" },
                    { label: "Inactive", value: "Inactive" },
                  ]
                }
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
                  label: "Role",
                  placeholder: "Role",
                  type: "radio-new",
                  name: "role",
                  onChange: event => handleInput(event, Redux),
                  options: Redux.state.RequiredObject?.RoleList?.map(each => {
                      return (
                        { label: each.title, value: each.id }
                      )
                    })
                },
              ],  
            },
            {
              display: true,
              title: "More Info",
              inputs: [
                {
                  label: "Address",
                  placeholder: "Address",
                  type: "static-multiple",
                  name: "address",
                  // onChange: event => handleInput(event, Redux),
                  inputs: [
                    {
                      label: "Lane",
                      placeholder: "Lane",
                      type: "text",
                      name: "lane",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                    },    
                    {
                      label: "Street",
                      placeholder: "Street",
                      type: "text",
                      name: "street",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                    },    
                    {
                      label: "City",
                      placeholder: "City",
                      type: "text",
                      name: "city",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                    },    
                    {
                      label: "State",
                      placeholder: "State",
                      type: "text",
                      name: "state",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                    },    
                    {
                      label: "Country",
                      placeholder: "Country",
                      type: "text",
                      name: "country",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                    },    
                    {
                      label: "Pin Code",
                      placeholder: "Pin Code",
                      type: "text",
                      name: "pinCode",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                    },                        
                  ]
                },
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