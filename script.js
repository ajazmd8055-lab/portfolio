/* ============================================================
   ADD YOUR REAL LIVE AND GITHUB LINKS BELOW

   Replace "#" after uploading each project.

   Example:

   live: "https://your-project.vercel.app",
   code: "https://github.com/ajazmd8055-lab/project-name"
   ============================================================ */

const PROJECTS = [
  {
    title: "Resume Builder",
    tag: "web app",
    category: "web",
    year: "2026",

    desc: "A professional resume builder with live preview, profile photo upload, dynamic sections and PDF download functionality.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "html2pdf"
    ],

    icon: "CV",

    live: "https://ajazmd8055-lab.github.io/RESUME-DOWNLOADER/",
    code: "https://github.com/ajazmd8055-lab/RESUME-DOWNLOADER.git"
  },

  {
    title: "Weather App",
    tag: "api project",
    category: "web",
    year: "2026",

    desc: "A weather application that searches cities and displays temperature, humidity, wind speed and changing weather icons using an API.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Weather API"
    ],

    icon: "☁",

    live: "",
    code: "https://github.com/ajazmd8055-lab/weather-report.git"
  },

  {
    title: "Currency Converter",
    tag: "api project",
    category: "tool",
    year: "2026",

    desc: "A responsive currency converter that fetches exchange rates, updates country flags and converts values between currencies.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Exchange API"
    ],

    icon: "₹",

    live: "https://ajazmd8055-lab.github.io/currency--converter/",
    code: "https://github.com/ajazmd8055-lab/currency--converter.git"
  },

  {
    title: "Attendance Calculator",
    tag: "student tool",
    category: "tool",
    year: "2026",

    desc: "A student-friendly tool that calculates attendance percentage, safe bunk count and the classes needed to reach 75 percent.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    icon: "%",

    live: "https://ajazmd8055-lab.github.io/attendence-calculator/",
    code: "https://github.com/ajazmd8055-lab/attendence-calculator.git"
  },

  {
    title: "Calculator",
    tag: "web app",
    category: "web",
    year: "2026",

    desc: "A clean calculator supporting basic arithmetic operations, brackets, percentage, clear functionality and interactive hover effects.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    icon: "+",

    live: "https://ajazmd8055-lab.github.io/CALCULATOR/",
    code: "https://github.com/ajazmd8055-lab/CALCULATOR.git"
  },

  

];


/* ============================================================
   SELECT PROJECT CONTAINER
   ============================================================ */

const ledger = document.getElementById("ledger");


/* ============================================================
   ADD ZERO BEFORE PROJECT NUMBER

   Example:
   1 becomes 01
   2 becomes 02
   ============================================================ */

function pad(number) {
  return String(number).padStart(2, "0");
}


/* ============================================================
   CREATE PROJECT LINKS
   ============================================================ */

function projectLink(url, label) {

  if (!url || url === "#") {

    return `
      <span class="project-link project-link--disabled">
        ${label} — add link
      </span>
    `;
  }

  return `
    <a href="${url}" target="_blank" rel="noopener">
      ${label} ↗
    </a>
  `;
}


/* ============================================================
   CREATE ALL PROJECT ROWS
   ============================================================ */

function buildLedger() {

  ledger.innerHTML = "";

  PROJECTS.forEach((project, index) => {

    const row = document.createElement("article");

    row.className = "ledger-row";

    row.dataset.category = project.category;

    row.innerHTML = `

      <button
        class="ledger-row__head"
        data-toggle
        aria-expanded="false"
      >

        <span class="ledger-row__num">
          No. ${pad(index + 1)}
        </span>

        <span class="ledger-row__title">
          ${project.title}
        </span>

        <span class="ledger-row__tag">
          ${project.tag}
        </span>

        <span class="ledger-row__year">
          ${project.year}
        </span>

        <span class="ledger-row__chevron">
          +
        </span>

      </button>


      <div class="ledger-row__body">

        <div class="ledger-row__body-inner">

          <div>

            <p class="ledger-row__desc">
              ${project.desc}
            </p>


            <div class="ledger-row__meta">

              ${project.stack
                .map(skill => {
                  return `<span class="chip">${skill}</span>`;
                })
                .join("")}

            </div>


            <div class="ledger-row__links">

              ${projectLink(project.live, "View live")}

              ${projectLink(project.code, "Source code")}

            </div>

          </div>


          <div
            class="ledger-row__preview"
            aria-hidden="true"
          >

            <span class="project-preview__icon">
              ${project.icon}
            </span>

            <span class="project-preview__name">
              ${project.title}
            </span>

          </div>

        </div>

      </div>
    `;

    ledger.appendChild(row);

  });

}


/* Run the function */

buildLedger();


/* ============================================================
   OPEN AND CLOSE PROJECT DETAILS
   ============================================================ */

ledger.addEventListener("click", event => {

  const head = event.target.closest("[data-toggle]");

  if (!head) {
    return;
  }

  const row = head.closest(".ledger-row");

  const wasOpen = row.classList.contains("is-open");


  /* Close every opened project */

  ledger
    .querySelectorAll(".ledger-row.is-open")
    .forEach(openRow => {

      openRow.classList.remove("is-open");

      openRow
        .querySelector("[data-toggle]")
        .setAttribute("aria-expanded", "false");

    });


  /* Open clicked project */

  if (!wasOpen) {

    row.classList.add("is-open");

    head.setAttribute("aria-expanded", "true");

  }

});


/* ============================================================
   PROJECT FILTER BUTTONS
   ============================================================ */

const filterButtons = document.querySelectorAll(".filter");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {


    /* Remove active class from all buttons */

    filterButtons.forEach(item => {

      item.classList.remove("is-active");

    });


    /* Add active class to clicked button */

    button.classList.add("is-active");


    const selectedCategory = button.dataset.filter;


    document
      .querySelectorAll(".ledger-row")
      .forEach(row => {

        const shouldShow =
          selectedCategory === "all" ||
          row.dataset.category === selectedCategory;


        row.classList.toggle(
          "is-hidden",
          !shouldShow
        );


        if (!shouldShow) {

          row.classList.remove("is-open");

          row
            .querySelector("[data-toggle]")
            .setAttribute("aria-expanded", "false");

        }

      });

  });

});


/* ============================================================
   HERO TEXT ANIMATION
   ============================================================ */

const roles = [
  "interactive web experiences",
  "responsive frontend projects",
  "useful JavaScript applications",
  "skills for a full-stack career"
];


const roleElement = document.getElementById("roleText");

let roleIndex = 0;


function cycleRole() {

  if (!roleElement) {
    return;
  }


  /* Hide text */

  roleElement.style.opacity = "0";


  setTimeout(() => {

    roleIndex =
      (roleIndex + 1) % roles.length;


    roleElement.textContent =
      roles[roleIndex];


    /* Show new text */

    roleElement.style.opacity = "1";

  }, 400);

}


if (roleElement) {

  roleElement.style.transition =
    "opacity 0.4s ease";


  setInterval(cycleRole, 3200);

}


/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }

    );


  revealElements.forEach(element => {

    observer.observe(element);

  });

} else {

  revealElements.forEach(element => {

    element.classList.add("is-visible");

  });

}


/* ============================================================
   NAVBAR BACKGROUND ON SCROLL
   ============================================================ */

const nav = document.getElementById("nav");


window.addEventListener(

  "scroll",

  () => {

    if (!nav) {
      return;
    }

    nav.classList.toggle(
      "is-scrolled",
      window.scrollY > 20
    );

  },

  {
    passive: true
  }

);


/* ============================================================
   MOBILE MENU
   ============================================================ */

const burger =
  document.getElementById("burger");


const mobileMenu =
  document.getElementById("navMobile");


if (burger && mobileMenu) {

  burger.addEventListener("click", () => {

    const isOpen =
      mobileMenu.classList.toggle("is-open");


    burger.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove(
          "is-open"
        );

        burger.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */

const toTopButton =
  document.getElementById("toTop");


if (toTopButton) {

  toTopButton.addEventListener("click", () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

}


/* ============================================================
   CUSTOM CURSOR
   ============================================================ */

const cursorDot =
  document.getElementById("cursorDot");


const canHover =
  window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;


if (canHover && cursorDot) {


  /* Move cursor */

  window.addEventListener(
    "mousemove",
    event => {

      cursorDot.style.left =
        `${event.clientX}px`;

      cursorDot.style.top =
        `${event.clientY}px`;

    }
  );


  /* Increase cursor size on links/buttons */

  document.addEventListener(
    "mouseover",
    event => {

      if (
        event.target.closest(
          "a, button, .ledger-row__head"
        )
      ) {

        cursorDot.classList.add(
          "is-large"
        );

      }

    }
  );


  /* Return cursor to normal size */

  document.addEventListener(
    "mouseout",
    event => {

      if (
        event.target.closest(
          "a, button, .ledger-row__head"
        )
      ) {

        cursorDot.classList.remove(
          "is-large"
        );

      }

    }
  );

}


/* ============================================================
   CONTACT FORM
   ============================================================ */

const contactForm =
  document.getElementById("contactForm");


const formNote =
  document.getElementById("formNote");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    event => {

      /* Prevent page refresh */

      event.preventDefault();


      const name =
        document
          .getElementById("name")
          .value
          .trim();


      const email =
        document
          .getElementById("email")
          .value
          .trim();


      const message =
        document
          .getElementById("message")
          .value
          .trim();


      /* Create email subject */

      const subject =
        encodeURIComponent(
          `Portfolio message from ${name}`
        );


      /* Create email body */

      const body =
        encodeURIComponent(

          `Hello Ajaz,

${message}

From: ${name}
Email: ${email}`

        );


      if (formNote) {

        formNote.textContent =
          "Opening your email application...";

      }


      /* Open email app */

      window.location.href =
        `mailto:ajazmd8055@gmail.com?subject=${subject}&body=${body}`;

    }

  );

}