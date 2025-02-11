import axios from "axios";
import { defineStore } from "pinia";
export const useCustomerStore = defineStore('views/customer', {
    state: () => ({
        customers: [],
        frm: {
            first_name: '',
            last_name: '',
            gender_id: null,
            branch_id: null,
            email: '',
        },
        selected_customer: {
            first_name: '',
            last_name: '',
        },
        crop: {
            img: null,
            blob: null,
            avatar: '/public/icons/no_photo.jpg'
        },
        selected_id: 0,
        mdl_del: null,
        mdl_error: null,
        mdl_sieerr: null,
        err_type: 0,
        is_remove: 0,
        mdl_crop: null,
        vv: null,
    }),
    actions: {
        onLoadCustomer() {
            axios.get('/api/customers/index.php')
            .then((res) =>{
                this.customers = res.data.data;
                console.log(res.data.data);
            })
        }
    }
})