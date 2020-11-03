import Vue from 'vue';
import Router from 'vue-router';
import Home from "../views/Home/Home";
import Describe from "../views/EDI/Describe";
import Contact from "../views/Support/Contact";
import Protocol from "../views/EDI/Protocol";
import Term from "../views/EDI/Term";
import BusinessDataFlowDiagram from "../views/GalanzEDI/BusinessDataFlowDiagram/BusinessDataFlowDiagram";
import GoodsDataFlowChart from "../views/GalanzEDI/BusinessDataFlowDiagram/GoodsDataFlowChart";
import LogisticsWarehousingFlowChart from "../views/GalanzEDI/BusinessDataFlowDiagram/LogisticsWarehousingFlowChart";
import Docking from "../views/GalanzEDI/Docking/Docking";
import HeadquartersDockingProcess from "../views/GalanzEDI/Docking/HeadquartersDockingProcess";
import OverseasCompaniesDockingProcess from "../views/GalanzEDI/Docking/OverseasCompaniesDockingProcess";
import TradeDockingProcess from "../views/GalanzEDI/Docking/TradeDockingProcess";
import WarehouseDockingProcess from "../views/GalanzEDI/Docking/WarehouseDockingProcess";
import Benefits from "../views/GalanzEDI/Benefits";
import CaseAnalysis from "../views/GalanzEDI/CaseAnalysis";
import GalanzEDIArchitectureDiagram from "../views/GalanzEDI/GalanzEDIArchitectureDiagram";
import Disambiguation from "../views/Support/Disambiguation";
import SystemDescribe from "../views/Support/SystemDescribe";
import EDIProgressAnnouncement from "../views/Announcement/EDIProgressAnnouncement";
import SystemUpgradeAnnouncement from "../views/Announcement/SystemUpgradeAnnouncement";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/EDI/Describe',
      name: 'Describe',
      component: Describe
    },
    {
      path: '/EDI/Protocol',
      name: 'Protocol',
      component: Protocol
    },
    {
      path: '/EDI/Term',
      name: 'Term',
      component: Term
    },
    {
      path: '/GalanzEDI/BusinessDataFlowDiagram/BusinessDataFlowDiagram',
      name: 'BusinessDataFlowDiagram',
      component: BusinessDataFlowDiagram
    },
    {
      path: '/GalanzEDI/BusinessDataFlowDiagram/GoodsDataFlowChart',
      name: 'GoodsDataFlowChart',
      component: GoodsDataFlowChart
    },
    {
      path: '/GalanzEDI/BusinessDataFlowDiagram/LogisticsWarehousingFlowChart',
      name: 'LogisticsWarehousingFlowChart',
      component: LogisticsWarehousingFlowChart
    },
    {
      path: '/GalanzEDI/Docking/Docking',
      name: 'Docking',
      component: Docking
    },
    {
      path: '/GalanzEDI/Docking/HeadquartersDockingProcess',
      name: 'HeadquartersDockingProcess',
      component: HeadquartersDockingProcess
    },
    {
      path: '/GalanzEDI/Docking/OverseasCompaniesDockingProcess',
      name: 'OverseasCompaniesDockingProcess',
      component: OverseasCompaniesDockingProcess
    },
    {
      path: '/GalanzEDI/Docking/TradeDockingProcess',
      name: 'TradeDockingProcess',
      component: TradeDockingProcess
    },
    {
      path: '/GalanzEDI/Docking/WarehouseDockingProcess',
      name: 'WarehouseDockingProcess',
      component: WarehouseDockingProcess
    },
    {
      path: '/GalanzEDI/Docking/WarehouseDockingProcess',
      name: 'WarehouseDockingProcess',
      component: WarehouseDockingProcess
    },
    {
      path: '/GalanzEDI/Benefits',
      name: 'Benefits',
      component: Benefits
    },
    {
      path: '/GalanzEDI/CaseAnalysis',
      name: 'CaseAnalysis',
      component: CaseAnalysis
    },
    {
      path: '/GalanzEDI/GalanzEDIArchitectureDiagram',
      name: 'GalanzEDIArchitectureDiagram',
      component: GalanzEDIArchitectureDiagram
    },
    {
      path: '/Support/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Support/SystemDescribe',
      name: 'SystemDescribe',
      component: SystemDescribe
    },
    {
      path: '/Support/Disambiguation',
      name: 'Disambiguation',
      component: Disambiguation
    },
    {
      path: '/Announcement/EDIProgressAnnouncement',
      name: 'EDIProgressAnnouncement',
      component: EDIProgressAnnouncement
    },
    {
      path: '/Announcement/SystemUpgradeAnnouncement',
      name: 'SystemUpgradeAnnouncement',
      component: SystemUpgradeAnnouncement
    },
  ]
})
