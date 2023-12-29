import React from 'react';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";

import MainHeader from './children/cMainHeader';
import MainList from './children/fMainContent/bMainList';
import MainForm from './children/fMainContent/cMainForm';
import MainDetail from './children/fMainContent/dMainDetail';
import MainCardList from './children/fMainContent/aMainCardList';


const MainSection2 = ({ Data, Redux, ReduxUltimate, DeleteAPI, }) => {
  // Variables
  const { header, component, content } = Data

  // JSX
  return (
    <React.Fragment>
      {
        ReduxUltimate.state.RequiredObject?.Loading ? (
          <MDBox pt={6} pb={3}> Loading .....</MDBox>
        )
        :
        <React.Fragment>
          <MDBox pt={6} pb={3}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Card>

                  {/* Header */}
                  <MainHeader Header={header} />

                  {/* Content */}
                  {
                    component === "List"     ? <MainList   Content={content} Header={header}                                                          /> :
                    component === "Create"   ? <MainForm   Content={content} Redux={Redux}                                             /> :
                    component === "Retrieve" ? <MainDetail Content={content}                                                           /> :
                    component === "Update"   ? <MainForm   Content={content} Redux={Redux}                                             /> :
                    component === "Delete"   ? <MainDetail Content={content}               Component={component} DeleteAPI={DeleteAPI} /> :
                    <MainCardList />
                  }    

                </Card>
              </Grid>
            </Grid>
          </MDBox>

        </React.Fragment>
      }
    
    </React.Fragment>
  );
};

export default MainSection2;
