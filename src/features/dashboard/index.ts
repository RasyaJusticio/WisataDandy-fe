import { Column, Row } from "./components/ui/Table";

export { default as DashboardSidebar } from "./components/layout/Sidebar";
export { default as DashboardTable } from "./components/ui/Table";
export { default as DashboardModal } from "./components/ui/Modal";

export { default as DestinationCreateForm } from "./components/forms/DestinationCreateForm";
export { default as DestinationReadForm } from "./components/forms/DestinationReadForm";
export { default as DestinationUpdateForm } from "./components/forms/DestinationUpdateForm";
export { default as DestinationDeleteForm } from "./components/forms/DestinationDeleteForm";

export { destinationSchema } from "./types/DestinationSchema";
export type { DestinationSchema } from "./types/DestinationSchema";
export { facilitySchema } from "./types/FacilitySchema";
export type { FacilitySchema } from "./types/FacilitySchema";

export type { default as DestinationObject } from "./types/DestinationObject";
export type { default as FacilityObject } from "./types/FacilityObject";

export { default as destinationService } from "./services/destinationService";
export { default as facilityService } from "./services/facilityService";

export { destinationColumns, facilityColumns } from "./data/columns";

export type { Column as TableColumn, Row as TableRow };
