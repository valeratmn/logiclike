import React from "react";
import Tab from "../Tab/Tab";
import { ALL_TOPICS } from "../../constants";
import "./Tabs.scss";

interface ITabsProps {
  tabs: Set<string>;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

function Tabs({ tabs, activeTab, onTabChange }: ITabsProps) {
  return (
    <div className="tabsContainer">
      <Tab
        key="ALL"
        tab={ALL_TOPICS}
        isActive={activeTab === ALL_TOPICS}
        onClick={onTabChange}
      />
      {[...tabs].map((tab) => (
        <Tab
          key={tab}
          tab={tab}
          isActive={activeTab === tab}
          onClick={onTabChange}
        />
      ))}
    </div>
  );
}

export default React.memo(Tabs);
