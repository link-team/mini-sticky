Page({
  data: {
    scrollTop: null,
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop,
    });
  },
});
