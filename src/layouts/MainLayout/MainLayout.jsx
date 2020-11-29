import React, {useState} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import './MainLayout.sass';

const MainLayout = props => {

    const [isSideDrawerVisible,
        setIsSideDrawerVisible] = useState(false)

      const sideDrawerClosedHandler = () => {
        setIsSideDrawerVisible(false)
      }

      const sideDrawerOpenHander = () => {
        setIsSideDrawerVisible(!isSideDrawerVisible)
      }

    return (
        <React.Fragment>
            <Navigation openSideDrawer={sideDrawerOpenHander}/>
            <SideDrawer opened={isSideDrawerVisible} close={sideDrawerClosedHandler}/>
            <main className = {'mainLayout'}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default MainLayout
