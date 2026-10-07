document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown-container");
    const select = dropdown.querySelector(".dropdown-select");
    const menu = dropdown.querySelector(".dropdown-menu");
    const items = [...menu.querySelectorAll("li")];

    const cards = [...document.querySelectorAll(".card")];
    const grid = document.querySelector(".card-grid");
    const searchForm = document.querySelector(".search-box");
    const searchInput = searchForm.querySelector('input[name="query"]');

    // Kategori awal diambil dari <li class="active"> di HTML
    const activeItem = items.find((li) => li.classList.contains("active"));
    let category = activeItem ? activeItem.textContent.trim() : "";
    let keyword = "";

    /* ---------- Dropdown ---------- */
    select.setAttribute("role", "button");
    select.setAttribute("tabindex", "0");
    select.setAttribute("aria-haspopup", "listbox");
    select.setAttribute("aria-expanded", "false");

    function openMenu() {
        dropdown.classList.add("open");
        select.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        dropdown.classList.remove("open");
        select.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
        dropdown.classList.contains("open") ? closeMenu() : openMenu();
    }

    select.addEventListener("click", toggleMenu);

    select.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMenu();
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            openMenu();
            menu.querySelector("a").focus();
        }
    });

    // Klik di luar dropdown / tekan Escape -> tutup
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
            select.focus();
        }
    });

    /* ---------- Pilih kategori ---------- */
    function setCategory(name) {
        category = name;

        items.forEach((li) =>
            li.classList.toggle("active", li.textContent.trim() === name)
        );

        // Ganti teks "Link ..." pada setiap kartu
        cards.forEach((card) => {
            const link = card.querySelector(".card-footer a");
            if (link) link.textContent = "Link " + name;
        });

        applyFilter();
    }

    items.forEach((li) => {
        li.querySelector("a").addEventListener("click", (e) => {
            e.preventDefault();
            setCategory(li.textContent.trim());
            closeMenu();
            select.focus();
        });
    });

    /* ---------- Pencarian ---------- */
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Tidak ada hasil yang cocok.";
    emptyMessage.style.cssText =
        "grid-column: 1 / -1; text-align: center; font-size: 18px; color: #666;";
    emptyMessage.hidden = true;
    grid.appendChild(emptyMessage);

    function applyFilter() {
        let visible = 0;

        cards.forEach((card) => {
            const match =
                !keyword || card.textContent.toLowerCase().includes(keyword);
            // pakai style.display karena .card memakai display:flex
            card.style.display = match ? "" : "none";
            if (match) visible++;
        });

        emptyMessage.hidden = visible !== 0;
    }

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        keyword = searchInput.value.trim().toLowerCase();
        applyFilter();
    });

    searchInput.addEventListener("input", () => {
        keyword = searchInput.value.trim().toLowerCase();
        applyFilter();
    });

    // Terapkan kondisi awal
    if (category) setCategory(category);
});
