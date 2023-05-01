import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'
import CourseItemDetails from './components/CourseItemDetails/index'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
