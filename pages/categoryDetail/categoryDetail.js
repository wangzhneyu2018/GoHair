Page({
  data: {
    brands: [
      {
        name: '苹果',
        image: '/images/product/1.jpg'
      },
      {
        name: '华为',
        image: '/images/product/1.jpg'
      },
      {
        name: 'iPhone15',
        image: '/images/product/1.jpg'
      },
      {
        name: '小米',
        image: '/images/product/1.jpg'
      },
      {
        name: 'VIVO',
        image: '/images/product/1.jpg'
      },
      {
        name: '华为',
        image: '/images/product/1.jpg'
      },
      {
        name: 'iPhone15',
        image: '/images/product/1.jpg'
      },
      {
        name: '小米',
        image: '/images/product/1.jpg'
      },
    ],
    category: {},
    products: [],
    searchQuery: '',
    filteredProducts: []
  },

  onLoad(options) {
    const categoryId = options.id;
    if (categoryId) {
      this.loadCategoryAndProducts(categoryId);
    } else {
      my.showToast({
        type: 'fail',
        content: '分类 ID 未提供'
      });
    }
  },

  loadCategoryAndProducts(categoryId) {
    const category = this.getCategoryById(categoryId);
    if (category) {
      this.setData({
        category: category,
        products: category.products,
        filteredProducts: category.products // 初始化时显示所有产品
      });
    } else {
      my.showToast({
        type: 'fail',
        content: '分类未找到'
      });
    }
  },

  getCategoryById(categoryId) {
    const categories = [{
        id: 1,
        name: '电子产品',
        icon: '/images/electronics.png',
        desc: '手机、电脑、平板等',
        products: [{
            id: 101,
            name: 'iPhone 13',
            price: 6999,
            stock: 10,
            image: '/images/product/1.jpg',
            status: '全新',
            title: '【12月促销季】首月五折 iPhone 15promax 全新 通过率高 非',
            services: ['可买断', '可续租', '免赔保障', '租期质保'],
            promotionTag: '苹果手机热门榜TOP3',
            serviceTags: ['可买断', '可续租', '免赔保障', '租期质保'],
            rentalCount: '89人租过',
            merchantIcon: '/assets/merchants/merchant1.png'

          },
          {
            id: 102,
            name: 'MacBook Pro',
            price: 12999,
            stock: 5
          },
          {
            id: 103,
            name: 'iPad Air',
            price: 4999,
            stock: 20
          }
        ]
      },
      {
        id: 2,
        name: '家居用品',
        icon: '/images/home.png',
        desc: '家居用品描述',
        products: [{
            id: 201,
            name: '沙发',
            price: 3999,
            stock: 3
          },
          {
            id: 202,
            name: '床垫',
            price: 2999,
            stock: 10
          },
          {
            id: 203,
            name: '餐桌',
            price: 1999,
            stock: 5
          }
        ]
      },
      {
        id: 3,
        name: '服饰',
        icon: '/images/clothing.png',
        desc: '服饰描述',
        products: [{
            id: 301,
            name: 'T恤',
            price: 99,
            stock: 50
          },
          {
            id: 302,
            name: '牛仔裤',
            price: 199,
            stock: 30
          },
          {
            id: 303,
            name: '外套',
            price: 299,
            stock: 20
          }
        ]
      }
    ];
    return categories.find(category => category.id === parseInt(categoryId));
  },

  // loadProducts(categoryId) {
  //   const products = this.getMockProducts(categoryId);
  //   console.log('products:', products);
  //   this.setData({
  //     products: products
  //   });
  // },

  // 
  handleInput(e) {
    const query = e.detail.value.toLowerCase();
    this.setData({
      searchQuery: query,
      filteredProducts: this.data.products.filter(product =>
        product.title.toLowerCase().includes(query) || product.desc.toLowerCase().includes(query)
      )
    });
  }
});