import styled from 'styled-components'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Register, Landing, Error, ProtectedRoute} from './pages'
import {Alljobs, Profile, SharedLayout, Stats, Addjob} from './pages/dashboard'
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/'
                     element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                     }>
                  <Route index element={<Stats />} />
                  <Route path='all-jobs' element={<Alljobs />} />
                  <Route path='add-job' element={<Addjob />} />
                  <Route path='profile' element={<Profile />} />
              </Route>

              <Route path='/register' element={<Register />} />
              <Route path='/landing' element={<Landing />} />
              <Route path='/*' element={<Error />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
