Page({
  data: {
    product: {}
  },

  onLoad(options) {
    const productId = options.id;
    if (productId) {
      this.loadProductDetail(productId);
    } else {
      my.showToast({
        type: 'fail',
        content: '产品 ID 未提供'
      });
    }
  },

  loadProductDetail(productId) {
    // 假设 products 是从服务器获取的或在本地定义的产品数组
    const products = [
      {
        id: 101,
        name: 'iPhone 13',
        price: 6999,
        stock: 10,
        image: '/images/product/1.jpg',
        swiperImages: [
          '/images/product/1.jpg',
          '/images/product/2.jpg',
          '/images/product/2.jpg'],
        status: '全新',
        title: '【12月促销季】首月五折 iPhone 15promax 全新 通过率高',
        services: ['可买断', '可续租', '免赔保障', '租期质保'],
        promotionTag: '苹果手机热门榜TOP3',
        serviceTags: ['可买断', '可续租', '免赔保障', '租期质保'],
        rentalCount: '89人租过',
        shippingAddress:'杭州市',
        merchantIcon: '/assets/merchants/merchant1.png'
      },
      // 其他产品信息
    ];

    const product = products.find(item => item.id === parseInt(productId));
    if (product) {
      this.setData({
        product: product
      });
    } else {
      my.showToast({
        type: 'fail',
        content: '未找到产品信息'
      });
    }
  }
});