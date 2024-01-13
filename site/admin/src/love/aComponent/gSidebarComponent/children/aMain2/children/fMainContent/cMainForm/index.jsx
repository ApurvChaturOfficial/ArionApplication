import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import JoditEditor from 'jodit-react';

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDInput from 'src/love/iTemplate/components/MDInput';
import MDAvatar from 'src/love/iTemplate/components/MDAvatar';
import MDButton from 'src/love/iTemplate/components/MDButton';

import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";


const MainForm = ({ Content, Redux }) => {
	const inputElement1 = useRef()
	const inputElement2 = useRef()

	const editor1 = useRef()

  return (
    <React.Fragment>
      <MDBox pt={3}>
        <Grid container spacing={1}>
          {
            Content.create.cards?.map((each, index) => {
              return (
                each.display && 
                <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }} key={index}> 
                  <Card sx={{ height: "100%", width: "100%", boxShadow: true && "none" }}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                      <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                        {each.title}
                      </MDTypography>
                      {/* <MDTypography component={Link} to={"action.route"} variant="body2" color="secondary">
                        <Tooltip title={"action.tooltip"} placement="top">
                          <Icon>edit</Icon>
                        </Tooltip>
                      </MDTypography> */}
                    </MDBox>
                    <MDBox p={2}>
                      {/* <MDBox mb={2} lineHeight={1}>
                        <MDTypography variant="button" color="text" fontWeight="light">
                          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </MDTypography>
                      </MDBox>
                      <MDBox opacity={0.3}>
                        <Divider />
                      </MDBox> */}
                      <MDBox>
                        {
                          each.inputs?.map((each1, index1) => {
                            switch (each1.type) {
                              case 'file':
                              return (
                                <React.Fragment key={index1} >
                                  <MDBox display="flex" alignItems="center" py={1} pr={2}>
                                    <MDAvatar src={each1?.value || defaultUser} size="lg" />
                                    <MDBox ml={2}>
                                      <MDButton 
                                        size="small" 
                                        variant="gradient" 
                                        color="info" 
                                        component={Link} 
                                        onClick={() => each1.name === "image" ? inputElement1.current.click() : inputElement2.current.click()}
                                      >
                                        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                                        &nbsp;Choose Image
                                      </MDButton>
                                    </MDBox>
                                  </MDBox>
                                  <input type="file" name={each1.name} style={{display: "none"}} ref={each1.name === "image" ? inputElement1 : inputElement2} onChange={each1.onChange} />
                                  <MDTypography variant="caption" color='error'>
                                    {Redux.state.FormObject.FormError?.[each1.name]}
                                  </MDTypography>
                                </React.Fragment>
                              )

                              case 'select':
                              return (
                                <React.Fragment key={index1} >
                                  <div className='large-box-input' key={index} >
                                    <select name={each1.name} placeholder={each1.placeholder} onChange={each1.onChange} >
                                      <option disabled selected >--Select--</option>
                                      {
                                        each1.options?.map((each1, index1) => (
                                          <option 
                                            key={index1} 
                                            value={each1.value} 
                                            selected={each1.value === each1.value}
                                          >{each1.label}</option>
                                        ))
                                      }
                                    </select>
                                    <MDTypography variant="caption" color='error'>
                                      {Redux.state.FormObject.FormError?.[each1.name]}
                                    </MDTypography>
                                  </div>
                                </React.Fragment>
                              )

                              case 'radio':
                              return (
                                <React.Fragment key={index1} >
                                  <MDBox display="flex" alignItems="center" py={1} pr={2}>
                                    <MDTypography
                                      variant="button"
                                      fontWeight="regular"
                                      color="text"
                                      sx={{ cursor: "pointer", userSelect: "none", ml: 1 }}
                                    >
                                      {each1.label}&nbsp;&nbsp;
                                    </MDTypography>
                                    <Switch 
                                      name={each1.name}
                                      checked={each1.value} 
                                      onChange={each1.onChange}  
                                      color='success'
                                    />
                                  </MDBox>
                                  <MDTypography variant="caption" color='error'>
                                    {Redux.state.FormObject.FormError?.[each1.name]}
                                  </MDTypography>
                                </React.Fragment>
                              )

                              case 'radio-new':
                              return (
                                <React.Fragment key={index1}>
                                  <MDBox py={1} pr={2}>
                                    <MDTypography
                                      variant="button"
                                      fontWeight="regular"
                                      color="text"
                                      sx={{ cursor: "pointer", userSelect: "none", ml: 1 }}
                                    >
                                      {each1.label}&nbsp;&nbsp;
                                    </MDTypography>
                                    <MDBox ml={2}>
                                      <RadioGroup name={each1.name} onChange={each1.onChange}>
                                        {
                                          each1.options?.map((each2, index2) => (
                                            each1.value ? (
                                              <FormControlLabel 
                                                checked={each1?.value === each2.value}
                                                key={index2} 
                                                value={each2.value} 
                                                control={<Radio />} 
                                                label={each2.label} 
                                              />
                                            ) : (
                                              <FormControlLabel 
                                                key={index2} 
                                                value={each2.value} 
                                                control={<Radio />} 
                                                label={each2.label} 
                                              />
                                            )
                                          ))
                                        }
                                      </RadioGroup>
                                    </MDBox>
                                  </MDBox>
                                </React.Fragment>
                              )

                              case 'checkbox':
                              return (
                                <React.Fragment key={index1}>
                                  <MDBox py={1} pr={2}>
                                    <MDTypography
                                      variant="button"
                                      fontWeight="regular"
                                      color="text"
                                      sx={{ cursor: "pointer", userSelect: "none", ml: 1 }}
                                    >
                                      {each1.label}&nbsp;&nbsp;
                                    </MDTypography>
                                    <MDBox ml={2}>
                                      {
                                        each1.options?.map((each2, index2) => (
                                          <MDBox key={index2} >
                                            <Checkbox 
                                              name={each1.name} 
                                              value={each2.value} 
                                              onChange={each1.onChange} 
                                              checked={each1?.value?.includes(each2.value)}
                                            />
                                            <MDTypography
                                              variant="button"
                                              fontWeight="regular"
                                              color="text"
                                              sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                                            >
                                              &nbsp;&nbsp;{each2.label}
                                            </MDTypography>
                                          </MDBox>
                                        ))
                                      }
                                    </MDBox>
                                  </MDBox>
                                </React.Fragment>
                              )
  
                              case 'special-checkbox':
                              return (
                                <React.Fragment key={index1} >
                                  <div className='large-box-input' key={index} >
                                    <label>{each1.label}</label>
                                    <table className="data-table">
                                      <thead>
                                        <tr>
                                          {each1.columns.map((each1, index1) => <th key={index1} >{each1}</th>)}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {each1.data}
                                      </tbody>
                                    </table>
                                    <small>{Redux.state.FormObject.FormError?.[each1.name]}</small>
                                  </div>
                                </React.Fragment>
                              )
                              
                              case 'static-multiple':
                              return (
                                <React.Fragment key={index1} >
                                  <MDBox py={1} pr={2}>
                                    <MDTypography
                                      variant="button"
                                      fontWeight="regular"
                                      color="text"
                                      sx={{ cursor: "pointer", userSelect: "none", ml: 1 }}
                                    >
                                      {each1.label}&nbsp;&nbsp;
                                    </MDTypography>
                                    {
                                      each1?.inputs?.map((each2, index2) => {
                                        return (
                                          <React.Fragment key={index2} >
                                            <MDBox display="flex" py={1} px={2}>
                                              <MDInput 
                                                type={each2.type}  
                                                name={each2.name}
                                                label={each2.label}
                                                placeholder={each2.placeholder} 
                                                onChange={each2.onChange}  
                                                value={each2.value} 
                                                fullWidth 
                                                error={Redux.state.FormObject.FormError?.[each2.name]}
                                              />
                                            </MDBox>
                                            <MDTypography variant="caption" color='error'>
                                              {Redux.state.FormObject.FormError?.[each2.name]}
                                            </MDTypography>
                                          </React.Fragment>
                                        )
                                      })
                                    }
                                  </MDBox>
                                  <MDTypography variant="caption" color='error'>
                                    {Redux.state.FormObject.FormError?.[each1.name]}
                                  </MDTypography>
                                </React.Fragment>
                              )
                              
                              case 'dynamic-multiple':
                              return (
                                <React.Fragment>
                                  <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={1} pb={1}>
                                    <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                                      {each1.label}: 
                                    </MDTypography>
                                    <MDButton variant="gradient" color="info" size="small"
                                      onClick={() => each1.onAdd()}
                                    >
                                      <Icon>add</Icon>&nbsp;
                                      Add {each1.label}
                                    </MDButton>
                                  </MDBox>
            
                                  {each1?.inputs?.map((each2, index2) => {
                                    return (
                                      <React.Fragment key={index2}>
                                        <MDBox pb={1} mt={1}>

                                          {Object.keys(each2)?.map((each3, index3) => {
                                            return (
                                              each3 !== "_id" && typeof each2[each3] === "object" ?
                                                <React.Fragment key={index3}>
                                                  <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={0.5} pb={1} mx={1}>
                                                    <MDTypography variant="button" textTransform="capitalize">
                                                      {each3[0].toUpperCase() + each3.slice(1)}: 
                                                    </MDTypography>
                                                    <MDButton variant="outlined" color="info" iconOnly size="small"
                                                      onClick={() => each1.onAdd2(index2)}
                                                    >
                                                      <Icon>add</Icon>
                                                    </MDButton>
                                                  </MDBox>

                                                  {each2[each3]?.map((each4, index4) => {
                                                    return (
                                                      <MDBox key={index4} display="flex">
                                                        {Object.keys(each4)?.map((each5, index5) => {
                                                          return (
                                                            each5 !== "_id" &&
                                                            <React.Fragment key={index5}>
                                                              <MDBox display="flex" px={0.5} py={0.5} mr={0.5}>
                                                                <MDInput 
                                                                  fullWidth
                                                                  type="text"  
                                                                  name={each5}
                                                                  label={each5[0].toUpperCase() + each5.slice(1)}
                                                                  placeholder={each5[0].toUpperCase() + each5.slice(1)}
                                                                  onChange={(event) => each1.onChange2(event, index2, index4)}  
                                                                  value={each4?.[each5]} 
                                                                />
                                                              </MDBox>
                                                              <MDTypography variant="caption" color='error'>
                                                                {/* {Redux.state.FormObject.FormError?.[each21.name]} */}
                                                              </MDTypography>
                                                            </React.Fragment>
                                                          )
                                                        })}
                                                        <MDBox display="flex" justifyContent="space-between" alignItems="center" my={0.5} mx={1}>
                                                          <MDButton variant="outlined" color="error" size="small" iconOnly  
                                                            onClick={() => each1.onRemove2(index2, index4)}
                                                          >
                                                            <Icon>remove</Icon>
                                                          </MDButton>                              
                                                        </MDBox>
                                                      </MDBox>
                                                    )
                                                  })}
                                                </React.Fragment>
                                                :
                                                each3 !== "_id" &&
                                                <React.Fragment key={index3}>
                                                  <MDBox display="flex" px={0.5} py={0.5} mr={0.5}>
                                                    <MDInput 
                                                      fullWidth
                                                      type="text"  
                                                      name={each3}
                                                      label={each3[0].toUpperCase() + each3.slice(1)}
                                                      placeholder={each3[0].toUpperCase() + each3.slice(1)}
                                                      onChange={(event) => each1.onChange(event, index2)}  
                                                      value={each2?.[each3]} 
                                                    />
                                                  </MDBox>
                                                  <MDTypography variant="caption" color='error'>
                                                    {/* {Redux.state.FormObject.FormError?.[each21.name]} */}
                                                  </MDTypography>
                                                </React.Fragment>
                                            )
                                          })}

                                          <MDBox display="flex" justifyContent="space-between" alignItems="center" my={0.5}>
                                            <MDButton variant="outlined" color="error" size="small" fullWidth 
                                              onClick={() => each1.onRemove(index2)}
                                            >
                                              <Icon>remove</Icon>&nbsp;
                                              Remove
                                            </MDButton>                              
                                          </MDBox>
                                        </MDBox>
                                      </React.Fragment>
                                    )
                                  })}
                                </React.Fragment>
            
                              )
                              
                              case 'rich-text':
                              return (
                                <React.Fragment>
                                  <MDBox display="flex" py={1} pr={2}>
                                    <JoditEditor
                                      value={each1.value}
                                      tabIndex={1}
                                      onChange={value => Redux.dispatch({
                                        type: Redux.action.FormObject,
                                        payload: {
                                          ...Redux.state.FormObject,
                                          FormValue: {
                                            ...Redux.state.FormObject?.FormValue,
                                            [each1.name]: value,
                                          },
                                        },
                                      })}
                                    />
                                  </MDBox>
                                </React.Fragment>
                              )
                              
                              default:
                              return (
                                <React.Fragment key={index1} >
                                  <MDBox display="flex" py={1} pr={2}>
                                    <MDInput 
                                      type={each1.type}  
                                      name={each1.name}
                                      label={each1.label}
                                      placeholder={each1.placeholder} 
                                      onChange={each1.onChange}  
                                      value={each1.value} 
                                      fullWidth 
                                      error={Redux.state.FormObject.FormError?.[each.name]}
                                    />
                                  </MDBox>
                                  <MDTypography variant="caption" color='error'>
                                    {Redux.state.FormObject.FormError?.[each1.name]}
                                  </MDTypography>
                                </React.Fragment>
                              )  
      
                            }
                          })
                        }
                      </MDBox>
                    </MDBox>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>

        <MDBox
          py={3}
          px={2}
          display="flex" 
          justifyContent="left" 
        >
          {
            Content.create.buttons?.map((each, index) =>  {
              return (
                <MDButton size="small" variant="gradient" color="info" key={index} onClick={each.onClick}>
                  {each.label}
                </MDButton>
              )
            })
          }

        </MDBox>
      </MDBox>
    </React.Fragment>
  );
};

export default MainForm;
