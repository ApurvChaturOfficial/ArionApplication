import React from 'react';

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";

// Material Dashboard 2 React example components
import DataTable from "src/love/iTemplate/examples/Tables/DataTable";


const MainList = ({ Content }) => {
  const columns = Content.list.columns
  const rows = Content.list?.data

  // JSX
  return (
    columns && rows &&
    <MDBox pt={0}>
      <DataTable
        table={{ columns, rows }}
        isSorted={true}
        entriesPerPage={true}
        showTotalEntries={true}
        noEndBorder
      />
    </MDBox>
  );
};

export default MainList;
