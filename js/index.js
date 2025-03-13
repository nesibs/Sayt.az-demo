
const domeins = document.getElementById("domeins");

//  -------- HEADER ACILIB BAGLANMASI -----------------

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

 //  --------  DOMEIN ERROR -----------------

const domainInput = document.getElementById('domain');
const domainError = document.getElementById('domainError');

function validateDomain() {
    const domainValue = domainInput.value.trim();
    domainError.textContent = "";

    // Əgər uzunluq 3-dən kiçikdirsə
    if (domainValue.length > 0 && domainValue.length < 3) {
        domainError.textContent = "Domen 3-dən böyük olmalıdır";
        return;
    }

    // Boşluq və ya icazə verilməyən simvollar varsa
    const domainRegex = /^[a-zA-Z0-9-]+$/;
    if (!domainRegex.test(domainValue)) {
        domainError.textContent = "*Domen adı düzgün deyil. Domen adında yalnız hərf, rəqəm və '-' işarəsi ola bilər";
    }
}

domainInput.addEventListener('input', validateDomain);

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
  ".az",
  ".info"
];

domeins.innerHTML += domain.map((item) => `<option>${item}</option>`);

function yazdir() {
  let kod = "";
  document.querySelectorAll("a").forEach((p) => {
    kod += a.innerHTML + "<br>";
  });
  document.getElementById("domeins").innerHTML = kod;
}


const domainSelect = document.getElementById("domeins");
const buttons = document.querySelectorAll(".ext-btn"); 

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const selectedValue = this.getAttribute("data-value");
        domainSelect.value = selectedValue;  
    });
});

 //  --------   STARTUPLAR BOLMESI -----------------

const cards1 = document.getElementById("cards1");
const cards = [
  {
    image: "./image/kreditaz.png",
    name: "kredit.az",
    desc: "kredit.az saytı ümumi bankların kredit faizləri haqqında məlumatları bir araya...",
  },
  {
    image: "https://api.websiteca.com/storage/n6JovzwQ5e7Bhz632qaCKE38FOqbGwBKet2dB2lc.jpg",
    name: "football.biz",
    desc: "kredit.az saytı ümumi bankların kredit faizləri haqqında məlumatları bir araya...",
  },
  {
    image: "https://api.websiteca.com/storage/BmIYrv23cj5kCPw8CiZ2DEJHuYvzxSB9yGnXH4Bf.png",
    name: "paracoin.network.az ",
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

 //  --------  TEAMS HISSESI  -----------------

const teams = document.getElementById("teams");
const persons = [
  {
    image: "./image/ramilmirza.jpg",
    name: "Ramil Mirza",
    desc: "CEO",
  },
  {
    image: "./image/saidachi.jpg",
    name: "Saida Chi",
    desc: "SMM",
  },
 

  {
    image: "	https://api.websiteca.com/storage/uTGbFRppma9BB7BTTYffzFgy8m1MfQEa7RkNdAVe.jpg",
    name: "Rasim Abdurrahman",
    desc: "Project Maneger",
  },
  {
    image: "	https://api.websiteca.com/storage/uTGbFRppma9BB7BTTYffzFgy8m1MfQEa7RkNdAVe.jpg",
    name: "Rasim Abdurrahman",
    desc: "Project Maneger",
  },
  {
    image: "https://api.websiteca.com/storage/souFthYY1tpKeJKs20LqEqbjGvT1pxAZ5OBCtr1u.jpg",
    name: "Matanat M.",
    desc: "FrontEnd Developer",
  },
  {
    image: "https://api.websiteca.com/storage/4RIXyEhwxrU4nkxG2MUT2NqxZk0byqD4W7VyvnRf.jpg",
    name: "Murad Akmedov",
    desc: "BackEnd Developer",
    },
  {
    image: "./image/saidachi.jpg",
    name: "Saida Chi",
    desc: "SMM",
  },
  {
    image: "https://api.websiteca.com/storage/souFthYY1tpKeJKs20LqEqbjGvT1pxAZ5OBCtr1u.jpg",
    name: "Matanat M.",
    desc: "FrontEnd Developer",
    },
   {
    image: "https://api.websiteca.com/storage/4RIXyEhwxrU4nkxG2MUT2NqxZk0byqD4W7VyvnRf.jpg",
    name: "Murad Akmedov",
    desc: "BackEnd Developer",
  },
 
    {
      image: "./image/saidachi.jpg",
      name: "Saida Chi",
      desc: "SMM",
    },
    {
      image: "	https://api.websiteca.com/storage/uTGbFRppma9BB7BTTYffzFgy8m1MfQEa7RkNdAVe.jpg",
      name: "Rasim Abdurrahman",
      desc: "Project Maneger",
    },
    {
      image: "https://api.websiteca.com/storage/souFthYY1tpKeJKs20LqEqbjGvT1pxAZ5OBCtr1u.jpg",
      name: "Matanat M.",
      desc: "FrontEnd Developer",
      },
     {
      image: "https://api.websiteca.com/storage/4RIXyEhwxrU4nkxG2MUT2NqxZk0byqD4W7VyvnRf.jpg",
      name: "Murad Akmedov",
      desc: "BackEnd Developer",
  },
];
persons.map(item => {
    teams.innerHTML += `  <div class=" p-2 w-[80%] md:w-[32%] md:h-[260px] lg:w-[23%] lg:h-[320px] lg:p-3 border border-violet-600 rounded-2xl ">
                  <div class=" w-full h-44   lg:h-52  overflow-hidden">
                    <img class="w-full h-full object-cover border-0 rounded-[12px]" src="${item.image}" alt="">
                  </div>
                  <div class="text-center">
                    <h3 class="text-[18px] font-bold">${item.name}</h3>
                    <p class="text-[15px] font-semibold">${item.desc}</p>
                  </div>
              </div>`
})



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
 



// ------------- PAGNICATION HISSESI ----------------

const projects = [
  { title: "UG.NEWS", image: "./image/lastworks1.png" },
  { title: "FOOTBALL.BIZ", image: "./image/lastworks2.png" },
  { title: "WISHER.AZ", image: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png" },
  { title: "IMEXCOMMODITIES.COM", image: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png" },
  { title: "PROJECT FIVE", image: "	https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png" },
  { title: "PROJECT SIX", image: "	https://api.websiteca.com/storage/l7CnTnqSgXj1XA2ZMFtVvo4E8j2nZ4wgElrDehh7.png" },
  { title: "UG.NEWS", image: "	https://api.websiteca.com/storage/vjciI2KyS5K2wrvpm1JlLFKdcd7WlG4wB0GTlItY.png" },
  { title: "FOOTBALL.BIZ", image: "./image/lastworks2.png" },
  { title: "WISHER.AZ", image: "./image/lastworks1.png" },
  { title: "PROJECT FIVE", image: "	https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png" },
  { title: "PROJECT SIX", image: "	https://api.websiteca.com/storage/l7CnTnqSgXj1XA2ZMFtVvo4E8j2nZ4wgElrDehh7.png" },
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
      card.className = "rounded-lg p-1 lg:p-4";
      card.innerHTML = `<div class="rounded-[15px] border border-pink-100 overflow-hidden">
                         <div class='bg-[#faf4ff] w-full p-1 lg:p-5'>
                            <div class=" w-[215px] h[180px] md:w-[250px] md:h-[200px] lg:w-[400px] lg:h-[300px] "> <img class="w-full h-full rounded-[10px]" src="${project.image}" alt=""></div>
                            <h3 class="text-[18px] lg:text-[23px] font-bold" > ${project.title} </h3>
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
