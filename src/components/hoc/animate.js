import React from 'react';

import { CSSTransition } from 'react-transition-group'

export default (Comp) => {
    return class extends React.Component{
        render(){
            // console.log(this.props)
            let meta = this.props.location.state === undefined ? 1 : this.props.location.state.meta;
            let premeta = this.props.meta;
            // console.log(meta , "pre" ,premeta)
            return (
                <CSSTransition
                    in={!!this.props.match}
                    timeout={300}
                    classNames={{
                    enter: 'animated',
                    enterActive: meta < premeta ? 'slideInLeft' : 'slideInRight',
                    exit: 'animated',
                    exitActive: meta < premeta ? 'slideOutRight' : 'slideOutLeft'
                    }}
                    unmountOnExit
                    mountOnEnter
                    onEntered={() => {
                        this.props.changeMeta(meta);
                        // console.log(this.props)
                    }}
                >
                    <Comp></Comp>
                </CSSTransition>
            )
        }
    }
}