import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/amchartsdark";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

const App = () => {
  const chart = useRef(null);

  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([
    {
      category: "",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc8c67",
      start: "2021-05-28T06:18:12.199Z",
      end: "2021-05-28T06:18:26.452Z",
      text: "delex Initialized",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "53f677043af15d78dbad12293794b96f85e65d52",
      files_modified: 53,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc6788",
      start: "2021-05-28T06:19:34.564Z",
      end: "2021-05-28T06:19:43.040Z",
      text: "Project Published",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "651fe2384361678c0500cd78d3a630812516f4e6",
      files_modified: 50,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc6788",
      start: "2021-05-28T06:19:34.564Z",
      end: "2021-05-28T06:19:55.707Z",
      text: "Project Published",
      author: {},
      ip: "103.54.145.89",
      files_modified: 1,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc6788",
      start: "2021-05-28T06:58:42.694Z",
      end: "2021-05-28T06:58:46.546Z",
      text: "undefined Published",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "b82f2281a9f1ff423dd71ff286e9a0a1c47d66f0",
      files_modified: 1,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc6788",
      start: "2021-05-28T07:02:08.283Z",
      end: "2021-05-28T07:02:11.863Z",
      text: "undefined Published",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "0dd8de3b43e42ae1e86c49da85dbee5923c73c26",
      files_modified: 1,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc6788",
      start: "2021-05-28T07:03:46.042Z",
      end: "2021-05-28T07:03:49.749Z",
      text: "undefined Published",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "db5b3b60cd6c02472aa9019a2a9b35579ebccaa0",
      files_modified: 1,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc6788",
      start: "2021-05-28T07:04:53.936Z",
      end: "2021-05-28T07:04:57.399Z",
      text: "font-awesome Published",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "fbcfe79b2f336cccbe961cdce718ae9a5cc0a55b",
      files_modified: 1,
    },
    {
      category: "",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc8c67",
      start: "2021-05-28T07:16:48.074Z",
      end: "2021-05-28T07:16:52.092Z",
      text: "test4 duplicated",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "9fa0c3fdeb8e83dd3da7b8769d15fb2c8c902537",
      files_modified: 1,
    },
    {
      category: "",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc8c67",
      start: "2021-05-28T09:13:53.025Z",
      end: "2021-05-28T09:14:00.283Z",
      text: "index updated",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "d9a406f1c58e5e60e962860c6d1c89cac91ee6b9",
      files_modified: 1,
    },
    {
      category: "",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc8c67",
      start: "2021-05-28T09:21:45.364Z",
      end: "2021-05-28T09:21:48.866Z",
      text: "index updated",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "907eb9d5b5355abd2d2cb6e5eaba09212c229345",
      files_modified: 1,
    },
    {
      category: "",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc8c67",
      start: "2021-05-28T09:23:26.315Z",
      end: "2021-05-28T09:23:29.617Z",
      text: "test4 updated",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "d304a7babbe660fd0b336bd1068e6cc7dd665d8b",
      files_modified: 1,
    },
    {
      category: "",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc8c67",
      start: "2021-05-28T09:25:36.805Z",
      end: "2021-05-28T09:25:41.079Z",
      text: "index connected pages updated",
      author: {},
      ip: "103.54.145.89",
      commit_sha: "1442f8464e7b9fbd3903a2400dc3491db166ecb6",
      files_modified: 1,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/draft-2.svg",
      color: "#dc6788",
      start: "2021-05-28T09:33:42.330Z",
      end: "2021-05-28T09:34:05.794Z",
      text: "index Published",
      author: {},
      ip: "103.54.145.89",
      files_modified: 1,
    },
    {
      category: "live",
      icon: "https://d2k0c7enpjtp6n.cloudfront.net/icons/publish.svg",
      color: "#dc6788",
      start: "2021-06-05T06:22:57.539Z",
      end: "2021-06-05T06:23:16.557Z",
      text: "index Published",
      author: {},
      os: "Windows",
      ip: "103.54.145.13",
      files_modified: 1,
    },
  ]);

  const calculateBaseInterval = (data) => {
    let av = 0;
    data.map((item) => {
      av += new Date(item.end).getTime() - new Date(item.start).getTime();
    });
    av = av / data.length;
    if (av < 1000 * 60) {
      return { count: 1, timeUnit: "minute" };
    } else if (av < 5 * 1000 * 60 && av > 1000 * 60) {
      return { count: 1, timeUnit: "minute" };
    } else if (av < 10 * 1000 * 60 && av > 5 * 1000 * 60) {
      return { count: 5, timeUnit: "minute" };
    } else if (av < 20 * 1000 * 60 && av > 10 * 1000 * 60) {
      return { count: 10, timeUnit: "minute" };
    } else if (av < 30 * 1000 * 60 && av > 15 * 1000 * 60) {
      return { count: 15, timeUnit: "minute" };
    } else if (av < 60 * 1000 * 60 && av > 30 * 1000 * 60) {
      return { count: 30, timeUnit: "minute" };
    } else if (av < 3 * 60 * 1000 * 60 && av > 60 * 1000 * 60) {
      return { count: 1, timeUnit: "hour" };
    } else {
      console.log("over 3 hours");
      return { count: 3, timeUnit: "hour" };
    }
  };

  const [contextItem, setContextItem] = useState({ show: false });

  const processDataSet = (data) => {
    return data.map((obj, i) => {
      if (i + 1 < data.length) obj["end"] = data[i + 1].start;
      return obj;
    });
  };

  useLayoutEffect(() => {
    // initialize timeline chart
    let x = am4core.create("chartdiv", am4plugins_timeline.CurveChart);

    // padding for idk couldn't find any visual changes on changing the values
    x.curveContainer.padding(0, 0, 0, 0);

    // if set to true icons dissapear
    x.maskBullets = false;

    x.background.fill = "#303950";

    // color set to use in data points
    // let colorSet = new am4core.ColorSet();

    // format for dates in data set
    x.dateFormatter.inputDateFormat = "YYYY-MM-DDTHH:mm:ss.sssZ";

    // alternate for inputdateformat
    x.dateFormatter.dateFormat = "HH";

    // data set for rendering values on the timeline chart
    x.data = processDataSet(data);

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
    // padding for labels
    categoryAxis.renderer.labels.template.paddingRight = 25;
    // distance between labels
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
    dateAxis.renderer.minGridDistance = 50;

    let baseInterval = calculateBaseInterval(data);

    // unti distance between every point on the date scale
    dateAxis.baseInterval = { count: 1, timeUnit: "minute" };

    // can't tell if this matters
    dateAxis.renderer.tooltipLocation = 10;

    // changes the stroke count and density set to original right ow can be changes based on use cases
    dateAxis.renderer.line.strokeDasharray = "1,4";

    // dateAxis.renderer.line.durationFormatter.durationFormat = "yyyy-MM-dd";

    // opacity of strokes set to  for transparency
    dateAxis.renderer.line.strokeOpacity = 0.5;

    // no effect
    // dateAxis.tooltip.autoTextColor = true;
    // dateAxis.tooltip.dateFormatter.dateFormat = "dd-mm-yyyy";
    // dateAxis.tooltip.label.text = "dd-mm-yyyy";
    // dateAxis.tooltip.tooltipText = "{dataX}";

    // didnt seem to matter much on the ui
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.fill = "white";
    dateAxis.tooltip.background.cornerRadius = 5;

    // this is just the background color for the tooltip i think not really sure
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );

    // the toppadding for the date axis tooltip
    dateAxis.tooltip.label.paddingTop = 7;

    // dont know what these are for
    dateAxis.endLocation = 1;
    dateAxis.startLocation = 1;

    // important this is the start and end point for the timeline chart

    dateAxis.strictMinMax = true;

    if (data.length > 0) {
      if (data.length < 25) dateAxis.min = new Date(data[0].start).getTime();
      else dateAxis.min = new Date(data[data.length - 25].start).getTime();
      dateAxis.max = new Date(data[data.length - 1].end).getTime();

      if (dateAxis.max - dateAxis.min < 86400000 / 2) {
        let recordDate = new Date(dateAxis.max);
        dateAxis.max = new Date(recordDate.setHours(23, 59, 59, 999)).getTime();
        dateAxis.min = new Date(
          new Date(recordDate.setDate(recordDate.getDate() - 1)).setHours(
            0,
            0,
            0,
            0
          )
        ).getTime();
      }
    } else {
      dateAxis.max = new Date(new Date().setHours(23, 59, 59, 999)).getTime();
      dateAxis.min = new Date(
        new Date(new Date().setDate(new Date().getDate() - 1)).setHours(
          0,
          0,
          0,
          0
        )
      ).getTime();
    }

    console.log(new Date(dateAxis.min), new Date(dateAxis.max));

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
    x.scrollbarX.fill = "#4f566a";

    x.scrollbarX.startGrip.background.fill = "#6794dc";
    x.scrollbarX.startGrip.fill = "#6771dc";
    x.scrollbarX.endGrip.background.fill = "#6794dc";
    x.scrollbarX.endGrip.fill = "#6771dc";

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
      "rightclick",
      function (params) {
        params.event.preventDefault();
        setCords({
          x:
            params.event.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft -
            250,
          y:
            params.event.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop -
            100,
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
          onMouseLeave={() => setContextItem({ show: false })}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            top: `${cords.y}px`,
            left: `${cords.x}px`,
            position: "absolute",
            zIndex: 9999,
            width: "300px",
            padding: "15px",
            marginBottom: "50px",
            maxHeight: "300px",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                cursor: "pointer",
              }}
              onClick={() => setContextItem({ show: false })}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div>Event Name: {contextItem.text}</div>
            <div>
              Date-Time: {dayjs(contextItem.start).format("DD/MM/YYYY HH:mm")}
            </div>
            <div>IP: {contextItem.ip}</div>
            <div>Author Name: {contextItem.author.name}</div>
            <div>Author Email: {contextItem.author.email}</div>
            <div>Browser: {contextItem.browser}</div>
            <div>Device: {contextItem.os}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button
                // id="button"
                // data-react-tag="anchor"
                // style={{ padding: "10px", color: "#fff" }}
                // className="cms-primary-cta cms-btn-triggerhover cms-mu-uploadbtn w-a"
                style={{
                  marginTop: "10px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  color: "white",
                  background: "red",
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "3px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  border: "1px solid red",
                }}
                name="button"
                // value="Upload"
                // onClick={handleSubmit}
              >
                Restore
              </button>
              <div></div>
              <button
                // id="button"
                // data-react-tag="anchor"
                // style={{ padding: "10px", color: "#fff" }}
                style={{
                  marginTop: "10px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  color: "white",
                  background: "red",
                  display: "flex",
                  width: "auto",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "3px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  border: "1px solid red",
                }}
                // className="cms-primary-cta cms-btn-triggerhover cms-mu-uploadbtn w-a"
                name="button"
                // value="Upload"
                // onClick={handleSubmit}
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
