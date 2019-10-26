import React from "react"
import MyInfo from "components/myInfo/views/MyInfo"
import MyEmpty from "components/myEmpty/MyEmpty"
import { CategoryContainer } from "./StyledCategory"
export default (props) => {
    return (
        <CategoryContainer>
            <header className="header">
                <i onClick={props.back}>&#xe646;</i>
                <span>{props.title}</span>
            </header>
            {
                props.isGetted === "成功啦" 
                ? (
                    //可能没有获取到数据 所以这里要进行一次判断，然后判断数据是不是为空
                    (props.list[0]&&JSON.stringify(props.list[0].data)!=="{}") 
                    ?(<MyInfo {...props}></MyInfo>)
                    :<MyEmpty {...props}></MyEmpty> 
                ) 
                : (<div>动态加载图</div>)
            }
        </CategoryContainer>
    )

}