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
					) : null
				) :
				import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
			) : null
		) : null
	),

})  

export default RootReducer;
