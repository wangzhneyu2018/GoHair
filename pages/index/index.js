Page({
  data: {
    categories: [
      {
        id: 1,
        name: '电子产品',
        icon: '/assets/phone.png',
      },
      {
        id: 2,
        name: '厨房设备',
        icon: '/assets/house.png',
      },
      {
        id: 3,
        name: '工业设备',
        icon: '/assets/camera.png',
      },
      {
        id: 4,
        name: '交通工具',
        icon: '/assets/car.png',
        desc: '5折'
      },
      {
        id: 5,
        name: '全部',
        icon: '/assets/all.png',
      }
    ],
    promoTags: [
      { id: 1, name: '热租爆款' },
      { id: 2, name: '二手优选' },
      { id: 3, name: '潮玩数码' },
      { id: 4, name: '运动户外' },
      { id: 5, name: '都市丽人' }
    ],
    products: [
      {
        id: 1,
        name: 'HUAWEI Mate XT 非凡大师',
        image: '/assets/huawei.png',
        price: '48.28',
        tag: '全新',
        tags: ['可续租', '租期保障']
      },
      {
        id: 2,
        name: 'iPhone 15',
        image: '/assets/iphone15.png',
        price: '0.03',
        tag: '全新',
        tags: ['可买断', '可续租']
      },
      {
        id: 3,
        name: '小米 15 Pro',
        image: '/assets/xiaomi.png',
        price: '9.87',
        tag: '全新',
        tags: ['立减88', '可买断', '可续租']
      }
    ]
  },

  onLoad() {
    // 页面加载时执行
  },

  onSearch() {
    // 搜索功能
    my.showToast({
      content: '搜索功能开发中'
    });
  },

  onCategoryTap(event) {
    const { id } = event.target.dataset;
    // 处理分类点击
    my.showToast({
      content: `点击了分类${id}`
    });
    
  },
  

  onProductTap(event) {
    const { id } = event.target.dataset;
    // 处理商品点击
    my.navigateTo({
      url: `/pages/product/detail?id=${id}`
    });
  }
});

