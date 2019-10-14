import React, { PureComponent } from 'react'

class MyInfoContainer extends PureComponent {
    render() {
        return (
            <>
                <div className="container">
                    <header>
                        <i>&#xe646;</i>
                        <span>{this.props.title}</span>
                    </header>
                    <ul className="infoList">
                        <li></li>
                    </ul>
                </div>
            </>
        )
    }
}
export default MyInfoContainer