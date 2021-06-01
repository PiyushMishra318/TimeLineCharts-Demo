import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

const App = () => {
  const chart = useRef(null);

  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [contextItem, setContextItem] = useState({ show: false });

  let os = [
    { name: "Windows Phone", value: "Windows Phone", version: "OS" },
    { name: "Windows", value: "Win", version: "NT" },
    { name: "iPhone", value: "iPhone", version: "OS" },
    { name: "iPad", value: "iPad", version: "OS" },
    { name: "Kindle", value: "Silk", version: "Silk" },
    { name: "Android", value: "Android", version: "Android" },
    { name: "PlayBook", value: "PlayBook", version: "OS" },
    { name: "BlackBerry", value: "BlackBerry", version: "/" },
    { name: "Macintosh", value: "Mac", version: "OS X" },
    { name: "Linux", value: "Linux", version: "rv" },
    { name: "Palm", value: "Palm", version: "PalmOS" },
  ];

  let browser = [
    { name: "Chrome", value: "Chrome", version: "Chrome" },
    { name: "Firefox", value: "Firefox", version: "Firefox" },
    { name: "Safari", value: "Safari", version: "Version" },
    { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
    { name: "Opera", value: "Opera", version: "Opera" },
    { name: "BlackBerry", value: "CLDC", version: "CLDC" },
    { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
  ];

  let header = [
    navigator.platform,
    navigator.userAgent,
    navigator.appVersion,
    navigator.vendor,
    window.opera,
  ];

  function matchItem(string, data) {
    var i = 0,
      j = 0,
      html = "",
      regex,
      regexv,
      match,
      matches,
      version;

    for (i = 0; i < data.length; i += 1) {
      regex = new RegExp(data[i].value, "i");
      match = regex.test(string);
      if (match) {
        regexv = new RegExp(data[i].version + "[- /:;]([d._]+)", "i");
        matches = string.match(regexv);
        version = "";
        if (matches) {
          if (matches[1]) {
            matches = matches[1];
          }
        }
        if (matches) {
          matches = matches.split(/[._]+/);
          for (j = 0; j < matches.length; j += 1) {
            if (j === 0) {
              version += matches[j] + ".";
            } else {
              version += matches[j];
            }
          }
        } else {
          version = "0";
        }
        return {
          name: data[i].name,
          version: parseFloat(version),
        };
      }
    }
    return { name: "unknown", version: 0 };
  }

  useEffect(() => {
    let agent = header.join(" ");
    let os_1 = matchItem(agent, os);
    let browser_1 = matchItem(agent, browser);
    console.log(os_1, browser_1);
  }, []);

  useLayoutEffect(() => {
    // initialize timeline chart
    let x = am4core.create("chartdiv", am4plugins_timeline.CurveChart);

    // padding for idk couldn't find any visual changes on changing the values
    x.curveContainer.padding(0, 0, 0, 0);

    // if set to true icons dissapear
    x.maskBullets = false;

    // color set to use in data points
    // let colorSet = new am4core.ColorSet();

    // format for dates in data set
    x.dateFormatter.inputDateFormat = "YYYY-MM-DDTHH:mm:ss.sssZ";

    // dont understand what this is
    x.dateFormatter.dateFormat = "HH";

    // data set for rendering values on the timeline chart
    x.data = [
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:01:48.541Z",
        end: "2019-01-10T08:01:48.541Z",
        icon: icons.live,
        text: "Wake up!",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:10:48.541Z",
        end: "2019-01-10T08:10:48.541Z",
        icon: icons.live,
        text: "Drink water",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:15:48.541Z",
        end: "2019-01-10T08:15:48.541Z",
        icon: icons.live,
        text: "Exercise",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:18:48.541Z",
        end: "2019-01-10T08:18:48.541Z",
        icon: icons.live,
        text: "Have breakfast",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:20:48.541Z",
        end: "2019-01-10T08:20:48.541Z",
        icon: icons.live,
        text: "Drive to work",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:10:48.541Z",
        end: "2019-01-10T08:10:48.541Z",
        icon: icons.live,
        text: "Work",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:25:48.541Z",
        end: "2019-01-10T08:25:48.541Z",
        icon: icons.live,
        text: "Coffee",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:40:48.541Z",
        end: "2019-01-10T08:40:48.541Z",
        icon: icons.live,
        text: "Dinner",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:34:48.541Z",
        end: "2019-01-10T08:34:48.541Z",
        icon: icons.live,
        text: "Coffee",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:44:48.541Z",
        end: "2019-01-10T08:44:48.541Z",
        icon: icons.live,
        text: "Drive home",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:04:48.541Z",
        end: "2019-01-10T08:04:48.541Z",
        icon: icons.live,
        text: "Home!",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:50:48.541Z",
        end: "2019-01-10T08:50:48.541Z",
        icon: icons.live,
        text: "Read a bit",
      },
      {
        category: "live",
        color: "#dc6788",
        start: "2019-01-10T08:53:48.541Z",
        end: "2019-01-10T08:53:48.541Z",
        icon: icons.live,
        text: "Have a beer",
      },
      {
        category: "",
        color: "#dc8c67",
        start: "2019-01-10T08:13:48.541Z",
        end: "2019-01-10T08:13:48.541Z",
        icon: icons.update,
        text: "Have another beer",
      },
      {
        category: "",
        color: "#dc8c67",
        start: "2019-01-10T08:48:48.541Z",
        end: "2019-01-10T08:48:48.541Z",
        icon: icons.update,
        text: "Dance!",
      },
      {
        category: "",
        color: "#dc8c67",
        start: "2019-01-10T08:32:48.541Z",
        end: "2019-01-10T08:32:48.541Z",
        icon: icons.update,
        text: "Martini!",
      },
      {
        category: "",
        color: "#dc8c67",
        start: "2019-01-10T08:30:48.541Z",
        end: "2019-01-10T08:30:48.541Z",
        icon: icons.update,
        text: "Damn...",
      },
      {
        category: "",
        color: "#dc8c67",
        start: "2019-01-10T08:57:48.541Z",
        end: "2019-01-10T08:57:48.541Z",
        icon: icons.update,
        text: "Bye bye",
      },
    ];

    // fontsize for text inside the timeline chart
    x.fontSize = 10;

    // tooltip fontsize
    x.tooltipContainer.fontSize = 10;

    // category axis i.e the colored line
    let categoryAxis = x.yAxes.push(new am4charts.CategoryAxis());
    // category data field is mapped to category in data set
    categoryAxis.dataFields.category = "category";

    // some lines are disabled when this is set to true
    categoryAxis.renderer.grid.template.disabled = true;
    // i have no idea what this is
    categoryAxis.renderer.labels.template.paddingRight = 25;
    // again no idea
    categoryAxis.renderer.minGridDistance = 10;
    // this kinda messus up the ui so keeping this at 10 is ideal
    categoryAxis.renderer.innerRadius = 10;
    // width of the timeline mainline. I find 30 as ideal.
    categoryAxis.renderer.radius = 30;

    // initialize date axis i.e the line where the date is being shown
    let dateAxis = x.xAxes.push(new am4charts.DateAxis());

    // get all thr points that need to rendered in the date axis
    dateAxis.renderer.points = getPoints();

    // can't tell if any of these matter
    dateAxis.renderer.autoScale = false;
    dateAxis.renderer.autoCenter = true;
    dateAxis.renderer.minGridDistance = 200;

    // unti distance between every point on the date scale
    dateAxis.baseInterval = { count: 1, timeUnit: "minute" };

    // can't tell if this matters
    dateAxis.renderer.tooltipLocation = 10;

    // changes the stroke count and density set to original right ow can be changes based on use cases
    dateAxis.renderer.line.strokeDasharray = "1,4";

    // opacity of strokes set to  for transparency
    dateAxis.renderer.line.strokeOpacity = 0.5;

    // didnt seem to matter much on the ui
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;

    // this is just the background color for the tooltip i think not really sure
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );

    // the toppadding for the date axis tooltip
    dateAxis.tooltip.label.paddingTop = 7;

    // dont know what these are for
    dateAxis.endLocation = -0.5;
    dateAxis.startLocation = -0.5;

    // important this is the start and end point for the timeline chart
    dateAxis.min = new Date(2019, 0, 9, 23, 55).getTime();
    dateAxis.max = new Date(2019, 0, 11, 7, 10).getTime();

    // the text for every x interval in date axis
    let labelTemplate = dateAxis.renderer.labels.template;
    // alignment
    labelTemplate.verticalCenter = "middle";
    // opacity for the label
    labelTemplate.fillOpacity = 0.6;
    // background for the label
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    // fill opacity
    labelTemplate.background.fillOpacity = 1;
    // fill color
    labelTemplate.fill = new am4core.InterfaceColorSet().getFor("text");
    // padding around the label
    labelTemplate.padding(7, 7, 7, 7);

    // series init
    let series = x.series.push(new am4plugins_timeline.CurveColumnSeries());
    // this also changes the width of the category line
    series.columns.template.height = am4core.percent(30);

    // set series field by the field names
    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";

    // set baseAxis
    series.baseAxis = categoryAxis;
    // apply the color from the data set
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";

    // stroke opacity for the catgeory axis "0" looks better
    series.columns.template.strokeOpacity = 0;
    // fill opacity
    series.columns.template.fillOpacity = 0.6;

    // add bullets to the series data
    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    // radius for the bullet
    imageBullet1.background.radius = 18;
    // location for the bullet to appear on x axis
    imageBullet1.locationX = 1;
    // set color same as in given data
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    // add the image to the bullet same as given in data
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    // set the scale of the image
    imageBullet1.image.scale = 0.7;
    // radius of the bullet circle
    imageBullet1.circle.radius = am4core.percent(100);
    // opacities for the bullet
    imageBullet1.background.fillOpacity = 0.8;
    imageBullet1.background.strokeOpacity = 0;
    // idk what this is and it also doesnt matter much on the ui so not important
    imageBullet1.dy = -2;

    // base with and length for the pointer
    imageBullet1.background.pointerBaseWidth = 10;
    imageBullet1.background.pointerLength = 10;
    // tooltip template should show what field from data set
    imageBullet1.tooltipText = "{text}";

    // pointer orientation
    series.tooltip.pointerOrientation = "up";

    // background for the bullet
    imageBullet1.background.adapter.add("pointerAngle", (value, target) => {
      if (target.dataItem) {
        let position = dateAxis.valueToPosition(
          target.dataItem.openDateX.getTime()
        );
        return dateAxis.renderer.positionToAngle(position);
      }
      return value;
    });

    // create hiver state for the bullet
    let hs = imageBullet1.states.create("hover");

    // scale the bullet by this much on hover
    hs.properties.scale = 1.3;
    // modify opacity on hover
    hs.properties.opacity = 1;

    // init text bullet
    let textBullet = series.bullets.push(new am4charts.LabelBullet());
    // assign property name
    textBullet.label.propertyFields.text = "text";
    // enable disable text for the bullet points
    textBullet.disabled = true;
    // text disbaled map
    textBullet.propertyFields.disabled = "textDisabled";
    // opacity location on x axis y axis and text allignment
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = -100;
    textBullet.label.textAlign = "middle";

    // initialize the scrollbar
    x.scrollbarX = new am4core.Scrollbar();

    // allignment for the scrollbar
    x.scrollbarX.align = "center";
    // width for the scrollbar
    x.scrollbarX.width = am4core.percent(75);
    //set the parent for the scrollbar
    x.scrollbarX.parent = x.curveContainer;
    // height pf the scrollbar
    x.scrollbarX.height = 300;
    // orientation fo the scrollbar
    x.scrollbarX.orientation = "vertical";
    // x and y coordinates for the scrollbar
    x.scrollbarX.x = 128;
    x.scrollbarX.y = -140;
    // dont know what this is
    x.scrollbarX.isMeasured = false;
    // opacoty for the scrollbar
    x.scrollbarX.opacity = 0.5;

    // cursor init
    let cursor = new am4plugins_timeline.CurveCursor();
    // set cursor
    x.cursor = cursor;
    // cursor axises
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;

    // cursor line x and y disable property when set to two doesnt show grid lines on hover
    cursor.lineY.disabled = true;
    cursor.lineX.disabled = true;

    // tootip location for date axis
    dateAxis.renderer.tooltipLocation2 = 0;
    //c ursor tooltip for category axis
    categoryAxis.cursorTooltipEnabled = false;

    // zoom out button
    x.zoomOutButton.disabled = false;

    // this for automated visiting every event on the data set

    // let previousBullet;

    // x.events.on("inited", function () {
    //   setTimeout(function () {
    //     hoverItem(series.dataItems.getIndex(0));
    //   }, 2000);
    // });
    imageBullet1.events.on(
      "hit",
      function (params) {
        setCords({
          x:
            params.event.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft -
            0,
          y:
            params.event.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop -
            0,
        });
        setContextItem({
          ...params.target.dataItem._dataContext,
          show: true,
        });
      },
      this
    );

    // function hoverItem(dataItem) {
    //   let bullet = dataItem.bullets.getKey(imageBullet1.uid);
    //   let index = dataItem.index;

    //   if (index >= series.dataItems.length - 1) {
    //     index = -1;
    //   }

    //   if (bullet) {
    //     if (previousBullet) {
    //       previousBullet.isHover = false;
    //     }

    //     bullet.isHover = true;

    //     previousBullet = bullet;
    //   }
    //   setTimeout(function () {
    //     hoverItem(series.dataItems.getIndex(index + 1));
    //   }, 1000);
    // }

    chart.current = x;
    return () => {
      x.dispose();
    };
  }, []);

  // this function generates the curves in the timeline chart
  function getPoints() {
    let points = [
      { x: -1300, y: 200 },
      { x: 0, y: 200 },
    ];

    let w = 400;
    let h = 400;
    let levelCount = 4;

    let radius = am4core.math.min(w / (levelCount - 1) / 2, h / 2);
    let startX = radius;

    for (let i = 0; i < 25; i++) {
      let angle = 0 + (i / 25) * 90;
      let centerPoint = { y: 200 - radius, x: 0 };
      points.push({
        y: centerPoint.y + radius * am4core.math.cos(angle),
        x: centerPoint.x + radius * am4core.math.sin(angle),
      });
    }

    for (let i = 0; i < levelCount; i++) {
      if (i % 2 !== 0) {
        points.push({
          y: -h / 2 + radius,
          x: startX + (w / (levelCount - 1)) * i,
        });
        points.push({
          y: h / 2 - radius,
          x: startX + (w / (levelCount - 1)) * i,
        });

        let centerPoint = {
          y: h / 2 - radius,
          x: startX + (w / (levelCount - 1)) * (i + 0.5),
        };
        if (i < levelCount - 1) {
          for (let k = 0; k < 50; k++) {
            let angle = -90 + (k / 50) * 180;
            points.push({
              y: centerPoint.y + radius * am4core.math.cos(angle),
              x: centerPoint.x + radius * am4core.math.sin(angle),
            });
          }
        }

        if (i === levelCount - 1) {
          points.pop();
          points.push({ y: -radius, x: startX + (w / (levelCount - 1)) * i });
          let centerPoint = {
            y: -radius,
            x: startX + (w / (levelCount - 1)) * (i + 0.5),
          };
          for (let k = 0; k < 25; k++) {
            let angle = -90 + (k / 25) * 90;
            points.push({
              y: centerPoint.y + radius * am4core.math.cos(angle),
              x: centerPoint.x + radius * am4core.math.sin(angle),
            });
          }
          points.push({ y: 0, x: 1300 });
        }
      } else {
        points.push({
          y: h / 2 - radius,
          x: startX + (w / (levelCount - 1)) * i,
        });
        points.push({
          y: -h / 2 + radius,
          x: startX + (w / (levelCount - 1)) * i,
        });
        let centerPoint = {
          y: -h / 2 + radius,
          x: startX + (w / (levelCount - 1)) * (i + 0.5),
        };
        if (i < levelCount - 1) {
          for (let k = 0; k < 50; k++) {
            let angle = -90 - (k / 50) * 180;
            points.push({
              y: centerPoint.y + radius * am4core.math.cos(angle),
              x: centerPoint.x + radius * am4core.math.sin(angle),
            });
          }
        }
      }
    }

    return points;
  }

  return (
    <div className="App" style={{ position: "relative" }}>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      {contextItem.show && (
        <div
          className="cms-context-menu cms-shadow"
          // onMouseLeave={() => clearContext({ ...file, show: false })}
          // onContextMenu={(e) => e.preventDefault()}
          style={{
            top: `${cords.y}px`,
            left: `${cords.x}px`,
            position: "absolute",
            zIndex: 9999,
          }}
        >
          {JSON.stringify(contextItem)}
        </div>
      )}
    </div>
  );
};

export default App;
