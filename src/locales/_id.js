export default {
    route: {
        notFound: 'Halaman Tidak Ditemukan',
        home: 'Beranda',
        article: 'Artikel',
        explore: 'Feed',
        community: 'Komunitas',
        report: 'Laporan',
        test: 'Tes'
    },
    general: {
        authenticated: 'Masuk Terlebih Dahulu'
    },
    menu: {
        login: 'Masuk',
        logout: 'Keluar',
        profile: 'Profil',
        about: 'Tentang Atma',
        theme: {
            light: 'Ubah ke Mode Terang',
            dark: 'Ubah ke Mode Gelap'
        }
    },
    auth: {
        login: {
            title: 'Masuk Akun',
            subtitle: 'Silahkan isi detail akun anda',
            submit: 'Masuk',
            error: 'Terjadi kesalahan',
            email: {
                label: 'Alamat Email',
                placeholder: "contoh{'@'}email.com",
                error: {
                    required: 'Email harus diisi',
                    invalid: 'Email tidak valid'
                }
            },
            password: {
                label: 'Kata Sandi',
                placeholder: 'Kata Sandi',
                error: {
                    required: 'Kata sandi harus diisi'
                }
            },
            register: {
                text: 'Belum punya akun?',
                action: 'Daftar Baru'
            }
        },
        register: {
            title: 'Daftar Akun',
            subtitle: 'Silahkan isi detail akun baru anda',
            submit: 'Daftar',
            error: 'Terjadi kesalahan',
            name: {
                label: 'Nama',
                placeholder: 'Masukkan nama anda',
                error: {
                    required: 'Nama harus diisi'
                }
            },
            email: {
                label: 'Alamat Email',
                placeholder: 'Masukkan email anda',
                error: {
                    required: 'Email harus diisi',
                    invalid: 'Email tidak valid'
                }
            },
            password: {
                label: 'Kata Sandi',
                placeholder: 'Kata Sandi',
                rules: {
                    min: 'Minimal 8 karakter',
                    upper: 'Memiliki 1 huruf kapital',
                    number: 'Memiliki 1 angka',
                    space: 'Tidak terdapat spasi'
                },
                error: {
                    invalid: 'Kata sandi tidak valid'
                }
            },
            login: {
                text: 'Sudah punya akun?',
                action: 'Masuk'
            }
        }
    },
    home: {
        article: {
            title: 'Artikel Populer',
            action: 'Lihat Semua',
            trending: 'Populer',
            readTime: '{time} menit baca'
        },
        feed: {
            title: 'Feed Teratas',
            action: 'Jelajahi'
        },
        personal: {
            title: 'Informasi Personal',
            community: 'Komunitas',
            test: 'Hasil Test'
        }
    },
    explore: {
        feed: {
            share: 'Bagikan',
            report: 'Laporkan'
        },
        filter: {
            sort: {
                title: 'Urutkan',
                trending: 'Terpopuler',
                recent: 'Terbaru'
            },
            time: {
                title: 'Rentang Waktu',
                anytime: 'Semua',
                week: 'Seminggu Terakhir',
                month: 'Sebulan Terakhir',
                year: 'Setahun Terakhir'
            }
        }
    }
};
