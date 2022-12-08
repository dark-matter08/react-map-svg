import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldHigh";

am4core.useTheme(am4themes_animated);

export const ChartMap = ({
  world_fill = "#0c0c0c",
  world_hover = "#a0a0a0",
  country_fill = "#3498db",
  country_hover = "#F05C5C",
  marker_fill = "#B27799",
  marker_stroke = "#FFFFFF",
  marker_dim = 10,
  small_map = true,
  zoom_on_click = true,
  marker_data = [],
  data = [],
  projection = "Projection",
  addAntartica = false,
  code_geodata = [],
}) => {
  useEffect(() => {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.zoomControl = new am4maps.ZoomControl();

    let home = map.chartContainer.createChild(am4core.Button);
    home.label.text = "Reset";
    home.align = "right";
    home.events.on("hit", function (ev) {
      map.goHome();
    });

    // configure projection

    if (projection === "Albers") {
      map.projection = new am4maps.projections.Albers();
    } else if (projection === "Miller") {
      map.projection = new am4maps.projections.Miller();
    } else if (projection === "AlbersUsa") {
      map.projection = new am4maps.projections.AlbersUsa();
    } else if (projection === "AzimuthalEqualArea") {
      map.projection = new am4maps.projections.AzimuthalEqualArea();
    } else if (projection === "Eckert6") {
      map.projection = new am4maps.projections.Eckert6();
    } else if (projection === "EqualEarth") {
      map.projection = new am4maps.projections.EqualEarth();
    } else if (projection === "Projection") {
      map.projection = am4maps.projections.Projection();
    } else if (projection === "Mercator") {
      map.projection = new am4maps.projections.Mercator();
    } else if (projection === "NaturalEarth1") {
      map.projection = new am4maps.projections.NaturalEarth1();
    } else if (projection === "Orthographic") {
      map.projection = new am4maps.projections.Orthographic();
    } else if (projection === "Stereographic") {
      map.projection = new am4maps.projections.Stereographic();
    } else {
      map.projection = am4maps.projections.Projection();
      console.log("Projection defaultes to Projectsion");
    }

    let polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.data = data;
    map.series.push(polygonSeries);

    // map filling
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color(world_fill);

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(world_hover);

    if (!addAntartica) {
      polygonSeries.exclude = ["AQ"];
    }
    // zoom to country on click
    if (zoom_on_click) {
      polygonTemplate.events.on("hit", function (ev) {
        ev.target.series.chart.zoomToMapObject(ev.target);
      });
    }

    // ============= loop here to overlap countries maps==============

    code_geodata.map(({ code, geodata }, _) => {
      let countrySeries = map.series.push(new am4maps.MapPolygonSeries());
      countrySeries.geodata = geodata;

      let countryTemplate = countrySeries.mapPolygons.template;
      countryTemplate.tooltipText = "{name}";
      countryTemplate.fill = am4core.color(country_fill);

      // zoom to country on click
      countryTemplate.events.on("hit", function (ev) {
        ev.target.series.chart.zoomToMapObject(ev.target);
        const country = ev.target.dataItem.dataContext.CNTRY;
        const placeName = ev.target.dataItem.dataContext.name;
        console.log(`clicked on ${placeName} - ${country}`);
      });

      // Create hover state and set alternative fill color
      let countryhs = countryTemplate.states.create("hover");
      countryhs.properties.fill = am4core.color(country_hover);

      return "";
    });

    let imageSeries = map.series.push(new am4maps.MapImageSeries());

    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.width = marker_dim;
    circle.height = marker_dim;
    circle.fill = am4core.color(marker_fill);
    circle.stroke = am4core.color(marker_stroke);
    circle.strokeWidth = 1;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    imageSeries.data = marker_data;

    if (small_map) {
      map.smallMap = new am4maps.SmallMap();
      map.smallMap.series.push(polygonSeries);
    }

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, [
    world_fill,
    world_hover,
    country_fill,
    country_hover,
    small_map,
    marker_data,
    marker_dim,
    marker_fill,
    marker_stroke,
    code_geodata,
    data,
    zoom_on_click,
    projection,
    addAntartica,
  ]);

  return (
    <div
      id="chartdiv"
      className="border-2"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};
