<template>
  <div id="starting-page">
    <h1>RPS King</h1>
    <h3>You dare challenge me at Rock Paper Scissors?</h3>
    <p>I have been a poker player for 20 years, you have no chance!</p>
    <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <button v-on:click="handleSubmit">Send</button>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style>
</style>
