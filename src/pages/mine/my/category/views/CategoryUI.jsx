import React from "react"
import MyInfo from "components/myInfo/MyInfo"
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
                    (props.list[0]&&JSON.stringify(props.list[0].data)!=="{}") 
                    ?(<MyInfo {...props}></MyInfo>)
                    :<MyEmpty {...props}></MyEmpty> 
                ) 
                : (<div>aa</div>)
            }
        </CategoryContainer>
    )

}