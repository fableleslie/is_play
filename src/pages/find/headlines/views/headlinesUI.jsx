import React , {Component} from 'react'
import HeadStyle from './styleHeadline'

import headpic1 from 'assets/images/find/3dc9e042f0f8e34c628db1d6789af4a3.png'
import headpic2 from 'assets/images/find/6d841f44d96350b2d563a379108c827d.png'
import headpic3 from 'assets/images/find/5c3b039de9ec8df6a3c01285aa86641e.png'
import headpic4 from 'assets/images/find/236cfa18057fd295d9e81bf74697770a.png'
import headpic5 from 'assets/images/find/5e76cec46c3642021422a33a3731e6f9.png'

export default class Headlines extends Component{
    render(){
        return(
            <HeadStyle>
                <div>
                    <span>玩么头条</span>
                </div>
                <ul>
                    <li>
                        <img src={headpic1} alt=""/>
                        <div>
                            <p className="headline_title">#溜娃好去处#小小天才的诞生--UCCA Kids儿童节艺 术展要来啦！</p>
                            <p className="`headline_summary`">小小天才的诞生--UCCA Kids儿童节</p>
                        </div>
                    </li>
                    <li>
                        <img src={headpic2} alt=""/>
                        <div>
                            <p className="headline_title">#小末福利#春节不打烊，献上20元无门槛红包，畅快 买！买！买！</p>
                            <p className="headline_summary">春节在家无聊？nono~</p>
                        </div>
                    </li>
                    <li>
                        <img src={headpic3} alt=""/>
                        <div>
                            <p className="headline_title">#遛娃好去处#勇闯音乐岛，为孩子定制“一出好戏”</p>
                            <p className="headline_summary">勇闯音乐岛，为孩子定制“一出好戏”</p>
                        </div>
                    </li>
                    <li>
                        <img src={headpic4} alt=""/>
                        <div>
                            <p className="headline_title">#潮玩#西瓜PLAY视频嘉年华l 北京751D·PARK:玩法 剧透一时爽，相约玩乐永动场。</p>
                            <p className="headline_summary">西瓜PLAY视频嘉年华l 北京751D</p>
                        </div>
                    </li>
                    <li>
                        <img src={headpic5} alt=""/>
                        <div>
                            <p className="headline_title">#聚会#密室不逃脱l一场你没有玩过的宫斗实景游戏</p>
                            <p className="headline_summary">密室不逃脱l 一场你没玩过的宫斗实景游</p>
                        </div>
                    </li>
                </ul>
            </HeadStyle>
        )
    }
}