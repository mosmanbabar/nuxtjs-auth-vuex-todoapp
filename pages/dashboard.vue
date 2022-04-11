<template>
  <div class="font-bold">
    Dashboard : {{$auth.user.name}} <br>
    Email: {{$auth.user.email}}
    <div>
      <button type="button" class="bg-red-700 text-white rounded p-3" @click="logout">Logout</button>
    </div>
  </div>
</template>
<script>
export default{
  middleware: 'auth',
  methods: {
    async logout(){
      this.$auth.logout();
      this.$router.push('/login');
    }
  }
}
</script>
