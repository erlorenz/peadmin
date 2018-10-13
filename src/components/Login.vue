<template>
  <div id="login">
    <form
      class="login-form"
      action="#">
      <input
        v-model="formData.email"
        type="email"
        placeholder="Email">
      <input
        v-model="formData.password"
        type="password"
        placeholder="Password">
      <button
        type="submit"
        @click.prevent="onSubmit">Submit</button>
      <p > {{ error }} </p>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },

    };
  },
  computed: {
    error() {
      return this.$store.getters.errorStatus;
    },

  },
  methods: {
    onSubmit() {
      this.$store.dispatch('logIn', this.formData);
    },
  },
};

</script>


<style lang="scss" scoped>
.login-form {
  margin: 20vh auto;
  box-shadow: 0 2px 5px rgba(black, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  width: 400px;
  background-color: white;
}

input {
  display: block;
  border: 1px solid lightgray;
  background-color: white;
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  font-family: inherit;
  margin-bottom: 3rem;

  &::placeholder {
    color: lightgray;
    opacity: 1;
  }
}

button {
  padding: 1.8rem 4rem;
  border: none;
  color: white;
  background-color: rgb(156, 25, 80);
  font-size: 1.8rem;
  cursor: pointer;
}
</style>
