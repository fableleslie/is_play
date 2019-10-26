import React , { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

import one from 'assets/images/details/1.jpg'
import two from 'assets/images/details/2.jpg'
import three from 'assets/images/details/3.jpg'

export default class Swiper extends Component {
  state = {
    // data: [one, two, three],
    img: [one, two, three],
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
    if (this.state.slideIndex !== this.state.img.length - 1) {
      /* eslint react/no-did-update-set-state: 0 */
      this.setState({ slideIndex: this.state.img.length - 1 });
    }
  }
  render() {
    console.log(this.state.img)
    return (
      <WingBlank>
      <WhiteSpace />
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={this.state.slideIndex}
        >
          {this.state.img.map((val, index) => (
            <a
              key={val + index}
              href="/index"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
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