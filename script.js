/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });
}

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar) {
      navbar.classList.remove("open");
    }
  });
});


/* =========================================================
   PROJECT MIND MAP DATA
========================================================= */

const projectTrees = {

  /* =======================================================
     STORAGE MIND AI
  ======================================================= */

  storage: {
    title: "StorageMind AI",

    markdown: `
# StorageMind AI

- Frontend
  - React
  - Vite
  - JavaScript

- Backend
  - Python
  - FastAPI
  - REST API

- Remote Storage
  - SFTP
  - Paramiko
  - FTP
  - SMB

- AI
  - AI File Search
  - Natural Language Search

- Deployment
  - AWS EC2
  - Ubuntu / Linux
`
  },


  /* =======================================================
     PUNAS POWER SHELL
  ======================================================= */

  pps: {
    title: "Punas Power Shell",

    markdown: `
# Punas Power Shell

- Frontend
  - React
  - Vite
  - JavaScript

- Shell
  - Command Parser
  - Command History
  - Virtual File System
  - Unix-like Commands

- Backend
  - Python
  - FastAPI
  - REST API

- Deployment
  - GitHub
  - GitHub Pages
`
  },


  /* =======================================================
     MEDIDIET AI
  ======================================================= */

  medidiet: {
    title: "MediDiet AI",

    markdown: `
# MediDiet AI

- Frontend
  - React
  - TypeScript
  - Vite
  - Tailwind CSS

- Backend
  - Python
  - FastAPI

- Database
  - PostgreSQL

- AI
  - Google Gemini
  - Google GenAI
`
  },


  /* =======================================================
     SMART SURVEY
  ======================================================= */

  survey: {
    title: "Smart Survey / Data Quality Tool",

    markdown: `
# Smart Survey / Data Quality Tool

- Backend
  - Python
  - Flask
  - Flask-CORS

- Interfaces
  - Web UI
  - REST API
  - CLI

- Data
  - CSV
  - JSON
  - JSONL

- Quality Checks
  - Completeness
  - Accuracy
  - Consistency
  - Timeliness
  - Uniqueness
  - Validity
  - Integrity

- Governance
  - Audit Logs
  - Explainability
  - Recommendations
`
  },


  /* =======================================================
     CAMPUS GUARDIAN
  ======================================================= */

  campus: {
    title: "Campus Guardian",

    markdown: `
# Campus Guardian

- Programming
  - Python

- GUI
  - Tkinter

- Computer Vision
  - OpenCV
  - Haar Cascade

- Audio
  - SoundDevice
  - NumPy

- Data
  - CSV
  - TXT Files
  - Local Storage

- Utilities
  - Pillow
  - Web Search
  - Web Browser
`
  },


  /* =======================================================
     SECURE VOYAGE
  ======================================================= */

  voyage: {
    title: "Secure Voyage",

    markdown: `
# Secure Voyage

- Frontend
  - HTML
  - CSS
  - JavaScript

- Backend
  - Python
  - Flask
  - Flask-CORS

- Real-Time
  - Flask-SocketIO
  - Socket.IO

- Database
  - MySQL
  - PostgreSQL

- Security
  - bcrypt
  - dotenv
`
  }

};


/* =========================================================
   MIND MAP COLOR SYSTEM
========================================================= */

const mindMapColors = {

  /* ROOT */
  root: "#23d5ff",

  /* MAIN BRANCHES */
  frontend: "#ff9d1a",
  shell: "#ff72bd",
  backend: "#23d9e8",
  deployment: "#b986ff",

  /* STORAGE */
  storage: "#39e68a",
  remoteStorage: "#39e68a",

  /* AI */
  ai: "#ffd43b",

  /* DATABASE */
  database: "#39d98a",

  /* CAMPUS GUARDIAN */
  programming: "#ff9f43",
  gui: "#a78bfa",
  computerVision: "#00e5ff",
  audio: "#ff6b81",
  data: "#4dabf7",
  utilities: "#c084fc",

  /* SURVEY */
  interfaces: "#f59e0b",
  quality: "#22c55e",
  governance: "#ef4444",

  /* VOYAGE */
  realtime: "#06b6d4",
  security: "#ef4444",

  /* CHILD */
  child: "#e8edf5"

};


/* =========================================================
   ROOT NODE CHECK
========================================================= */

function isRootNode(text) {

  return [

    "punas power shell",
    "storagemind ai",
    "medidiet ai",
    "smart survey / data quality tool",
    "campus guardian",
    "secure voyage"

  ].includes(
    text.trim().toLowerCase()
  );

}


/* =========================================================
   MAIN BRANCH COLOR CHECK
========================================================= */

function getMainBranchColor(text) {

  const colors = {

    frontend:
      mindMapColors.frontend,

    shell:
      mindMapColors.shell,

    backend:
      mindMapColors.backend,

    deployment:
      mindMapColors.deployment,

    "remote storage":
      mindMapColors.remoteStorage,

    ai:
      mindMapColors.ai,

    database:
      mindMapColors.database,

    programming:
      mindMapColors.programming,

    gui:
      mindMapColors.gui,

    "computer vision":
      mindMapColors.computerVision,

    audio:
      mindMapColors.audio,

    data:
      mindMapColors.data,

    utilities:
      mindMapColors.utilities,

    interfaces:
      mindMapColors.interfaces,

    "quality checks":
      mindMapColors.quality,

    governance:
      mindMapColors.governance,

    "real-time":
      mindMapColors.realtime,

    security:
      mindMapColors.security

  };


  return (
    colors[
      text.trim().toLowerCase()
    ] || null
  );

}


/* =========================================================
   GET COLOR FOR NODE
========================================================= */

function getMindMapColor(label) {

  const text =
    label.trim().toLowerCase();


  /* =======================================================
     ROOT
  ======================================================= */

  if (isRootNode(text)) {

    return mindMapColors.root;

  }


  /* =======================================================
     MAIN BRANCHES
  ======================================================= */

  const mainBranchColor =
    getMainBranchColor(text);


  if (mainBranchColor) {

    return mainBranchColor;

  }


  /* =======================================================
     CHILD NODES
  ======================================================= */

  return mindMapColors.child;

}


/* =========================================================
   FORCE MIND MAP TEXT COLORS
========================================================= */

function colorMindMapNodes() {

  if (!techMap) {
    return;
  }

  const nodes = techMap.querySelectorAll(
    ".markmap-node"
  );

  nodes.forEach((node) => {

    /* =====================================================
       FIND LABEL
    ===================================================== */

    const textElement =
      node.querySelector("text");

    const foreignObject =
      node.querySelector("foreignObject");

    const htmlElement =
      foreignObject
        ? foreignObject.querySelector("div")
        : null;


    /* =====================================================
       GET LABEL TEXT
    ===================================================== */

    let label = "";

    if (textElement) {
      label = textElement.textContent.trim();
    }

    if (!label && htmlElement) {
      label = htmlElement.textContent.trim();
    }

    if (!label) {
      return;
    }


    const lower =
      label.toLowerCase();


    /* =====================================================
       GET COLOR
    ===================================================== */

    const color =
      getMindMapColor(label);


    /* =====================================================
       REMOVE OLD CLASSES
    ===================================================== */

    node.classList.remove(
      "map-root",
      "map-frontend",
      "map-shell",
      "map-backend",
      "map-deployment",
      "map-child"
    );


    /* =====================================================
       ASSIGN CLASS
    ===================================================== */

    if (isRootNode(lower)) {

      node.classList.add("map-root");

    }

    else if (lower === "frontend") {

      node.classList.add("map-frontend");

    }

    else if (lower === "shell") {

      node.classList.add("map-shell");

    }

    else if (lower === "backend") {

      node.classList.add("map-backend");

    }

    else if (lower === "deployment") {

      node.classList.add("map-deployment");

    }

    else {

      node.classList.add("map-child");

    }


    /* =====================================================
       CSS VARIABLE
    ===================================================== */

    node.style.setProperty(
      "--node-color",
      color
    );


    /* =====================================================
       SVG TEXT
    ===================================================== */

    if (textElement) {

      textElement.style.setProperty(
        "fill",
        color,
        "important"
      );

      textElement.style.setProperty(
        "color",
        color,
        "important"
      );

      textElement.style.setProperty(
        "opacity",
        "1",
        "important"
      );

      textElement.setAttribute(
        "fill",
        color
      );


      /* Handle tspans */

      textElement
        .querySelectorAll("*")
        .forEach((child) => {

          child.style.setProperty(
            "fill",
            color,
            "important"
          );

          child.style.setProperty(
            "color",
            color,
            "important"
          );

        });

    }


    /* =====================================================
       HTML / FOREIGN OBJECT TEXT
    ===================================================== */

    if (foreignObject) {

      foreignObject.style.setProperty(
        "color",
        color,
        "important"
      );

    }


    if (htmlElement) {

      htmlElement.style.setProperty(
        "color",
        color,
        "important"
      );

      htmlElement.style.setProperty(
        "fill",
        color,
        "important"
      );

      htmlElement.style.setProperty(
        "opacity",
        "1",
        "important"
      );


      htmlElement
        .querySelectorAll("*")
        .forEach((child) => {

          child.style.setProperty(
            "color",
            color,
            "important"
          );

          child.style.setProperty(
            "fill",
            color,
            "important"
          );

          child.style.setProperty(
            "opacity",
            "1",
            "important"
          );

        });

    }


    /* =====================================================
       FONT SIZE
    ===================================================== */

    if (isRootNode(lower)) {

      if (textElement) {
        textElement.style.setProperty(
          "font-size",
          "20px",
          "important"
        );

        textElement.style.setProperty(
          "font-weight",
          "800",
          "important"
        );
      }

      if (htmlElement) {
        htmlElement.style.setProperty(
          "font-size",
          "20px",
          "important"
        );

        htmlElement.style.setProperty(
          "font-weight",
          "800",
          "important"
        );
      }

    }

    else if (getMainBranchColor(lower)) {

      if (textElement) {
        textElement.style.setProperty(
          "font-size",
          "17px",
          "important"
        );

        textElement.style.setProperty(
          "font-weight",
          "700",
          "important"
        );
      }

      if (htmlElement) {
        htmlElement.style.setProperty(
          "font-size",
          "17px",
          "important"
        );

        htmlElement.style.setProperty(
          "font-weight",
          "700",
          "important"
        );
      }

    }

    else {

      if (textElement) {
        textElement.style.setProperty(
          "font-size",
          "16px",
          "important"
        );

        textElement.style.setProperty(
          "font-weight",
          "600",
          "important"
        );
      }

      if (htmlElement) {
        htmlElement.style.setProperty(
          "font-size",
          "16px",
          "important"
        );

        htmlElement.style.setProperty(
          "font-weight",
          "600",
          "important"
        );
      }

    }


    /* =====================================================
       CIRCLE
    ===================================================== */

    const circle =
      node.querySelector("circle");

    if (circle) {

      circle.style.setProperty(
        "stroke",
        color,
        "important"
      );

      circle.style.setProperty(
        "stroke-width",
        "2px",
        "important"
      );

      circle.setAttribute(
        "stroke",
        color
      );

    }

  });

}


/* =========================================================
   MARKMAP LOADER
========================================================= */

let MarkmapClass = null;
let TransformerClass = null;

let markmapReady = null;
let currentMarkmap = null;


async function loadMarkmap() {

  if (markmapReady) {
    return markmapReady;
  }


  markmapReady = Promise.all([

    import(
      "https://cdn.jsdelivr.net/npm/markmap-view@0.18.12/+esm"
    ),

    import(
      "https://cdn.jsdelivr.net/npm/markmap-lib@0.18.12/+esm"
    )

  ]).then(
    ([viewModule, libModule]) => {

      MarkmapClass =
        viewModule.Markmap;

      TransformerClass =
        libModule.Transformer;

    }
  );


  return markmapReady;

}


/* =========================================================
   MODAL ELEMENTS
========================================================= */

const modal =
  document.getElementById(
    "techModal"
  );


const treeContainer =
  document.getElementById(
    "techTree"
  );


const techMap =
  document.getElementById(
    "techMap"
  );


const techTitle =
  document.getElementById(
    "techTitle"
  );


const closeTech =
  document.getElementById(
    "closeTech"
  );


const resetTree =
  document.getElementById(
    "resetTree"
  );


const zoomIn =
  document.getElementById(
    "zoomIn"
  );


const zoomOut =
  document.getElementById(
    "zoomOut"
  );


const zoomValue =
  document.getElementById(
    "zoomValue"
  );


/* =========================================================
   OPEN MIND MAP BUTTONS
========================================================= */

document
  .querySelectorAll(
    ".tech-button"
  )
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const projectName =
          button.dataset.project;


        openTechTree(
          projectName
        );

      }
    );

  });


/* =========================================================
   OPEN TECH TREE
========================================================= */

async function openTechTree(
  projectName
) {

  const project =
    projectTrees[
      projectName
    ];


  if (!project) {

    console.error(
      "Project tree not found:",
      projectName
    );

    return;

  }


  /* =======================================================
     SET TITLE
  ======================================================= */

  if (techTitle) {

    techTitle.textContent =
      project.title;

  }


  /* =======================================================
     OPEN MODAL
  ======================================================= */

  if (modal) {

    modal.classList.add(
      "active"
    );


    modal.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  /* =======================================================
     SHOW LOADING
  ======================================================= */

  if (treeContainer) {

    treeContainer.classList.add(
      "loading"
    );

  }


  try {

    await loadMarkmap();


    buildMindMap(
      project
    );

  }

  catch (error) {

    console.error(
      "Markmap failed to load:",
      error
    );


    if (techMap) {

      techMap.innerHTML =
        "";

    }


    if (treeContainer) {

      const errorBox =
        document.createElement(
          "div"
        );


      errorBox.className =
        "mindmap-error";


      errorBox.innerHTML = `
        <strong>
          Mind map could not be loaded.
        </strong>

        <span>
          Please check your internet connection
          and refresh the page.
        </span>
      `;


      treeContainer.appendChild(
        errorBox
      );

    }

  }

  finally {

    if (treeContainer) {

      treeContainer.classList.remove(
        "loading"
      );

    }

  }

}


/* =========================================================
   BUILD MIND MAP
========================================================= */

function buildMindMap(
  project
) {

  if (
    !MarkmapClass ||
    !TransformerClass
  ) {

    console.error(
      "Markmap libraries are not ready."
    );

    return;

  }


  if (!techMap) {
    return;
  }


  /* =======================================================
     CLEAR PREVIOUS MAP
  ======================================================= */

  techMap.innerHTML =
    "";


  /* =======================================================
     REMOVE OLD GENERATED STYLES
  ======================================================= */

  document
    .querySelectorAll(
      ".tech-map-generated-style"
    )
    .forEach(
      (element) => {

        element.remove();

      }
    );


  /* =======================================================
     TRANSFORM MARKDOWN
  ======================================================= */

  const transformer =
    new TransformerClass();


  const result =
    transformer.transform(
      project.markdown
    );


  const root =
    result.root;


  const features =
    result.features;


  /* =======================================================
     GET MARKMAP ASSETS
  ======================================================= */

  const assets =
    transformer.getUsedAssets(
      features
    );


  /* =======================================================
     LOAD MARKMAP STYLES
  ======================================================= */

  if (assets.styles) {

    assets.styles.forEach(
      (styleText) => {

        const styleElement =
          document.createElement(
            "style"
          );


        styleElement.className =
          "tech-map-generated-style";


        styleElement.textContent =
          styleText;


        document.head.appendChild(
          styleElement
        );

      }
    );

  }


  /* =======================================================
     CREATE MARKMAP
  ======================================================= */

  currentMarkmap =
    MarkmapClass.create(

      techMap,

      {

        autoFit: true,

        duration: 300,

        zoom: true,

        pan: true,

        colorFreezeLevel: 2

      },

      root

    );


  /* =======================================================
     APPLY COLORS AFTER RENDER
  ======================================================= */

  setTimeout(() => {

    colorMindMapNodes();


    if (
      currentMarkmap &&
      currentMarkmap.fit
    ) {

      currentMarkmap.fit();

    }


    setTimeout(() => {

      colorMindMapNodes();

    }, 300);


    updateZoomLabel();

  }, 100);

}


/* =========================================================
   MARKMAP MUTATION OBSERVER
========================================================= */

let mindMapObserver =
  null;


function startMindMapObserver() {

  if (
    !techMap ||
    mindMapObserver
  ) {

    return;

  }


  mindMapObserver =
    new MutationObserver(
      () => {

        colorMindMapNodes();

      }
    );


  mindMapObserver.observe(

    techMap,

    {

      childList: true,

      subtree: true

    }

  );

}


startMindMapObserver();


/* =========================================================
   ZOOM LABEL
========================================================= */

function updateZoomLabel() {

  if (
    !currentMarkmap ||
    !currentMarkmap.state
  ) {

    if (zoomValue) {

      zoomValue.textContent =
        "100%";

    }

    return;

  }


  const zoom =
    currentMarkmap.state.zoom ||
    1;


  if (zoomValue) {

    zoomValue.textContent =
      `${Math.round(
        zoom * 100
      )}%`;

  }

}


/* =========================================================
   ZOOM IN
========================================================= */

if (zoomIn) {

  zoomIn.addEventListener(
    "click",
    () => {

      if (!currentMarkmap) {
        return;
      }


      const current =
        currentMarkmap.state?.zoom ||
        1;


      if (
        currentMarkmap.rescale
      ) {

        currentMarkmap.rescale(

          Math.min(
            current * 1.2,
            3
          )

        );

      }


      setTimeout(
        updateZoomLabel,
        50
      );

    }
  );

}


/* =========================================================
   ZOOM OUT
========================================================= */

if (zoomOut) {

  zoomOut.addEventListener(
    "click",
    () => {

      if (!currentMarkmap) {
        return;
      }


      const current =
        currentMarkmap.state?.zoom ||
        1;


      if (
        currentMarkmap.rescale
      ) {

        currentMarkmap.rescale(

          Math.max(
            current * 0.8,
            0.35
          )

        );

      }


      setTimeout(
        updateZoomLabel,
        50
      );

    }
  );

}


/* =========================================================
   RESET TREE
========================================================= */

if (resetTree) {

  resetTree.addEventListener(
    "click",
    () => {

      if (
        currentMarkmap &&
        currentMarkmap.fit
      ) {

        currentMarkmap.fit();

      }


      setTimeout(() => {

        colorMindMapNodes();

        updateZoomLabel();

      }, 100);

    }
  );

}


/* =========================================================
   CLOSE MIND MAP
========================================================= */

function closeTechTree() {

  if (!modal) {
    return;
  }


  modal.classList.remove(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

if (closeTech) {

  closeTech.addEventListener(
    "click",
    closeTechTree
  );

}


/* =========================================================
   CLOSE WHEN CLICKING BACKDROP
========================================================= */

if (modal) {

  modal.addEventListener(
    "click",
    (event) => {

      if (
        event.target === modal
      ) {

        closeTechTree();

      }

    }
  );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeTechTree();

    }

  }
);