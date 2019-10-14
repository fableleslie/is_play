import React , {Component} from 'react'
// import {Link} from 'react-router-dom'
import {IndexStyle,BackPic,Heart,Share,Location} from './styleindex'

import smallpic1 from 'assets/images/headderail/3dc9e042f0f8e34c628db1d6789af4a3.png'
import smallpic2 from 'assets/images/headderail/a2521e6c599ab0c0fd8cbc98ed9a80e2.png'
import smallpic3 from 'assets/images/headderail/3f8ef301a4dd1d0919f9f470200a2fa4.png'
export default class HeadDetail extends Component{
    render(){
        return (
            <IndexStyle>
            <header>
                <BackPic onClick={this.props.back}>&#xe646;</BackPic>
                <h3>小小天才的诞生--UCCAKid...</h3>
                <p>
                    <Heart>&#xe634;</Heart>
                    <Share onClick={this.props.share}>&#xe624;</Share>
                </p>
            </header>
            <main>
                {/* 文章内容 */}
                <article>
                    <p>UCCA Kids将于2019年6月1日至5日举办“小小天才 的诞生--UCCAKids儿童节艺术展”，集中呈现UCCA Kids的小朋友们在2019年上半年的创作。</p>
                    <img src={smallpic1} alt=""/>
                    <p>Genius在拉丁文中意为伴随着每个新生儿来到世界上的 守护者，这位守护者介乎人与神之间。虔诚的人们对守护 者寄予厚望，祈愿他能赐予孩子品质与才能，久而久之， genius就生长出了我们所熟悉的“天才”之意。</p>
                    <p>哲学家康德认为“天才”是一种天赋的才能，它无法依照 任何规则来习得，就连创作者都无从得知脑海里疯狂的想 法是如何产生的，或许那些突如其来的灵感正是我们的守 护神genius所赠予的礼物。</p>
                    <img src={smallpic2} alt=""/>
                    <p>展览将呈现∪CCA Kids不同年龄段学生在2019年上半 年的日常习作,我们记录下每一位“小小天才”成长轨迹， 将这些给我们带来感动与启发的作品展示给更多人。</p>
                    <p>天才”的诞生是一个过程，在“小小天才的诞生一-UCC A Kids儿童节艺术展”中我们将集中呈现UCCAKids不 同年龄段的小朋友在2019年上半年的创作。展览分为6 个区域:《自然》《人类 最初的文明》《自我》 《外部 世界》《博物馆》 《未来》分别对应毕加索创作的各个 阶段这同样也是在UCCA Kids学习的每位“小小天才” 的成长轨迹。</p>
                </article>
                {/* 简介信息 */}
                <div className="introduction">
                    <img src={smallpic3} alt=""/>
                    <div>
                        <p>小小天才的诞生--UCCA Kids儿童节艺术展</p>
                        <p>
                            <Location>&#xe667;</Location>
                            <span>UCCA Kids尤伦斯当代艺术中心</span>
                        </p>
                    </div>
                </div>
                {/* 相关阅读 */}
                <div className="read">
                    <p>相关阅读</p>
                    <ul>
                        {/* <Link> */}
                            <li>·勇闯音乐岛，为孩子定制的“一出好戏”</li>
                        {/* </Link> */}
                    </ul>
                </div>
            </main>
            <footer>
                <div className="footBox">
                    <img src={smallpic2} alt=""/>
                    <p>小小天才的诞生--UCCA Kids儿童节...</p>
                </div>
                <div className="joinin">我要参加</div>
            </footer>
            </IndexStyle>
        )
    }
}