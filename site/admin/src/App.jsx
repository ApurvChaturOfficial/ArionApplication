import { Routes, Route, Navigate, useLocation, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RouteName from "@/love/gRoute/RouteName";
import React, { useEffect, useMemo, useState, Suspense } from 'react';
import { Action } from '@/love/aLayout/aGlobalLayout/extra/State';
import { Helmet } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster"
import Loader from '@/love/aComponent/aGlobalComponent/component/aLoader';

// Layout
const GlobalLayout = React.lazy(() => import('@/love/aLayout/aGlobalLayout'));
const UnprotectedLayout = React.lazy(() => import('@/love/aLayout/bUnprotectedLayout'));
const ProtectedLayout = React.lazy(() => import('@/love/aLayout/cProtectedLayout'));
const AuthenticatedLayout = React.lazy(() => import('@/love/aLayout/dAuthenticatedLayout'));
const AuthorisedLayout = React.lazy(() => import('@/love/aLayout/eAuthorisedLayout'));
const TopbarLayout = React.lazy(() => import('@/love/aLayout/fTopbarLayout'));
const SidebarLayout = React.lazy(() => import('@/love/aLayout/gSidebarLayout'));

// Unprotected Page
const HomePage = React.lazy(() => import('@/love/aPage/bUnprotectedPage/aHomePage'));

// Protected Page
// Authenticated Page
const LoginPage = React.lazy(() => import('@/love/aPage/dAuthenticatedPage/aLoginPage'));
const RegisterPage = React.lazy(() => import('@/love/aPage/dAuthenticatedPage/bRegisterPage'));
const ForgotPasswordPage = React.lazy(() => import('@/love/aPage/dAuthenticatedPage/cForgotPasswordPage'));
const ResetPasswordPage = React.lazy(() => import('@/love/aPage/dAuthenticatedPage/dResetPasswordPage'));

// Authorised Page
// Topbar Page
const ProfileRetrievePage = React.lazy(() => import('@/love/aPage/fTopbarPage/aProfileReteivePage'));
const ProfileUpdatePage = React.lazy(() => import('@/love/aPage/fTopbarPage/bProfileUpdatePage'));
const ProfilePasswordUpdatePage = React.lazy(() => import('@/love/aPage/fTopbarPage/cProfilePasswordUpdatePage'));
const ProfileDeletePage = React.lazy(() => import('@/love/aPage/fTopbarPage/dProfileDeletePage'));

// Sidebar Page
// Base Page
const BaseListPage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/aBasePage/aListPage'));
const BaseCreatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/aBasePage/bCreatePage'));
const BaseRetrievePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/aBasePage/cRetrievePage'));
const BaseUpdatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/aBasePage/dUpdatePage'));
const BaseDeletePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/aBasePage/eDeletePage'));

// Admin Hero
const AdminHeroListPage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/bAdminHeroPage/aListPage'));
const AdminHeroCreatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/bAdminHeroPage/bCreatePage'));
const AdminHeroRetrievePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/bAdminHeroPage/cRetrievePage'));
const AdminHeroUpdatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/bAdminHeroPage/dUpdatePage'));
const AdminHeroDeletePage = React.lazy(() => import('@/love/aPage/gSidebarPage/aSettingPage/bAdminHeroPage/eDeletePage'));

// User Page
const UserListPage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/aListPage'));
const UserCreatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/bCreatePage'));
const UserRetrievePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/cRetrievePage'));
const UserUpdatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/dUpdatePage'));
const UserDeletePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/aUserPage/eDeletePage'));

// Role Page
const RoleListPage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/aListPage'));
const RoleCreatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/bCreatePage'));
const RoleRetrievePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/cRetrievePage'));
const RoleUpdatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/dUpdatePage'));
const RoleDeletePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/bRolePage/eDeletePage'));

// Menu Page
const MenuListPage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/aListPage'));
const MenuCreatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/bCreatePage'));
const MenuRetrievePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/cRetrievePage'));
const MenuUpdatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/dUpdatePage'));
const MenuDeletePage = React.lazy(() => import('@/love/aPage/gSidebarPage/bAdministrationPage/cMenuPage/eDeletePage'));

// Static Data Page
const StaticDataListPage = React.lazy(() => import('@/love/aPage/gSidebarPage/dAssetPage/aStaticDataPage/aListPage'));
const StaticDataCreatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/dAssetPage/aStaticDataPage/bCreatePage'));
const StaticDataRetrievePage = React.lazy(() => import('@/love/aPage/gSidebarPage/dAssetPage/aStaticDataPage/cRetrievePage'));
const StaticDataUpdatePage = React.lazy(() => import('@/love/aPage/gSidebarPage/dAssetPage/aStaticDataPage/dUpdatePage'));
const StaticDataDeletePage = React.lazy(() => import('@/love/aPage/gSidebarPage/dAssetPage/aStaticDataPage/eDeletePage'));

// Acrux Page
const HeroListPage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/aListPage'));
const HeroCreatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/eDeletePage'));

const CounterListPage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/aListPage'));
const CounterCreatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/bCreatePage'));
const CounterRetrievePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/cRetrievePage'));
const CounterUpdatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/dUpdatePage'));
const CounterDeletePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/eDeletePage'));

const ProgramSectionListPage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/aListPage'));
const ProgramSectionCreatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/bCreatePage'));
const ProgramSectionRetrievePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/cRetrievePage'));
const ProgramSectionUpdatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/dUpdatePage'));
const ProgramSectionDeletePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/eDeletePage'));

const ProgramListPage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/aListPage'));
const ProgramCreatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/bCreatePage'));
const ProgramRetrievePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/cRetrievePage'));
const ProgramUpdatePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/dUpdatePage'));
const ProgramDeletePage1 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/eDeletePage'));

// Pinwheel Page
const HeroListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/aListPage'));
const HeroCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/eDeletePage'));

const CounterListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/aListPage'));
const CounterCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/bCreatePage'));
const CounterRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/cRetrievePage'));
const CounterUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/dUpdatePage'));
const CounterDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/eDeletePage'));

const AboutListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/aListPage'));
const AboutCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/bCreatePage'));
const AboutRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/cRetrievePage'));
const AboutUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/dUpdatePage'));
const AboutDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/eDeletePage'));

const ServiceListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/aListPage'));
const ServiceCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/bCreatePage'));
const ServiceRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/cRetrievePage'));
const ServiceUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/dUpdatePage'));
const ServiceDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/eDeletePage'));

const BranchListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/aListPage'));
const BranchCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/bCreatePage'));
const BranchRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/cRetrievePage'));
const BranchUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/dUpdatePage'));
const BranchDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/eDeletePage'));

const SubBranchListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/aListPage'));
const SubBranchCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/bCreatePage'));
const SubBranchRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/cRetrievePage'));
const SubBranchUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/dUpdatePage'));
const SubBranchDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/eDeletePage'));

const SubSubBranchListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/aListPage'));
const SubSubBranchCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/bCreatePage'));
const SubSubBranchRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/cRetrievePage'));
const SubSubBranchUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/dUpdatePage'));
const SubSubBranchDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/eDeletePage'));

const ProjectSectionListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/aListPage'));
const ProjectSectionCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/bCreatePage'));
const ProjectSectionRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/cRetrievePage'));
const ProjectSectionUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/dUpdatePage'));
const ProjectSectionDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/eDeletePage'));

const ProjectGroupListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/aListPage'));
const ProjectGroupCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/bCreatePage'));
const ProjectGroupRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/cRetrievePage'));
const ProjectGroupUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/dUpdatePage'));
const ProjectGroupDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/eDeletePage'));

const ProjectListPage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/aListPage'));
const ProjectCreatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/bCreatePage'));
const ProjectRetrievePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/cRetrievePage'));
const ProjectUpdatePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/dUpdatePage'));
const ProjectDeletePage2 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/eDeletePage'));

// Techfolio Page
const HeroListPage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/aListPage'));
const HeroCreatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/eDeletePage'));

const CounterListPage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/aListPage'));
const CounterCreatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/bCreatePage'));
const CounterRetrievePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/cRetrievePage'));
const CounterUpdatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/dUpdatePage'));
const CounterDeletePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/eDeletePage'));

const ProgramSectionListPage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/aListPage'));
const ProgramSectionCreatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/bCreatePage'));
const ProgramSectionRetrievePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/cRetrievePage'));
const ProgramSectionUpdatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/dUpdatePage'));
const ProgramSectionDeletePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/eDeletePage'));

const ProgramListPage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/aListPage'));
const ProgramCreatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/bCreatePage'));
const ProgramRetrievePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/cRetrievePage'));
const ProgramUpdatePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/dUpdatePage'));
const ProgramDeletePage3 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/eDeletePage'));

// Portfolio
const HeroListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/aListPage'));
const HeroCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/eDeletePage'));

const AboutListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/aListPage'));
const AboutCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/bCreatePage'));
const AboutRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/cRetrievePage'));
const AboutUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/dUpdatePage'));
const AboutDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/eDeletePage'));

const ExperienceListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/aListPage'));
const ExperienceCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/bCreatePage'));
const ExperienceRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/cRetrievePage'));
const ExperienceUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/dUpdatePage'));
const ExperienceDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/eDeletePage'));

const ServiceListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/aListPage'));
const ServiceCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/bCreatePage'));
const ServiceRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/cRetrievePage'));
const ServiceUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/dUpdatePage'));
const ServiceDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/eDeletePage'));

const PortfolioListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/aListPage'));
const PortfolioCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/bCreatePage'));
const PortfolioRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/cRetrievePage'));
const PortfolioUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/dUpdatePage'));
const PortfolioDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/eDeletePage'));

const PortfolioCardListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/aListPage'));
const PortfolioCardCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/bCreatePage'));
const PortfolioCardRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/cRetrievePage'));
const PortfolioCardUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/dUpdatePage'));
const PortfolioCardDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/eDeletePage'));

const EventListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/aListPage'));
const EventCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/bCreatePage'));
const EventRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/cRetrievePage'));
const EventUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/dUpdatePage'));
const EventDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/eDeletePage'));

const EventCardListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/aListPage'));
const EventCardCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/bCreatePage'));
const EventCardRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/cRetrievePage'));
const EventCardUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/dUpdatePage'));
const EventCardDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/eDeletePage'));

const BlogListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/aListPage'));
const BlogCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/bCreatePage'));
const BlogRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/cRetrievePage'));
const BlogUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/dUpdatePage'));
const BlogDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/eDeletePage'));

const BlogCardListPage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/aListPage'));
const BlogCardCreatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/bCreatePage'));
const BlogCardRetrievePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/cRetrievePage'));
const BlogCardUpdatePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/dUpdatePage'));
const BlogCardDeletePage4 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/eDeletePage'));

// Blogify Page
const HeroListPage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/aListPage'));
const HeroCreatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/eDeletePage'));

const CounterListPage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/aListPage'));
const CounterCreatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/bCreatePage'));
const CounterRetrievePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/cRetrievePage'));
const CounterUpdatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/dUpdatePage'));
const CounterDeletePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/eDeletePage'));

const ProgramSectionListPage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/aListPage'));
const ProgramSectionCreatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/bCreatePage'));
const ProgramSectionRetrievePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/cRetrievePage'));
const ProgramSectionUpdatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/dUpdatePage'));
const ProgramSectionDeletePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/eDeletePage'));

const ProgramListPage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/aListPage'));
const ProgramCreatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/bCreatePage'));
const ProgramRetrievePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/cRetrievePage'));
const ProgramUpdatePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/dUpdatePage'));
const ProgramDeletePage5 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/eDeletePage'));

// Srimad Bhagwatam
const HeroListPage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/aListPage'));
const HeroCreatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/eDeletePage'));

const CounterListPage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/aListPage'));
const CounterCreatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/bCreatePage'));
const CounterRetrievePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/cRetrievePage'));
const CounterUpdatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/dUpdatePage'));
const CounterDeletePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/eDeletePage'));

const AboutListPage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/aListPage'));
const AboutCreatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/bCreatePage'));
const AboutRetrievePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/cRetrievePage'));
const AboutUpdatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/dUpdatePage'));
const AboutDeletePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/eDeletePage'));

const ServiceListPage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/aListPage'));
const ServiceCreatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/bCreatePage'));
const ServiceRetrievePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/cRetrievePage'));
const ServiceUpdatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/dUpdatePage'));
const ServiceDeletePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/eDeletePage'));

const ProjectSectionListPage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/aListPage'));
const ProjectSectionCreatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/bCreatePage'));
const ProjectSectionRetrievePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/cRetrievePage'));
const ProjectSectionUpdatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/dUpdatePage'));
const ProjectSectionDeletePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/eDeletePage'));

const ProjectGroupListPage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/aListPage'));
const ProjectGroupCreatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/bCreatePage'));
const ProjectGroupRetrievePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/cRetrievePage'));
const ProjectGroupUpdatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/dUpdatePage'));
const ProjectGroupDeletePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/eDeletePage'));

const ProjectListPage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/aListPage'));
const ProjectCreatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/bCreatePage'));
const ProjectRetrievePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/cRetrievePage'));
const ProjectUpdatePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/dUpdatePage'));
const ProjectDeletePage6 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/eDeletePage'));

// Bhagwad Gita
const HeroListPage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/aListPage'));
const HeroCreatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/eDeletePage'));

const CounterListPage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/aListPage'));
const CounterCreatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/bCreatePage'));
const CounterRetrievePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/cRetrievePage'));
const CounterUpdatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/dUpdatePage'));
const CounterDeletePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/eDeletePage'));

const AboutListPage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/aListPage'));
const AboutCreatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/bCreatePage'));
const AboutRetrievePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/cRetrievePage'));
const AboutUpdatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/dUpdatePage'));
const AboutDeletePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/eDeletePage'));

const ServiceListPage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/aListPage'));
const ServiceCreatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/bCreatePage'));
const ServiceRetrievePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/cRetrievePage'));
const ServiceUpdatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/dUpdatePage'));
const ServiceDeletePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/eDeletePage'));

const ProjectSectionListPage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/aListPage'));
const ProjectSectionCreatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/bCreatePage'));
const ProjectSectionRetrievePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/cRetrievePage'));
const ProjectSectionUpdatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/dUpdatePage'));
const ProjectSectionDeletePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/eDeletePage'));

const ProjectGroupListPage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/aListPage'));
const ProjectGroupCreatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/bCreatePage'));
const ProjectGroupRetrievePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/cRetrievePage'));
const ProjectGroupUpdatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/dUpdatePage'));
const ProjectGroupDeletePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/eDeletePage'));

const ProjectListPage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/aListPage'));
const ProjectCreatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/bCreatePage'));
const ProjectRetrievePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/cRetrievePage'));
const ProjectUpdatePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/dUpdatePage'));
const ProjectDeletePage7 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/eDeletePage'));

// Interview Question
const HeroListPage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/aListPage'));
const HeroCreatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/bCreatePage'));
const HeroRetrievePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/cRetrievePage'));
const HeroUpdatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/dUpdatePage'));
const HeroDeletePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/eDeletePage'));

const CounterListPage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/aListPage'));
const CounterCreatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/bCreatePage'));
const CounterRetrievePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/cRetrievePage'));
const CounterUpdatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/dUpdatePage'));
const CounterDeletePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/eDeletePage'));

const AboutListPage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/aListPage'));
const AboutCreatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/bCreatePage'));
const AboutRetrievePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/cRetrievePage'));
const AboutUpdatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/dUpdatePage'));
const AboutDeletePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/eDeletePage'));

const ServiceListPage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/aListPage'));
const ServiceCreatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/bCreatePage'));
const ServiceRetrievePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/cRetrievePage'));
const ServiceUpdatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/dUpdatePage'));
const ServiceDeletePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/eDeletePage'));

const ProjectSectionListPage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/aListPage'));
const ProjectSectionCreatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/bCreatePage'));
const ProjectSectionRetrievePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/cRetrievePage'));
const ProjectSectionUpdatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/dUpdatePage'));
const ProjectSectionDeletePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/eDeletePage'));

const ProjectGroupListPage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/aListPage'));
const ProjectGroupCreatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/bCreatePage'));
const ProjectGroupRetrievePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/cRetrievePage'));
const ProjectGroupUpdatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/dUpdatePage'));
const ProjectGroupDeletePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/eDeletePage'));

const ProjectListPage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/aListPage'));
const ProjectCreatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/bCreatePage'));
const ProjectRetrievePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/cRetrievePage'));
const ProjectUpdatePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/dUpdatePage'));
const ProjectDeletePage8 = React.lazy(() => import('@/love/aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/eDeletePage'));





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
    import.meta.env.VITE_APPLICATION === "SwiftTalkApplication" ? (
      <Helmet>
        <title>Swift Talk - Admin by Arion</title>
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
    ) :
    import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? (
      <Helmet>
        <title>Blogify Firm - Admin by Arion</title>
        <link rel="icon" href="./public/Business/Techfolio/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ? (
      <Helmet>
        <title>Srimad Bhagwatam - Admin by Arion</title>
        <link rel="icon" href="./public/Business/ApurvChatur/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ? (
      <Helmet>
        <title>Bhagwad Gita - Admin by Arion</title>
        <link rel="icon" href="./public/Business/AnushreeMandape/favicon_io/favicon.ico" />
      </Helmet>
    ) :
    import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? (
      <Helmet>
        <title>Interview Question - Admin by Arion</title>
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

  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // JSX
  return (
    <React.Fragment>
      { helmet }
      <Toaster />

      <Suspense fallback={<Loader text="Suspense Loading..." />}>
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

                  <Route path={RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.ListRoute} element={<AdminHeroListPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.CreateRoute} element={<AdminHeroCreatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.RetrieveRoute}/:id`} element={<AdminHeroRetrievePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.UpdateRoute}/:id`} element={<AdminHeroUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.DeleteRoute}/:id`} element={<AdminHeroDeletePage ReduxUltimate={Redux} />} />

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

                  <Route path={RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.ListRoute} element={<StaticDataListPage ReduxUltimate={Redux} />} />
                  <Route path={RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.CreateRoute} element={<StaticDataCreatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.RetrieveRoute}/:id`} element={<StaticDataRetrievePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.UpdateRoute}/:id`} element={<StaticDataUpdatePage ReduxUltimate={Redux} />} />
                  <Route path={`${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.DeleteRoute}/:id`} element={<StaticDataDeletePage ReduxUltimate={Redux} />} />

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
                      import.meta.env.VITE_ENTERPRISE === "AnserEnterprise" ? (
                        import.meta.env.VITE_APPLICATION === "SwiftTalkApplication" ? (
                          <React.Fragment>
                            
                          </React.Fragment>
                        ) : null
                      ) : null
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
                        ) : 
                        import.meta.env.VITE_FIRM === "BlogifyFirm" ? (
                          import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? (
                            <React.Fragment>
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage5 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage5 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage5 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage5 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute} element={<ProgramSectionListPage5 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.CreateRoute} element={<ProgramSectionCreatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.RetrieveRoute}/:id`} element={<ProgramSectionRetrievePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.UpdateRoute}/:id`} element={<ProgramSectionUpdatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.DeleteRoute}/:id`} element={<ProgramSectionDeletePage5 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute} element={<ProgramListPage5 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.CreateRoute} element={<ProgramCreatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.RetrieveRoute}/:id`} element={<ProgramRetrievePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.UpdateRoute}/:id`} element={<ProgramUpdatePage5 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.DeleteRoute}/:id`} element={<ProgramDeletePage5 ReduxUltimate={Redux} />} />
                            </React.Fragment>
                          ) :
                          import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ? ( 
                            <React.Fragment>
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage6 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage6 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage6 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage6 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute} element={<AboutListPage6 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute} element={<AboutCreatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}/:id`} element={<AboutRetrievePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}/:id`} element={<AboutUpdatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}/:id`} element={<AboutDeletePage6 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute} element={<ServiceListPage6 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute} element={<ServiceCreatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}/:id`} element={<ServiceRetrievePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}/:id`} element={<ServiceUpdatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}/:id`} element={<ServiceDeletePage6 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute} element={<ProjectSectionListPage6 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.CreateRoute} element={<ProjectSectionCreatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.RetrieveRoute}/:id`} element={<ProjectSectionRetrievePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}/:id`} element={<ProjectSectionUpdatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}/:id`} element={<ProjectSectionDeletePage6 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute} element={<ProjectGroupListPage6 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.CreateRoute} element={<ProjectGroupCreatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.RetrieveRoute}/:id`} element={<ProjectGroupRetrievePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.UpdateRoute}/:id`} element={<ProjectGroupUpdatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.DeleteRoute}/:id`} element={<ProjectGroupDeletePage6 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute} element={<ProjectListPage6 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.CreateRoute} element={<ProjectCreatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.RetrieveRoute}/:id`} element={<ProjectRetrievePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.UpdateRoute}/:id`} element={<ProjectUpdatePage6 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.DeleteRoute}/:id`} element={<ProjectDeletePage6 ReduxUltimate={Redux} />} />
                          
                            </React.Fragment>
                          ) :
                          import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ? ( 
                            <React.Fragment>
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage7 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage7 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage7 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage7 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute} element={<AboutListPage7 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute} element={<AboutCreatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}/:id`} element={<AboutRetrievePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}/:id`} element={<AboutUpdatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}/:id`} element={<AboutDeletePage7 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute} element={<ServiceListPage7 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute} element={<ServiceCreatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}/:id`} element={<ServiceRetrievePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}/:id`} element={<ServiceUpdatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}/:id`} element={<ServiceDeletePage7 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute} element={<ProjectSectionListPage7 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.CreateRoute} element={<ProjectSectionCreatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.RetrieveRoute}/:id`} element={<ProjectSectionRetrievePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}/:id`} element={<ProjectSectionUpdatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}/:id`} element={<ProjectSectionDeletePage7 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute} element={<ProjectGroupListPage7 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.CreateRoute} element={<ProjectGroupCreatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.RetrieveRoute}/:id`} element={<ProjectGroupRetrievePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.UpdateRoute}/:id`} element={<ProjectGroupUpdatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.DeleteRoute}/:id`} element={<ProjectGroupDeletePage7 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute} element={<ProjectListPage7 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.CreateRoute} element={<ProjectCreatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.RetrieveRoute}/:id`} element={<ProjectRetrievePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.UpdateRoute}/:id`} element={<ProjectUpdatePage7 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.DeleteRoute}/:id`} element={<ProjectDeletePage7 ReduxUltimate={Redux} />} />
                          
                            </React.Fragment>
                          ) :
                          import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? ( 
                            <React.Fragment>
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} element={<HeroListPage8 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute} element={<HeroCreatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}/:id`} element={<HeroRetrievePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}/:id`} element={<HeroUpdatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}/:id`} element={<HeroDeletePage8 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute} element={<CounterListPage8 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute} element={<CounterCreatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}/:id`} element={<CounterRetrievePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}/:id`} element={<CounterUpdatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}/:id`} element={<CounterDeletePage8 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute} element={<AboutListPage8 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute} element={<AboutCreatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}/:id`} element={<AboutRetrievePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}/:id`} element={<AboutUpdatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}/:id`} element={<AboutDeletePage8 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute} element={<ServiceListPage8 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute} element={<ServiceCreatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}/:id`} element={<ServiceRetrievePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}/:id`} element={<ServiceUpdatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}/:id`} element={<ServiceDeletePage8 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute} element={<ProjectSectionListPage8 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.CreateRoute} element={<ProjectSectionCreatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.RetrieveRoute}/:id`} element={<ProjectSectionRetrievePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}/:id`} element={<ProjectSectionUpdatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}/:id`} element={<ProjectSectionDeletePage8 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute} element={<ProjectGroupListPage8 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.CreateRoute} element={<ProjectGroupCreatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.RetrieveRoute}/:id`} element={<ProjectGroupRetrievePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.UpdateRoute}/:id`} element={<ProjectGroupUpdatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.DeleteRoute}/:id`} element={<ProjectGroupDeletePage8 ReduxUltimate={Redux} />} />

                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute} element={<ProjectListPage8 ReduxUltimate={Redux} />} />
                              <Route path={RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.CreateRoute} element={<ProjectCreatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.RetrieveRoute}/:id`} element={<ProjectRetrievePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.UpdateRoute}/:id`} element={<ProjectUpdatePage8 ReduxUltimate={Redux} />} />
                              <Route path={`${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.DeleteRoute}/:id`} element={<ProjectDeletePage8 ReduxUltimate={Redux} />} />
                          
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
      </Suspense>
    </React.Fragment>
  )
}

export default App
