<template>
  <table>
    <thead>
      <tr>
        <td>Name</td>
        <td>Hotel</td>
        <td>Pickup</td>
        <td>Return</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      <router-link
        v-for="order in orders"
        :key="order._id"
        :to="'/order/' + order._id"
        tag="tr"
        class="order-row">
        <td>{{ order.name }}</td>
        <td>{{ order.hotel }}</td>
        <td>{{ order.pickupDate + ' ' + order.pickupHour }}</td>
        <td>{{ order.returnDate + ' ' + order.returnHour }}</td>
        <td>{{ order.status }}</td>
      </router-link>
    </tbody>
  </table>
</template>


<script>
import axios from '../axios-auth';

export default {
  name: 'Cancelled',
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    const response = await axios.get('/admin/cancelled');
    this.orders = response.data;
  },
};
</script>

<style lang="scss" scoped>
.order-row:hover {
  background-color: yellow;
}
</style>

