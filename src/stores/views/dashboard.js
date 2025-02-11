import axios from "axios";
import { defineStore } from "pinia";
export const useDashboardStore = defineStore('views/dashboard', {
    state: () => ({
        kandal_total: 0,
        phnom_penh_total: 0,
        prey_veng_total: 0,
        total_male: 10,
        total_female: 10,
        total_customers: 0,
    }),
    actions: {
        onLoadSummary() {
            axios.get('http://localhost/ApiCustemer/api/customers/get_data.php')
            .then((res) => {
                let data = res.data.data;
                
                console.log(data.total_male);
                
                this.kandal_total = data.kandal_branch;
                this.phnom_penh_total = data.pp_branch;
                this.prey_veng_total = data.preyveng_branch;
                this.total_male = data.total_male;
                this.total_female = data.total_female;
                this.total_customers = data.total_customers;
            })
        }
    }
})