import FinalRouteName from "@/love/gRoute/FinalRouteName"

const Data = (Redux, id) => {
  return (
    {
      header: {
        label: "Project Section Retrieve",
        buttons: [
          {
            label: "Update",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}/${id}`
          },
          {
            label: "Delete",
            route: `${FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}/${id}`
          },
        ]
      },
      component: "Retrieve",
      content: {
        detail: {
          cards: Redux.state.ReceivedObject?.Retrieve && [
            {
              display: false,
              title: "Critical Info",
              values: [],  
            },
            {
              display: true,
              title: "Basic Info",
              values: [
                {
                  type: "file",
                  label: "Image",
                  value: Redux.state.ReceivedObject?.Retrieve["image"]?.url
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
                  type: "links3",
                  label: "Project Groups",
                  value: Redux.state.ReceivedObject?.Retrieve["projectGroups"]
                },
              ],  
            },
            {
              display: false,
              title: "More Info",
              values: [],  
            },
          ],
        },
      }
    }
  )
}

export default Data