document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".right-panel form");
    const idInput = form.querySelector("#email");
    const pwInput = form.querySelector("#password");
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitLabel = submitBtn.textContent;

    // Kolom ini menerima nama pengguna ATAU email, jadi tidak boleh type="email"
    idInput.type = "text";

    // Matikan validasi bawaan browser, diganti validasi di bawah
    form.noValidate = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function check(input, message) {
        input.setCustomValidity(message);
        return message === "";
    }

    function validate() {
        const id = idInput.value.trim();
        const pw = pwInput.value;

        let idMessage = "";
        if (id === "") {
            idMessage = "Nama pengguna atau email wajib diisi.";
        } else if (id.includes("@") && !emailPattern.test(id)) {
            idMessage = "Format email tidak valid.";
        }

        const pwMessage = pw === "" ? "Kata sandi wajib diisi." : "";

        const idOk = check(idInput, idMessage);
        const pwOk = check(pwInput, pwMessage);

        if (!idOk) return idInput;
        if (!pwOk) return pwInput;
        return null;
    }

    // Hapus pesan error begitu pengguna mengetik lagi
    [idInput, pwInput].forEach((input) =>
        input.addEventListener("input", () => input.setCustomValidity(""))
    );

    form.addEventListener("submit", (e) => {
        idInput.value = idInput.value.trim();

        const invalidField = validate();
        if (invalidField) {
            e.preventDefault();
            invalidField.reportValidity();
            invalidField.focus();
            return;
        }

        // Cegah klik ganda
        submitBtn.disabled = true;
        submitBtn.textContent = "Memproses...";
    });

    // Kembalikan tombol saat pengguna menekan tombol "Back" di browser
    window.addEventListener("pageshow", () => {
        submitBtn.disabled = false;
        submitBtn.textContent = submitLabel;
    });
});
