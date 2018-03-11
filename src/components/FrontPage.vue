<template>
  <div id="front-page">
    <h1>RPS King</h1>
    <h3>You dare challenge me at Rock Paper Scissors?</h3>
    <p>I have been a poker player for 20 years, you have no chance!</p>
    <div slot="name-entry">
        <input type="text" v-model="name" placeholder="enter name" required />
        <button v-on:click="handleSubmit">Submit</button>
    </div>
  </div>

</template>

<script>
export default {
  data: {
    name: ""
  },
  methods: {
    handleSubmit: function() {
      alert("good luck " + this.name + ", you're gonna need it!");
    }
  }
};
</script>

<style>
</style>
