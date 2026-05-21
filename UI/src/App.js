import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import About from './componets/AboutComponent/About';
import Banner from './componets/BannerComponent/Banner';
import Footer from './componets/FooterComponent/Footer';
import Header from './componets/HeaderComponent/Header';
import Nav from './componets/NavComponent/Nav';
import Contact from './componets/ContactComponent/Contact';
import Service from './componets/ServiceComponent/Service';
import Register from './componets/RegisterComponent/Register';
import Login from './componets/LoginComponent/Login';
import Main from './componets/MainComponent/Main';
import Logout from './componets/LogoutComponent/Logout';
import AdminHome from './componets/AdminHomeComponent/AdminHome';
import UserHome from './componets/UserHomeComponent/UserHome';
import Manageusers from './componets/ManageUserComponent/ManageUser';
import ChangePassword from './componets/ChangePasswordComponent/ChangePassword';
import EditProfile from './componets/EditProfileComponent/EditProfile';
import ForgetPassword from './componets/ForgetPassword/ForgetPassword';
import Verifyuser from './componets/VerifyUserComponent/VerifyUser';
import ResetPassword from './componets/ResetPasswordComponent/ResetPassword';
import AddCategory from './componets/AddCategoryComponent/AddCategory';
import AddSubCategory from './componets/AddSubCategoryComponent/AddSubCategory';
import ViewSubCategorys from './componets/ViewSubCategorysComponent/ViewSubCategorys';
import ViewCategory from './componets/ViewCategoryComponent/ViewCategory';
import AddProduct from './componets/AddProductByUserComponent/AddProduct';
import AIClient from './componets/AIClientComponent/AIClient';
import ViewUserProducts from './componets/ViewAddedProductComponent/ViewAddedProduct';
import Charity from './componets/CharityComponent/Charity';
import Payment from './componets/PaymentComponent/Payment';
import Success from './componets/SuccessComponent/Success';
import Cancel from './componets/CancelComponent/Cancel';
import ViewTransactions from './componets/ViewCharityComponent/ViewCharity';
import AdminReview from './componets/AdminReviewComponent/AdminReview';



function App() {
  return (
   <>
   
       <Header/>
      
     <Nav/>
    <Banner/>
         

<Routes>
<Route path='/' element={<Main/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='service' element={<Service/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/logout' element={<Logout/>}></Route>
<Route path='/admin' element={<AdminHome/>}></Route>
<Route path='/user' element={<UserHome/>}></Route>
<Route path='/manageusers' element={<Manageusers/>}></Route>
<Route path='/changepassword' element={<ChangePassword/>}></Route>
<Route path='/editprofile' element={<EditProfile/>}></Route>
<Route path='/verifyemail/:email' element={<Verifyuser/>}></Route>
<Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
<Route path='/resetpassword/:email' element={<ResetPassword/>}></Route>
<Route path='/addcategory' element={<AddCategory/>}></Route>
<Route path='/addsubcategory' element={<AddSubCategory/>}></Route>
<Route path='/viewcategory' element={<ViewCategory/>}></Route>
<Route path="/viewsubcategory/:catnm" element={< ViewSubCategorys/>} />
<Route path='/addproducts' element={<AddProduct/>}></Route>
<Route path='/viewaddedproduct/:catnm/:subcatnm' element={<ViewUserProducts/>}></Route>

<Route path='/aiclient' element={<AIClient/>}></Route>

<Route path='/charity' element={<Charity/>}></Route>
<Route path="/payment/:uid/:amt/" element={<Payment />} ></Route>
 <Route path="/success" element={<Success />} ></Route>
  <Route path="/cancel" element={<Cancel />} ></Route>

    <Route path="/transaction" element={<ViewTransactions />} ></Route>

        <Route path="/productreview" element={<AdminReview />} ></Route>


</Routes>
 
    <Footer/>


    <ToastContainer
 position="top-center"
 autoClose={3000}
 theme="colored"
/>

   </>
   
  );
}

export default App;
