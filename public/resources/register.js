document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".right-panel form");
    const namaInput = form.querySelector("#nama_lengkap");
    const usernameInput = form.querySelector("#username");
    const emailInput = form.querySelector("#email");
    const pwInput = form.querySelector("#password");
    const agreeInput = form.querySelector("#checkbox1");
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitLabel = submitBtn.textContent;

    // Matikan validasi bawaan browser, diganti validasi di bawah
    form.noValidate = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernamePattern = /^[a-zA-Z0-9_.]{3,20}$/;

    // Setiap aturan mengembalikan pesan error, atau "" jika valid
    const rules = [
        [namaInput, (v) => {
            if (v === "") return "Nama lengkap wajib diisi.";
            if (v.length < 3) return "Nama lengkap minimal 3 karakter.";
            return "";
        }],
        [usernameInput, (v) => {
            if (v === "") return "Nama pengguna wajib diisi.";
            if (!usernamePattern.test(v)) {
                return "Nama pengguna 3-20 karakter: huruf, angka, titik, atau garis bawah.";
            }
            return "";
        }],
        [emailInput, (v) => {
            if (v === "") return "Email wajib diisi.";
            if (!emailPattern.test(v)) return "Format email tidak valid.";
            return "";
        }],
        [pwInput, (v) => {
            if (v === "") return "Kata sandi wajib diisi.";
            if (v.length < 8) return "Kata sandi minimal 8 karakter.";
            if (!/[a-zA-Z]/.test(v) || !/[0-9]/.test(v)) {
                return "Kata sandi harus mengandung huruf dan angka.";
            }
            return "";
        }],
    ];

    // Mengembalikan field pertama yang tidak valid (atau null)
    function validate() {
        let firstInvalid = null;

        rules.forEach(([input, rule]) => {
            // Kata sandi tidak di-trim, yang lain di-trim
            const value = input === pwInput ? input.value : input.value.trim();
            const message = rule(value);
            input.setCustomValidity(message);
            if (message && !firstInvalid) firstInvalid = input;
        });

        const agreeMessage = agreeInput.checked
            ? ""
            : "Kamu harus menyetujui Syarat dan Ketentuan.";
        agreeInput.setCustomValidity(agreeMessage);
        if (agreeMessage && !firstInvalid) firstInvalid = agreeInput;

        return firstInvalid;
    }

    // Hapus pesan error begitu pengguna mengubah isian
    [namaInput, usernameInput, emailInput, pwInput].forEach((input) =>
        input.addEventListener("input", () => input.setCustomValidity(""))
    );
    agreeInput.addEventListener("change", () => agreeInput.setCustomValidity(""));

    form.addEventListener("submit", (e) => {
        [namaInput, usernameInput, emailInput].forEach((input) => {
            input.value = input.value.trim();
        });

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
