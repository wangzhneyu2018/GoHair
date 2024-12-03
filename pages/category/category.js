Page({
  data: {
    categories: [
      { name: '租手机', image: '/images/categories/phone.png' },
      { name: '租相机', image: '/images/categories/camera.png' },
      { name: '租车', image: '/images/categories/car.png' },
      { name: '租房', image: '/images/categories/house.png' },
      { name: '租电脑', image: '/images/categories/laptop.png' },
      { name: '租平板', image: '/images/categories/tablet.png' },
      { name: '租智能手表', image: '/images/categories/smartwatch.png' },
      { name: '租耳机音响', image: '/images/categories/headphone.png' },
      { name: '租奢包腕表', image: '/images/categories/luxury.png' },
      { name: '租无人机', image: '/images/categories/drone.png' },
      { name: '租游戏VR', image: '/images/categories/vr.png' },
      { name: '租家用电器', image: '/images/categories/appliance.png' },
      { name: '租医疗护理', image: '/images/categories/medical.png' },
      { name: '租户外装备', image: '/images/categories/outdoor.png' },
      { name: '租母婴用品', image: '/images/categories/baby.png' },
      { name: '租图书', image: '/images/categories/book.png' }
    ]
  },

  onBack() {
    my.navigateBack();
  },

  onClose() {
    // 实现关闭逻辑
    my.navigateBack();
  },

  onCategoryTap(e) {
    const category = e.currentTarget.dataset.category;
    my.navigateTo({
      url: `/pages/category-detail/category-detail?name=${category.name}`
    });
  }
});

