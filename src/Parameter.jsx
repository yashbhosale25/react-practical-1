import React from"react";
import{
    BrowserRouter as Router,
    Routes,
    Routes,
    useParams,
} from "reacct-router-dom";

 function BlogPost(){
    let{id}=useParams();
    return(
        <div style={{fontsixe:"50px"}}>
            Now showing post{id}
        </div>
    );
 }

 function Home(){
   return <h3>Home Page</h3>;
 }

 function App(){
    return(
        <Router>
            <Routes>
                <Route path="/page/:id" element={<BlogPost/>}/>
                <Route  path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
 }

 export default  App;
