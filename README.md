# PraktikumPemWebKelompok11
File Pemrograman Web Kelas C untuk kelompok 11 - Ekonomi Sulit, Penghasilan Sempit, HIDUUPP......!!!!!!

## Anggota Kelompok
|          Nama           |     NPM      |           Tugas                       |
|-------------------------|--------------|---------------------------------------|
| Muhammad Sunuy Habiby   | 140810250014 |                                       |
| Gibraldi Zilal Fachry   | 140810250038 |                                       |
| Azrel Sakhi Reswara     | 140810250098 |                                       |

## Fungsi

## Tujuan

## Target Pengguna

## Mockup

## Skema Database

## Latar Belakang
Seiring berkembangnya teknologi, banyak pusat perbelanjaan, gedung perkantoran, dan fasilitas umum yang saat ini sudah menggunakan sistem parkir otomatis pada proses tiket masuk dan keluar kendaraan. Pengendara cukup mengambil tiket secara otomatis saat masuk dan melakukan pembayaran melalui mesin atau sistem digital tanpa pencatatan manual oleh petugas parkir. Meskipun demikian, sistem tersebut umumnya hanya membantu proses administrasi parkir, sedangkan pencarian slot parkir masih dilakukan secara manual oleh pengendara.

Pada kondisi saat ini, pengendara sering harus berkeliling area parkir untuk mencari slot yang kosong. Tidak jarang slot yang terlihat kosong dari kejauhan ternyata sudah ditempati kendaraan lain. Situasi ini menyebabkan pengendara harus terus berpindah jalur dan menghabiskan waktu lebih lama di area parkir.

Inefisiensi dalam proses pencarian slot parkir juga berdampak pada antrean kendaraan di pintu masuk area parkir. Ketika kapasitas parkir mulai penuh dan kendaraan di dalam bergerak lambat untuk mencari tempat kosong, kendaraan yang baru datang akan tertahan di jalur masuk. Akibatnya, antrean kendaraan menjadi lebih panjang dan menimbulkan kemacetan, terutama pada jam sibuk seperti akhir pekan atau hari libur.

Berdasarkan permasalahan tersebut, kami membuat ParKING: Smart Space System for Parking Allocation, yaitu sistem parkir pintar yang dirancang untuk membantu pengguna menemukan slot parkir kosong secara lebih cepat dan efisien. Sistem ini memanfaatkan visualisasi area parkir dan algoritma pencarian slot untuk mengurangi waktu pencarian parkir, meminimalkan antrean kendaraan, serta membantu pengelola dalam memonitor kondisi parkir secara lebih modern dan terstruktur.

## Tujuan dan Manfaat
### Tujuan
ParKING bertujuan untuk mempercepat dan menyederhanakan pengalaman parkir bagi pengemudi. Selama ini, pengemudi menghabiskan waktu dan biaya yang tidak sedikit hanya untuk menemukan slot parkir. ParKING hadir untuk menghilangkan ketidakpastian tersebut melalui sistem alokasi slot yang cerdas dan berbasis data real-time.
### Manfaat
- **Pengemudi:** mendapat kepastian slot sebelum tiba dan proses masuk yang lebih cepat.
- **Pengelola parkir:** mendapat data penuh atas kapasitas real-time, alokasi slot yang efisien, dan pendapatan yang lebih teroptimasi.

## Penjelasan Aplikasi
ParKING adalah sistem manajemen parkir cerdas yang mendukung tiga mode layanan: **Reservasi**, **Walk-in**, dan **Valet**. Setiap mode diproses oleh kombinasi tiga struktur data inti yang bekerja bersama di backend.

| Struktur Data | Peran dalam Sistem |
|---|---|
| **Priority Queue** | Menentukan slot terbaik berdasarkan skor gabungan: sisa waktu hunian, zona (premium/reguler), dan jarak ke pintu masuk |
| **Doubly Linked List** | Manajemen status setiap slot parkir, memudahkan operasi insert dan delete data slot parkir |
| **Graph** | Memodelkan tata letak area parkir untuk menghitung rute terpendek dari pintu masuk ke slot yang dituju |

## Gambar Rancangan Antarmuka
<img width="1366" height="600" alt="image" src="https://github.com/user-attachments/assets/4f148f71-f514-4023-abf1-733900675a1d" />
<img width="1366" height="594" alt="image" src="https://github.com/user-attachments/assets/673ba450-57e8-4bd9-93ae-263351d7ec82" />
<img width="1366" height="600" alt="image" src="https://github.com/user-attachments/assets/fabd8450-7190-411b-9b2c-4be21c0772ff" />

## Rancangan Pengerjaan Proyek
|          Nama           |     NPM      |           Tugas                       |
|-------------------------|--------------|---------------------------------------|
| Kayla Hessa Ferdinan    | 140810250023 |Doubly linked list                     |
| Deardo Cristoph Damanik | 140810250077 |Graph                                  |
| Azrel Sakhi Reswara     | 140810250098 |Priority queue                         |
