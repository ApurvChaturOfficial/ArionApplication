/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDAvatar from "src/love/iTemplate/components/MDAvatar";
import MDProgress from "src/love/iTemplate/components/MDProgress";

// Images
import LogoAsana from "src/love/iTemplate/assets/images/small-logos/logo-asana.svg";
import logoGithub from "src/love/iTemplate/assets/images/small-logos/github.svg";
import logoAtlassian from "src/love/iTemplate/assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "src/love/iTemplate/assets/images/small-logos/logo-slack.svg";
import logoSpotify from "src/love/iTemplate/assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "src/love/iTemplate/assets/images/small-logos/logo-invision.svg";

export default function access(Redux) {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "menu", accessor: "menu", width: "15%", align: "left" },
      { Header: "list", accessor: "list", align: "center" },
      { Header: "create", accessor: "create", align: "center" },
      { Header: "retrieve", accessor: "retrieve", align: "center" },
      { Header: "update", accessor: "update", align: "center" },
      { Header: "delete", accessor: "delete", align: "center" },
    ],

    rows: Redux.state.ReceivedObject?.Retrieve?.role?.cMenus?.map((each, index) => {
      return (      {
        menu: (
          <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDBox lineHeight={1}>
              <MDTypography display="block" variant="button" fontWeight="medium">
                {each?.menu?.aTitle}
              </MDTypography>
              <MDTypography variant="caption">{each?.menu?.aSubtitle}</MDTypography>
            </MDBox>
          </MDBox>
        ),
        list: (each?.access?.list ?
          <Icon color="success" fontSize="medium">check_circle</Icon>
          :
          <Icon color="error" fontSize="medium">cancel</Icon>
        ),
        create: (each?.access?.create ?
          <Icon color="success" fontSize="medium">check_circle</Icon>
          :
          <Icon color="error" fontSize="medium">cancel</Icon>
        ),
        retrieve: (each?.access?.retrieve ?
          <Icon color="success" fontSize="medium">check_circle</Icon>
          :
          <Icon color="error" fontSize="medium">cancel</Icon>
        ),
        update: (each?.access?.update ?
          <Icon color="success" fontSize="medium">check_circle</Icon>
          :
          <Icon color="error" fontSize="medium">cancel</Icon>
        ),
        delete: (each?.access?.delete ?
          <Icon color="success" fontSize="medium">check_circle</Icon>
          :
          <Icon color="error" fontSize="medium">cancel</Icon>
        ),
      })
    })
    // rows: [
    //   {
    //     menu: <Project image={LogoAsana} name="Asana" />,
    //     list: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $2,500
    //       </MDTypography>
    //     ),
    //     create: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         working
    //       </MDTypography>
    //     ),
    //     retrieve: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     menu: <Project image={logoGithub} name="Github" />,
    //     list: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $5,000
    //       </MDTypography>
    //     ),
    //     create: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         done
    //       </MDTypography>
    //     ),
    //     retrieve: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     menu: <Project image={logoAtlassian} name="Atlassian" />,
    //     list: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $3,400
    //       </MDTypography>
    //     ),
    //     create: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         canceled
    //       </MDTypography>
    //     ),
    //     retrieve: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     menu: <Project image={logoSpotify} name="Spotify" />,
    //     list: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $14,000
    //       </MDTypography>
    //     ),
    //     create: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         working
    //       </MDTypography>
    //     ),
    //     retrieve: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     menu: <Project image={logoSlack} name="Slack" />,
    //     list: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $1,000
    //       </MDTypography>
    //     ),
    //     create: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         canceled
    //       </MDTypography>
    //     ),
    //     retrieve: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     menu: <Project image={logoInvesion} name="Invesion" />,
    //     list: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $2,300
    //       </MDTypography>
    //     ),
    //     create: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         done
    //       </MDTypography>
    //     ),
    //     retrieve: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   },
    // ],
  };
}
