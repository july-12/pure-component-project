import React from 'react';
import { render } from 'react-dom'

import { Sayhi } from '../../components'

const App = () => {
return <div>
  this is app 
  <Sayhi name="Faith" />
  </div>
}

render(<App />, document.getElementById('app'))

