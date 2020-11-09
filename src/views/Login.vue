<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="mt-8">
          <v-img
            class="mx-auto"
            height="200"
            width="200"
            src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_1280.png"
          ></v-img>

          <v-card-title>請登入</v-card-title>

          <v-card-actions class="pa-6">
            <a href="/api/login" style="text-decoration: none;">
              <v-btn color="#00c300" class="white--text">
                <v-img
                left
                height="36"
                width="36"
                :src="line"
                ></v-img>
                登入
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import line from '@/assets/line.png'

export default {
  name: 'Login',
  data: () => ({
    line: line
  })
}
</script>