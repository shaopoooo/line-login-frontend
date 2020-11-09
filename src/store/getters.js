const getters = {
  userName: state => state.user.name,
  listShop: state => state.shop.lists,
  editShop: state => state.shop.edit
}

export default getters