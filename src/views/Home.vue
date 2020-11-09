<template>
  <div class="ma-8">
    <!-- table -->
    <v-row>
       <v-col cols="6" class="px-10">
        <h1>{{userName}}，您好</h1>
      </v-col>
      <v-col cols="6">
        <popupEditor></popupEditor>
      </v-col>
      <v-col cols="12">
        <v-data-table
          ref="table"
          :headers="heders"
          :items="listShop"
          :footer-props="{
            ['items-per-page-all-text']: '全部',
            ['items-per-page-text']: '每頁顯示'
          }"
          height= "550"
          class="elevation-1 mx-8">
          <template v-slot:item.actions="{ item }">
            <v-icon @click="editItem(item)">mdi-pencil</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import popupEditor from '@/components/popupEditor.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    popupEditor
  },
  data: () => ({
    heders: [
      { text: '商店名稱', value:'name' },
      { text: '商店地址', value:'add' },
      { text: '商店電話', value:'tel' },
      { text: '商店負責人', value:'onwer' },
      { text: '編輯', value:'actions' }
    ],
    
  }),
  created() {
    this.$store.dispatch('shop/get')
  },
  computed: {
    ...mapGetters(['userName', 'listShop'])
  },
  methods: {
    editItem(item) {
      this.$store.dispatch('shop/edit', item._id)
    }
  }
}
</script>