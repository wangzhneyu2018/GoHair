Page({
  data: {
    userAvatar: '/images/cart.png', // 用户头像URL
    location: '北京', // 定位的城市名称
    recommendedCategory: '热门分类', // 推荐分类的名称
  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);

     // 模拟用户登录状态
    // 如果用户未登录，userAvatar 为空字符串，头像会显示默认的灰色头像
    if (!this.data.userAvatar) {
      this.setData({
        userAvatar: '/images/default-avatar.png',
      });
    }
  },
     // 处理搜索框输入
  handleInput(e) {
    console.log('Search input:', e.detail.value);
  
  },
  onMoreTap() {
    my.alert({
      title: '提示',
      content: '点击了查看更多',
    });
  },

  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
