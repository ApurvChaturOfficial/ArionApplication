import handleInput from "@/love/dFunction/dHandleInput"
import Function from "./Function"
import validateFormObject from "@/love/dFunction/bValidateFormObject"
import FinalRouteName from "@/love/gRoute/FinalRouteName"

const Data = (Redux, id, EventHandler) => {
  return (
    {
      header: {
        label: "User Update",
        buttons: [
          {
            label: "Delete",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.DeleteRoute}/${id}`
          },
        ]
      },
      component: "Update",
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
                  value: Redux.state.FormObject.FormValue?.firstName
                },
                {
                  label: "Last Name",
                  placeholder: "Last Name",
                  type: "text",
                  name: "lastName",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.lastName
                },
                {
                  label: "Email",
                  placeholder: "Email",
                  type: "email",
                  name: "email",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.email
                },
                {
                  label: "Mobile",
                  placeholder: "Mobile",
                  type: "text",
                  name: "mobile",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.mobile
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
                  label: "Role",
                  placeholder: "Role",
                  type: "radio-new",
                  name: "role",
                  onChange: event => handleInput(event, Redux),
                  value: Redux.state.FormObject.FormValue?.role?._id,
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
                      value: Redux.state.FormObject.FormValue?.address?.lane
                    },    
                    {
                      label: "Street",
                      placeholder: "Street",
                      type: "text",
                      name: "street",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                      value: Redux.state.FormObject.FormValue?.address?.street
                    },    
                    {
                      label: "City",
                      placeholder: "City",
                      type: "text",
                      name: "city",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                      value: Redux.state.FormObject.FormValue?.address?.city
                    },    
                    {
                      label: "State",
                      placeholder: "State",
                      type: "text",
                      name: "state",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                      value: Redux.state.FormObject.FormValue?.address?.state
                    },    
                    {
                      label: "Country",
                      placeholder: "Country",
                      type: "text",
                      name: "country",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                      value: Redux.state.FormObject.FormValue?.address?.country
                    },    
                    {
                      label: "Pin Code",
                      placeholder: "Pin Code",
                      type: "text",
                      name: "pinCode",
                      onChange: event => EventHandler.Address.Change(event, Redux),
                      value: Redux.state.FormObject.FormValue?.address?.pinCode
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