 import React from "react";
 import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";

import {Landing} from './Pages/landing/Landing';

  function Index() {
    return <h2>Home</h2>;
  }
 
 type TParams = { id: string };

function Product({ match }: RouteComponentProps<TParams>) {
  return <h2>This is a page for product with ID: {match.params.id} </h2>;
}

 function AppRouter() {
   return (
     <Router>
       <div>
         <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/products/1">First Product</Link>
             </li>
             <li>
               <Link to="/products/2">Second Product</Link>
             </li>
           </ul>
         </nav>
 
         <Route path="/" exact component={Landing} />
         <Route path="/products/:id" component={Product} />
       </div>
     </Router>
   );
 }
 
 export default AppRouter;