import {React,useEffect} from 'react';
import NavBar from '../Navbar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Styles.css'
import AdminDashboard from '../Admin/AdminDashboard';
import { useGetBlogsQuery } from '../../Api/Slices/blogSlice';
import ReactShowMoreText from 'react-show-more-text';
import ErrorPage from '../NoFound/ErrorPage';
// const blogPosts = [
//   {
//     id: 1,
//     title: "My First Blog Post",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mauris in magna euismod convallis. Morbi quis est sed est tristique hendrerit. Sed convallis ultrices risus, vitae interdum nunc vehicula a. Nulla facilisi. Aliquam erat volutpat. In consequat massa at ex auctor, ut dapibus nisi facilisis. Fusce eu vestibulum eros, sed efficitur velit. Nulla eget convallis nisl, sit amet consectetur neque. Aliquam mollis metus vel sapien posuere, eget dictum lorem consectetur. Aenean vulputate turpis elit, at bibendum risus commodo non.",
//     author: "John Doe",
//     date: "January 1, 2022"
//   },
//   {
//     id: 2,
//     title: "10 Tips for Working from Home",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mauris in magna euismod convallis. Morbi quis est sed est tristique hendrerit. Sed convallis ultrices risus, vitae interdum nunc vehicula a. Nulla facilisi. Aliquam erat volutpat. In consequat massa at ex auctor, ut dapibus nisi facilisis. Fusce eu vestibulum eros, sed efficitur velit. Nulla eget convallis nisl, sit amet consectetur neque. Aliquam mollis metus vel sapien posuere, eget dictum lorem consectetur. Aenean vulputate turpis elit, at bibendum risus commodo non.",
//     author: "Jane Smith",
//     date: "February 15, 2022"
//   },
//   {
//     id: 3,
//     title: "How to Cook the Perfect Steak",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mauris in magna euismod convallis. Morbi quis est sed est tristique hendrerit. Sed convallis ultrices risus, vitae interdum nunc vehicula a. Nulla facilisi. Aliquam erat volutpat. In consequat massa at ex auctor, ut dapibus nisi facilisis. Fusce eu vestibulum eros, sed efficitur velit. Nulla eget convallis nisl, sit amet consectetur neque. Aliquam mollis metus vel sapien posuere, eget dictum lorem consectetur. Aenean vulputate turpis elit, at bibendum risus commodo non.",
//     author: "Mike Johnson",
//     date: "March 10, 2022"
//   }
// ];

function Home() {
  const {data}=useGetBlogsQuery()
  const useremail=localStorage.getItem('useremail');
 
 
// const user=localStorage.getItem('username');
const xyz = localStorage.getItem('myObject')
const storedObject = JSON.parse(xyz);
console.log('sjhdkusb===',storedObject)
console.log(storedObject?.isAdmin)
const token= localStorage.getItem("token")
console.log(token)
if(token){
  return (
    <>
    <NavBar/>
    {storedObject?.isAdmin ?
    <AdminDashboard/>
  :

<>
{data?.data.map((item)=>{
  return(
    <div className='container homeContainer'>
    <div class="card col-md-3">
    <div className='d-flex profile col-md-8'>
      <FontAwesomeIcon icon={faUser} />
      <h6>{item.title}</h6>
    </div>
    <div class="card-body">
    <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg" class="card-img-bottom" alt="..."/>
     <ReactShowMoreText lines={2}>
      <p class="card-title">
        {item.description}
        </p>
        </ReactShowMoreText>  
    </div>
  
  </div>
      
    </div>
    )
})}

  </>
  }
 
    </>
  );
}
else{
  return(
    <ErrorPage/>
  )

}
}

export default Home;
