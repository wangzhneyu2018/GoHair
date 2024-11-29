App({
  onLoad() {
    my.setNavigationBar({
      backgroundColor: '#3629B7', // 导航栏背景颜色
      frontColor: '#1573FF' // 导航栏文字颜色
    });
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },

});
