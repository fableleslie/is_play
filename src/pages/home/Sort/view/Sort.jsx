import React, { Component } from 'react';
import SortContainer from './styleSort'

export class Sort extends Component {
    render() {
        return (
            <SortContainer>
                <ul>
                    <li onClick={this.change}>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-c04f560306de6c67.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>精选</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-44efe3d033139a35.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>展览</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-cf638776f7e827f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>周边&户外</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-ff59d31d1ac6ba7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>演出&赛事</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-548b6d8905bece10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>DIY&体验</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-68c4e8e750715774.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>派对交友</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-73f69fe92dcb4479.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>运动</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-dab4c42d0bc59347.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>主题节</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-4b5dd2e9435c2a49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>沙龙讲座</span>
                    </li>
                    <li>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-d097b3635eb148bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <span>景点门票</span>
                    </li>
                </ul>
            </SortContainer>
        )
    }
    change = ()=>{
        this.props.history.push('/123')
    }
}

export default Sort;
