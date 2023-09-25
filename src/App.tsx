import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './theming';
import { Navigation } from './navigation';
import { setProfile } from './reduxToolkit/profile'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reduxToolkit/store';

function App() {
  const dispatch = useDispatch()
  const login = useSelector<RootState, string>((state) => state.profile.login);
  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken){
      dispatch(setProfile({login}))
    }
  },[dispatch, login])

  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Navigation />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
