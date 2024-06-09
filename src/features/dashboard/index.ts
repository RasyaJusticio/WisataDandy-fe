import { Column, Row } from "./components/Table";

export { default as DashboardSidebar } from "./components/Sidebar";
export { default as DashboardTable } from "./components/Table";
export { default as destinationService } from "./services/destinationService";
export { default as facilityService } from "./services/facilityService";
export { destinationColumns, facilityColumns } from "./data/columns";

export type { Column as TableColumn, Row as TableRow };
