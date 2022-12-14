const links = [
  {
    label: "Week 01",
    url: "/week01/index.html",
  },
  {
    label: "Week 02",
    url: "/week02/index.html",
  },
  {
    label: "Week 03",
    url: "/week03/index.html",
  },
  {
    label: "Week 04",
    url: "/week04/index.html",
  },
  {
    label: "Week 05",
    url: "/week05/index.html",
  },
  {
    label: "Week 06",
    url: "/week06/to-do-list/index.html",
  },
  {
    label: "Week 07",
    url: "/week07/index.html",
  },
  {
    label: "Week 08",
    url: "/week08/index.html",
  },
  {
    label: "Week 09",
    url: "/week09/index.html",
  },
];

const linksTwo = [
  {
    label: "Project Proposal",
    url: "/project_proposal/index.html",
  },
  {
    label: "Week 10",
    url: "/week10/index.html",
  },
];


let orderedList = document.getElementById("tobLinks");

links.forEach(item => {
    let li = document.createElement("li");
    orderedList.appendChild(li);
    let a = document.createElement("a");
    a.textContent = item.label;
    a.href = item.url;
    li.appendChild(a);
});

let orderedListTwo = document.getElementById("tobLinksTwo");

linksTwo.forEach((item) => {
  let li = document.createElement("li");
  orderedListTwo.appendChild(li);
  let a = document.createElement("a");
  a.textContent = item.label;
  a.href = item.url;
  li.appendChild(a);
});