<template>
    <div class="row">
        <div class="col-12 col-lg-6 mx-auto">
            <div class="w-100 bg-white shadow rounded-2 p-3">
                <form @submit.prevent="onSave">
                    <div class="row g-3">
                     
                        <div class="col-12">
                            <div class="form-top">
                                <h5 class="fs-4 fw-bolder text-dark-emphasis mb-0">
                                    {{ customerStore.selected_id === 0 ? $t('frm_add.title') : $t('frm_add.edit_title') }}
                                </h5>
                                <p>{{ $t('frm_add.subtitle') }}</p>
                            </div>
                        </div>


                        <div class="col-12">
                            <div class="d-flex align-items-center gap-2">
                                <div class="add-icon">
                                    <img :src="customerStore.crop.avatar" alt="Avatar">
                                </div>
                                <div>
                                    <div>
                                        <h5 class="fs-4 fw-bolder text-dark-emphasis mb-0">{{ $t('frm_add.frm.title') }}</h5>
                                        <p class="mb-1">{{ $t('frm_add.frm.subtitle') }}</p>
                                    </div>
                                    <div>
                                        <a role="button" class="text-primary" @click="onChoose">
                                            <i class="bi bi-upload pe-1"></i>
                                            {{ $t('frm_add.frm.choose') }}
                                        </a>
                                        <button type="button" class="btn border-0 text-danger" @click="onRemoveImage">
                                            <i class="bi bi-trash3"></i>
                                            {{ $t('frm_add.frm.delete') }}
                                        </button>
                                        <input type="file" id="selected-image" @change="onSelected" accept="image/png, image/jpeg" class="d-none">
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                        <div class="col-12 col-lg-6">
                            <label for="first-name" class="form-label">{{ $t('frm_add.frm.input_labels.first_name') }} *</label>
                            <input type="text" id="first-name" v-model="customerStore.frm.first_name" class="form-control" :class="{ 'is-invalid': customerStore.vv.first_name.$error }">
                            <div class="invalid-feedback" v-if="customerStore.vv.first_name.$error">
                                {{ customerStore.vv.first_name.$errors[0].$message }}
                            </div>
                        </div>

                     
                        <div class="col-12 col-lg-6">
                            <label for="last-name" class="form-label">{{ $t('frm_add.frm.input_labels.last_name') }} *</label>
                            <input type="text" id="last-name" v-model="customerStore.frm.last_name" class="form-control" :class="{ 'is-invalid': customerStore.vv.last_name.$error }">
                            <div class="invalid-feedback" v-if="customerStore.vv.last_name.$error">
                                {{ customerStore.vv.last_name.$errors[0].$message }}
                            </div>
                        </div>

                       
                        <div class="col-12 col-lg-6">
                            <label for="gender" class="form-label">{{ $t('frm_add.frm.input_labels.gender') }} *</label>
                            <select id="gender" v-model="customerStore.frm.gender_id" class="form-select" :class="{ 'is-invalid': customerStore.vv.gender_id.$error }">
                                <option value="1">{{ $t('gender.male') }}</option>
                                <option value="2">{{ $t('gender.female') }}</option>
                            </select>
                            <div class="invalid-feedback" v-if="customerStore.vv.gender_id.$error">
                                {{ customerStore.vv.gender_id.$errors[0].$message }}
                            </div>
                        </div>

                    
                        <div class="col-12 col-lg-6">
                            <label for="branch" class="form-label">{{ $t('frm_add.frm.input_labels.branch') }} *</label>
                            <select id="branch" v-model="customerStore.frm.branch_id" class="form-select" :class="{ 'is-invalid': customerStore.vv.branch_id.$error }">
                                <option value="1">{{ $t('branch.branch1') }}</option>
                                <option value="2">{{ $t('branch.branch2') }}</option>
                                <option value="3">{{ $t('branch.branch3') }}</option>
                            </select>
                            <div class="invalid-feedback" v-if="customerStore.vv.branch_id.$error">
                                {{ customerStore.vv.branch_id.$errors[0].$message }}
                            </div>
                        </div>

                   
                        <div class="col-12">
                            <label for="email" class="form-label">{{ $t('frm_add.frm.input_labels.email') }} *</label>
                            <input type="text" id="email" v-model="customerStore.frm.email" class="form-control" :class="{ 'is-invalid': customerStore.vv.email.$error }">
                            <div class="invalid-feedback" v-if="customerStore.vv.email.$error">
                                {{ customerStore.vv.email.$errors[0].$message }}
                            </div>
                        </div>

                  
                        <div class="col-6">
                            <div class="d-flex gap-2">
                                <router-link to="/" role="button" class="btn btn-outline-primary btn-sm d-block">
                                    <i class="bi bi-arrow-left-circle fs-5 pe-1"></i>
                                    <span>{{ $t('frm_add.frm.btn.back') }}</span>
                                </router-link>
                                <button v-if="customerStore.selected_id === 0" type="button" class="btn btn-outline-danger btn-sm" @click="onClear">
                                    <i class="bi bi-x-circle fs-5 pe-1"></i>
                                    <span>{{ $t('frm_add.frm.btn.clear') }}</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-6 text-end">
                            <button type="submit" class="btn btn-primary">
                                <i class="bi fs-5 pe-1" :class="{ 'bi-plus-circle': customerStore.selected_id === 0 }"></i>
                                <span>{{ customerStore.selected_id === 0 ? $t('frm_add.frm.btn.add') : $t('frm_add.frm.btn.edit') }}</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { required, email, helpers } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { useCustomerStore } from '@/stores/views/customer';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from '@/stores/views/lang';

const { t } = useI18n();
const router = useRouter();
const customerStore = useCustomerStore();
const languageStore = useLanguageStore();

// Validation Rules
const createRules = () => ({
    first_name: { required: helpers.withMessage(t('frm_add.frm.val.first_name'), required) },
    last_name: { required: helpers.withMessage(t('frm_add.frm.val.last_name'), required) },
    gender_id: { required: helpers.withMessage(t('frm_add.frm.val.gender'), required) },
    branch_id: { required: helpers.withMessage(t('frm_add.frm.val.branch'), required) },
    email: {
        required: helpers.withMessage(t('frm_add.frm.val.email'), required),
        email: helpers.withMessage(t('frm_add.frm.val.email_val'), email),
    },
});

const rules = computed(createRules);
customerStore.vv = useVuelidate(rules, customerStore.frm);

// Watch for language changes
watch(
    () => languageStore.currentLanguage,
    () => {
        customerStore.vv?.$reset();
        customerStore.vv = useVuelidate(computed(createRules), customerStore.frm);
    }
);

// Clear Form
const onClear = () => {
    customerStore.frm = {
        branch_id: null,
        gender_id: null,
        email: '',
        first_name: '',
        last_name: '',
    };
    customerStore.crop = {
        avatar: '/public/icons/no_photo.jpg',
        blob: null,
    };
    customerStore.is_remove = 0;
    customerStore.vv.$reset();
};

// Save Form Data
const onSave = async () => {
    customerStore.vv.$validate();
    if (customerStore.vv.$error) return;

    const frmData = new FormData();
    frmData.append('first_name', customerStore.frm.first_name);
    frmData.append('last_name', customerStore.frm.last_name);
    frmData.append('gender_id', customerStore.frm.gender_id);
    frmData.append('branch_id', customerStore.frm.branch_id);
    frmData.append('email', customerStore.frm.email);

    if (customerStore.crop.blob) frmData.append('photo', customerStore.crop.blob);
    if (customerStore.selected_id !== 0) frmData.append('is_remove', customerStore.is_remove);

    const endpoint = customerStore.selected_id === 0
        ? 'api/customers/store.php'
        : `api/customers/update.php?id=${customerStore.selected_id}`;

    try {
        const res = await axios.post(endpoint, frmData);
        if (res.data.result) {
            router.push({ name: 'home' });
            customerStore.crop.blob = null;
        } else if (res.data.message === "Email already taken.") {
            customerStore.mdl_error.show();
        }
    } catch (error) {
        console.error('Error saving customer:', error);
    }
};

// Choose Image
const onChoose = () => {
    document.getElementById('selected-image').click();
};

// Remove Image
const onRemoveImage = () => {
    customerStore.crop.avatar = '/public/icons/no_photo.jpg';
    customerStore.crop.blob = null;
    customerStore.is_remove = 1;
};

// Handle Image Selection
const onSelected = (e) => {
    if (!e.currentTarget.files.length) return;
    const file = e.currentTarget.files[0];
    customerStore.crop.img = URL.createObjectURL(file);
    customerStore.mdl_crop.show();
};
</script>