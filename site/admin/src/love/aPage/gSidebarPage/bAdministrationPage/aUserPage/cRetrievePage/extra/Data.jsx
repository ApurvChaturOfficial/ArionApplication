import FinalRouteName from "@/love/gRoute/FinalRouteName"

const Data = (Redux, id) => {
  return (
    {
      header: {
        label: "User Retrieve",
        buttons: [
          {
            label: "Update",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.UpdateRoute}/${id}`
          },
          {
            label: "Delete",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.DeleteRoute}/${id}`
          },
        ]
      },
      component: "Retrieve",
      content: {
        detail: {
          cards: Redux.state.ReceivedObject?.Retrieve && [
            {
              display: true,
              title: "Critical Info",
              values: [
                {
                  type: "file",
                  label: "Profile Picture",
                  value: Redux.state.ReceivedObject?.Retrieve["image"]?.url
                },
                {
                  label: "First Name",
                  value: Redux.state.ReceivedObject?.Retrieve["firstName"]
                },
                {
                  label: "Last Name",
                  value: Redux.state.ReceivedObject?.Retrieve["lastName"]
                },
                {
                  label: "Email",
                  value: Redux.state.ReceivedObject?.Retrieve["email"]
                },    
                {
                  label: "Mobile",
                  value: Redux.state.ReceivedObject?.Retrieve["mobile"]
                },    
              ],  
            },
            {
              display: true,
              title: "Basic Info",
              values: [
                {
                  type: "file",
                  label: "Cover Image",
                  value: Redux.state.ReceivedObject?.Retrieve["coverImage"]?.url
                },
                {
                  label: "Title",
                  value: Redux.state.ReceivedObject?.Retrieve["title"]
                },
                {
                  label: "Subtitle",
                  value: Redux.state.ReceivedObject?.Retrieve["subtitle"]
                },
                {
                  label: "Description",
                  value: Redux.state.ReceivedObject?.Retrieve["description"]
                },
                {
                  label: "Detail",
                  value: Redux.state.ReceivedObject?.Retrieve["detail"]
                },
                {
                  label: "Slug",
                  value: Redux.state.ReceivedObject?.Retrieve["slug"]
                },
              ],
            },
            {
              display: true,
              title: "Personal Info",
              values: [
                {
                  label: "Created By",
                  value: Redux.state.ReceivedObject?.Retrieve["createdBy"]
                },
                {
                  label: "Created At",
                  value: Redux.state.ReceivedObject?.Retrieve["createdAt"]
                },
                {
                  label: "Updated By",
                  value: Redux.state.ReceivedObject?.Retrieve["updatedBy"]
                },
                {
                  label: "Updated At",
                  value: Redux.state.ReceivedObject?.Retrieve["updatedAt"]
                },
              ],  
            },
            {
              display: true,
              title: "Relation Info",
              values: [
                {
                  label: "Role",
                  value: Redux.state.ReceivedObject?.Retrieve["role"]?.aTitle
                },
              ],  
            },
            {
              display: true,
              title: "More Info",
              values: [
                {
                  label: "Address",
                  value: Redux.state.ReceivedObject?.Retrieve?.["address"] ? `
                    ${Redux.state.ReceivedObject?.Retrieve?.["address"]?.lane}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.["address"]?.street}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.["address"]?.city}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.["address"]?.state}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.["address"]?.country}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.["address"]?.pinCode}, 
                  ` : null
                },
                {
                  type: "links1",
                  label: "Links",
                  value: Redux.state.ReceivedObject?.Retrieve["links"]
                },
              ],  
            },
          ],
        },
      }
    }
  )
}

export default Data