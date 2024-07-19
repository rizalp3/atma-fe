export default {
    route: {
        notFound: 'Page Not Found',
        home: 'Home',
        article: 'Articles',
        explore: 'Explore',
        community: 'Community',
        report: 'Report',
        test: 'Test'
    },
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
                placeholder: "example{'@'}mail.com",
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
                placeholder: 'Enter your email',
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
    },
    explore: {
        feed: {
            share: 'Share',
            report: 'Report'
        },
        filter: {
            sort: {
                title: 'Sort By',
                trending: 'Trending',
                recent: 'Recent'
            },
            time: {
                title: 'Date Posted',
                anytime: 'Anytime',
                week: 'Past Week',
                month: 'Past Month',
                year: 'Past Year'
            }
        }
    },
    community: {
        board: {
            about: 'About',
            contact: 'Contact'
        },
        post: {
            notFound: {
                text: 'Post Not Found',
                action: 'View Other Posts'
            },
            category: {
                news: 'News',
                question: 'Q & A'
            }
        },
        quiz: {
            action: {
                upvote: 'Login to Upvote',
                add: 'New Question',
                delete: 'Delete Question',
                unanswered: 'Not Answered'
            },
            session: {
                title: 'Session Detail',
                about: 'About This Session'
            },
            status: {
                open: 'Questions',
                close: 'Questions (Waiting for Answers)',
                answered: 'Questions and Answers'
            },
            add: {
                title: 'Add New Question',
                placeholder: 'Enter your question',
                action: 'Submit'
            },
            delete: {
                title: 'Delete Question',
                description: 'Are you sure you want to delete this question?',
                action: 'Delete',
                cancel: 'Cancel'
            }
        }
    }
};
