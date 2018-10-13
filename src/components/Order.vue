<template>
  <div>
    <h1>Order {{ id }} - {{ order.status }}</h1>
    <div class="order__info">
      <ul>
        <li>Name: {{ order.name }}</li>
        <li>Phone: {{ order.phone }}</li>
        <li>Email: {{ order.email }}</li>

        <li>Stripe ID: {{ order.stripeCharge }}</li>
      </ul>
      <ul>
        <li>Hotel: {{ order.hotel }}</li>
        <li>Room: {{ order.room }}</li>
        <li>Pickup: {{ order.pickupDate }} {{ order.pickupHour }}</li>
        <li>Return: {{ order.returnDate }} {{ order.returnHour }}</li>
      </ul>
      <ul>
        <li>Created: {{ order.created }}</li>
        <li>Picked Up: {{ order.pickedUp }}</li>
        <li>Checked In: {{ order.checkedIn }}</li>
        <li>Out for Delivery: {{ order.outForDelivery }}</li>
        <li>Delivered: {{ order.delivered }}</li>
        <li>Comments: {{ order.adminComment }}</li>
      </ul>
    </div>

    <table>
      <tbody>
        <tr
          v-for="cartItem in order.cartItems"
          :key="cartItem.id">
          <td>{{ cartItem.name }}</td>
          <td>${{ cartItem.price / 100 }}</td>
          <td>{{ cartItem.quantity }}</td>
        </tr>
        <tr>
          <td/>
          <td/>
          <td>${{ order.totalPrice / 100 }}</td>
        </tr>
      </tbody>
    </table>

    <div class="edits">
      <textarea
        v-model="adminComment"
        rows="5"/>
      <select v-model="status">
        <option>Processed</option>
        <option>Picked Up</option>
        <option>Checked In</option>
        <option>Out for Delivery</option>
        <option>Completed</option>
        <option>Cancelled</option>
        <option>Refunded</option>
      </select>
      <button
        type="button"
        @click="makeEdit">Submit</button>
    </div>
  </div>

</template>


<script>
import axios from '../axios-auth';

export default {
  name: 'Order',
  data() {
    return {
      order: {},
      id: this.$route.params.id,
      adminComment: null,
      status: null,
    };
  },

  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },

  async created() {
    const response = await axios.get(`/admin/order/${this.id}`);
    this.order = response.data;
  },

  methods: {
    async makeEdit() {
      const edits = {};
      if (this.adminComment) { edits.adminComment = this.adminComment; }
      if (this.status) { edits.status = this.status; }
      if (edits.status || edits.adminComment) {
        const response = await axios.patch(`/admin/order/${this.id}`, edits);
        this.order = response.data;
        this.$router.push('/active');
      }
    },

  },
};
</script>


      <style lang="scss" scoped>
.order__info {
  display: flex;
  justify-content: space-evenly;
}
</style>

