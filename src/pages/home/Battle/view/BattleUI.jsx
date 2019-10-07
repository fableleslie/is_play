import React, { Component } from 'react';
import BattleContainer from './styleBattle'
// import { Carousel, WingBlank } from 'antd-mobile'

class BattleUI extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    render() {
        return (
            <BattleContainer>
                {/* <WingBlank>
                    <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay
                    infinite
                    afterChange={index => this.setState({ slideIndex: index })}
                    >
                    {this.state.data.map((val, index) => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{
                            display: 'block',
                            position: 'relative',
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank> */}
            </BattleContainer>
        )
    }
    componentDidMount(){
        setTimeout(() => {
            // this.setState({
            //   data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            // });
        }, 100);
    }
}

export default BattleUI;
