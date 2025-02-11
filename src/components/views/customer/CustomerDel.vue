<template>
    <div class="modal fade" id="mdl-del" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row gy-1">
                        <div class="col-12">
                            <div class="text-center">
                                <h5 class="mb-0 text-dark-emphasis fs-4 fw-bolder">{{ $t('mdl_del.title') }}</h5>
                                <p class="fs-5">{{ $t('mdl_del.subtitle') }}</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="text-center">
                                <p class="m-0 fs-5"><i class="bi bi-arrow-right-circle"></i> {{ $t('mdl_del.confirm_text.confirm') }} <span class="text-dark-emphasis fs-5 fw-bolder">
                                        {{ customerStore.selected_customer.first_name + " " +
                                            customerStore.selected_customer.last_name }}
                                    </span> {{$t('mdl_del.confirm_text.real')}}</p>
                                <p class="fs-5"> {{ $t('mdl_del.confirm_text.warn') }}</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex justify-content-center gap-2">
                                <button type="button" class="btn btn-outline-danger cancel-btn"
                                    data-bs-dismiss="modal"><i class="bi bi-x-circle fs-5 pe-1 cancel-btn"></i>{{ $t('mdl_del.btn_cancel') }}</button>
                                <button type="button" class="btn btn-danger" @click="onDelete()"><i class="bi bi-check-circle text-white fs-5 pe-1"></i>{{ $t('mdl_del.btn_confirm') }}</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Modal } from 'bootstrap';
import { onMounted } from 'vue';
import axios from 'axios';
import { useCustomerStore } from '@/stores/views/customer';
import { useDashboardStore } from '@/stores/views/dashboard';

const customerStore = useCustomerStore();
const dashboardStore = useDashboardStore();

onMounted(() => {
    customerStore.mdl_del = Modal.getOrCreateInstance(document.getElementById('mdl-del'))
})

const onDelete = () => {
    axios.get(`http://localhost/ApiCustemer/api/customers/destroy.php?id=${customerStore.selected_id}`)
    .then((res) => {
        customerStore.onLoadCustomer();
        dashboardStore.onLoadSummary();
        customerStore.mdl_del.hide();
        console.log(res.data);
    })
}

</script>