import React , { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Swiper extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 229,
    slideIndex: 0,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  componentDidUpdate() {
    // After the new child element is rendered, change the slideIndex
    // https://github.com/FormidableLabs/nuka-carousel/issues/327
    if (this.state.slideIndex !== this.state.data.length - 1) {
      /* eslint react/no-did-update-set-state: 0 */
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }
  render() {
    return (
      <WingBlank>
      <WhiteSpace />
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={this.state.slideIndex}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val + index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: this.state.imgHeight}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}