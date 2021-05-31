const app = getApp()

Page({
  data: {
    remind: '加载中',
    help_status: false,
    about_status: false,
    angle: 0, //波浪初始倾角,
  },
  onReady: function () {

    let _this = this;
    // 设置加载停顿 1s
    setTimeout(function () {
      _this.setData({
        remind: ''
      });
    }, 1000);
    // 监听加速度数据事件，控制波浪左右摇摆
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (_this.data.angle !== angle) {
        _this.setData({
          angle: angle
        });
      }
    });
  },
  // 下面三个是分别是点击helpicon、展示help和隐藏help的方法
  tapHelp: function (e) {
    if (e.target.id == 'help') {
      this.hideHelp();
    }
  },
  showHelp: function (e) {
    this.setData({
      'help_status': true
    });
  },
  hideHelp: function (e) {
    this.setData({
      'help_status': false
    });
  },
  // 下面三个是分别是点击about、展示about和隐藏about的方法
  tapAbout: function (e) {
    if (e.target.id == 'about') {
      this.hideAbout();
    }
  },
  showAbout: function (e) {
    this.setData({
      'about_status': true
    });
  },
  hideAbout: function (e) {
    this.setData({
      'about_status': false
    });
  }
})
