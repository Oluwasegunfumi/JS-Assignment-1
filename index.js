const root = document.getElementById("root");

let backgroundDiv = document.createElement("div");
let openingQuote = document.createElement("div");
let content = document.createElement("p");
let closingQuote = document.createElement("div");

root.appendChild(backgroundDiv);
backgroundDiv.appendChild(openingQuote);
backgroundDiv.appendChild(content);
backgroundDiv.appendChild(closingQuote);

content.textContent =
  "See you on the other side, where we will discuss the Events in JavaScript, may the force be with you.";
content.style.fontSize = "20px";
backgroundDiv.style.backgroundColor = "white";
backgroundDiv.style.borderLeft = "5px solid blue";
backgroundDiv.style.padding = "20px";
backgroundDiv.style.borderRadius = "5px";

let openingQuoteSvg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
openingQuoteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
openingQuoteSvg.setAttribute("width", "24");
openingQuoteSvg.setAttribute("height", "24");
openingQuoteSvg.setAttribute("viewBox", "0 0 24 24");
openingQuoteSvg.setAttribute(
  "style",
  "fill: rgba(59, 140, 243, 1);transform: ;msFilter:;"
);

let openingQuotePath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
openingQuotePath.setAttribute(
  "d",
  "M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"
);

openingQuoteSvg.appendChild(openingQuotePath);
openingQuote.appendChild(openingQuoteSvg);

let closingQuoteSvg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
closingQuoteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
closingQuoteSvg.setAttribute("width", "24");
closingQuoteSvg.setAttribute("height", "24");
closingQuoteSvg.setAttribute("viewBox", "0 0 24 24");
closingQuoteSvg.setAttribute(
  "style",
  "fill: rgba(59, 140, 243, 1);transform: ;msFilter:;"
);

let closingQuotePath = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
closingQuotePath.setAttribute(
  "d",
  "m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"
);

closingQuoteSvg.appendChild(closingQuotePath);
closingQuote.appendChild(closingQuoteSvg);