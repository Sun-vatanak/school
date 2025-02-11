<template>
  <main>
    <section>
      <div class="container pb-4">
        <DashboardChart />
        <CustomerList />
        <CustomerDel />
      </div>
    </section>
  </main>
</template>

<script setup>
import DashboardChart from '@/components/views/home/ChartData.vue';
import CustomerList from '@/components/views/customer/CustomerList.vue';
import CustomerDel from '@/components/views/customer/CustomerDel.vue';
</script>
