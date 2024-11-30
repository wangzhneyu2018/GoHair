Page({
  data: {
    categories: [
      { id: 1, name: '电子产品' },
      { id: 2, name: '家居用品' },
      { id: 3, name: '服装鞋帽' },
      // 更多分类...
    ],
    products: [],
    currentCategory: 1, // 默认选中第一个分类
  },

  onLoad(options) {
    const categoryId = options.categoryId || 1; // 从跳转参数中获取分类ID，默认为1
    this.setData({
      currentCategory: categoryId,
    });
    this.loadProducts(categoryId);
  },

  onCategoryTap(event) {
    const categoryId = event.currentTarget.dataset.categoryId;
    if (categoryId) {
      this.setData({
        currentCategory: parseInt(categoryId), // 确保 categoryId 是整数
      });
      this.loadProducts(parseInt(categoryId));
    } else {
      console.error('Category ID is undefined');
    }
  },

  loadProducts(categoryId) {
    // 这里可以根据 categoryId 从服务器获取对应的产品数据
    // 示例数据
    let products = [];
    switch (categoryId) {
      case 1:
        products = [
          { id: 1, name: '手机', price: 5999, image: 'https://example.com/phone.jpg' },
          { id: 2, name: '平板', price: 3999, image: 'https://example.com/tablet.jpg' },
          // 更多产品...
        ];
        break;
      case 2:
        products = [
          { id: 3, name: '沙发', price: 2999, image: 'https://example.com/sofa.jpg' },
          { id: 4, name: '床', price: 4999, image: 'https://example.com/bed.jpg' },
          // 更多产品...
        ];
        break;
      case 3:
        products = [
          { id: 5, name: 'T恤', price: 99, image: 'https://example.com/tshirt.jpg' },
          { id: 6, name: '运动鞋', price: 599, image: 'https://example.com/shoes.jpg' },
          // 更多产品...
        ];
        break;
      default:
        products = [];
    }

    this.setData({
      products: products,
    });
  },
});