<template>
    <div class="modal fade" id="mdl-crop" tabindex="-1" data-bs-backdrop="static">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row gy-1">
                        <div class="col-12">
                            <div class="text-start">
                                <h5 class="mb-0 text-dark-emphasis fs-4 fw-bolder">{{ $t('mdl_crop.title') }}</h5>
                                <p class="fs-5">{{ $t('mdl_crop.subtitle') }}</p>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <Cropper :src="customerStore.crop.img" @change="onChangeCrop" :stencil-props="{
                            aspectRatio: 1
                        }" />
                        </div>
                        <div class="col-12">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <button data-bs-dismiss="modal" class="btn btn-outline-primary cancel">
                                        <i class="bi bi-x-circle"></i>
                                        {{ $t('mdl_crop.btn_cancel') }}
                                    </button>
                                </div>
                                <div class="d-flex gap-2">
                                    <button type="button" role="button" class="btn btn-outline-primary" @click="onChoose()">
                                            <i class="bi bi-upload pe-1"></i>
                                            {{ $t('mdl_crop.btn_change') }}
                                        </button>
                                    <button type="button" class="btn btn-primary" @click="OnCropped()"><i
                                            class="bi bi-check-circle text-white fs-5 pe-1"></i>{{
                                        $t('mdl_crop.btn_confirm') }}</button>
                                </div>
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
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

const customerStore = useCustomerStore();

onMounted(() => {
    customerStore.mdl_crop = Modal.getOrCreateInstance(document.getElementById('mdl-crop'))
})

let tmp_canvas = null;


const onChoose = () => {
    document.getElementById('selected-image').click();
};

const onChangeCrop = ({coordinates, canvas}) => {
    tmp_canvas = canvas
    console.log(canvas);
    
}

const OnCropped = () => {
    tmp_canvas.toBlob((bin) => {
        if (bin.size > 1048576) {
            customerStore.mdl_crop.hide();
            customerStore.mdl_sieerr.show();
            return;
        }
        customerStore.crop.blob = bin;
        customerStore.crop.avatar = URL.createObjectURL(bin);
        customerStore.is_remove = 0;
        customerStore.mdl_crop.hide();
    },'image/jpeg')
}
</script>