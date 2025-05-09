//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

//hooks
import HookUseState from '../components/HookUseState'
import HookUserReducer from '../components/HookUserReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'

const Home = () => {
  const { contextValue } = useContext(SomeContext) 

  return (
    <div>
      <HookUseState />
      <HookUserReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Context value: {contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home