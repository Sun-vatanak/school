<template>
    <div class="bg-white shadow p-2 px-3 mt-3 rounded-2">
        <div class="row">
            <div class="col-12">
                <div class="list-header d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="fs-4 fw-bolder mb-0 text-dark-emphasis">{{ $t('customer.customer_list.title') }}
                        </h5>
                        <p>{{ $t('customer.customer_list.subtitle') }}</p>
                    </div>
                    <div>
                        <button type="button" @click="onAddCustomer()" class="btn btn-primary">
                            {{ $t('customer.customer_list.add_button') }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-centered">
                        <thead>
                            <tr>
                                <th scope="col">{{ $t('customer.customer_list.table_header.id') }}</th>
                                <th scope="col">{{ $t('customer.customer_list.table_header.customer') }}</th>
                                <th scope="col">{{ $t('customer.customer_list.table_header.gender') }}</th>
                                <th scope="col">{{ $t('customer.customer_list.table_header.branch') }}</th>
                                <th scope="col">{{ $t('customer.customer_list.table_header.email') }}</th>
                                <th scope="col">{{ $t('customer.customer_list.table_header.action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cus in customerStore.customers" :key="cus.id">
                                <td>00{{ cus.id }}</td>
                                <td>
                                    <div class="d-flex align-items-center gap-2 m-0">
                                        <img class="user-icon rounded rounded-circle object-fit-cover" :src="cus.photo ? `http://localhost/ApiCustemer/storage/photo/customers/${cus.photo}` : '/public/icons/no_photo.jpg'" 
                                         alt="default.jpg" />
                                        <p class="m-0">{{ cus.first_name + " " + cus.last_name }}</p>
                                    </div>
                                </td>
                                <td>
                                    {{ cus.gender_id == 1 ? $t('gender.male') : $t('gender.female') }}
                                </td>
                                <td>
                                    {{ onProvice(cus.branch_id) }}
                                </td>
                                <td>{{ cus.email }}</td>
                                <td>
                                    <button class="btn border-0 pe-2 p-0" @click="onEdit(cus)">
                                        <i class="bi bi-pencil-square fs-4 text-secondary"></i>
                                    </button>
                                    <button class="btn border-0 p-0" @click="onOpenDel(cus)">
                                        <i class="bi bi-trash fs-4 text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCustomerStore } from '@/stores/views/customer';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();
const customerStore = useCustomerStore();


function onProvice(branch) {
    let state = "";
    if (branch == 1) {
        state = t('branch.branch1')
    } else if (branch == 2) {
        state = t('branch.branch2')
    } else if (branch == 3) {
        state = t('branch.branch3')
    } else {
        state = t('null')
    }
    return state;
}

onMounted(() => {
    customerStore.onLoadCustomer();
})

const onOpenDel = (cus) => {
    customerStore.selected_id = cus.id
    customerStore.selected_customer.first_name = cus.first_name
    customerStore.selected_customer.last_name = cus.last_name
    customerStore.mdl_del.show();
}

const onAddCustomer = () => {
    customerStore.selected_id = 0;
    customerStore.frm.branch_id = null;
    customerStore.frm.gender_id = null;
    customerStore.frm.email = '';
    customerStore.frm.first_name = '';
    customerStore.frm.last_name = '';
    customerStore.crop.avatar = '/public/icons/no_photo.jpg'
    router.push({ name: 'customer' });
}

const onEdit = (cus) => {
    customerStore.selected_id = cus.id;
    customerStore.frm.first_name = cus.first_name
    customerStore.frm.last_name = cus.last_name
    customerStore.frm.email = cus.email
    customerStore.frm.branch_id = cus.branch_id
    customerStore.frm.gender_id = cus.gender_id
    customerStore.crop.avatar = cus.photo ? `http://localhost/ApiCustemer/storage/photo/customers/${cus.photo}` : '/public/icons/no_photo.jpg'
    customerStore.is_remove = 0;

    router.push({ name: 'customer' });
}

</script>