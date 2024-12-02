Page({
  data: {
    orders: [
      {
        id: '1',
        storeIcon: '运动',
        storeName: '步凡者运动官方旗舰店',
        isOfficial: true,
        status: '待支付',
        productImage: '/assets/placeholder.png',
        productName: '冰钎子 冰锥钢锥 滑冰车冰爬型实心电镀一体把手 不生锈',
        productSpec: '实心普通款（55cm一对）送...',
        productPrice: '7.3',
        productQuantity: 1,
        totalAmount: '7.3',
        shippingFee: '免运费',
        hasWarning: true,
        warningMessage: '该商品即将抢光，请尽快支付'
      },
      {
        id: '2',
        storeIcon: '电子',
        storeName: '科技数码专营店',
        isOfficial: false,
        status: '待发货',
        productImage: '/assets/placeholder.png',
        productName: '智能手环 心率监测 防水运动手表',
        productSpec: '黑色 标准版',
        productPrice: '199',
        productQuantity: 1,
        totalAmount: '199',
        shippingFee: '免运费',
        hasWarning: false
      }
    ]
  },
  onLoad(query) {
    console.log("页面加载", query);
    // 页面加载时执行，可以处理传入的参数
    this.setData({
      orders: [
        // 示例数据
        {id: '1', productName: '产品1', productPrice: '100'},
        // 更多数据...
      ]
    });
  },
  onReady() {
    // 页面初次渲染完成时执行
  },
  onShow() {
    console.log("页面显示");
    // 页面显示时执行
  },
  onHide() {
    // 页面隐藏时执行
  },
  onUnload() {
    // 页面卸载时执行
  },
  // 取消订单
  cancelOrder(event) {
    const orderId = event.target.dataset.orderId;
    my.confirm({
      title: '提示',
      content: '确定要取消订单吗？',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        if (result.confirm) {
          // 这里处理取消订单的逻辑
          my.showToast({
            type: 'success',
            content: `订单 ${orderId} 已取消`,
            duration: 2000
          });
        }
      },
    });
  },
  // 去支付
  goToPay(event) {
    const orderId = event.target.dataset.orderId;
    // 这里处理跳转到支付页面的逻辑
    my.alert({
      title: '提示',
      content: `正在跳转到订单 ${orderId} 的支付页面`,
      buttonText: '确定',
    });
  }
});

