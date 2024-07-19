export default {
    id: {
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
                    placeholder: 'contoh@email.com',
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
        }
    },

    en: {
        general: {
            authenticated: 'Login to Your Account First'
        },
        menu: {
            login: 'Login',
            logout: 'Logout',
            profile: 'Profile',
            about: 'About Atma',
            theme: {
                light: 'Switch to Light Mode',
                dark: 'Switch to Dark Mode'
            }
        },
        auth: {
            login: {
                title: 'Login',
                subtitle: 'Please enter your account detail',
                submit: 'Login',
                error: 'Something went wrong',
                email: {
                    label: 'Email Address',
                    placeholder: 'example@mail.com',
                    error: {
                        required: 'Email is required',
                        invalid: 'Invalid email address'
                    }
                },
                password: {
                    label: 'Password',
                    placeholder: 'Password',
                    error: {
                        required: "Password can't be empty"
                    }
                },
                register: {
                    text: "Don't have an account yet?",
                    action: 'Sign Up'
                }
            },
            register: {
                title: 'Register',
                subtitle: 'Please provide your details to sign up',
                submit: 'Register',
                error: 'Something went wrong',
                name: {
                    label: 'Name',
                    placeholder: 'Enter your name',
                    error: {
                        required: 'Name is required'
                    }
                },
                email: {
                    label: 'Email Address',
                    placeholder: 'example@mail.com',
                    error: {
                        required: 'Email is required',
                        invalid: 'Invalid email address'
                    }
                },
                password: {
                    label: 'Password',
                    placeholder: 'Password',
                    rules: {
                        min: 'At least 8 characters',
                        upper: 'Contain 1 uppercase character',
                        number: 'Contain 1 number',
                        space: "Can't contain any spaces"
                    },
                    error: {
                        invalid: 'Password is invalid'
                    }
                },
                login: {
                    text: 'Already have an account?',
                    action: 'Login'
                }
            }
        },
        home: {
            article: {
                title: 'Trending Articles',
                action: 'Read More',
                trending: 'Trending',
                readTime: '1 min read | {time} mins read'
            },
            feed: {
                title: 'Top Feeds',
                action: 'Explore'
            },
            personal: {
                title: 'Personalized Information',
                community: 'Community',
                test: 'Test Results'
            }
        }
    }
};
