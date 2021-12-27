// import React, { Component } from 'react'
// import GalleryComponent from './Components/GalleryComponent';
// import { GalleryContextApi } from './ContextApi/Gallery'

// class App extends Component {
//     render() {
//         let data = this.context
//         console.log(data);
//         return (
//           <section id="mainBlock">
//             <article>
//               <GalleryComponent />
//             </article>
//           </section>
//         );
//     }
// }
// export default App

// App.contextType = GalleryContextApi;


import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './TodoApp/TodoList'
const App = () => {
  return (
    <div>
     <TodoList/>
    </div>
  )
}

export default App
