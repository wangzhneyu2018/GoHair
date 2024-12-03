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
  products: [
    {
      image: '/images/cart.png',
      name: '产品名称1',
      description: '这是产品1的描述信息，详细介绍产品的特点和功能。',
      price: 99.99
    },
    {
      image: '/images/product2.jpg',
      name: '产品名称2',
      description: '这是产品2的描述信息，详细介绍产品的特点和功能。',
      price: 199.99
    },
    {
      image: '/images/product3.jpg',
      name: '产品名称3',
      description: '这是产品3的描述信息，详细介绍产品的特点和功能。',
      price: 299.99
    },
    {
      image: '/images/product4.jpg',
      name: '产品名称4',
      description: '这是产品4的描述信息，详细介绍产品的特点和功能。',
      price: 399.99
    }
  ],
  tabs: [
    {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
    },
    {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
    },
    {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
    },
],

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
    // 将数据加载进去，否则不显示
    this.setData({
      products: [
        {
          image: '/images/ant.png',
          name: '产品名称1',
          description: '这是产品1的描述信息，详细介绍产品的特点和功能。',
          price: 99.99
        },
        {
          image: '/images/product2.jpg',
          name: '产品名称2',
          description: '这是产品2的描述信息，详细介绍产品的特点和功能。',
          price: 199.99
        },
        {
          image: '/images/product3.jpg',
          name: '产品名称3',
          description: '这是产品3的描述信息，详细介绍产品的特点和功能。',
          price: 299.99
        },
        {
          image: '/images/product4.jpg',
          name: '产品名称4',
          description: '这是产品4的描述信息，详细介绍产品的特点和功能。',
          price: 399.99
        }
      ]
    });
  // 页面加载时初始化数据
  this.setData({
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
    },
    {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
    },
    {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
    },
    ]
  });
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
