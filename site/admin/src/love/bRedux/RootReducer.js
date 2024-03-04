import { combineReducers } from 'redux'

import GlobalLayoutState from '../aLayout/aGlobalLayout/extra/State';
import UnprotectedLayoutState from '../aLayout/bUnprotectedLayout/extra/State';
import ProtectedLayoutState from '../aLayout/cProtectedLayout/extra/State';
import AuthenticatedLayoutState from '../aLayout/dAuthenticatedLayout/extra/State';
import AuthorisedLayoutState from '../aLayout/eAuthorisedLayout/extra/State';
import TopbarLayoutState from '../aLayout/fTopbarLayout/extra/State';
import SidebarLayoutState from '../aLayout/gSidebarLayout/extra/State';


import HomePageState from '../aPage/bUnprotectedPage/aHomePage/extra/State';

import LoginPageState from '../aPage/dAuthenticatedPage/aLoginPage/extra/State';
import RegisterPageState from '../aPage/dAuthenticatedPage/bRegisterPage/extra/State';
import ForgotPasswordPageState from '../aPage/dAuthenticatedPage/cForgotPasswordPage/extra/State';
import ResetPasswordPageState from '../aPage/dAuthenticatedPage/dResetPasswordPage/extra/State';

import ProfileRetrievePageState from '../aPage/fTopbarPage/aProfileReteivePage/extra/State';
import ProfileUpdatePageState from '../aPage/fTopbarPage/bProfileUpdatePage/extra/State';
import ProfilePasswordUpdatePageState from '../aPage/fTopbarPage/cProfilePasswordUpdatePage/extra/State';
import ProfileDeletePageState from '../aPage/fTopbarPage/dProfileDeletePage/extra/State';

import BaseListPageState from '../aPage/gSidebarPage/aSettingPage/aBasePage/aListPage/extra/State';
import BaseCreatePageState from '../aPage/gSidebarPage/aSettingPage/aBasePage/bCreatePage/extra/State';
import BaseRetrievePageState from '../aPage/gSidebarPage/aSettingPage/aBasePage/cRetrievePage/extra/State';
import BaseUpdatePageState from '../aPage/gSidebarPage/aSettingPage/aBasePage/dUpdatePage/extra/State';
import BaseDeletePageState from '../aPage/gSidebarPage/aSettingPage/aBasePage/eDeletePage/extra/State';

import AdminHeroListPageState from '../aPage/gSidebarPage/aSettingPage/bAdminHeroPage/aListPage/extra/State';
import AdminHeroCreatePageState from '../aPage/gSidebarPage/aSettingPage/bAdminHeroPage/bCreatePage/extra/State';
import AdminHeroRetrievePageState from '../aPage/gSidebarPage/aSettingPage/bAdminHeroPage/cRetrievePage/extra/State';
import AdminHeroUpdatePageState from '../aPage/gSidebarPage/aSettingPage/bAdminHeroPage/dUpdatePage/extra/State';
import AdminHeroDeletePageState from '../aPage/gSidebarPage/aSettingPage/bAdminHeroPage/eDeletePage/extra/State';

import UserListPageState from '../aPage/gSidebarPage/bAdministrationPage/aUserPage/aListPage/extra/State';
import UserCreatePageState from '../aPage/gSidebarPage/bAdministrationPage/aUserPage/bCreatePage/extra/State';
import UserRetrievePageState from '../aPage/gSidebarPage/bAdministrationPage/aUserPage/cRetrievePage/extra/State';
import UserUpdatePageState from '../aPage/gSidebarPage/bAdministrationPage/aUserPage/dUpdatePage/extra/State';
import UserDeletePageState from '../aPage/gSidebarPage/bAdministrationPage/aUserPage/eDeletePage/extra/State';

import RoleListPageState from '../aPage/gSidebarPage/bAdministrationPage/bRolePage/aListPage/extra/State';
import RoleCreatePageState from '../aPage/gSidebarPage/bAdministrationPage/bRolePage/bCreatePage/extra/State';
import RoleRetrievePageState from '../aPage/gSidebarPage/bAdministrationPage/bRolePage/cRetrievePage/extra/State';
import RoleUpdatePageState from '../aPage/gSidebarPage/bAdministrationPage/bRolePage/dUpdatePage/extra/State';
import RoleDeletePageState from '../aPage/gSidebarPage/bAdministrationPage/bRolePage/eDeletePage/extra/State';

import MenuListPageState from '../aPage/gSidebarPage/bAdministrationPage/cMenuPage/aListPage/extra/State';
import MenuCreatePageState from '../aPage/gSidebarPage/bAdministrationPage/cMenuPage/bCreatePage/extra/State';
import MenuRetrievePageState from '../aPage/gSidebarPage/bAdministrationPage/cMenuPage/cRetrievePage/extra/State';
import MenuUpdatePageState from '../aPage/gSidebarPage/bAdministrationPage/cMenuPage/dUpdatePage/extra/State';
import MenuDeletePageState from '../aPage/gSidebarPage/bAdministrationPage/cMenuPage/eDeletePage/extra/State';

import StaticDataListPageState from '../aPage/gSidebarPage/dAssetPage/aStaticDataPage/aListPage/extra/State';
import StaticDataCreatePageState from '../aPage/gSidebarPage/dAssetPage/aStaticDataPage/bCreatePage/extra/State';
import StaticDataRetrievePageState from '../aPage/gSidebarPage/dAssetPage/aStaticDataPage/cRetrievePage/extra/State';
import StaticDataUpdatePageState from '../aPage/gSidebarPage/dAssetPage/aStaticDataPage/dUpdatePage/extra/State';
import StaticDataDeletePageState from '../aPage/gSidebarPage/dAssetPage/aStaticDataPage/eDeletePage/extra/State';

// Number 1
import HeroListPageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/aHeroPage/eDeletePage/extra/State';

import CounterListPageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/aListPage/extra/State';
import CounterCreatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/bCreatePage/extra/State';
import CounterRetrievePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/cRetrievePage/extra/State';
import CounterUpdatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/dUpdatePage/extra/State';
import CounterDeletePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/bCounterPage/eDeletePage/extra/State';

import ProgramSectionListPageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/aListPage/extra/State';
import ProgramSectionCreatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/bCreatePage/extra/State';
import ProgramSectionRetrievePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/cRetrievePage/extra/State';
import ProgramSectionUpdatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/dUpdatePage/extra/State';
import ProgramSectionDeletePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/cProgramSectionPage/eDeletePage/extra/State';

import ProgramListPageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/aListPage/extra/State';
import ProgramCreatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/bCreatePage/extra/State';
import ProgramRetrievePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/cRetrievePage/extra/State';
import ProgramUpdatePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/dUpdatePage/extra/State';
import ProgramDeletePageState1 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/aAndromedaOrganisation/aAcruxEnterprise/zCommonApplication/dProgramPage/eDeletePage/extra/State';

// Number 2
import HeroListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/aHeroPage/eDeletePage/extra/State';

import CounterListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/aListPage/extra/State';
import CounterCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/bCreatePage/extra/State';
import CounterRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/cRetrievePage/extra/State';
import CounterUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/dUpdatePage/extra/State';
import CounterDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/bCounterPage/eDeletePage/extra/State';

import AboutListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/aListPage/extra/State';
import AboutCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/cAboutPage/eDeletePage/extra/State';

import ServiceListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/dServicePage/eDeletePage/extra/State';

import BranchListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/aListPage/extra/State';
import BranchCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/bCreatePage/extra/State';
import BranchRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/cRetrievePage/extra/State';
import BranchUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/dUpdatePage/extra/State';
import BranchDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/eBranchPage/eDeletePage/extra/State';

import SubBranchListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/aListPage/extra/State';
import SubBranchCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/bCreatePage/extra/State';
import SubBranchRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/cRetrievePage/extra/State';
import SubBranchUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/dUpdatePage/extra/State';
import SubBranchDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/fSubBranchPage/eDeletePage/extra/State';

import SubSubBranchListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/aListPage/extra/State';
import SubSubBranchCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/bCreatePage/extra/State';
import SubSubBranchRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/cRetrievePage/extra/State';
import SubSubBranchUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/dUpdatePage/extra/State';
import SubSubBranchDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/gSubSubBranchPage/eDeletePage/extra/State';

import ProjectSectionListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/aListPage/extra/State';
import ProjectSectionCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/bCreatePage/extra/State';
import ProjectSectionRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/cRetrievePage/extra/State';
import ProjectSectionUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/dUpdatePage/extra/State';
import ProjectSectionDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/hProjectSectionPage/eDeletePage/extra/State';

import ProjectGroupListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/aListPage/extra/State';
import ProjectGroupCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/bCreatePage/extra/State';
import ProjectGroupRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/cRetrievePage/extra/State';
import ProjectGroupUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/dUpdatePage/extra/State';
import ProjectGroupDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/iProjectGroupPage/eDeletePage/extra/State';

import ProjectListPageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/aListPage/extra/State';
import ProjectCreatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/bCreatePage/extra/State';
import ProjectRetrievePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/cRetrievePage/extra/State';
import ProjectUpdatePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/dUpdatePage/extra/State';
import ProjectDeletePageState2 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/bPinwheelOrganisation/zCommonApplication/jProjectPage/eDeletePage/extra/State';

// Number 3
import HeroListPageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/eDeletePage/extra/State';

import CounterListPageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/aListPage/extra/State';
import CounterCreatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/bCreatePage/extra/State';
import CounterRetrievePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/cRetrievePage/extra/State';
import CounterUpdatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/dUpdatePage/extra/State';
import CounterDeletePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/eDeletePage/extra/State';

import ProgramSectionListPageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/aListPage/extra/State';
import ProgramSectionCreatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/bCreatePage/extra/State';
import ProgramSectionRetrievePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/cRetrievePage/extra/State';
import ProgramSectionUpdatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/dUpdatePage/extra/State';
import ProgramSectionDeletePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/eDeletePage/extra/State';

import ProgramListPageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/aListPage/extra/State';
import ProgramCreatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/bCreatePage/extra/State';
import ProgramRetrievePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/cRetrievePage/extra/State';
import ProgramUpdatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/dUpdatePage/extra/State';
import ProgramDeletePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/aHeroPage/eDeletePage/extra/State';

// Number 4
import HeroListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/aHeroPage/eDeletePage/extra/State';

import AboutListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/aListPage/extra/State';
import AboutCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/bAboutPage/eDeletePage/extra/State';

import ExperienceListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/aListPage/extra/State';
import ExperienceCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/bCreatePage/extra/State';
import ExperienceRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/cRetrievePage/extra/State';
import ExperienceUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/dUpdatePage/extra/State';
import ExperienceDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/cExperiencePage/eDeletePage/extra/State';

import ServiceListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/dServicePage/eDeletePage/extra/State';

import PortfolioListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/aListPage/extra/State';
import PortfolioCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/bCreatePage/extra/State';
import PortfolioRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/cRetrievePage/extra/State';
import PortfolioUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/dUpdatePage/extra/State';
import PortfolioDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/ePortfolioPage/eDeletePage/extra/State';

import PortfolioCardListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/aListPage/extra/State';
import PortfolioCardCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/bCreatePage/extra/State';
import PortfolioCardRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/cRetrievePage/extra/State';
import PortfolioCardUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/dUpdatePage/extra/State';
import PortfolioCardDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/fPortfolioCardPage/eDeletePage/extra/State';

import EventListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/aListPage/extra/State';
import EventCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/bCreatePage/extra/State';
import EventRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/cRetrievePage/extra/State';
import EventUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/dUpdatePage/extra/State';
import EventDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/gEventPage/eDeletePage/extra/State';

import EventCardListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/aListPage/extra/State';
import EventCardCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/bCreatePage/extra/State';
import EventCardRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/cRetrievePage/extra/State';
import EventCardUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/dUpdatePage/extra/State';
import EventCardDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/hEventCardPage/eDeletePage/extra/State';

import BlogListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/aListPage/extra/State';
import BlogCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/bCreatePage/extra/State';
import BlogRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/cRetrievePage/extra/State';
import BlogUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/dUpdatePage/extra/State';
import BlogDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/iBlogPage/eDeletePage/extra/State';

import BlogCardListPageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/aListPage/extra/State';
import BlogCardCreatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/bCreatePage/extra/State';
import BlogCardRetrievePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/cRetrievePage/extra/State';
import BlogCardUpdatePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/dUpdatePage/extra/State';
import BlogCardDeletePageState4 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/zCommonApplication/jBlogCardPage/eDeletePage/extra/State';

// Number 5
import HeroListPageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/eDeletePage/extra/State';

import CounterListPageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/aListPage/extra/State';
import CounterCreatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/bCreatePage/extra/State';
import CounterRetrievePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/cRetrievePage/extra/State';
import CounterUpdatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/dUpdatePage/extra/State';
import CounterDeletePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/eDeletePage/extra/State';

import ProgramSectionListPageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/aListPage/extra/State';
import ProgramSectionCreatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/bCreatePage/extra/State';
import ProgramSectionRetrievePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/cRetrievePage/extra/State';
import ProgramSectionUpdatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/dUpdatePage/extra/State';
import ProgramSectionDeletePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/eDeletePage/extra/State';

import ProgramListPageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/aListPage/extra/State';
import ProgramCreatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/bCreatePage/extra/State';
import ProgramRetrievePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/cRetrievePage/extra/State';
import ProgramUpdatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/dUpdatePage/extra/State';
import ProgramDeletePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/aHeroPage/eDeletePage/extra/State';

// Number 6
import HeroListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/eDeletePage/extra/State';

import AboutListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bAboutPage/aListPage/extra/State';
import AboutCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bAboutPage/eDeletePage/extra/State';

import ExperienceListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cExperiencePage/aListPage/extra/State';
import ExperienceCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cExperiencePage/bCreatePage/extra/State';
import ExperienceRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cExperiencePage/cRetrievePage/extra/State';
import ExperienceUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cExperiencePage/dUpdatePage/extra/State';
import ExperienceDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cExperiencePage/eDeletePage/extra/State';

import ServiceListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/eDeletePage/extra/State';

import PortfolioListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/ePortfolioPage/aListPage/extra/State';
import PortfolioCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/ePortfolioPage/bCreatePage/extra/State';
import PortfolioRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/ePortfolioPage/cRetrievePage/extra/State';
import PortfolioUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/ePortfolioPage/dUpdatePage/extra/State';
import PortfolioDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/ePortfolioPage/eDeletePage/extra/State';

import PortfolioCardListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/fPortfolioCardPage/aListPage/extra/State';
import PortfolioCardCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/fPortfolioCardPage/bCreatePage/extra/State';
import PortfolioCardRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/fPortfolioCardPage/cRetrievePage/extra/State';
import PortfolioCardUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/fPortfolioCardPage/dUpdatePage/extra/State';
import PortfolioCardDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/fPortfolioCardPage/eDeletePage/extra/State';

import EventListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/gEventPage/aListPage/extra/State';
import EventCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/gEventPage/bCreatePage/extra/State';
import EventRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/gEventPage/cRetrievePage/extra/State';
import EventUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/gEventPage/dUpdatePage/extra/State';
import EventDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/gEventPage/eDeletePage/extra/State';

import EventCardListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hEventCardPage/aListPage/extra/State';
import EventCardCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hEventCardPage/bCreatePage/extra/State';
import EventCardRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hEventCardPage/cRetrievePage/extra/State';
import EventCardUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hEventCardPage/dUpdatePage/extra/State';
import EventCardDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hEventCardPage/eDeletePage/extra/State';

import BlogListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iBlogPage/aListPage/extra/State';
import BlogCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iBlogPage/bCreatePage/extra/State';
import BlogRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iBlogPage/cRetrievePage/extra/State';
import BlogUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iBlogPage/dUpdatePage/extra/State';
import BlogDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iBlogPage/eDeletePage/extra/State';

import BlogCardListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jBlogCardPage/aListPage/extra/State';
import BlogCardCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jBlogCardPage/bCreatePage/extra/State';
import BlogCardRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jBlogCardPage/cRetrievePage/extra/State';
import BlogCardUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jBlogCardPage/dUpdatePage/extra/State';
import BlogCardDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jBlogCardPage/eDeletePage/extra/State';

// Number 7
import HeroListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/eDeletePage/extra/State';

import AboutListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bAboutPage/aListPage/extra/State';
import AboutCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bAboutPage/eDeletePage/extra/State';

import ExperienceListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cExperiencePage/aListPage/extra/State';
import ExperienceCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cExperiencePage/bCreatePage/extra/State';
import ExperienceRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cExperiencePage/cRetrievePage/extra/State';
import ExperienceUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cExperiencePage/dUpdatePage/extra/State';
import ExperienceDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cExperiencePage/eDeletePage/extra/State';

import ServiceListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/eDeletePage/extra/State';

import PortfolioListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/ePortfolioPage/aListPage/extra/State';
import PortfolioCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/ePortfolioPage/bCreatePage/extra/State';
import PortfolioRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/ePortfolioPage/cRetrievePage/extra/State';
import PortfolioUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/ePortfolioPage/dUpdatePage/extra/State';
import PortfolioDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/ePortfolioPage/eDeletePage/extra/State';

import PortfolioCardListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/fPortfolioCardPage/aListPage/extra/State';
import PortfolioCardCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/fPortfolioCardPage/bCreatePage/extra/State';
import PortfolioCardRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/fPortfolioCardPage/cRetrievePage/extra/State';
import PortfolioCardUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/fPortfolioCardPage/dUpdatePage/extra/State';
import PortfolioCardDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/fPortfolioCardPage/eDeletePage/extra/State';

import EventListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/gEventPage/aListPage/extra/State';
import EventCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/gEventPage/bCreatePage/extra/State';
import EventRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/gEventPage/cRetrievePage/extra/State';
import EventUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/gEventPage/dUpdatePage/extra/State';
import EventDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/gEventPage/eDeletePage/extra/State';

import EventCardListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hEventCardPage/aListPage/extra/State';
import EventCardCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hEventCardPage/bCreatePage/extra/State';
import EventCardRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hEventCardPage/cRetrievePage/extra/State';
import EventCardUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hEventCardPage/dUpdatePage/extra/State';
import EventCardDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hEventCardPage/eDeletePage/extra/State';

import BlogListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iBlogPage/aListPage/extra/State';
import BlogCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iBlogPage/bCreatePage/extra/State';
import BlogRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iBlogPage/cRetrievePage/extra/State';
import BlogUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iBlogPage/dUpdatePage/extra/State';
import BlogDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iBlogPage/eDeletePage/extra/State';

import BlogCardListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jBlogCardPage/aListPage/extra/State';
import BlogCardCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jBlogCardPage/bCreatePage/extra/State';
import BlogCardRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jBlogCardPage/cRetrievePage/extra/State';
import BlogCardUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jBlogCardPage/dUpdatePage/extra/State';
import BlogCardDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jBlogCardPage/eDeletePage/extra/State';

// Number 8
import HeroListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/eDeletePage/extra/State';

import AboutListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bAboutPage/aListPage/extra/State';
import AboutCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bAboutPage/eDeletePage/extra/State';

import ExperienceListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cExperiencePage/aListPage/extra/State';
import ExperienceCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cExperiencePage/bCreatePage/extra/State';
import ExperienceRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cExperiencePage/cRetrievePage/extra/State';
import ExperienceUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cExperiencePage/dUpdatePage/extra/State';
import ExperienceDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cExperiencePage/eDeletePage/extra/State';

import ServiceListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/eDeletePage/extra/State';

import PortfolioListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/ePortfolioPage/aListPage/extra/State';
import PortfolioCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/ePortfolioPage/bCreatePage/extra/State';
import PortfolioRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/ePortfolioPage/cRetrievePage/extra/State';
import PortfolioUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/ePortfolioPage/dUpdatePage/extra/State';
import PortfolioDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/ePortfolioPage/eDeletePage/extra/State';

import PortfolioCardListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/fPortfolioCardPage/aListPage/extra/State';
import PortfolioCardCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/fPortfolioCardPage/bCreatePage/extra/State';
import PortfolioCardRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/fPortfolioCardPage/cRetrievePage/extra/State';
import PortfolioCardUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/fPortfolioCardPage/dUpdatePage/extra/State';
import PortfolioCardDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/fPortfolioCardPage/eDeletePage/extra/State';

import EventListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/gEventPage/aListPage/extra/State';
import EventCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/gEventPage/bCreatePage/extra/State';
import EventRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/gEventPage/cRetrievePage/extra/State';
import EventUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/gEventPage/dUpdatePage/extra/State';
import EventDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/gEventPage/eDeletePage/extra/State';

import EventCardListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hEventCardPage/aListPage/extra/State';
import EventCardCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hEventCardPage/bCreatePage/extra/State';
import EventCardRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hEventCardPage/cRetrievePage/extra/State';
import EventCardUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hEventCardPage/dUpdatePage/extra/State';
import EventCardDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hEventCardPage/eDeletePage/extra/State';

import BlogListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iBlogPage/aListPage/extra/State';
import BlogCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iBlogPage/bCreatePage/extra/State';
import BlogRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iBlogPage/cRetrievePage/extra/State';
import BlogUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iBlogPage/dUpdatePage/extra/State';
import BlogDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iBlogPage/eDeletePage/extra/State';

import BlogCardListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jBlogCardPage/aListPage/extra/State';
import BlogCardCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jBlogCardPage/bCreatePage/extra/State';
import BlogCardRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jBlogCardPage/cRetrievePage/extra/State';
import BlogCardUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jBlogCardPage/dUpdatePage/extra/State';
import BlogCardDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jBlogCardPage/eDeletePage/extra/State';





const RootReducer = combineReducers({
	// Layout
	GlobalLayoutState,
	UnprotectedLayoutState,
	ProtectedLayoutState,
	AuthenticatedLayoutState,
	AuthorisedLayoutState,
	TopbarLayoutState,
	SidebarLayoutState,

	// Page
	// // Global Page
	HomePageState,
	// AboutPageState,
	// ContactPageState,

	// Auth Page
	LoginPageState,
	RegisterPageState,
	ForgotPasswordPageState,
	ResetPasswordPageState,

	// Content Page
	// Topbar Page
	ProfileRetrievePageState,
	ProfileUpdatePageState,
	ProfilePasswordUpdatePageState,
	ProfileDeletePageState,

	// // Sidebar Page
	BaseListPageState,
	BaseCreatePageState,
	BaseRetrievePageState,
	BaseUpdatePageState,
	BaseDeletePageState,

	AdminHeroListPageState,
	AdminHeroCreatePageState,
	AdminHeroRetrievePageState,
	AdminHeroUpdatePageState,
	AdminHeroDeletePageState,

	UserListPageState,
	UserCreatePageState,
	UserRetrievePageState,
	UserUpdatePageState,
	UserDeletePageState,

	RoleListPageState,
	RoleCreatePageState,
	RoleRetrievePageState,
	RoleUpdatePageState,
	RoleDeletePageState,

	MenuListPageState,
	MenuCreatePageState,
	MenuRetrievePageState,
	MenuUpdatePageState,
	MenuDeletePageState,

	StaticDataListPageState,
	StaticDataCreatePageState,
	StaticDataRetrievePageState,
	StaticDataUpdatePageState,
	StaticDataDeletePageState,

	...(
		import.meta.env.VITE_CORPORATION === "BeehiveCorporation" ? (
			import.meta.env.VITE_ORGANISATION === "AndromedaOrganisation" ? (
				import.meta.env.VITE_ENTERPRISE === "AcruxEnterprise" ? (
					import.meta.env.VITE_APPLICATION === "ArionApplication" || 
					import.meta.env.VITE_APPLICATION === "AnkasApplication" || 
					import.meta.env.VITE_APPLICATION === "AbolApplication" ? ({
						HeroListPageState: HeroListPageState1,
						HeroCreatePageState: HeroCreatePageState1,
						HeroRetrievePageState: HeroRetrievePageState1,
						HeroUpdatePageState: HeroUpdatePageState1,
						HeroDeletePageState: HeroDeletePageState1,
					
						CounterListPageState: CounterListPageState1,
						CounterCreatePageState: CounterCreatePageState1,
						CounterRetrievePageState: CounterRetrievePageState1,
						CounterUpdatePageState: CounterUpdatePageState1,
						CounterDeletePageState: CounterDeletePageState1,
					
						ProgramSectionListPageState: ProgramSectionListPageState1,
						ProgramSectionCreatePageState: ProgramSectionCreatePageState1,
						ProgramSectionRetrievePageState: ProgramSectionRetrievePageState1,
						ProgramSectionUpdatePageState: ProgramSectionUpdatePageState1,
						ProgramSectionDeletePageState: ProgramSectionDeletePageState1,
					
						ProgramListPageState: ProgramListPageState1,
						ProgramCreatePageState: ProgramCreatePageState1,
						ProgramRetrievePageState: ProgramRetrievePageState1,
						ProgramUpdatePageState: ProgramUpdatePageState1,
						ProgramDeletePageState: ProgramDeletePageState1,
					}) : null
				) :
				import.meta.env.VITE_ENTERPRISE === "AnserEnterprise" ? ({}) : null
			) :
			import.meta.env.VITE_ORGANISATION === "PinwheelOrganisation" ? (
				import.meta.env.VITE_APPLICATION === "BeehiveApplication" ||
				import.meta.env.VITE_APPLICATION === "AndromedaApplication" ||
				import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? ({
					HeroListPageState:	HeroListPageState2,
					HeroCreatePageState:	HeroCreatePageState2,
					HeroRetrievePageState:	HeroRetrievePageState2,
					HeroUpdatePageState:	HeroUpdatePageState2,
					HeroDeletePageState:	HeroDeletePageState2,
				
					CounterListPageState:	CounterListPageState2,
					CounterCreatePageState:	CounterCreatePageState2,
					CounterRetrievePageState:	CounterRetrievePageState2,
					CounterUpdatePageState:	CounterUpdatePageState2,
					CounterDeletePageState:	CounterDeletePageState2,
				
					AboutListPageState:	AboutListPageState2,
					AboutCreatePageState:	AboutCreatePageState2,
					AboutRetrievePageState:	AboutRetrievePageState2,
					AboutUpdatePageState:	AboutUpdatePageState2,
					AboutDeletePageState:	AboutDeletePageState2,
				
					ServiceListPageState:	ServiceListPageState2,
					ServiceCreatePageState:	ServiceCreatePageState2,
					ServiceRetrievePageState:	ServiceRetrievePageState2,
					ServiceUpdatePageState:	ServiceUpdatePageState2,
					ServiceDeletePageState:	ServiceDeletePageState2,
				
					BranchListPageState:	BranchListPageState2,
					BranchCreatePageState:	BranchCreatePageState2,
					BranchRetrievePageState:	BranchRetrievePageState2,
					BranchUpdatePageState:	BranchUpdatePageState2,
					BranchDeletePageState:	BranchDeletePageState2,
				
					SubBranchListPageState:	SubBranchListPageState2,
					SubBranchCreatePageState:	SubBranchCreatePageState2,
					SubBranchRetrievePageState:	SubBranchRetrievePageState2,
					SubBranchUpdatePageState:	SubBranchUpdatePageState2,
					SubBranchDeletePageState:	SubBranchDeletePageState2,
				
					SubSubBranchListPageState:	SubSubBranchListPageState2,
					SubSubBranchCreatePageState:	SubSubBranchCreatePageState2,
					SubSubBranchRetrievePageState:	SubSubBranchRetrievePageState2,
					SubSubBranchUpdatePageState:	SubSubBranchUpdatePageState2,
					SubSubBranchDeletePageState:	SubSubBranchDeletePageState2,
				
					ProjectSectionListPageState:	ProjectSectionListPageState2,
					ProjectSectionCreatePageState:	ProjectSectionCreatePageState2,
					ProjectSectionRetrievePageState:	ProjectSectionRetrievePageState2,
					ProjectSectionUpdatePageState:	ProjectSectionUpdatePageState2,
					ProjectSectionDeletePageState:	ProjectSectionDeletePageState2,
				
					ProjectGroupListPageState:	ProjectGroupListPageState2,
					ProjectGroupCreatePageState:	ProjectGroupCreatePageState2,
					ProjectGroupRetrievePageState:	ProjectGroupRetrievePageState2,
					ProjectGroupUpdatePageState:	ProjectGroupUpdatePageState2,
					ProjectGroupDeletePageState:	ProjectGroupDeletePageState2,
				
					ProjectListPageState:	ProjectListPageState2,
					ProjectCreatePageState:	ProjectCreatePageState2,
					ProjectRetrievePageState:	ProjectRetrievePageState2,
					ProjectUpdatePageState:	ProjectUpdatePageState2,
					ProjectDeletePageState:	ProjectDeletePageState2,		
				}) :
				import.meta.env.VITE_APPLICATION === "PinwheelApplication" ||
				import.meta.env.VITE_APPLICATION === "AcruxApplication" ||
				import.meta.env.VITE_APPLICATION === "AnserApplication" ||
				import.meta.env.VITE_APPLICATION === "AquilaApplication" ||
				import.meta.env.VITE_APPLICATION === "BellatrixApplication" ||
				import.meta.env.VITE_APPLICATION === "CapellaApplication" ? ({
					HeroListPageState: HeroListPageState2,
					HeroCreatePageState: HeroCreatePageState2,
					HeroRetrievePageState: HeroRetrievePageState2,
					HeroUpdatePageState: HeroUpdatePageState2,
					HeroDeletePageState: HeroDeletePageState2,
				
					CounterListPageState: CounterListPageState2,
					CounterCreatePageState: CounterCreatePageState2,
					CounterRetrievePageState: CounterRetrievePageState2,
					CounterUpdatePageState: CounterUpdatePageState2,
					CounterDeletePageState: CounterDeletePageState2,
				
					AboutListPageState: AboutListPageState2,
					AboutCreatePageState: AboutCreatePageState2,
					AboutRetrievePageState: AboutRetrievePageState2,
					AboutUpdatePageState: AboutUpdatePageState2,
					AboutDeletePageState: AboutDeletePageState2,
				
					ServiceListPageState: ServiceListPageState2,
					ServiceCreatePageState: ServiceCreatePageState2,
					ServiceRetrievePageState: ServiceRetrievePageState2,
					ServiceUpdatePageState: ServiceUpdatePageState2,
					ServiceDeletePageState: ServiceDeletePageState2,
				
					ProjectSectionListPageState: ProjectSectionListPageState2,
					ProjectSectionCreatePageState: ProjectSectionCreatePageState2,
					ProjectSectionRetrievePageState: ProjectSectionRetrievePageState2,
					ProjectSectionUpdatePageState: ProjectSectionUpdatePageState2,
					ProjectSectionDeletePageState: ProjectSectionDeletePageState2,
				
					ProjectGroupListPageState: ProjectGroupListPageState2,
					ProjectGroupCreatePageState: ProjectGroupCreatePageState2,
					ProjectGroupRetrievePageState: ProjectGroupRetrievePageState2,
					ProjectGroupUpdatePageState: ProjectGroupUpdatePageState2,
					ProjectGroupDeletePageState: ProjectGroupDeletePageState2,
				
					ProjectListPageState: ProjectListPageState2,
					ProjectCreatePageState: ProjectCreatePageState2,
					ProjectRetrievePageState: ProjectRetrievePageState2,
					ProjectUpdatePageState: ProjectUpdatePageState2,
					ProjectDeletePageState: ProjectDeletePageState2,		
				}) : null
			) :
			import.meta.env.VITE_ORGANISATION === "TadpoleOrganisation" ? (
				import.meta.env.VITE_ENTERPRISE === "AquilaEnterprise" ? ({}) :
				import.meta.env.VITE_ENTERPRISE === "BellatrixEnterprise" ? (
					import.meta.env.VITE_FIRM === "TechfolioFirm" ? (
						import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? ({
							HeroListPageState: HeroListPageState3,
							HeroCreatePageState: HeroCreatePageState3,
							HeroRetrievePageState: HeroRetrievePageState3,
							HeroUpdatePageState: HeroUpdatePageState3,
							HeroDeletePageState: HeroDeletePageState3,
						
							CounterListPageState: CounterListPageState3,
							CounterCreatePageState: CounterCreatePageState3,
							CounterRetrievePageState: CounterRetrievePageState3,
							CounterUpdatePageState: CounterUpdatePageState3,
							CounterDeletePageState: CounterDeletePageState3,
						
							ProgramSectionListPageState: ProgramSectionListPageState3,
							ProgramSectionCreatePageState: ProgramSectionCreatePageState3,
							ProgramSectionRetrievePageState: ProgramSectionRetrievePageState3,
							ProgramSectionUpdatePageState: ProgramSectionUpdatePageState3,
							ProgramSectionDeletePageState: ProgramSectionDeletePageState3,
						
							ProgramListPageState: ProgramListPageState3,
							ProgramCreatePageState: ProgramCreatePageState3,
							ProgramRetrievePageState: ProgramRetrievePageState3,
							ProgramUpdatePageState: ProgramUpdatePageState3,
							ProgramDeletePageState: ProgramDeletePageState3,	
						}) :
						import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ||
						import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ||
						import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? ({
							HeroListPageState: HeroListPageState4,
							HeroCreatePageState: HeroCreatePageState4,
							HeroRetrievePageState: HeroRetrievePageState4,
							HeroUpdatePageState: HeroUpdatePageState4,
							HeroDeletePageState: HeroDeletePageState4,
				
							AboutListPageState: AboutListPageState4,
							AboutCreatePageState: AboutCreatePageState4,
							AboutRetrievePageState: AboutRetrievePageState4,
							AboutUpdatePageState: AboutUpdatePageState4,
							AboutDeletePageState: AboutDeletePageState4,
							
							ExperienceListPageState: ExperienceListPageState4,
							ExperienceCreatePageState: ExperienceCreatePageState4,
							ExperienceRetrievePageState: ExperienceRetrievePageState4,
							ExperienceUpdatePageState: ExperienceUpdatePageState4,
							ExperienceDeletePageState: ExperienceDeletePageState4,
							
							ServiceListPageState: ServiceListPageState4,
							ServiceCreatePageState: ServiceCreatePageState4,
							ServiceRetrievePageState: ServiceRetrievePageState4,
							ServiceUpdatePageState: ServiceUpdatePageState4,
							ServiceDeletePageState: ServiceDeletePageState4,
							
							PortfolioListPageState: PortfolioListPageState4,
							PortfolioCreatePageState: PortfolioCreatePageState4,
							PortfolioRetrievePageState: PortfolioRetrievePageState4,
							PortfolioUpdatePageState: PortfolioUpdatePageState4,
							PortfolioDeletePageState: PortfolioDeletePageState4,
							
							PortfolioCardListPageState: PortfolioCardListPageState4,
							PortfolioCardCreatePageState: PortfolioCardCreatePageState4,
							PortfolioCardRetrievePageState: PortfolioCardRetrievePageState4,
							PortfolioCardUpdatePageState: PortfolioCardUpdatePageState4,
							PortfolioCardDeletePageState: PortfolioCardDeletePageState4,
							
							EventListPageState: EventListPageState4,
							EventCreatePageState: EventCreatePageState4,
							EventRetrievePageState: EventRetrievePageState4,
							EventUpdatePageState: EventUpdatePageState4,
							EventDeletePageState: EventDeletePageState4,
							
							EventCardListPageState: EventCardListPageState4,
							EventCardCreatePageState: EventCardCreatePageState4,
							EventCardRetrievePageState: EventCardRetrievePageState4,
							EventCardUpdatePageState: EventCardUpdatePageState4,
							EventCardDeletePageState: EventCardDeletePageState4,
							
							BlogListPageState: BlogListPageState4,
							BlogCreatePageState: BlogCreatePageState4,
							BlogRetrievePageState: BlogRetrievePageState4,
							BlogUpdatePageState: BlogUpdatePageState4,
							BlogDeletePageState: BlogDeletePageState4,
							
							BlogCardListPageState: BlogCardListPageState4,
							BlogCardCreatePageState: BlogCardCreatePageState4,
							BlogCardRetrievePageState: BlogCardRetrievePageState4,
							BlogCardUpdatePageState: BlogCardUpdatePageState4,
							BlogCardDeletePageState: BlogCardDeletePageState4,		
						}) : null
					) : 
					import.meta.env.VITE_FIRM === "BlogifyFirm" ? (
						import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? ({
							HeroListPageState: HeroListPageState5,
							HeroCreatePageState: HeroCreatePageState5,
							HeroRetrievePageState: HeroRetrievePageState5,
							HeroUpdatePageState: HeroUpdatePageState5,
							HeroDeletePageState: HeroDeletePageState5,
						
							CounterListPageState: CounterListPageState5,
							CounterCreatePageState: CounterCreatePageState5,
							CounterRetrievePageState: CounterRetrievePageState5,
							CounterUpdatePageState: CounterUpdatePageState5,
							CounterDeletePageState: CounterDeletePageState5,
						
							ProgramSectionListPageState: ProgramSectionListPageState5,
							ProgramSectionCreatePageState: ProgramSectionCreatePageState5,
							ProgramSectionRetrievePageState: ProgramSectionRetrievePageState5,
							ProgramSectionUpdatePageState: ProgramSectionUpdatePageState5,
							ProgramSectionDeletePageState: ProgramSectionDeletePageState5,
						
							ProgramListPageState: ProgramListPageState5,
							ProgramCreatePageState: ProgramCreatePageState5,
							ProgramRetrievePageState: ProgramRetrievePageState5,
							ProgramUpdatePageState: ProgramUpdatePageState5,
							ProgramDeletePageState: ProgramDeletePageState5,	
						}) :
						import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ? ({
							HeroListPageState: HeroListPageState6,
							HeroCreatePageState: HeroCreatePageState6,
							HeroRetrievePageState: HeroRetrievePageState6,
							HeroUpdatePageState: HeroUpdatePageState6,
							HeroDeletePageState: HeroDeletePageState6,
				
							AboutListPageState: AboutListPageState6,
							AboutCreatePageState: AboutCreatePageState6,
							AboutRetrievePageState: AboutRetrievePageState6,
							AboutUpdatePageState: AboutUpdatePageState6,
							AboutDeletePageState: AboutDeletePageState6,
							
							ExperienceListPageState: ExperienceListPageState6,
							ExperienceCreatePageState: ExperienceCreatePageState6,
							ExperienceRetrievePageState: ExperienceRetrievePageState6,
							ExperienceUpdatePageState: ExperienceUpdatePageState6,
							ExperienceDeletePageState: ExperienceDeletePageState6,
							
							ServiceListPageState: ServiceListPageState6,
							ServiceCreatePageState: ServiceCreatePageState6,
							ServiceRetrievePageState: ServiceRetrievePageState6,
							ServiceUpdatePageState: ServiceUpdatePageState6,
							ServiceDeletePageState: ServiceDeletePageState6,
							
							PortfolioListPageState: PortfolioListPageState6,
							PortfolioCreatePageState: PortfolioCreatePageState6,
							PortfolioRetrievePageState: PortfolioRetrievePageState6,
							PortfolioUpdatePageState: PortfolioUpdatePageState6,
							PortfolioDeletePageState: PortfolioDeletePageState6,
							
							PortfolioCardListPageState: PortfolioCardListPageState6,
							PortfolioCardCreatePageState: PortfolioCardCreatePageState6,
							PortfolioCardRetrievePageState: PortfolioCardRetrievePageState6,
							PortfolioCardUpdatePageState: PortfolioCardUpdatePageState6,
							PortfolioCardDeletePageState: PortfolioCardDeletePageState6,
							
							EventListPageState: EventListPageState6,
							EventCreatePageState: EventCreatePageState6,
							EventRetrievePageState: EventRetrievePageState6,
							EventUpdatePageState: EventUpdatePageState6,
							EventDeletePageState: EventDeletePageState6,
							
							EventCardListPageState: EventCardListPageState6,
							EventCardCreatePageState: EventCardCreatePageState6,
							EventCardRetrievePageState: EventCardRetrievePageState6,
							EventCardUpdatePageState: EventCardUpdatePageState6,
							EventCardDeletePageState: EventCardDeletePageState6,
							
							BlogListPageState: BlogListPageState6,
							BlogCreatePageState: BlogCreatePageState6,
							BlogRetrievePageState: BlogRetrievePageState6,
							BlogUpdatePageState: BlogUpdatePageState6,
							BlogDeletePageState: BlogDeletePageState6,
							
							BlogCardListPageState: BlogCardListPageState6,
							BlogCardCreatePageState: BlogCardCreatePageState6,
							BlogCardRetrievePageState: BlogCardRetrievePageState6,
							BlogCardUpdatePageState: BlogCardUpdatePageState6,
							BlogCardDeletePageState: BlogCardDeletePageState6,		
						}) : 
						import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ? ({
							HeroListPageState: HeroListPageState7,
							HeroCreatePageState: HeroCreatePageState7,
							HeroRetrievePageState: HeroRetrievePageState7,
							HeroUpdatePageState: HeroUpdatePageState7,
							HeroDeletePageState: HeroDeletePageState7,
				
							AboutListPageState: AboutListPageState7,
							AboutCreatePageState: AboutCreatePageState7,
							AboutRetrievePageState: AboutRetrievePageState7,
							AboutUpdatePageState: AboutUpdatePageState7,
							AboutDeletePageState: AboutDeletePageState7,
							
							ExperienceListPageState: ExperienceListPageState7,
							ExperienceCreatePageState: ExperienceCreatePageState7,
							ExperienceRetrievePageState: ExperienceRetrievePageState7,
							ExperienceUpdatePageState: ExperienceUpdatePageState7,
							ExperienceDeletePageState: ExperienceDeletePageState7,
							
							ServiceListPageState: ServiceListPageState7,
							ServiceCreatePageState: ServiceCreatePageState7,
							ServiceRetrievePageState: ServiceRetrievePageState7,
							ServiceUpdatePageState: ServiceUpdatePageState7,
							ServiceDeletePageState: ServiceDeletePageState7,
							
							PortfolioListPageState: PortfolioListPageState7,
							PortfolioCreatePageState: PortfolioCreatePageState7,
							PortfolioRetrievePageState: PortfolioRetrievePageState7,
							PortfolioUpdatePageState: PortfolioUpdatePageState7,
							PortfolioDeletePageState: PortfolioDeletePageState7,
							
							PortfolioCardListPageState: PortfolioCardListPageState7,
							PortfolioCardCreatePageState: PortfolioCardCreatePageState7,
							PortfolioCardRetrievePageState: PortfolioCardRetrievePageState7,
							PortfolioCardUpdatePageState: PortfolioCardUpdatePageState7,
							PortfolioCardDeletePageState: PortfolioCardDeletePageState7,
							
							EventListPageState: EventListPageState7,
							EventCreatePageState: EventCreatePageState7,
							EventRetrievePageState: EventRetrievePageState7,
							EventUpdatePageState: EventUpdatePageState7,
							EventDeletePageState: EventDeletePageState7,
							
							EventCardListPageState: EventCardListPageState7,
							EventCardCreatePageState: EventCardCreatePageState7,
							EventCardRetrievePageState: EventCardRetrievePageState7,
							EventCardUpdatePageState: EventCardUpdatePageState7,
							EventCardDeletePageState: EventCardDeletePageState7,
							
							BlogListPageState: BlogListPageState7,
							BlogCreatePageState: BlogCreatePageState7,
							BlogRetrievePageState: BlogRetrievePageState7,
							BlogUpdatePageState: BlogUpdatePageState7,
							BlogDeletePageState: BlogDeletePageState7,
							
							BlogCardListPageState: BlogCardListPageState7,
							BlogCardCreatePageState: BlogCardCreatePageState7,
							BlogCardRetrievePageState: BlogCardRetrievePageState7,
							BlogCardUpdatePageState: BlogCardUpdatePageState7,
							BlogCardDeletePageState: BlogCardDeletePageState7,		
						}) : 
						import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? ({
							HeroListPageState: HeroListPageState8,
							HeroCreatePageState: HeroCreatePageState8,
							HeroRetrievePageState: HeroRetrievePageState8,
							HeroUpdatePageState: HeroUpdatePageState8,
							HeroDeletePageState: HeroDeletePageState8,
				
							AboutListPageState: AboutListPageState8,
							AboutCreatePageState: AboutCreatePageState8,
							AboutRetrievePageState: AboutRetrievePageState8,
							AboutUpdatePageState: AboutUpdatePageState8,
							AboutDeletePageState: AboutDeletePageState8,
							
							ExperienceListPageState: ExperienceListPageState8,
							ExperienceCreatePageState: ExperienceCreatePageState8,
							ExperienceRetrievePageState: ExperienceRetrievePageState8,
							ExperienceUpdatePageState: ExperienceUpdatePageState8,
							ExperienceDeletePageState: ExperienceDeletePageState8,
							
							ServiceListPageState: ServiceListPageState8,
							ServiceCreatePageState: ServiceCreatePageState8,
							ServiceRetrievePageState: ServiceRetrievePageState8,
							ServiceUpdatePageState: ServiceUpdatePageState8,
							ServiceDeletePageState: ServiceDeletePageState8,
							
							PortfolioListPageState: PortfolioListPageState8,
							PortfolioCreatePageState: PortfolioCreatePageState8,
							PortfolioRetrievePageState: PortfolioRetrievePageState8,
							PortfolioUpdatePageState: PortfolioUpdatePageState8,
							PortfolioDeletePageState: PortfolioDeletePageState8,
							
							PortfolioCardListPageState: PortfolioCardListPageState8,
							PortfolioCardCreatePageState: PortfolioCardCreatePageState8,
							PortfolioCardRetrievePageState: PortfolioCardRetrievePageState8,
							PortfolioCardUpdatePageState: PortfolioCardUpdatePageState8,
							PortfolioCardDeletePageState: PortfolioCardDeletePageState8,
							
							EventListPageState: EventListPageState8,
							EventCreatePageState: EventCreatePageState8,
							EventRetrievePageState: EventRetrievePageState8,
							EventUpdatePageState: EventUpdatePageState8,
							EventDeletePageState: EventDeletePageState8,
							
							EventCardListPageState: EventCardListPageState8,
							EventCardCreatePageState: EventCardCreatePageState8,
							EventCardRetrievePageState: EventCardRetrievePageState8,
							EventCardUpdatePageState: EventCardUpdatePageState8,
							EventCardDeletePageState: EventCardDeletePageState8,
							
							BlogListPageState: BlogListPageState8,
							BlogCreatePageState: BlogCreatePageState8,
							BlogRetrievePageState: BlogRetrievePageState8,
							BlogUpdatePageState: BlogUpdatePageState8,
							BlogDeletePageState: BlogDeletePageState8,
							
							BlogCardListPageState: BlogCardListPageState8,
							BlogCardCreatePageState: BlogCardCreatePageState8,
							BlogCardRetrievePageState: BlogCardRetrievePageState8,
							BlogCardUpdatePageState: BlogCardUpdatePageState8,
							BlogCardDeletePageState: BlogCardDeletePageState8,		
						}) : null
					) : null
				) :
				import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
			) : null
		) : null
	),

})  

export default RootReducer;
