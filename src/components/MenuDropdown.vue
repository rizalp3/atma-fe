<template>
    <div class="menu-dropdown">
        <!-- Theme Toggle -->
        <button
            v-if="showOnVariant(['full', 'compact'])"
            v-tooltip="themeText"
            class="menu-dropdown__action me-2"
            @click="handleToggleTheme"
        >
            <atma-icon :name="themeIcon" />
        </button>

        <!-- Menu -->
        <div v-if="isMenuShown" class="dropdown">
            <!-- Menu Button -->
            <button
                v-if="isMenuButtonShown"
                class="menu-dropdown__action"
                data-bs-toggle="dropdown"
            >
                <atma-icon name="menu" />
            </button>

            <!-- User Button -->
            <button
                v-else-if="isProfileButtonShown"
                class="menu-dropdown__user"
                data-bs-toggle="dropdown"
            >
                <div class="menu-dropdown__user-name">{{ userName }}</div>

                <img
                    class="menu-dropdown__user-avatar"
                    src="https://i.pravatar.cc/200?img=13"
                    alt="User Avatar"
                />
            </button>

            <!-- Dropdown Menu -->
            <ul class="dropdown-menu dropdown-menu-end shadow-sm mt-2">
                <!-- Profile Section -->
                <div v-if="isAuthenticated" class="dropdown-profile">
                    <img
                        class="dropdown-profile__avatar"
                        src="https://i.pravatar.cc/200?img=13"
                        alt="User Avatar"
                    />

                    <div>
                        <div class="dropdown-profile__name">{{ userName }}</div>
                        <div class="dropdown-profile__email">
                            {{ userEmail }}
                        </div>
                    </div>
                </div>

                <!-- Action Section -->
                <li v-if="isAuthenticated"><hr class="dropdown-divider" /></li>

                <li v-if="isAuthenticated">
                    <div class="dropdown-item">
                        <atma-icon name="person" size="22" />
                        <atma-text size="14" weight="500">Profile</atma-text>
                    </div>
                </li>

                <li v-if="showOnVariant(['mini'])">
                    <div class="dropdown-item" @click="handleToggleTheme">
                        <atma-icon :name="themeIcon" size="22" />
                        <atma-text size="14" weight="500">
                            {{ themeText }}
                        </atma-text>
                    </div>
                </li>

                <li>
                    <div class="dropdown-item">
                        <atma-icon name="info" size="22" />
                        <atma-text size="14" weight="500">About Atma</atma-text>
                    </div>
                </li>

                <!-- Logout Section -->
                <li><hr class="dropdown-divider" /></li>

                <li v-if="isAuthenticated">
                    <div class="dropdown-item" @click="handleLogout">
                        <atma-icon name="logout" size="22" />
                        <atma-text size="14" weight="500">Logout</atma-text>
                    </div>
                </li>
                <li v-else>
                    <div class="dropdown-item" @click="handleShowLoginModal">
                        <atma-icon name="login" size="22" />
                        <atma-text size="14" weight="500">Login</atma-text>
                    </div>
                </li>
            </ul>
        </div>

        <!-- Login Button -->
        <button
            v-if="isLoginButtonShown"
            class="menu-dropdown__login"
            @click="handleShowLoginModal"
        >
            Login
        </button>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
    name: 'MenuDropdown',

    props: {
        variant: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            required: true
        }
    },

    inject: ['isAuthenticated', 'user'],

    setup() {
        const store = useAuthStore();
        return { store };
    },

    computed: {
        themeIcon() {
            const target = this.theme === 'light' ? 'dark' : 'light';
            return `${target}-mode`;
        },

        themeText() {
            const target = this.theme === 'light' ? 'Dark' : 'Light';
            return `Switch to ${target} Mode`;
        },

        userName() {
            return this.user.username || 'User';
        },

        userEmail() {
            return this.user.email || '-';
        },

        isMenuButtonShown() {
            return this.isAuthenticated
                ? this.showOnVariant(['compact', 'mini'])
                : this.showOnVariant(['mini']);
        },

        isProfileButtonShown() {
            return this.isAuthenticated && this.showOnVariant(['full']);
        },

        isMenuShown() {
            return this.isMenuButtonShown || this.isProfileButtonShown;
        },

        isLoginButtonShown() {
            return (
                !this.isAuthenticated && this.showOnVariant(['full', 'compact'])
            );
        }
    },

    methods: {
        showOnVariant(keys = []) {
            return keys.includes(this.variant);
        },

        handleShowLoginModal() {
            this.store.showAuthModal('login');
        },

        handleToggleTheme() {
            this.$emit('toggleTheme');
        },

        handleLogout() {
            this.store.resetAuthData();
        }
    }
};
</script>

<style lang="scss" scoped>
.menu-dropdown {
    display: flex;
    align-items: center;

    &__action {
        width: 40px;
        height: 40px;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        background: var(--system-color-secondary-container);
        color: var(--system-color-on-secondary-container);

        &:hover {
            background: var(--system-color-secondary-container-variant);
        }
    }

    &__login {
        @include text(14px, 500);

        padding: 10px 24px;
        border-radius: 20px;

        background: var(--system-color-primary);
        color: var(--system-color-on-primary);
    }

    &__user {
        padding: 4px 4px 4px 18px;

        display: flex;
        align-items: center;

        border-radius: 20px;

        background: var(--system-color-secondary-container);
        color: var(--system-color-on-secondary-container);

        &-avatar {
            width: 32px;
            height: 32px;
            object-fit: cover;
            border-radius: 50%;
            margin-left: 12px;
        }

        &-name {
            @include text(14px, 500);
            margin-right: auto;
        }

        &:hover {
            background: var(--system-color-secondary-container-variant);
        }
    }
}

.dropdown {
    &-menu {
        min-width: 250px;

        --bs-dropdown-border-width: 0;
        --bs-dropdown-bg: var(--system-color-surface);
        --bs-dropdown-divider-bg: var(--system-color-surface-container-high);
    }

    &-profile {
        display: flex;
        align-items: center;

        gap: 16px;
        padding: 8px 20px;

        &__avatar {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
        }

        &__name {
            @include text(16px, 600);
            color: var(--system-color-on-surface);
        }

        &__email {
            @include text(14px, 400);
            color: var(--system-color-outline);
        }
    }

    &-item {
        display: flex;
        align-items: center;
        gap: 16px;

        cursor: pointer;

        --bs-dropdown-item-padding-y: 8px;
        --bs-dropdown-item-padding-x: 20px;

        --bs-dropdown-link-color: var(--system-color-outline);

        --bs-dropdown-link-hover-bg: var(--system-color-surface-container);
        --bs-dropdown-link-hover-color: var(--system-color-on-surface);

        --bs-dropdown-link-active-bg: var(--system-color-surface-container);
        --bs-dropdown-link-active-color: var(--system-color-on-surface);
    }
}
</style>
