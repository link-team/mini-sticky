Component({
  props: {
    className: '',
    scrollTop: 0,
    top: 0,
  },
  data: {
    isFixed: false,
  },
  didUpdate(prevProps) {
    if (this.props.scrollTop !== prevProps.scrollTop) {
      this.setFixStatus();
    }
  },
  didMount() {
    this.setFixStatus();
  },
  methods: {
    setFixStatus() {
      my.createSelectorQuery()
        .select(`.${this.props.className}`).boundingClientRect()
        .exec((ret) => {
          if (ret.length > 0) {
            const top = ret[0].top || 0;
            this.setData({
              isFixed: top <= this.props.top,
            });
          }
        });
    },
  },
});
