
const domeins = document.getElementById("domeins");



document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

function toggleAccordion(id) {
  document.querySelectorAll('.accordion').forEach(item => {
      if (item.id !== id) {
          item.classList.add('hidden');
      }
  });
  document.getElementById(id).classList.toggle('hidden');
}

function toggleDropdown(id) {
  document.querySelectorAll('.dropdown').forEach(item => {
      if (item.id !== id) {
          item.classList.add('hidden');
      }
  });
  document.getElementById(id).classList.toggle('hidden');
}

function vur() {}

const domain = [
  ".com",
  ".net",
  ".org",
  ".io",
  ".co",
  ".dev",
  ".app",
  ".tech",
  ".host",
  ".biz",
];
const dom = document.querySelector('.dom');  

document.querySelectorAll('.domain-option').forEach(item => {
  item.addEventListener('click', () => {
      document.getElementById('domainExtension').value = item.getAttribute('data-value');
  });
});



const cards1 = document.getElementById("cards1");
const cards = [
  {
    image: "./image/kreditaz.png",
    name: "kredit.az",
    desc: "kredit.az saytı ümumi bankların kredit faizləri haqqında məlumatları bir araya...",
  },
  {
    image: "./image/whisher.png",
    name: "kredit.az",
    desc: "kredit.az saytı ümumi bankların kredit faizləri haqqında məlumatları bir araya...",
  },
  {
    image: "./image/kreditaz.png",
    name: "kredit.az",
    desc: "kredit.az saytı ümumi bankların kredit faizləri haqqında məlumatları bir araya...",
  },
];

let card = "";
cards.map((item) => {
  cards1.innerHTML += `  <div class="bg-[#faf4ff] p-1 lg:p-5 rounded-2xl w-full md:w-[32%] border  border-gray-100 ">
          <div class="flex flex-col   space-y-2">
            <div class="w-full h-[170px] rounded-[15px]  overflow-hidden  ">
              <img class="object-cover w-full h-full" src="${item.image}" alt="telefon.az">
            </div>
            
            <div>
              <h3 class="text-xl font-semibold  ">${item.name}</h3>
              <p class=" text-[14px]">${item.desc}</p>
            </div>
             <a href="" class="bg-purple-600 hover:bg-purple-700 text-white  px-3 py-2 rounded-3xl transition w-25 ">Etrafli oxu</a>
          </div>
        </div>
        `;
});

const teams = document.getElementById("teams");
const persons = [
  {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
  },
  {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
  },
  {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
  },
  {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
    },
   {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
    },
    {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
    },
    {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
    },
    {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
    },
    {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
    },
];
persons.map(item => {
    teams.innerHTML += `  <div class="p-3 border border-violet-600 rounded-2xl ">
                  <div class="w-40 h-44">
                    <img class="w-full h-full object-cover" src="${item.image}" alt="">
                  </div>
                  <div class="text-center">
                    <h3 class="text-[18px] font-bold">${item.name}</h3>
                    <p class="text-[15px] font-semibold">${item.desc}</p>
                  </div>
              </div>`
})

domeins.innerHTML += domain.map((item) => `<option>${item}</option>`);

function yazdir() {
  let kod = "";
  document.querySelectorAll("a").forEach((p) => {
    kod += a.innerHTML + "<br>";
  });
  document.getElementById("domeins").innerHTML = kod;
}

let isMonthly = true; // Flag (Aylıq rejimi aktiv)

function togglePlan(monthly) {
  isMonthly = monthly; // Flag yenilənir

  document.getElementById("ayliqBtn").classList.toggle("active", isMonthly);
  document.getElementById("illikBtn").classList.toggle("active", !isMonthly);

  if (isMonthly) {
    document.getElementById("plan1Price").innerText = "$5 / ay";
    document.getElementById("plan2Price").innerText = "$10 / ay";
    document.getElementById("plan3Price").innerText = "$15 / ay";
  } else {
    document.getElementById("plan1Price").innerText = "$60 / il";
    document.getElementById("plan2Price").innerText = "$100 / il";
    document.getElementById("plan3Price").innerText = "$180 / il";
  }
}

document
  .getElementById("backend-step")
  .addEventListener("mouseover", function () {
    this.classList.replace("bg-white", "bg-purple-500");
    this.classList.replace("text-purple-500", "text-white");
    document
      .getElementById("backend-line")
      .classList.replace("bg-gray-300", "bg-purple-500");
    document
      .getElementById("frontend-step")
      .classList.replace("border-gray-400", "border-purple-500");
    document
      .getElementById("frontend-step")
      .classList.replace("text-gray-400", "text-purple-500");
  });

document
  .getElementById("backend-step")
  .addEventListener("mouseleave", function () {
    this.classList.replace("bg-purple-500", "bg-white");
    this.classList.replace("text-white", "text-purple-500");
    document
      .getElementById("backend-line")
      .classList.replace("bg-purple-500", "bg-gray-300");
    document
      .getElementById("frontend-step")
      .classList.replace("border-purple-500", "border-gray-400");
    document
      .getElementById("frontend-step")
      .classList.replace("text-purple-500", "text-gray-400");
  });



// PAGNICATION HISSESI
const projects = [
  { title: "UG.NEWS", image: "./image/lastworks1.png" },
  { title: "FOOTBALL.BIZ", image: "./image/lastworks2.png" },
  { title: "WISHER.AZ", image: "./image/lastworks1.png" },
  { title: "IMEXCOMMODITIES.COM", image: "./image/lastworks2.png" },
  { title: "PROJECT FIVE", image: "./image/lastworks1.png" },
  { title: "PROJECT SIX", image: "./image/lastworks2.png" },
  { title: "UG.NEWS", image: "./image/lastworks1.png" },
  { title: "FOOTBALL.BIZ", image: "./image/lastworks2.png" },
  { title: "WISHER.AZ", image: "./image/lastworks1.png" },
  { title: "IMEXCOMMODITIES.COM", image: "./image/lastworks2.png" },
  { title: "PROJECT FIVE", image: "./image/lastworks1.png" },
  { title: "PROJECT SIX", image: "./image/lastworks2.png" },
];

const itemsPerPage = 4;
let currentPage = 1;
const totalPages = Math.ceil(projects.length / itemsPerPage);

function renderProjects() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = projects.slice(start, start + itemsPerPage);

  paginatedProjects.map(project => {
      const card = document.createElement("div");
      card.className = "rounded-lg p-4";
      card.innerHTML = `<div class="rounded-[15px] border border-pink-100 overflow-hidden">
                         <div class='bg-[#faf4ff] w-full p-5'>
                            <div class=" w-[260px] h-[200px] lg:w-[400px] lg:h-[300px] "> <img class="w-full h-full rounded-[10px]" src="${project.image}" alt=""></div>
                            <h3 class="text-[23px] font-bold" > ${project.title} </h3>
                         </div>
                      </div>
      `;
      container.appendChild(card);
  });
}

function renderPagination() {
  const pagination = document.getElementById("pagnication");
  pagination.innerHTML = "";
  
  for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.className = `px-3 mt-5 py-1 mx-1 rounded ${currentPage === i ? 'bg-violet-500 text-white' : 'bg-gray-200'}`;
      btn.innerText = i;
      btn.onclick = () => {
          currentPage = i;
          renderProjects();
          renderPagination();
      };
      pagination.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderPagination();
});
