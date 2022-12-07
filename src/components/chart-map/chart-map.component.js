import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldHigh";
am4core.useTheme(am4themes_animated);

const data = [
  {
    id: "DE",
    name: "Germany",
    value: 20,
    fill: am4core.color("#F05C5C"),
  },
  {
    id: "CM",
    name: "Cameroon",
    value: 78,
    fill: am4core.color("#F05C5C"),
  },
];

const empl_data = [
  {
    latitude: 5.9597,
    longitude: 10.14597,
    title: "Bamenda: 4",
  },
  {
    latitude: 3.86667,
    longitude: 11.51667,
    title: "Yaoundé: 6",
  },
  {
    latitude: 4.04827,
    longitude: 9.70428,
    title: "Douala: 10",
  },
  {
    latitude: 4.15342,
    longitude: 9.24231,
    title: "Buea: 60",
  },
  {
    latitude: 52.52437,
    longitude: 13.41053,
    title: "Berlin: 2",
  },
  {
    latitude: 48.13743,
    longitude: 11.57549,
    title: "Munich: 2",
  },
  {
    latitude: 47.77435,
    longitude: 7.64142,
    title: "Feldberg (Black Forest)",
  },
];

const countries = ["germany", "cameroon"];

export const ChartMap = ({
  world_fill = "#0c0c0c",
  world_hover = "#a0a0a0",
  country_fill = "#3498db",
  country_hover = "#F05C5C",
}) => {
  useEffect(() => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();
    map.zoomControl = new am4maps.ZoomControl();

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.data = data;
    map.series.push(polygonSeries);

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color(world_fill);

    // zoom to country on click
    polygonTemplate.events.on("hit", function (ev) {
      ev.target.series.chart.zoomToMapObject(ev.target);
    });

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(world_hover);

    polygonSeries.exclude = ["AQ"];

    // ============= loop here to overlap countries maps==============

    countries.map((country, _) => {
      let countrySeries = map.series.push(new am4maps.MapPolygonSeries());
      countrySeries.geodata = require(`@amcharts/amcharts4-geodata/${country}High`);
    });

    let imageSeries = map.series.push(new am4maps.MapImageSeries());

    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#B27799");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    imageSeries.data = empl_data;

    map.smallMap = new am4maps.SmallMap();
    map.smallMap.series.push(polygonSeries);

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "100%" }}></div>;
};
