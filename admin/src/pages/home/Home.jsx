import React from "react";

// Components
import FeatureInfo from "../../components/featuredInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

// data
import { userData } from "../../dummyData";

// css
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
