export default {
    route: {
        notFound: 'Halaman Tidak Ditemukan',
        home: 'Beranda',
        article: 'Artikel',
        explore: 'Feed',
        community: 'Komunitas',
        report: 'Laporan',
        test: 'Tes SRQ-20'
    },
    notFound: {
        title: 'Halaman Tidak Ditemukan',
        subtitle: 'Kami Tidak Dapat Menemukan Halaman Yang Anda Cari',
        action: 'Kembali Ke Beranda'
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
    ads: {
        title: 'Nikmati semua fitur dengan masuk ke akun Anda, gratis!',
        subtitle:
            'Pantau mood harian anda, atau lakukan tes tingkat stres. Semua dipersonalisasi untuk anda.',
        action: 'Masuk ke Akun Anda'
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
    article: {
        readTime: '{time} menit baca',
        category: {
            title: 'Kategori',
            default: 'Semua Artikel'
        },
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
    },
    community: {
        board: {
            about: 'Tentang',
            contact: 'Kontak'
        },
        post: {
            notFound: {
                text: 'Post Tidak Ditemukan',
                action: 'Lihat Post Lainnya'
            },
            category: {
                news: 'Berita',
                question: 'Tanya Jawab'
            }
        },
        quiz: {
            action: {
                upvote: 'Masuk untuk Melakukan Upvote',
                add: 'Pertanyaan Baru',
                delete: 'Hapus Pertanyaan',
                unanswered: 'Tidak Terjawab'
            },
            session: {
                title: 'Detail Sesi',
                about: 'Tentang Sesi Ini'
            },
            status: {
                open: 'Pertanyaan',
                close: 'Pertanyaan (Menunggu Jawaban)',
                answered: 'Pertanyaan dan Jawaban'
            },
            add: {
                title: 'Buat Pertanyaan Baru',
                placeholder: 'Tulis pertanyaan anda',
                action: 'Kirim'
            },
            delete: {
                title: 'Hapus Pertanyaan',
                description: 'Apakah anda ingin menghapus pertanyaan ini?',
                action: 'Hapus',
                cancel: 'Batal'
            }
        }
    },
    report: {
        mood: {
            board: {
                title: 'Papan Mood'
            },
            card: {
                title: 'Mood Harian',
                subtitle:
                    'Beritahu apa yang anda rasakan sepanjang hari dan lacak suasana hati anda dari waktu ke waktu.',
                action: 'Lapor Mood Hari Ini',
                disabled: 'Sudah Laporan'
            },
            modal: {
                title: 'Apa Yang Anda Rasakan?',
                category: {
                    joy: 'Gembira',
                    love: 'Penuh Perasaan',
                    surprise: 'Kaget',
                    neutral: 'Netral',
                    anger: 'Marah',
                    sad: 'Sedih',
                    fear: 'Takut'
                },
                action: 'Kirim'
            }
        },
        test: {
            title: 'Tes Tingkat Stres',
            detail: {
                title: 'Tes SRQ-20',
                question: '20 Pertanyaan',
                option: 'Ya/Tidak',
                action: 'Mulai Tes'
            },
            result: {
                title: 'Hasil Tes Terbaru',
                self: 'Tes Mandiri',
                level: 'Level'
            }
        }
    },
    test: {
        start: {
            title: 'Tes SRQ-20',
            subject: {
                label: 'Siapa Yang Melakukan Tes?',
                option: {
                    self: 'Saya Sendiri',
                    others: 'Orang Lain'
                }
            },
            name: {
                label: 'Nama',
                placeholder: 'Masukkan nama'
            },
            action: 'Mulai Tes',
            cancel: 'Batal'
        },
        option: {
            yes: 'Ya',
            no: 'Tidak'
        },
        guide: {
            title: 'Panduan Tes'
        },
        counter: '{answerCount} dari 20 Dijawab',
        submit: 'Kirim Tes',
        confirmation: {
            title: 'Konfirmasi',
            text: 'Anda telah menjawab semua pertanyaan. Lanjut kirimkan tes ini?',
            action: 'Kirim'
        },
        result: {
            title: 'Hasil Tes',
            action: 'Selesai Tes',
            level: 'Level {level}',
            condition: {
                1: 'Normal',
                2: 'Sedikit Stres',
                3: 'Stres Ringan',
                4: 'Stres',
                5: 'Stres Berat'
            },
            description: {
                before: 'Berdasarkan jawaban dari pertanyaan sebelumnya, hasil tes menunjukkan bahwa anda',
                after: '. Kami sarankan anda menghubungi dokter terkait untuk memvalidasi lebih lanjut hasil pemeriksaan ini.'
            },
            disclaimer:
                'Perlu diingat bahwa tes ini merupakan alat pra-skrining. Silahkan hubungi layanan kesehatan untuk mendapatkan hasil yang lebih akurat.'
        }
    }
};
