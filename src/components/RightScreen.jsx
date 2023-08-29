import BottomBar from './BottomBar'
import MainSplash from './MainSplash'
import TopBar from './TopBar'

export default function RightScreen() {
    return (
        <div className='rightscreen'>
            <TopBar />
            <MainSplash />
            <BottomBar />
        </div>
    )
}