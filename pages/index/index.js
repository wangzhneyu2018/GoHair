Page({
  data: {
    userAvatar: '/images/cart.png', // 用户头像URL
    location: '北京', // 定位的城市名称
    recommendedCategory: '热门分类', // 推荐分类的名称
    items5: [
      {
          title: '生活缴费',
          icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      },
      {
          title: '市民中心',
          icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
      {
          title: '公积金',
          icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
      },
      {
          title: '出行',
          icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*now3Q4h5DH8AAAAAAAAAAAAAARQnAQ',
      },
      {
          title: '医疗健康',
          icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*I27zQbOu8ScAAAAAAAAAAAAAARQnAQ',
      },
  ],
  imageList: [
    {imageUrl: '/images/cart.png'},
    {imageUrl: '/images/clear.png'},
    {imageUrl: '/images/home.png'},
    // 更多图片数据...
  ],
  currentIndex: 0,
  notificationCount: 0 // 初始未读通知数量
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
  onChange(e) {
    this.setData({
      currentIndex: e.detail.current
    });
    this.setData({
      notificationCount: Math.floor(Math.random() * 120) // 随机生成通知数量
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
