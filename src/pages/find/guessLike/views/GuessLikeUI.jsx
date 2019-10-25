import React from 'react'
import {GuessLikestyle,Heart} from './styleGuessLike'
import guesspic1 from 'assets/images/find/7d9c0a77b84ca1d3f3cb78e230710c4e.png'
import guesspic2 from 'assets/images/find/0fd2694c5cfdc847741dd4809a6e6fb1.png'
function GuessLike(props){
        return(
            <GuessLikestyle>
                <p className="guesstitle">猜你喜欢</p>
                {/* 渲染开始 */}
                <div className="guesslist" onClick={props.jump}>
                    <div className="guesspic">
                        <img src={guesspic1} alt=""/>
                        <Heart>
                            <span>&#xe634;</span>
                        </Heart>
                        {
                        // props.state.collection ? <Heart onClick={props.collectionClick}><span>&#xe634;</span></Heart> :<Heart onClick={props.collectionClick}><span style={{color:'red'}}>&#xe64e;</span></Heart>
                        }
                    </div>
                    <div className="guessP">
                        <p>自己动手,做最美好的月饼（两人同行一人免单）</p>
                        <p>
                            <span>东城区鼓楼东大街·进行中，即将结束</span>
                            <span>￥200起</span>
                        </p>
                    </div>
                </div>
                {/* 渲染结束 */}
                <div className="guesslist"onClick={props.jump}>
                    <div className="guesspic">
                        <img src={guesspic2} alt=""/>
                        <Heart>
                            <span>&#xe634;</span>
                        </Heart>
                    </div>
                    <div className="guessP">
                        <p>清新健康的中秋问候--和风桃山皮月饼</p>
                        <p>
                            <span>小北的乐享生活工作室 · 进行中</span>
                            <span>￥128起</span>
                        </p>
                    </div>
                </div>
            </GuessLikestyle>
        )
}
export default GuessLike