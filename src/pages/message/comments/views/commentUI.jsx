import React from 'react'
import CommentUIContainer from './styledComment'
import Header from 'components/messageHeader/Header.jsx'
import Empty from 'components/empty/empty'
import Bearempty from 'assets/images/xiaoxi/bearempty.png'
import Active1 from 'assets/images/xiaoxi/active1.png'
import Active2 from 'assets/images/xiaoxi/active2.png'
function CommentUI (props){
    return(
        <CommentUIContainer>
            <Header
            headerText = '评价邀请'
            >
            </Header>
            <main>
                {
                    false ? 
                    <Empty
                    Bear={Bearempty}
                    emptyText = '你还没有消息呦~'
                    >
                    </Empty>
                    :(<ul className='comment-list'>
                        <li>
                            <img src={Active1} alt=""/>
                            <input className='comment-ipt' type="text" value={props.state.iptvalue} onChange={props.handleChange} placeholder="请您给予诚挚的评价~"/>
                            <div className="comment-submit">
                                <i>&#xe501;</i>
                                <button onClick={props.toSubmit}>提交</button>
                            </div>
                        </li>
                        <li>
                            <img src={Active2} alt=""/>
                            <input className='comment-ipt' value={props.state.iptvalue} onChange={props.handleChange} type="text" placeholder="请您给予诚挚的评价~"/>
                            <div className="comment-submit">
                                <i>&#xe501;</i>
                                <button onClick={props.toSubmit}>提交</button>
                            </div>
                        </li>
                    </ul>)
                }
                <i className="message-end">
                    <div>
                        <i></i>
                        <div>END</div>
                        <i></i>
                    </div>
                </i>
            </main>
            
        </CommentUIContainer>
    )
}

export default CommentUI