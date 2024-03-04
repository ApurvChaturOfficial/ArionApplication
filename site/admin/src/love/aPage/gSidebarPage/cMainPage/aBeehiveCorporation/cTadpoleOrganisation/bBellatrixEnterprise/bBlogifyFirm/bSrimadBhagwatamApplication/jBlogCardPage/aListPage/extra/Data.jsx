import { Link, NavLink } from "react-router-dom"
import FinalRouteName from "src/love/gRoute/FinalRouteName"

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDAvatar from "src/love/iTemplate/components/MDAvatar";
import MDBadge from "src/love/iTemplate/components/MDBadge";
import MDButton from "src/love/iTemplate/components/MDButton";

import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";


const Data = (Redux) => {
  return (
    {
      header: {
        label: "Blog Card List",
        buttons: [
          {
            label: "Create",
            route: FinalRouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.CreateRoute
          },
        ]
      },
      component: "List",
      content: {
        list: {
          // columns: ['Title', 'Subtitle', 'Status', 'Slug', 'Actions' ],
          // data: Redux.state.ReceivedObject?.List?.map((each, index) => {
          //   return (
          //     <tr key={index} >
          //       <td>{index+1}</td>
          //       <td>{each.title}</td>
          //       <td>{each.subtitle}</td>
          //       <td>{each.status}</td>
          //       <td>{each.slug}</td>
          //       <td>
          //         <NavLink to={each.retrieve} >Retrieve</NavLink>
          //         <NavLink to={each.update} >Update</NavLink>
          //         <NavLink to={each.delete} >Delete</NavLink>
          //       </td>
          //     </tr>
          //   )
          // }),

          columns: [
            { Header: "Title", accessor: "title", width: "25%", align: "left" },
            { Header: "Status", accessor: "status", align: "center" },
            // { Header: "Slug", accessor: "slug", align: "center" },
            { Header: "Created", accessor: "created", align: "left" },
            { Header: "Updated", accessor: "updated", align: "left" },
            { Header: "Actions", accessor: "action", align: "center" },
          ],
          data: Redux.state.ReceivedObject?.List?.map((each, index) => {
            return {
              title: (
                <MDBox display="flex" alignItems="center" lineHeight={1}>
                  <MDAvatar src={each?.image?.url || defaultUser} name={each?.title} size="sm" />
                  <MDBox ml={2} lineHeight={1}>
                    <MDTypography display="block" variant="button" fontWeight="medium">
                      {each?.title}
                    </MDTypography>
                    <MDTypography variant="caption">{each?.subtitle}</MDTypography>
                  </MDBox>
                </MDBox>
              ),
              status: (
                <MDBox ml={-1}>
                  <MDBadge 
                    badgeContent={each.status} 
                    color={each.status === "Active" ? "success" : "dark"} 
                    variant="gradient" 
                    size="sm" 
                  />
                </MDBox>
              ),
              slug: each.slug,
              created: (
                each?.createdBy &&
                <MDBox display="flex" alignItems="center" lineHeight={1}>
                  <MDAvatar src={each?.createdBy?.eImage?.url || defaultUser} name={each?.title} size="sm" />
                  <MDBox ml={2} lineHeight={1}>
                    <MDTypography display="block" variant="button" fontWeight="medium">
                      {`${each?.createdBy?.eFirstName} ${each?.createdBy?.eLastName}`}
                    </MDTypography>
                    <MDTypography variant="caption">{each?.createdBy?.eEmail}</MDTypography>
                  </MDBox>
                </MDBox>
              ),
              updated: (
                each?.updatedBy &&
                <MDBox display="flex" alignItems="center" lineHeight={1}>
                  <MDAvatar src={each?.updatedBy?.eImage?.url || defaultUser} name={each?.title} size="sm" />
                  <MDBox ml={2} lineHeight={1}>
                    <MDTypography display="block" variant="button" fontWeight="medium">
                      {`${each?.updatedBy?.eFirstName} ${each?.updatedBy?.eLastName}`}
                    </MDTypography>
                    <MDTypography variant="caption">{each?.updatedBy?.eEmail}</MDTypography>
                  </MDBox>
                </MDBox>
              ),
              action: (
                <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
                  <MDButton component={Link} to={each.retrieve} variant="text" color="info">
                    <Icon>weekend</Icon>&nbsp;
                  </MDButton>
                  <MDButton component={Link} to={each.update} variant="text" color="warning">
                    <Icon>edit</Icon>&nbsp;
                  </MDButton>
                  <MDButton component={Link} to={each.delete} variant="text" color="error">
                    <Icon>delete</Icon>&nbsp;
                  </MDButton>
                </MDBox>
              ),
            }
          })

        }
      }
    }
  )
}

export default Data