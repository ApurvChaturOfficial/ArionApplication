import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route, Navigate, useLocation, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RouteName from "../love/gRoute/RouteName";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "src/love/iTemplate/examples/Sidenav";
import Configurator from "src/love/iTemplate/examples/Configurator";

// Material Dashboard 2 React themes
import theme from "src/love/iTemplate/assets/theme";
import themeRTL from "src/love/iTemplate/assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "src/love/iTemplate/assets/theme-dark";
import themeDarkRTL from "src/love/iTemplate/assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "src/love/iTemplate/routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "src/love/iTemplate/context";

// Images
import brandWhite from "src/love/iTemplate/assets/images/logo-ct.png";
import brandDark from "src/love/iTemplate/assets/images/logo-ct-dark.png";

import React, { useEffect, useMemo, useState } from 'react';
import { Action } from 'src/love/aLayout/aGlobalLayout/extra/State';

import { Helmet } from 'react-helmet-async';

// Layout
import GlobalLayout from 'src/love/aLayout/aGlobalLayout';
import UnprotectedLayout from 'src/love/aLayout/bUnprotectedLayout';
import ProtectedLayout from 'src/love/aLayout/cProtectedLayout';
import AuthenticatedLayout from 'src/love/aLayout/dAuthenticatedLayout';
import AuthorisedLayout from 'src/love/aLayout/eAuthorisedLayout';
import TopbarLayout from 'src/love/aLayout/fTopbarLayout';
import SidebarLayout from 'src/love/aLayout/gSidebarLayout';

// Unprotected Page
import HomePage from 'src/love/aPage/bUnprotectedPage/aHomePage';

// Protected Page
// Authenticated Page
import LoginPage from 'src/love/aPage/dAuthenticatedPage/aLoginPage';
import RegisterPage from 'src/love/aPage/dAuthenticatedPage/bRegisterPage';
import ForgotPasswordPage from 'src/love/aPage/dAuthenticatedPage/cForgotPasswordPage';
import ResetPasswordPage from 'src/love/aPage/dAuthenticatedPage/dResetPasswordPage';

// Authorised Page
// Topbar Page
import ProfileRetrievePage from 'src/love/aPage/fTopbarPage/aProfileReteivePage';
import ProfileUpdatePage from 'src/love/aPage/fTopbarPage/bProfileUpdatePage';
import ProfilePasswordUpdatePage from 'src/love/aPage/fTopbarPage/cProfilePasswordUpdatePage';
import ProfileDeletePage from 'src/love/aPage/fTopbarPage/dProfileDeletePage';

// Sidebar Page
// Base Page
import BaseListPage from 'src/love/aPage/gSidebarPage/aSettingPage/aBasePage/aListPage';
import BaseCreatePage from 'src/love/aPage/gSidebarPage/aSettingPage/aBasePage/bCreatePage';
import BaseRetrievePage from 'src/love/aPage/gSidebarPage/aSettingPage/aBasePage/cRetrievePage';
import BaseUpdatePage from 'src/love/aPage/gSidebarPage/aSettingPage/aBasePage/dUpdatePage';
import BaseDeletePage from 'src/love/aPage/gSidebarPage/aSettingPage/aBasePage/eDeletePage';

// User Page
import UserListPage from 'src/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/aListPage';
import UserCreatePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/bCreatePage';
import UserRetrievePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/cRetrievePage';
import UserUpdatePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/dUpdatePage';
import UserDeletePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/eDeletePage';

// Role Page
import RoleListPage from 'src/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/aListPage';
import RoleCreatePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/bCreatePage';
import RoleRetrievePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/cRetrievePage';
import RoleUpdatePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/dUpdatePage';
import RoleDeletePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/eDeletePage';

// Menu Page
import MenuListPage from 'src/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/aListPage';
import MenuCreatePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/bCreatePage';
import MenuRetrievePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/cRetrievePage';
import MenuUpdatePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/dUpdatePage';
import MenuDeletePage from 'src/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/eDeletePage';

// Acrux Page
import HeroListPage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/aListPage';
import HeroCreatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/bCreatePage';
import HeroRetrievePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/cRetrievePage';
import HeroUpdatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/dUpdatePage';
import HeroDeletePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/eDeletePage';

import CounterListPage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/aListPage';
import CounterCreatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/bCreatePage';
import CounterRetrievePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/cRetrievePage';
import CounterUpdatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/dUpdatePage';
import CounterDeletePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/eDeletePage';

import ProgramSectionListPage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/aListPage';
import ProgramSectionCreatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/bCreatePage';
import ProgramSectionRetrievePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/cRetrievePage';
import ProgramSectionUpdatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/dUpdatePage';
import ProgramSectionDeletePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/eDeletePage';

import ProgramListPage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/aListPage';
import ProgramCreatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/bCreatePage';
import ProgramRetrievePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/cRetrievePage';
import ProgramUpdatePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/dUpdatePage';
import ProgramDeletePage1 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/eDeletePage';

// Pinwheel Page
import HeroListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/aListPage';
import HeroCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/bCreatePage';
import HeroRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/cRetrievePage';
import HeroUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/dUpdatePage';
import HeroDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/eDeletePage';

import CounterListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/aListPage';
import CounterCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/bCreatePage';
import CounterRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/cRetrievePage';
import CounterUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/dUpdatePage';
import CounterDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/eDeletePage';

import AboutListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/aListPage';
import AboutCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/bCreatePage';
import AboutRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/cRetrievePage';
import AboutUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/dUpdatePage';
import AboutDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/eDeletePage';

import ServiceListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/aListPage';
import ServiceCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/bCreatePage';
import ServiceRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/cRetrievePage';
import ServiceUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/dUpdatePage';
import ServiceDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/eDeletePage';

import BranchListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/aListPage';
import BranchCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/bCreatePage';
import BranchRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/cRetrievePage';
import BranchUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/dUpdatePage';
import BranchDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/eDeletePage';

import SubBranchListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/aListPage';
import SubBranchCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/bCreatePage';
import SubBranchRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/cRetrievePage';
import SubBranchUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/dUpdatePage';
import SubBranchDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/eDeletePage';

import SubSubBranchListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/aListPage';
import SubSubBranchCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/bCreatePage';
import SubSubBranchRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/cRetrievePage';
import SubSubBranchUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/dUpdatePage';
import SubSubBranchDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/eDeletePage';

import ProjectSectionListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/aListPage';
import ProjectSectionCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/bCreatePage';
import ProjectSectionRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/cRetrievePage';
import ProjectSectionUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/dUpdatePage';
import ProjectSectionDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/eDeletePage';

import ProjectGroupListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/aListPage';
import ProjectGroupCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/bCreatePage';
import ProjectGroupRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/cRetrievePage';
import ProjectGroupUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/dUpdatePage';
import ProjectGroupDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/eDeletePage';

import ProjectListPage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/aListPage';
import ProjectCreatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/bCreatePage';
import ProjectRetrievePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/cRetrievePage';
import ProjectUpdatePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/dUpdatePage';
import ProjectDeletePage2 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/eDeletePage';

// Techfolio Page
import HeroListPage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/aListPage';
import HeroCreatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/bCreatePage';
import HeroRetrievePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/cRetrievePage';
import HeroUpdatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/dUpdatePage';
import HeroDeletePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/eDeletePage';

import CounterListPage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/aListPage';
import CounterCreatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/bCreatePage';
import CounterRetrievePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/cRetrievePage';
import CounterUpdatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/dUpdatePage';
import CounterDeletePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/eDeletePage';

import ProgramSectionListPage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/aListPage';
import ProgramSectionCreatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/bCreatePage';
import ProgramSectionRetrievePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/cRetrievePage';
import ProgramSectionUpdatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/dUpdatePage';
import ProgramSectionDeletePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/eDeletePage';

import ProgramListPage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/aListPage';
import ProgramCreatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/bCreatePage';
import ProgramRetrievePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/cRetrievePage';
import ProgramUpdatePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/dUpdatePage';
import ProgramDeletePage3 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/eDeletePage';

// Portfolio
import HeroListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/aListPage';
import HeroCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/bCreatePage';
import HeroRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/cRetrievePage';
import HeroUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/dUpdatePage';
import HeroDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/eDeletePage';

import AboutListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/aListPage';
import AboutCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/bCreatePage';
import AboutRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/cRetrievePage';
import AboutUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/dUpdatePage';
import AboutDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/eDeletePage';

import ExperienceListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/aListPage';
import ExperienceCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/bCreatePage';
import ExperienceRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/cRetrievePage';
import ExperienceUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/dUpdatePage';
import ExperienceDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/eDeletePage';

import ServiceListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/aListPage';
import ServiceCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/bCreatePage';
import ServiceRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/cRetrievePage';
import ServiceUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/dUpdatePage';
import ServiceDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/eDeletePage';

import PortfolioListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/aListPage';
import PortfolioCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/bCreatePage';
import PortfolioRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/cRetrievePage';
import PortfolioUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/dUpdatePage';
import PortfolioDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/eDeletePage';

import PortfolioCardListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/aListPage';
import PortfolioCardCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/bCreatePage';
import PortfolioCardRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/cRetrievePage';
import PortfolioCardUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/dUpdatePage';
import PortfolioCardDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/eDeletePage';

import EventListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/aListPage';
import EventCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/bCreatePage';
import EventRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/cRetrievePage';
import EventUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/dUpdatePage';
import EventDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/eDeletePage';

import EventCardListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/aListPage';
import EventCardCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/bCreatePage';
import EventCardRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/cRetrievePage';
import EventCardUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/dUpdatePage';
import EventCardDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/eDeletePage';

import BlogListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/aListPage';
import BlogCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/bCreatePage';
import BlogRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/cRetrievePage';
import BlogUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/dUpdatePage';
import BlogDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/eDeletePage';

import BlogCardListPage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/aListPage';
import BlogCardCreatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/bCreatePage';
import BlogCardRetrievePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/cRetrievePage';
import BlogCardUpdatePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/dUpdatePage';
import BlogCardDeletePage4 from 'src/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/eDeletePage';




function App() {
  // Variable
  let helmet = (
    import.meta.env.VITE_APPLICATION === "BeehiveApplication" ? (
      <Helmet>
        <title>Beehive Corporation - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Beehive/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "AndromedaApplication" ? (
      <Helmet>
        <title>Andromeda Organisation - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Andromeda/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "PinwheelApplication" ? (
      <Helmet>
        <title>Pinwheel Organisation - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Pinwheel/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? (
      <Helmet>
        <title>Tadpole Organisation - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Tadpole/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "AcruxApplication" ? (
      <Helmet>
        <title>Acrux Enterprise - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Acrux/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "AnserApplication" ? (
      <Helmet>
        <title>Anser Enterprise - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Anser/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "AquilaApplication" ? (
      <Helmet>
        <title>Aquila Enterprise - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Aquila/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "BellatrixApplication" ? (
      <Helmet>
        <title>Bellatrix Enterprise - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Bellatrix/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "CapellaApplication" ? (
      <Helmet>
        <title>Capella Enterprise - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Capella/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "ArionApplication" ? (
      <Helmet>
        <title>Arion - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Arion/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "AnkasApplication" ? (
      <Helmet>
        <title>Ankas - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Ankas/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "AbolApplication" ? (
      <Helmet>
        <title>Abol - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Abol/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? (
      <Helmet>
        <title>Techfolio Firm - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Techfolio/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ? (
      <Helmet>
        <title>Apurv Chatur - Admin by Arion</title>
        <link rel="icon" href="./public/Business/ApurvChatur/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ? (
      <Helmet>
        <title>Anushree Mandape - Admin by Arion</title>
        <link rel="icon" href="./public/Business/AnushreeMandape/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? (
      <Helmet>
        <title>Sofie Berkin - Admin by Arion</title>
        <link rel="icon" href="./public/Business/SofieBerkin/favicon_io/favicon.ico" />
      </Helmet>
    ) : (
      <Helmet>
        <title>You are lost in environment...</title>
      </Helmet>
    )
  )
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.GlobalLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  // jkjh
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  // JSX
  return (
    <React.Fragment>
      { helmet }
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}

        <Routes>
          {/* {getRoutes(routes)} */}

          <Route element={<GlobalLayout ReduxUltimate={Redux} />} >
            <Route element={<UnprotectedLayout ReduxUltimate={Redux} />} >
              <Route path={RouteName.GlobalRoute.HomeRoute} element={<HomePage ReduxUltimate={Redux} />} />
            </Route>

            <Route element={<ProtectedLayout ReduxUltimate={Redux} />} >
              <Route element={<AuthenticatedLayout ReduxUltimate={Redux} />} >
                <Route path={RouteName.AuthRoute.LoginRoute} element={<LoginPage ReduxUltimate={Redux} />} />
                <Route path={RouteName.AuthRoute.RegisterRoute} element={<RegisterPage ReduxUltimate={Redux} />} />
                <Route path={RouteName.AuthRoute.ForgotPasswordRoute} element={<ForgotPasswordPage ReduxUltimate={Redux} />} />
                <Route path={`${RouteName.AuthRoute.ResetPasswordRoute}/:token`} element={<ResetPasswordPage ReduxUltimate={Redux} />} />
              </Route>

              <Route element={<AuthorisedLayout ReduxUltimate={Redux} />} >
                <Route element={<TopbarLayout ReduxUltimate={Redux} />} >
                  <Route path={RouteName.ContentRoute.TopbarRoute.ProfileRetrieveRoute} element={<ProfileRetrievePage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute} element={<ProfileUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute} element={<ProfilePasswordUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute} element={<ProfileDeletePage ReduxUltimate={Redux} />} />
                </Route>

                <Route element={<SidebarLayout ReduxUltimate={Redux} />} >
                  <Route path={RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute} element={<BaseListPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.CreateRoute} element={<BaseCreatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.RetrieveRoute}/:id`} element={<BaseRetrievePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.UpdateRoute}/:id`} element={<BaseUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.DeleteRoute}/:id`} element={<BaseDeletePage ReduxUltimate={Redux} />} />

                  <Route path={RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute} element={<UserListPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.CreateRoute} element={<UserCreatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.RetrieveRoute}/:id`} element={<UserRetrievePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.UpdateRoute}/:id`} element={<UserUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.DeleteRoute}/:id`} element={<UserDeletePage ReduxUltimate={Redux} />} />

                  <Route path={RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.ListRoute} element={<RoleListPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.CreateRoute} element={<RoleCreatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.RetrieveRoute}/:id`} element={<RoleRetrievePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.UpdateRoute}/:id`} element={<RoleUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.DeleteRoute}/:id`} element={<RoleDeletePage ReduxUltimate={Redux} />} />

                  <Route path={RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.ListRoute} element={<MenuListPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.CreateRoute} element={<MenuCreatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.RetrieveRoute}/:id`} element={<MenuRetrievePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.UpdateRoute}/:id`} element={<MenuUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.DeleteRoute}/:id`} element={<MenuDeletePage ReduxUltimate={Redux} />} />

                  {import.meta.env.VITE_CORPORATION === "BeehiveCorporation" ? (
                    import.meta.env.VITE_ORGANISATION === "AndromedaOrganisation" ? (
                      import.meta.env.VITE_ENTERPRISE === "AcruxEnterprise" ? (
                        import.meta.env.VITE_APPLICATION === "ArionApplication" || 
                        import.meta.env.VITE_APPLICATION === "AnkasApplication" || 
                        import.meta.env.VITE_APPLICATION === "AbolApplication" ? (
                          <React.Fragment>
                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage1 ReduxUltimate={Redux} />} />
                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage1 ReduxUltimate={Redux} />} />

                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage1 ReduxUltimate={Redux} />} />
                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage1 ReduxUltimate={Redux} />} />

                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute} element={<ProgramSectionListPage1 ReduxUltimate={Redux} />} />
                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.CreateRoute} element={<ProgramSectionCreatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.RetrieveRoute}/:id`} element={<ProgramSectionRetrievePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.UpdateRoute}/:id`} element={<ProgramSectionUpdatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.DeleteRoute}/:id`} element={<ProgramSectionDeletePage1 ReduxUltimate={Redux} />} />

                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute} element={<ProgramListPage1 ReduxUltimate={Redux} />} />
                            <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.CreateRoute} element={<ProgramCreatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.RetrieveRoute}/:id`} element={<ProgramRetrievePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.UpdateRoute}/:id`} element={<ProgramUpdatePage1 ReduxUltimate={Redux} />} />
                            <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.DeleteRoute}/:id`} element={<ProgramDeletePage1 ReduxUltimate={Redux} />} />
                          </React.Fragment>
                        ) : null
                      ) :
                      import.meta.env.VITE_ENTERPRISE === "AnserEnterprise" ? ({}) : null
                    ) :
                    import.meta.env.VITE_ORGANISATION === "PinwheelOrganisation" ? (
                      import.meta.env.VITE_APPLICATION === "BeehiveApplication" ||
                      import.meta.env.VITE_APPLICATION === "AndromedaApplication" ||
                      import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? (
                        <React.Fragment>
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute} element={<AboutListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute} element={<AboutCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}/:id`} element={<AboutRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}/:id`} element={<AboutUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}/:id`} element={<AboutDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute} element={<ServiceListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute} element={<ServiceCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}/:id`} element={<ServiceRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}/:id`} element={<ServiceUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}/:id`} element={<ServiceDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.ListRoute} element={<BranchListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.CreateRoute} element={<BranchCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.RetrieveRoute}/:id`} element={<BranchRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.UpdateRoute}/:id`} element={<BranchUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.DeleteRoute}/:id`} element={<BranchDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.ListRoute} element={<SubBranchListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.CreateRoute} element={<SubBranchCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.RetrieveRoute}/:id`} element={<SubBranchRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.UpdateRoute}/:id`} element={<SubBranchUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.DeleteRoute}/:id`} element={<SubBranchDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.ListRoute} element={<SubSubBranchListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.CreateRoute} element={<SubSubBranchCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.RetrieveRoute}/:id`} element={<SubSubBranchRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.UpdateRoute}/:id`} element={<SubSubBranchUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.DeleteRoute}/:id`} element={<SubSubBranchDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute} element={<ProjectSectionListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.CreateRoute} element={<ProjectSectionCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.RetrieveRoute}/:id`} element={<ProjectSectionRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}/:id`} element={<ProjectSectionUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}/:id`} element={<ProjectSectionDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute} element={<ProjectGroupListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.CreateRoute} element={<ProjectGroupCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.RetrieveRoute}/:id`} element={<ProjectGroupRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.UpdateRoute}/:id`} element={<ProjectGroupUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.DeleteRoute}/:id`} element={<ProjectGroupDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute} element={<ProjectListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.CreateRoute} element={<ProjectCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.RetrieveRoute}/:id`} element={<ProjectRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.UpdateRoute}/:id`} element={<ProjectUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.DeleteRoute}/:id`} element={<ProjectDeletePage2 ReduxUltimate={Redux} />} />
                      
                        </React.Fragment>
                      ) :
                      import.meta.env.VITE_APPLICATION === "PinwheelApplication" ||
                      import.meta.env.VITE_APPLICATION === "AcruxApplication" ||
                      import.meta.env.VITE_APPLICATION === "AnserApplication" ||
                      import.meta.env.VITE_APPLICATION === "AquilaApplication" ||
                      import.meta.env.VITE_APPLICATION === "BellatrixApplication" ||
                      import.meta.env.VITE_APPLICATION === "CapellaApplication" ? (
                        <React.Fragment>
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute} element={<AboutListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute} element={<AboutCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}/:id`} element={<AboutRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}/:id`} element={<AboutUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}/:id`} element={<AboutDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute} element={<ServiceListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute} element={<ServiceCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}/:id`} element={<ServiceRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}/:id`} element={<ServiceUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}/:id`} element={<ServiceDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute} element={<ProjectSectionListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.CreateRoute} element={<ProjectSectionCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.RetrieveRoute}/:id`} element={<ProjectSectionRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}/:id`} element={<ProjectSectionUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}/:id`} element={<ProjectSectionDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute} element={<ProjectGroupListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.CreateRoute} element={<ProjectGroupCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.RetrieveRoute}/:id`} element={<ProjectGroupRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.UpdateRoute}/:id`} element={<ProjectGroupUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.DeleteRoute}/:id`} element={<ProjectGroupDeletePage2 ReduxUltimate={Redux} />} />

                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute} element={<ProjectListPage2 ReduxUltimate={Redux} />} />
                          <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.CreateRoute} element={<ProjectCreatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.RetrieveRoute}/:id`} element={<ProjectRetrievePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.UpdateRoute}/:id`} element={<ProjectUpdatePage2 ReduxUltimate={Redux} />} />
                          <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.DeleteRoute}/:id`} element={<ProjectDeletePage2 ReduxUltimate={Redux} />} />
                      
                        </React.Fragment>
                      ) : null
                    ) :
                    import.meta.env.VITE_ORGANISATION === "TadpoleOrganisation" ? (
                      import.meta.env.VITE_ENTERPRISE === "AquilaEnterprise" ? ({}) :
                      import.meta.env.VITE_ENTERPRISE === "BellatrixEnterprise" ? (
                        import.meta.env.VITE_FIRM === "TechfolioFirm" ? (
                          import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? (
                            <React.Fragment>
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage3 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage3 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage3 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage3 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute} element={<ProgramSectionListPage3 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.CreateRoute} element={<ProgramSectionCreatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.RetrieveRoute}/:id`} element={<ProgramSectionRetrievePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.UpdateRoute}/:id`} element={<ProgramSectionUpdatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.DeleteRoute}/:id`} element={<ProgramSectionDeletePage3 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute} element={<ProgramListPage3 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.CreateRoute} element={<ProgramCreatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.RetrieveRoute}/:id`} element={<ProgramRetrievePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.UpdateRoute}/:id`} element={<ProgramUpdatePage3 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.DeleteRoute}/:id`} element={<ProgramDeletePage3 ReduxUltimate={Redux} />} />
                            </React.Fragment>
                          ) :
                          import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ||
                          import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ||
                          import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? ( 
                            <React.Fragment>
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute} element={<AboutListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute} element={<AboutCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}/:id`} element={<AboutRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}/:id`} element={<AboutUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}/:id`} element={<AboutDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.ListRoute} element={<ExperienceListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.CreateRoute} element={<ExperienceCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.RetrieveRoute}/:id`} element={<ExperienceRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.UpdateRoute}/:id`} element={<ExperienceUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.DeleteRoute}/:id`} element={<ExperienceDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute} element={<ServiceListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute} element={<ServiceCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}/:id`} element={<ServiceRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}/:id`} element={<ServiceUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}/:id`} element={<ServiceDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.ListRoute} element={<PortfolioListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.CreateRoute} element={<PortfolioCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.RetrieveRoute}/:id`} element={<PortfolioRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.UpdateRoute}/:id`} element={<PortfolioUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.DeleteRoute}/:id`} element={<PortfolioDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.ListRoute} element={<PortfolioCardListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.CreateRoute} element={<PortfolioCardCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.RetrieveRoute}/:id`} element={<PortfolioCardRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.UpdateRoute}/:id`} element={<PortfolioCardUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.DeleteRoute}/:id`} element={<PortfolioCardDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.ListRoute} element={<EventListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.CreateRoute} element={<EventCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.RetrieveRoute}/:id`} element={<EventRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.UpdateRoute}/:id`} element={<EventUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.DeleteRoute}/:id`} element={<EventDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.ListRoute} element={<EventCardListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.CreateRoute} element={<EventCardCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.RetrieveRoute}/:id`} element={<EventCardRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.UpdateRoute}/:id`} element={<EventCardUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.DeleteRoute}/:id`} element={<EventCardDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.ListRoute} element={<BlogListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.CreateRoute} element={<BlogCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.RetrieveRoute}/:id`} element={<BlogRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.UpdateRoute}/:id`} element={<BlogUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.DeleteRoute}/:id`} element={<BlogDeletePage4 ReduxUltimate={Redux} />} />
                            
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.ListRoute} element={<BlogCardListPage4 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.CreateRoute} element={<BlogCardCreatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.RetrieveRoute}/:id`} element={<BlogCardRetrievePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.UpdateRoute}/:id`} element={<BlogCardUpdatePage4 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.DeleteRoute}/:id`} element={<BlogCardDeletePage4 ReduxUltimate={Redux} />} />
                            
                            </React.Fragment>
                          ) : null
                        ) : null
                      ) :
                      import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
                    ) : null
                  ) : null }

                </Route>
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
