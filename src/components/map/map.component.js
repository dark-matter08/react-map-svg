/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import world_map from "../../resources/maps/world.svg";
import map_list from "../../data/map_list.json";

export const Map = () => {
  const loadMap = () => {
    var map = document
      .getElementById("map")
      .contentDocument.querySelector("svg");
    var toolTip = document.getElementById("toolTip");

    // Add event listeners to map element
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // If user agent is not mobile add click listener (for wikidata links)
      map.addEventListener("click", handleClick, false);
    }
    map.addEventListener("mousemove", mouseEntered, false);
    map.addEventListener("mouseout", mouseGone, false);

    // Show tooltip on mousemove
    function mouseEntered(e) {
      var target = e.target;
      if (target.nodeName === "path") {
        target.style.opacity = 0.6;
        var details = e.target.attributes;
        console.log(details);

        const name = details.name.value;
        const local_name = details.gn_name.value;
        const country = details.admin.value;
        let postal;

        if (!details.postal) {
          postal = "";
        } else {
          postal = details.postal.value;
        }
        // Follow cursor
        toolTip.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

        // Tooltip data
        toolTip.innerHTML = `
              <ul style='padding: 10px; list-style: none; margin: 0; font-family: sans-serif; color: #000; font-size: 14px;'>
                  <li className='mb-3'><b>Province: ${name}</b></li>
                  <li className='mb-3'>Local name: ${local_name}</li>
                  <li className='mb-3'>Postal: ${postal}</li>
                  <li className='mb-3'>Country: ${country}</li>
              </ul>`;
      }
    }

    // Clear tooltip on mouseout
    function mouseGone(e) {
      var target = e.target;
      if (target.nodeName === "path") {
        target.style.opacity = 1;
        toolTip.innerHTML = "";
      }
    }

    // Go to wikidata page onclick
    function handleClick(e) {
      if (e.target.nodeName === "path") {
        var details = e.target.attributes;
        window.open(
          `https://www.wikidata.org/wiki/${details.wikidataid.value}`,
          "_blank"
        );
      }
    }
  };

  const loadWorldMap = () => {
    var map = document
      .getElementById("map")
      .contentDocument.querySelector("svg");

    var toolTip = document.getElementById("toolTip");

    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // If user agent is not mobile add click listener (for wikidata links)
      map.addEventListener("click", handleClick, false);
    }
    map.addEventListener("click", handleClick, false);

    map.addEventListener("mousemove", mouseEntered, false);
    map.addEventListener("mouseout", mouseGone, false);

    // Show tooltip on mousemove
    function mouseEntered(e) {
      var target = e.target;
      if (target.nodeName === "path") {
        target.style.opacity = 0.6;
        var details = e.target.attributes;

        const name = details.title.value;

        // Follow cursor
        toolTip.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

        // Tooltip data
        toolTip.innerHTML = `
                <ul style='padding: 10px; list-style: none; margin: 0; font-family: sans-serif; color: #000; font-size: 14px;'>
                    <li className='mb-3'><b>Country: ${name}</b></li>
                </ul>`;
      }
    }

    // Clear tooltip on mouseout
    function mouseGone(e) {
      var target = e.target;
      if (target.nodeName === "path") {
        target.style.opacity = 1;
        toolTip.innerHTML = "";
      }
    }

    function getPosition(el) {
      var xPos = 0;
      var yPos = 0;

      while (el) {
        if (el.tagName === "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          var yScroll = el.scrollTop || document.documentElement.scrollTop;

          xPos += el.offsetLeft - xScroll + el.clientLeft;
          yPos += el.offsetTop - yScroll + el.clientTop;
        } else {
          // for all other non-BODY elements
          xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
          yPos += el.offsetTop - el.scrollTop + el.clientTop;
        }

        el = el.offsetParent;
      }
      return {
        x: xPos,
        y: yPos,
      };
    }

    // Go to wikidata page onclick
    function handleClick(e) {
      var target = e.target;
      var xPosition = e.clientX;
      var yPosition = e.clientY;
      console.log(xPosition, yPosition);

      var x = window.innerWidth / 2;
      var y = window.innerHeight / 2;
      console.log(x, y);

      //   -=============== sub code ================-
      if (e.target.nodeName === "path") {
        console.log(target.attributes.class.value);
        // map.style.transform = "translate(-" + 0 + "px,-" + 0 + "px) scale(2)";
        if (target.attributes.class.value === "land") {
          console.log("yay, land");
        }
        target.style.left = x + "px";
        target.style.top = y + "px";
        map.style.transition = "0.6s ease-out";
      } else {
        map.style.transform = "translate(-" + 0 + "px,-" + 0 + "px) scale(1)";
        map.style.transition = "0.6s ease-out";
      }
    }
  };

  window.onload = function () {
    // Init map
    // loadMap();
    loadWorldMap();
  };

  const tooltipStyle = {
    position: "absolute",
    transition: "0.2s ease-out",
    backgroundColor: "#ecf0f1",
    borderRadius: "3px",
    zIndex: 9999,
    pointerEvents: "none",
  };

  const mapObject = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: 998,
    display: "block",
    margin: "auto",
  };

  const mapWrapper = {
    width: "100%",
    height: "100%",
    margin: "auto",
  };

  const componentMain = {
    padding: "30px",
    position: "relative",
    backgroundColor: "#fff",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div style={componentMain}>
      <div style={mapWrapper}>
        <div style={tooltipStyle} id="toolTip"></div>
        <object
          style={mapObject}
          id="map"
          data={world_map}
          type="image/svg+xml"
          alt=""
          aria-label="map"
        ></object>
      </div>
    </div>
  );
};
