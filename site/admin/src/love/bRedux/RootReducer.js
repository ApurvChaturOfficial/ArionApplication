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

import CounterListPageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/aListPage/extra/State';
import CounterCreatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/bCreatePage/extra/State';
import CounterRetrievePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/cRetrievePage/extra/State';
import CounterUpdatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/dUpdatePage/extra/State';
import CounterDeletePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/bCounterPage/eDeletePage/extra/State';

import ProgramSectionListPageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/aListPage/extra/State';
import ProgramSectionCreatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/bCreatePage/extra/State';
import ProgramSectionRetrievePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/cRetrievePage/extra/State';
import ProgramSectionUpdatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/dUpdatePage/extra/State';
import ProgramSectionDeletePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/cProgramSectionPage/eDeletePage/extra/State';

import ProgramListPageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/aListPage/extra/State';
import ProgramCreatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/bCreatePage/extra/State';
import ProgramRetrievePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/cRetrievePage/extra/State';
import ProgramUpdatePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/dUpdatePage/extra/State';
import ProgramDeletePageState3 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/aTechfolioFirm/aTechfolioApplication/dProgramPage/eDeletePage/extra/State';

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

import CounterListPageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/aListPage/extra/State';
import CounterCreatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/bCreatePage/extra/State';
import CounterRetrievePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/cRetrievePage/extra/State';
import CounterUpdatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/dUpdatePage/extra/State';
import CounterDeletePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/bCounterPage/eDeletePage/extra/State';

import ProgramSectionListPageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/aListPage/extra/State';
import ProgramSectionCreatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/bCreatePage/extra/State';
import ProgramSectionRetrievePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/cRetrievePage/extra/State';
import ProgramSectionUpdatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/dUpdatePage/extra/State';
import ProgramSectionDeletePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/cProgramSectionPage/eDeletePage/extra/State';

import ProgramListPageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/aListPage/extra/State';
import ProgramCreatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/bCreatePage/extra/State';
import ProgramRetrievePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/cRetrievePage/extra/State';
import ProgramUpdatePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/dUpdatePage/extra/State';
import ProgramDeletePageState5 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/aBlogifyApplication/dProgramPage/eDeletePage/extra/State';

// Number 6
import HeroListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/aHeroPage/eDeletePage/extra/State';

import CounterListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/aListPage/extra/State';
import CounterCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/bCreatePage/extra/State';
import CounterRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/cRetrievePage/extra/State';
import CounterUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/dUpdatePage/extra/State';
import CounterDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/bCounterPage/eDeletePage/extra/State';

import AboutListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/aListPage/extra/State';
import AboutCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/cAboutPage/eDeletePage/extra/State';

import ServiceListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/dServicePage/eDeletePage/extra/State';

import ProjectSectionListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/aListPage/extra/State';
import ProjectSectionCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/bCreatePage/extra/State';
import ProjectSectionRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/cRetrievePage/extra/State';
import ProjectSectionUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/dUpdatePage/extra/State';
import ProjectSectionDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/hProjectSectionPage/eDeletePage/extra/State';

import ProjectGroupListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/aListPage/extra/State';
import ProjectGroupCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/bCreatePage/extra/State';
import ProjectGroupRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/cRetrievePage/extra/State';
import ProjectGroupUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/dUpdatePage/extra/State';
import ProjectGroupDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/iProjectGroupPage/eDeletePage/extra/State';

import ProjectListPageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/aListPage/extra/State';
import ProjectCreatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/bCreatePage/extra/State';
import ProjectRetrievePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/cRetrievePage/extra/State';
import ProjectUpdatePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/dUpdatePage/extra/State';
import ProjectDeletePageState6 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/bSrimadBhagwatamApplication/jProjectPage/eDeletePage/extra/State';

// Number 7
import HeroListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/aHeroPage/eDeletePage/extra/State';

import CounterListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/aListPage/extra/State';
import CounterCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/bCreatePage/extra/State';
import CounterRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/cRetrievePage/extra/State';
import CounterUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/dUpdatePage/extra/State';
import CounterDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/bCounterPage/eDeletePage/extra/State';

import AboutListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/aListPage/extra/State';
import AboutCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/cAboutPage/eDeletePage/extra/State';

import ServiceListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/dServicePage/eDeletePage/extra/State';

import ProjectSectionListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/aListPage/extra/State';
import ProjectSectionCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/bCreatePage/extra/State';
import ProjectSectionRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/cRetrievePage/extra/State';
import ProjectSectionUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/dUpdatePage/extra/State';
import ProjectSectionDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/hProjectSectionPage/eDeletePage/extra/State';

import ProjectGroupListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/aListPage/extra/State';
import ProjectGroupCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/bCreatePage/extra/State';
import ProjectGroupRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/cRetrievePage/extra/State';
import ProjectGroupUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/dUpdatePage/extra/State';
import ProjectGroupDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/iProjectGroupPage/eDeletePage/extra/State';

import ProjectListPageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/aListPage/extra/State';
import ProjectCreatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/bCreatePage/extra/State';
import ProjectRetrievePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/cRetrievePage/extra/State';
import ProjectUpdatePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/dUpdatePage/extra/State';
import ProjectDeletePageState7 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/cBhagwadGitaApplication/jProjectPage/eDeletePage/extra/State';

// Number 8
import HeroListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/aListPage/extra/State';
import HeroCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/bCreatePage/extra/State';
import HeroRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/cRetrievePage/extra/State';
import HeroUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/dUpdatePage/extra/State';
import HeroDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/aHeroPage/eDeletePage/extra/State';

import CounterListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/aListPage/extra/State';
import CounterCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/bCreatePage/extra/State';
import CounterRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/cRetrievePage/extra/State';
import CounterUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/dUpdatePage/extra/State';
import CounterDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/bCounterPage/eDeletePage/extra/State';

import AboutListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/aListPage/extra/State';
import AboutCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/bCreatePage/extra/State';
import AboutRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/cRetrievePage/extra/State';
import AboutUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/dUpdatePage/extra/State';
import AboutDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/cAboutPage/eDeletePage/extra/State';

import ServiceListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/aListPage/extra/State';
import ServiceCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/bCreatePage/extra/State';
import ServiceRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/cRetrievePage/extra/State';
import ServiceUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/dUpdatePage/extra/State';
import ServiceDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/dServicePage/eDeletePage/extra/State';

import ProjectSectionListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/aListPage/extra/State';
import ProjectSectionCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/bCreatePage/extra/State';
import ProjectSectionRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/cRetrievePage/extra/State';
import ProjectSectionUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/dUpdatePage/extra/State';
import ProjectSectionDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/hProjectSectionPage/eDeletePage/extra/State';

import ProjectGroupListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/aListPage/extra/State';
import ProjectGroupCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/bCreatePage/extra/State';
import ProjectGroupRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/cRetrievePage/extra/State';
import ProjectGroupUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/dUpdatePage/extra/State';
import ProjectGroupDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/iProjectGroupPage/eDeletePage/extra/State';

import ProjectListPageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/aListPage/extra/State';
import ProjectCreatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/bCreatePage/extra/State';
import ProjectRetrievePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/cRetrievePage/extra/State';
import ProjectUpdatePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/dUpdatePage/extra/State';
import ProjectDeletePageState8 from '../aPage/gSidebarPage/cMainPage/aBeehiveCorporation/cTadpoleOrganisation/bBellatrixEnterprise/bBlogifyFirm/dInterviewQuestionApplication/jProjectPage/eDeletePage/extra/State';





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
						
							CounterListPageState: CounterListPageState6,
							CounterCreatePageState: CounterCreatePageState6,
							CounterRetrievePageState: CounterRetrievePageState6,
							CounterUpdatePageState: CounterUpdatePageState6,
							CounterDeletePageState: CounterDeletePageState6,
						
							AboutListPageState: AboutListPageState6,
							AboutCreatePageState: AboutCreatePageState6,
							AboutRetrievePageState: AboutRetrievePageState6,
							AboutUpdatePageState: AboutUpdatePageState6,
							AboutDeletePageState: AboutDeletePageState6,
						
							ServiceListPageState: ServiceListPageState6,
							ServiceCreatePageState: ServiceCreatePageState6,
							ServiceRetrievePageState: ServiceRetrievePageState6,
							ServiceUpdatePageState: ServiceUpdatePageState6,
							ServiceDeletePageState: ServiceDeletePageState6,
						
							ProjectSectionListPageState: ProjectSectionListPageState6,
							ProjectSectionCreatePageState: ProjectSectionCreatePageState6,
							ProjectSectionRetrievePageState: ProjectSectionRetrievePageState6,
							ProjectSectionUpdatePageState: ProjectSectionUpdatePageState6,
							ProjectSectionDeletePageState: ProjectSectionDeletePageState6,
						
							ProjectGroupListPageState: ProjectGroupListPageState6,
							ProjectGroupCreatePageState: ProjectGroupCreatePageState6,
							ProjectGroupRetrievePageState: ProjectGroupRetrievePageState6,
							ProjectGroupUpdatePageState: ProjectGroupUpdatePageState6,
							ProjectGroupDeletePageState: ProjectGroupDeletePageState6,
						
							ProjectListPageState: ProjectListPageState6,
							ProjectCreatePageState: ProjectCreatePageState6,
							ProjectRetrievePageState: ProjectRetrievePageState6,
							ProjectUpdatePageState: ProjectUpdatePageState6,
							ProjectDeletePageState: ProjectDeletePageState6,		
						}) : 
						import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ? ({
							HeroListPageState: HeroListPageState7,
							HeroCreatePageState: HeroCreatePageState7,
							HeroRetrievePageState: HeroRetrievePageState7,
							HeroUpdatePageState: HeroUpdatePageState7,
							HeroDeletePageState: HeroDeletePageState7,
						
							CounterListPageState: CounterListPageState7,
							CounterCreatePageState: CounterCreatePageState7,
							CounterRetrievePageState: CounterRetrievePageState7,
							CounterUpdatePageState: CounterUpdatePageState7,
							CounterDeletePageState: CounterDeletePageState7,
						
							AboutListPageState: AboutListPageState7,
							AboutCreatePageState: AboutCreatePageState7,
							AboutRetrievePageState: AboutRetrievePageState7,
							AboutUpdatePageState: AboutUpdatePageState7,
							AboutDeletePageState: AboutDeletePageState7,
						
							ServiceListPageState: ServiceListPageState7,
							ServiceCreatePageState: ServiceCreatePageState7,
							ServiceRetrievePageState: ServiceRetrievePageState7,
							ServiceUpdatePageState: ServiceUpdatePageState7,
							ServiceDeletePageState: ServiceDeletePageState7,
						
							ProjectSectionListPageState: ProjectSectionListPageState7,
							ProjectSectionCreatePageState: ProjectSectionCreatePageState7,
							ProjectSectionRetrievePageState: ProjectSectionRetrievePageState7,
							ProjectSectionUpdatePageState: ProjectSectionUpdatePageState7,
							ProjectSectionDeletePageState: ProjectSectionDeletePageState7,
						
							ProjectGroupListPageState: ProjectGroupListPageState7,
							ProjectGroupCreatePageState: ProjectGroupCreatePageState7,
							ProjectGroupRetrievePageState: ProjectGroupRetrievePageState7,
							ProjectGroupUpdatePageState: ProjectGroupUpdatePageState7,
							ProjectGroupDeletePageState: ProjectGroupDeletePageState7,
						
							ProjectListPageState: ProjectListPageState7,
							ProjectCreatePageState: ProjectCreatePageState7,
							ProjectRetrievePageState: ProjectRetrievePageState7,
							ProjectUpdatePageState: ProjectUpdatePageState7,
							ProjectDeletePageState: ProjectDeletePageState7,		
						}) : 
						import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? ({
							HeroListPageState: HeroListPageState8,
							HeroCreatePageState: HeroCreatePageState8,
							HeroRetrievePageState: HeroRetrievePageState8,
							HeroUpdatePageState: HeroUpdatePageState8,
							HeroDeletePageState: HeroDeletePageState8,
						
							CounterListPageState: CounterListPageState8,
							CounterCreatePageState: CounterCreatePageState8,
							CounterRetrievePageState: CounterRetrievePageState8,
							CounterUpdatePageState: CounterUpdatePageState8,
							CounterDeletePageState: CounterDeletePageState8,
						
							AboutListPageState: AboutListPageState8,
							AboutCreatePageState: AboutCreatePageState8,
							AboutRetrievePageState: AboutRetrievePageState8,
							AboutUpdatePageState: AboutUpdatePageState8,
							AboutDeletePageState: AboutDeletePageState8,
						
							ServiceListPageState: ServiceListPageState8,
							ServiceCreatePageState: ServiceCreatePageState8,
							ServiceRetrievePageState: ServiceRetrievePageState8,
							ServiceUpdatePageState: ServiceUpdatePageState8,
							ServiceDeletePageState: ServiceDeletePageState8,
						
							ProjectSectionListPageState: ProjectSectionListPageState8,
							ProjectSectionCreatePageState: ProjectSectionCreatePageState8,
							ProjectSectionRetrievePageState: ProjectSectionRetrievePageState8,
							ProjectSectionUpdatePageState: ProjectSectionUpdatePageState8,
							ProjectSectionDeletePageState: ProjectSectionDeletePageState8,
						
							ProjectGroupListPageState: ProjectGroupListPageState8,
							ProjectGroupCreatePageState: ProjectGroupCreatePageState8,
							ProjectGroupRetrievePageState: ProjectGroupRetrievePageState8,
							ProjectGroupUpdatePageState: ProjectGroupUpdatePageState8,
							ProjectGroupDeletePageState: ProjectGroupDeletePageState8,
						
							ProjectListPageState: ProjectListPageState8,
							ProjectCreatePageState: ProjectCreatePageState8,
							ProjectRetrievePageState: ProjectRetrievePageState8,
							ProjectUpdatePageState: ProjectUpdatePageState8,
							ProjectDeletePageState: ProjectDeletePageState8,		
						}) : null
					) : null
				) :
				import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
			) : null
		) : null
	),

})  

export default RootReducer;
