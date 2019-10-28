import React, { Component } from 'react'
// import Lca from './LifeCycle/Mount/LifeCycleA'
// import Ulca from './LifeCycle/Update/LifeCycleA'
// import PCom from './PureComponent/MyPureComponent'
// import Com from './PureComponent/MyComponent'
// import ParCom from './PureComponent/ParentComponent'
// import RefComp from './Refs/RefHere'
// import Parent from './Refs/Parent'
// import PortalsDemo from './Portls/PortalDemo'
// import Test from './Portls/Test'
import Hero from './LifeCycle/Error/Hero'
import ErrorBoundary from './LifeCycle/Error/ErrorBoundary'
class NewApp extends Component {
    render() {
        return (
            <React.Fragment>
              {/* <Lca/>   */}
              {/* <Ulca/> */}
                {/* <Com/>
                <PCom/> */}
                {/* <ParCom/> */}
                {/* <RefComp/> */}
                {/* <Parent /> */}
                {/* <PortalsDemo/>
                <Test/> */}
                <ErrorBoundary>
                    <Hero heroName="SuperMan"/>
                    <Hero heroName="Joker"/>
                </ErrorBoundary>
            </React.Fragment>
        )
    }
}

export default NewApp
