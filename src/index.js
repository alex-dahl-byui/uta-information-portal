require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/geometry/Point",
], function (Map, MapView, Graphic, Point) {
  const map = new Map({
    basemap: "gray-vector",
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-112, 40.5],
    zoom: 9,
  });

  fetch("/uta-data")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((stop) => {
        const point = new Point({
          longitude: stop.stop_lon,
          latitude: stop.stop_lat,
        });

        const popupTemplate = {
          title: stop.stop_name,
          content: stop.stop_desc,
        };

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: {
            type: "picture-marker",
            url: `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z"/></svg>`,
            width: "8px",
            height: "8px",
          },
          popupTemplate: popupTemplate,
        });

        view.graphics.add(pointGraphic);
      });
    });
});
