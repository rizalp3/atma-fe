export default {
    route: {
        notFound: 'Page Not Found',
        home: 'Home',
        article: 'Articles',
        explore: 'Explore',
        community: 'Community',
        report: 'Report',
        test: 'SRQ-20 Test'
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
    ads: {
        title: "Enjoy all feature by login into your account, it's free!",
        subtitle:
            'Record your daily mood, or take a stress test. All personalized for you.',
        action: 'Login to Your Account'
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
    article: {
        readTime: '1 min read | {time} mins read',
        category: {
            title: 'Category',
            default: 'All Article'
        },
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
    },
    report: {
        mood: {
            board: {
                title: 'Moodboard'
            },
            card: {
                title: 'Daily Mood',
                subtitle:
                    'Tell us what you feel throughout the day and track your mood over time.',
                action: "Report Today's Mood",
                disabled: 'Reported Today'
            },
            modal: {
                title: 'What Do You Feel?',
                category: {
                    joy: 'Joy',
                    love: 'Love',
                    surprise: 'Suprise',
                    neutral: 'Neutral',
                    anger: 'Anger',
                    sad: 'Sad',
                    fear: 'Fear'
                },
                action: 'Submit'
            }
        },
        test: {
            title: 'Stress Level Test',
            detail: {
                title: 'SRQ-20 Test',
                question: '20 Questions',
                option: 'Yes/No',
                action: 'Take a Test'
            },
            result: {
                title: 'Latest Test Results',
                self: 'Self Test',
                level: 'Level'
            }
        }
    },
    test: {
        start: {
            title: 'SRQ-20 Test',
            subject: {
                label: 'Who Does The Test?',
                option: {
                    self: 'Yourself',
                    others: 'Other People'
                }
            },
            name: {
                label: 'Name',
                placeholder: 'Enter name'
            },
            action: 'Start Test',
            cancel: 'Cancel'
        },
        option: {
            yes: 'Yes',
            no: 'No'
        },
        guide: {
            title: 'Test Guide'
        },
        counter: '{answerCount} of 20 Answered',
        submit: 'Submit Test',
        confirmation: {
            title: 'Confirmation',
            text: "You've answered all questions. Continue to submit this test?",
            action: 'Submit'
        },
        result: {
            title: 'Test Result',
            action: 'Finish Test',
            level: 'Level {level}',
            condition: {
                1: 'Normal',
                2: 'Slightly Stress',
                3: 'Stress',
                4: 'Very Stress',
                5: 'Severe Stress'
            },
            description: {
                before: 'Based on the answer to prior questions, the result show that you have a',
                after: 'condition. We suggest you to contact nearest medical treatmest to further validate this finding.'
            },
            disclaimer:
                'Notice that this test is a pre-screening tool. Please contact medical support to have a more accurate result.'
        }
    }
};
