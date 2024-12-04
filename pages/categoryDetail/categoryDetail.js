Page({
  data: {
    category: {},
    products: []
  },

  onLoad(options) {
    const categoryId = options.id;
    console.log('options:', options);
    console.log('categoryId:', categoryId);

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
      console.log('category:', category);
      this.setData({
        category: category
      });
      this.loadProducts(categoryId);
    } else {
      my.showToast({
        type: 'fail',
        content: '分类未找到'
      });
    }
  },

  getCategoryById(categoryId) {
    const categories = [
      { 
        id: 1, 
        name: '电子产品', 
        icon: '/images/electronics.png', 
        desc: '手机、电脑、平板等',
        products: [
          { id: 101, name: 'iPhone 13', price: 6999, stock: 10 },
          { id: 102, name: 'MacBook Pro', price: 12999, stock: 5 },
          { id: 103, name: 'iPad Air', price: 4999, stock: 20 }
        ]
      },
      { 
        id: 2, 
        name: '家居用品', 
        icon: '/images/home.png', 
        desc: '家居用品描述',
        products: [
          { id: 201, name: '沙发', price: 3999, stock: 3 },
          { id: 202, name: '床垫', price: 2999, stock: 10 },
          { id: 203, name: '餐桌', price: 1999, stock: 5 }
        ]
      },
      { 
        id: 3, 
        name: '服饰', 
        icon: '/images/clothing.png', 
        desc: '服饰描述',
        products: [
          { id: 301, name: 'T恤', price: 99, stock: 50 },
          { id: 302, name: '牛仔裤', price: 199, stock: 30 },
          { id: 303, name: '外套', price: 299, stock: 20 }
        ]
      }
    ];
    return categories.find(category => category.id === parseInt(categoryId));
  },

  loadProducts(categoryId) {
    const products = this.getMockProducts(categoryId);
    console.log('products:', products);
    this.setData({
      products: products
    });
  },

  getMockProducts(categoryId) {
    switch (categoryId) {
      case 1:
        return [
          { id: 1, name: '手机', price: '¥3999', image: '/images/phone.png' },
          { id: 2, name: '电脑', price: '¥5999', image: '/images/laptop.png' },
          { id: 3, name: '平板', price: '¥2999', image: '/images/tablet.png' },
          { id: 4, name: '耳机', price: '¥599', image: '/images/headphones.png' },
          { id: 5, name: '智能手表', price: '¥1999', image: '/images/smartwatch.png' }
        ];
      case 2:
        return [
          { id: 1, name: '沙发', price: '¥2999', image: '/images/sofa.png' },
          { id: 2, name: '餐桌', price: '¥1999', image: '/images/diningtable.png' },
          { id: 3, name: '椅子', price: '¥499', image: '/images/chair.png' },
          { id: 4, name: '床', price: '¥3999', image: '/images/bed.png' },
          { id: 5, name: '书架', price: '¥899', image: '/images/bookshelf.png' }
        ];
      case 3:
        return [
          { id: 1, name: 'T恤', price: '¥99', image: '/images/tshirt.png' },
          { id: 2, name: '牛仔裤', price: '¥199', image: '/images/jeans.png' },
          { id: 3, name: '运动鞋', price: '¥299', image: '/images/sneakers.png' },
          { id: 4, name: '外套', price: '¥399', image: '/images/jacket.png' },
          { id: 5, name: '连衣裙', price: '¥299', image: '/images/dress.png' }
        ];
      default:
        console.log('Unknown category ID:', categoryId);
        return [];
    }
  }
});