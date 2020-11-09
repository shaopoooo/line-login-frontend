<template>
  <div class="text-right">
    <v-btn fab class="mr-6" @click="showMenu"><v-icon>mdi-plus</v-icon></v-btn>
    <v-dialog v-model="menu" pesistent max-width="1200px">
      <v-card class="pa-6">
        <v-container>
          <v-form ref="editProduct" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="data.name"
                  label="商店名稱" />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="data.add"
                  label="商店地址" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="data.tel"
                  label="商店電話" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="data.onwer"
                  label="商店負責人" />
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-btn v-if="data._id" color="red darken-1" text @click="remove(data)">刪除</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeMenu">關閉</v-btn>
          <v-btn color="blue darken-1" text @click="save">儲存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'popupEditor',
  components: { },
  data: () => ({
    menu: false,
    data: {
      _id: '',
      name: '',
      add: '',
      tel: '',
      onwer: '',
    }
  }),
  methods: {
    showMenu() {
      this.menu = true
    },
    closeMenu() {
      this.menu = false
      this.data = {
        _id: '',
        name: '',
        add: '',
        tel: '',
        onwer: '',
      }
    },
    save() {
      if(this.data._id){
        this.$store.dispatch('shop/update', this.data)
        .then(() => this.closeMenu())
      } else {
        this.$store.dispatch('shop/new', this.data)
        .then(() => this.closeMenu())
      }
    },
    remove(id) {
      this.$store.dispatch('shop/delete', id)
      .then(() => this.closeMenu())
    }
  },
  computed: {
    ...mapGetters(['editShop']),
  },
  watch: {
    editShop(val) {
      this.data = val
      this.menu = true
    }
  }
}
</script>