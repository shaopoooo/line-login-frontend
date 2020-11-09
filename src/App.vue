<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <v-snackbar
        v-model="error"
        :timeout="5000"
        color="error"
        class="pb-16">
        {{`${msg}`}}
      </v-snackbar>
      <v-snackbar
        v-model="success"
        :timeout="5000"
        color="success"
        class="pb-16">
        {{`${msg}`}}
      </v-snackbar>
    </v-main>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020 shaopo demo</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    success: false,
    error: false,
    msg: ''
  })
}

</script>