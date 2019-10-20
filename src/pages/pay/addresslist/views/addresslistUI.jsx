import React from 'react'

import AddressUIContainer from './styledAddress'

function AddressUI (props){
    return(
        <AddressUIContainer>
            <header>
                <i onClick={props.toBack}>&#xe646;</i>
                <div>我的收货地址</div>
                <span onClick={props.toEdit}>添加新地址</span>
            </header>
            <main>
                <div className='address-bar'></div>
                <ul>
                    <li className="order-address">
                        <span>&#xe667;</span>
                        <div className="address-desc">
                            <div className="desc-title">
                                <span className="desc-name">邵邵</span>
                                <i>18897982306</i>
                            </div>
                            <div className="desc-content">
                                北京市-昌平区-沙河镇沙阳路18号北京科
                                技职业学院千锋教育
                            </div>
                        </div>
                        <div className='li-bar'></div>
                        <div className='yo-ico' onClick={props.toEdit}>编辑</div>
                    </li>
                    <li className="order-address">
                        <span>&#xe667;</span>
                        <div className="address-desc">
                            <div className="desc-title">
                                <span className="desc-name">邵邵</span>
                                <i>18897982306</i>
                            </div>
                            <div className="desc-content">
                                北京市-昌平区-沙河镇沙阳路18号北京科
                                技职业学院千锋教育
                            </div>
                        </div>
                        <div className='li-bar'></div>
                        <div className='yo-ico' onClick={props.toEdit}>编辑</div>
                    </li>
                </ul>
            </main>
        </AddressUIContainer>
    )
}

export default AddressUI