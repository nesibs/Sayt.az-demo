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

const features = [
    { name: "Bloq", price: 150, active: false },
    { name: "Responsive", price: 200, active: false },
    { name: "Mesajlaşma", price: 250, active: false },
    { name: "Qalereya", price: 180, active: false },
    { name: "Saytda Axtarış", price: 220, active: false },
    { name: "Rezervasyon", price: 300, active: false },
    { name: "Analitika / İzləmə", price: 280, active: false },
    { name: "Üzv girişi / Profillər", price: 350, active: false },
    { name: "Forum", price: 170, active: false },
    { name: "Canlı Söhbət", price: 400, active: false },
    { name: "Əlaqə Forması", price: 130, active: false },
    { name: "Xəritə Məlumatı / Geolocation", price: 260, active: false },
    { name: "Sosial Media İnteqrasiyası", price: 210, active: false },
    { name: "Admin Panel", price: 500, active: false }
];

const staticPagePrice = 50;
let staticPageCount = 1;
let designComplexityMultiplier = 1;

const seoOptions = [
    { name: "Başlıqlar & Meta", price: 50, active: false },
    { name: "Açar söz", price: 40, active: false },
    { name: "+20 Qabaqcıl Texnika", price: 70, active: false },
    { name: "Başlıq Teqləri", price: 30, active: false },
    { name: "Sitemap", price: 20, active: false }
];

const ecommerceOptions = [
    { name: "Ödəniş", price: 100, active: false },
    { name: "Səbət", price: 80, active: false },
    { name: "Məhsullar", price: 120, active: false },
    { name: "Bəyəndiklərim", price: 90, active: false },
    { name: "Filtr", price: 110, active: false }
];

const logoPrices = [0, 150, 300];
let selectedLogoDesign = 0;

function calculateTotal() {
    const staticPageCost = staticPageCount * staticPagePrice * designComplexityMultiplier;
    const additionalCost = features.filter(f => f.active).reduce((sum, f) => sum + f.price, 0);
    const seoCost = seoOptions.filter(f => f.active).reduce((sum, f) => sum + f.price, 0);
    const ecommerceCost = ecommerceOptions.filter(f => f.active).reduce((sum, f) => sum + f.price, 0);
    const logoCost = logoPrices[selectedLogoDesign];

    const total = staticPageCost + additionalCost + seoCost + ecommerceCost + logoCost;

    document.getElementById("totalPrice").innerText = `$ ${total}`;
    document.getElementById("staticPageCost").innerText = `$ ${staticPageCost}`;
    document.getElementById("additionalCost").innerText = `$ ${additionalCost}`;
    document.getElementById("seoCost").innerText = `$ ${seoCost}`;
    document.getElementById("ecommerceCost").innerText = `$ ${ecommerceCost}`;
    document.getElementById("logoCost").innerText = `$ ${logoCost}`;

    document.getElementById('xerc1').innerHTML = `${staticPageCount} səhifə / $ ${staticPageCost}`;
    document.getElementById('xerc2').innerHTML = `$ ${additionalCost}`;
    document.getElementById("totalSeoCost").innerText = `$ ${seoCost}`;
    document.getElementById("totalEcommerceCost").innerText = `$ ${ecommerceCost}`;
    document.getElementById("totalLogoCost").innerText = `$ ${logoCost}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const featuresContainer = document.getElementById("featuresList");
    
    features.forEach((feature, index) => {
        const toggle = document.createElement("label");
        toggle.className = "flex justify-between items-center p-2 bg-gray-100 rounded-md my-1 w-[48%]";
        toggle.innerHTML = `
            <span>${feature.name}</span>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer toggle-checkbox" data-index="${index}">
                <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
            </label>
        `;
        featuresContainer.appendChild(toggle);
    });

    document.querySelectorAll(".toggle-checkbox").forEach(input => {
        input.addEventListener("change", (e) => {
            const index = e.target.dataset.index;
            features[index].active = e.target.checked;
            calculateTotal();
        });
    });

    document.getElementById("staticPageSlider").addEventListener("input", (e) => {
        staticPageCount = parseInt(e.target.value);
        document.getElementById("staticPageCount").innerText = staticPageCount;
        calculateTotal();
    });

    document.getElementById("designComplexitySlider").addEventListener("input", (e) => {
        designComplexityMultiplier = 1 + parseFloat(e.target.value) * 0.5;
        calculateTotal();
    });

    document.getElementById("logoDesignSlider").addEventListener("input", (e) => {
        selectedLogoDesign = parseInt(e.target.value);
        calculateTotal();
    });

    renderOptions(seoOptions, "seoOptions");
    renderOptions(ecommerceOptions, "ecommerceOptions");

    calculateTotal();
});

function renderOptions(options, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    options.forEach((option, index) => {
        const toggle = document.createElement("label");
        toggle.className = "flex justify-between items-center p-2 bg-gray-200 rounded-md w-[48%]";
        toggle.innerHTML = `
            <span>${option.name}</span>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer toggle-checkbox" data-index="${index}">
                <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
            </label>
        `;
        container.appendChild(toggle);
    });

    document.querySelectorAll(`#${containerId} .toggle-checkbox`).forEach(input => {
        input.addEventListener("change", (e) => {
            const index = e.target.dataset.index;
            options[index].active = e.target.checked;
            calculateTotal();
        });
    });
}