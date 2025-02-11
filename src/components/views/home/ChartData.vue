<template>
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="row g-3">
                <div class="col-12">
                    <div class="bg-white shadow p-3 rounded-2">
                        <div class="chart-top">
                            <h5 class="fs-4 fw-bolder mb-0 text-dark-emphasis">{{ $t('dashboard.chart_left.title') }}
                            </h5>
                            <p>{{ $t('dashboard.chart_left.subtitle') }}</p>
                        </div>
                        <div class="row g-3 p-3">
                            <div class="col-12 col-md-5">
                                <div
                                    class="w-100 h-100 d-flex flex-column align-items-center align-items-md-start justify-content-md-start">
                                    <DoughnutChart :styles="chartStyle" :chart-data="{
                                        labels: [
                                            $t('branch.branch1'),
                                            $t('branch.branch2'),
                                            $t('branch.branch3'),
                                        ],
                                        datasets: [
                                            {
                                                data: [
                                                    dashboardStore.kandal_total,
                                                    dashboardStore.phnom_penh_total,
                                                    dashboardStore.prey_veng_total
                                                ],
                                                backgroundColor: ['#000', '#546ee5', '#44badc'],
                                                borderColor: '#ffffff',
                                                borderWidth: 2,
                                            },
                                        ],
                                    }" :options="{
                                        plugins: {
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            legend: {
                                                display: false,
                                            },
                                            tooltip: {
                                                enabled: true,
                                            },
                                        },
                                        cutout: '78%',
                                    }" />
                                </div>
                            </div>
                            <div class="col-12 col-md-7">
                                <div
                                    class="branch-content w-100 h-100 d-flex flex-column align-items-center align-items-md-start justify-content-md-center">
                                    <div class="d-flex align-items-center gap-1 mb-2">
                                        <span class="circle-icon kd"></span>
                                        {{ $t('branch.branch1') + " " + dashboardStore.kandal_total
                                            + " " + $t('people') }}
                                    </div>
                                    <div class="d-flex align-items-center gap-1 mb-2">
                                        <span class="circle-icon pp"></span>
                                        {{ $t('branch.branch2') + " " +
                                            dashboardStore.phnom_penh_total + " " +
                                            $t('people') }}
                                    </div>
                                    <div class="d-flex align-items-center gap-1 mb-2">
                                        <span class="circle-icon pv"></span>
                                        {{ $t('branch.branch3') + " " +
                                            dashboardStore.prey_veng_total + " " +
                                            $t('people') }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="row g-3">
                <div class="col-12">
                    <div class="bg-white shadow p-3 rounded-2">
                        <div class="chart-top">
                            <h5 class="fs-4 fw-bolder mb-0 text-dark-emphasis">{{ $t('dashboard.chart_right.title') }}
                            </h5>
                            <p>{{ $t('dashboard.chart_right.subtitle') }}</p>
                        </div>
                        <div class="row g-3 p-3">
                            <div class="col-12 col-md-5 ">
                                <div
                                    class="w-100 h-100 d-flex flex-column align-items-center align-items-md-start justify-content-md-start">
                                    <DoughnutChart :styles="chartStyle" :chart-data="{
                                        labels: [
                                            $t('gender.male'),
                                            $t('gender.female'),
                                        ],
                                        datasets: [
                                            {
                                                data: [
                                                    dashboardStore.total_male,
                                                    dashboardStore.total_female,
                                                ],
                                                backgroundColor: ['#bccee4', '#546ee5'],
                                                borderColor: '#ffffff',
                                                borderWidth: 2,
                                            },
                                        ],
                                    }" :options="{
                                        plugins: {
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            legend: {
                                                display: false,
                                            },
                                            tooltip: {
                                                enabled: true,
                                            },
                                        },
                                        cutout: '0%',
                                    }" />
                                </div>
                            </div>
                            <div class="col-12 col-md-7">
                                <div
                                    class="branch-content w-100 h-100 d-flex flex-column align-items-center align-items-md-start justify-content-md-center">
                                    <div class="d-flex align-items-center gap-1 mb-2">
                                        <span class="circle-icon male"></span>
                                        {{ $t('gender.male') + " " + dashboardStore.total_male +
                                            " " +
                                            $t('people')
                                        }}
                                    </div>
                                    <div class="d-flex align-items-center gap-1 mb-2 pb-2 border-dash">
                                        <span class="circle-icon female"></span>
                                        {{
                                            $t('gender.female') + " " + dashboardStore.total_female +
                                            " "
                                            + $t('people')
                                        }}
                                    </div>
                                    <div>
                                        <span>
                                            {{ $t('total') + " " +
                                                dashboardStore.total_customers + " " +
                                                $t('people')
                                            }}
                                        </span>
                                    </div>
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
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import { reactive, computed, onMounted } from 'vue';
import { useDashboardStore } from '@/stores/views/dashboard';
Chart.register(...registerables);


const dashboardStore = useDashboardStore();


const chartStyle = computed(() => {
    return {
        height: '200px',
        width: '200px',
        position: 'relative',
    }
})

onMounted(() => {
    dashboardStore.onLoadSummary();
});


</script>