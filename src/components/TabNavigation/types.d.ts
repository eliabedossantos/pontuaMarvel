import { ITab } from "../../pages/Profile/types";

export interface ITabNavigationProps {
    activeTab?: any;
    onTabChange?: (tab: ITab) => void;
    tabs?: ITab[];
}
