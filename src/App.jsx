import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Highlights from './Component/Highlights'
import Model from './Component/Model'
import './App.css'
import * as Sentry from '@sentry/react'
import Feature from './Component/Feature'

function App() {

  return (
    <main className="bg-black">
      <Nav/>
      <Hero/>
      <Highlights/>
      <Model />
      <Feature/>
    </main>
  )
}

export default Sentry.withProfiler(App);
