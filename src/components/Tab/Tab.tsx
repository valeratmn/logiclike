import React from "react";
import "./Tab.scss";

interface ITabProps {
  tab: string;
  isActive: boolean;
  onClick: (tab: string) => void;
}

function Tab({ tab, isActive, onClick }: ITabProps) {
  return (
    <button
      onClick={() => onClick(tab)}
      className={`tab ${isActive ? "active" : ""}`}
    >
      {tab}
    </button>
  );
}

export default React.memo(Tab);
