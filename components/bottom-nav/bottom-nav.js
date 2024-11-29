Component({
  data: {
    navList: [
      { icon: '/images/home.png', text: '首页', page: 'index' },
      { icon: '/images/category.png', text: '分类', page: 'category' },
      { icon: '/images/cart.png', text: '购物车', page: 'cart' },
      { icon: '/images/user.png', text: '我的', page: 'user' }
    ]
  },

  methods: {
    onNavItemTap(e) {
      const { index } = e.currentTarget.dataset;
      const { page } = this.data.navList[index];
      my.navigateTo({ url: `/pages/${page}/${page}` });
    }
  }
});