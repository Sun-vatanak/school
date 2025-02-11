<template>
    <section>
        <div class="container py-3">
            <div class="row">
                <div class="col-6">
                    <div class="dashboard-header py-1 px-2 d-flex flex-column justify-content-center">
                        <h5 class="m-0 fw-bolder fs-2 text-dark-emphasis">{{ $t('dashboard.header.title') }}</h5>
                        <p class="m-0 text-secondary fs-5">{{ $t('dashboard.header.subtitle') }}</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex gap-2 justify-content-end">
                        <button class="btn km-flag"
                            :class="{ 'btn-outline-primary': languageStore.currentLanguage != 'km' }, { 'btn-primary': languageStore.currentLanguage == 'km' }"
                            @click="setLanguage('km')">
                            <img src="/public/icons/cambodia_flag.svg" alt="" />
                            <span>
                                ភាសាខ្មែរ
                            </span>
                        </button>
                        <button class="btn en-flag"
                            :class="{ 'btn-outline-primary': languageStore.currentLanguage != 'en' }, { 'btn-primary': languageStore.currentLanguage == 'en' }"
                            @click="setLanguage('en')">
                            <img src="/public/icons/en_flag.svg" alt="">
                            <span>
                                ENGLISH
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLanguageStore } from '@/stores/views/lang';
const languageStore = useLanguageStore();
const setLanguage = (lang) => {
    languageStore.setLanguage(lang);
}
</script>