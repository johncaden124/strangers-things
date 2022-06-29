import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import { fetchPosts } from './api/api';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
// import LoginForm from './components/LoginForm';


const App = () =>
{
    const [posts,setPosts]=useState([]);
    useEffect(()=>
    {
        Promise.all([fetchPosts()])
        .then(([postsData])=>
        {
            setPosts(postsData);
        });
    },[])
    return (
        <div>
        <Navbar/>
       <Routes>
            <Route exact path = "/Posts" element={ <Posts posts={posts} setPosts={setPosts}/> }></Route>
            <Route exact path = "/Register" element={ <Register/> }></Route>
            <Route exact path = "/Login" element={ <Login/> }></Route>
       </Routes>
    </div>
)}

ReactDOM.render(
    <BrowserRouter>
      <App />,  
    </BrowserRouter>,
   document.getElementById('app'),
   );


   // function myApp() {
   //     const adminUser = {
   //         userName: "johncaden124",
   //         password: "123"
   //     }
   
   //     const [user, setUser] = useState({name: "", userName: ""});
   //     const [error, setError] = useState("");
   
   //     const Login = details => {
   //         console.log(details);
   
   //         if (details.userName == adminUser.userName && details.password == adminUser.password) {
   //             console.log("Logged in");
   //             setUser({
   //                 name: details.name,
   //                 userName: details.userName
   //             });
   //         }
   //         else {
   //         console.log("Details do not match!");
   //         setError("Details do not match!")
   //     }
   // }
   
   //     const Logout = () => {
   //         setUser({name: "", userName: ""});
   //     }
   
   //     return (
   //         <div className="App">
   //             {(user.userName !="") ? (
   //                 <div className="welcome">
   //                     <h2>welcome, <span>{user.name}</span></h2>
   //                     <button onClick={Logout}>Logout</button>
   //                 </div>
   //             ) : (
   //                 <LoginForm Login={Login} error={error} />
   //             )}
   //         </div>
   //     )
   // }