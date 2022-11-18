<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content=" IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us</title>
    <!-- Link for favicon -->
    <link rel="icon" href="/logo.png" sizes="16x16" />
    <!-- Link for Font awesome -->
    <script
      src="https://kit.fontawesome.com/2d98f6439c.js"
      crossorigin="anonymous"
    ></script>
    <!-- Bootstrap CSS CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
    <!--CSS Stylesheet -->
    <link rel="stylesheet" href="styles.css" />
    <style>
  #contact-form {
  position: relative;
  margin-top: 3rem;
  background: #111;
  padding: 20px 30px;
  border: 1px solid #444;
  border-radius: 5px;
  box-shadow: 2px 2px 1rem black;
  transition: 0.2s;
  color:#fff;
}
#contact-form:hover {
  transform: scale(1.05);
  transition: 0.2s;
}
#fname,#lname,#email,#message-area{
  background-color: #222;
  color:#fff;
  border:none;
}
#message-area{
  resize: none;
}
#fname-label,#lname-label,#email-label,#comments-label{
  font-weight: 500;
  color:#fff;
}
#send-message{
  width: 10rem;
  padding:0.7rem;
  margin-left: auto;
  margin-right: auto; 
  font-weight: bold;
  transition:0.15s;
  background-color: orangered;
  color:white;
}
#send-message:hover{
  background-color:orange;
  color:black;
  transition:0.15s;
}
#contact-heading{
  font-family:  nanum myeongjo;
  font-weight: bolder;
  font-size: 2rem;
  display:none;
}
/* .contact-post {
  display: none;
} */
.contact-text {
  font-size: 2rem;
  color: #666;
  text-align:center;
  font-weight: 500;
}
.contact-edit {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 16px;
  color: #666;
  font-weight: 500;
  cursor: pointer;
}
form{
  display:none;
}
.social{
    font-size: 3rem;
    color:orange;
    padding:1rem;
}
#connect-heading{
    font-family:  nanum myeongjo;
  font-weight: bolder;
  font-size: 2rem;
}
  </style>
  </head>
  <body>
    <nav
      class="sticky-top navigation menu-navbar navbar navbar-expand-lg navbar-dark"
    >
      <div class="container-fluid">
        <a
          class="main-title navbar-brand"
          href="index.html"
          >Grill N Chill</a
        >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link navItem" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navItem" href="menu.html">Our Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navItem" href="cart.html">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navItem" href="review.html" 
                 >Rate Us</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link navItem" style="color: orange" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          </div>

          <!-- Toggler button -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggle-button">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
    <?php
    if($_SERVER['REQUEST_METHOD']=='POST'){
        error_reporting(0);
        $servername='localhost';
        $username='root';
        $password='';
        $dbname='food';
        $conn=new mysqli($servername,$username,$password,$dbname);
            //Get values into variables by their name
            $firstName=$_POST['fname'];
            $lastName=$_POST['lname'];
            $email=$_POST['email'];
            $comment=$_POST['comment'];
            //Insert Values into MySQL 
            $sql = "INSERT INTO message(firstName,lastName,email,comment)VALUES('$firstName','$lastName','$email','$comment')";
        //To check whether data is inserted properly or not
        if ($conn->query($sql) === TRUE) { echo ""; } else { echo "
        <p class='alert alert-danger mt-4'>" . "Error in sending message, Please contact via social Media" . "
        </p>
        "; //close the connection after data entry
         $conn->close(); } 
    }
?>
<!-- -----------------CONTACT FORM------------ -->
<div class="container" id="contact-form">
    <h4 class="mb-4 mt-2 text-center" id="contact-heading">
      Send a Message</h4>
      <div class="contact-post">
        <div class="contact-text">Message has been Sent</div>
        <a href="contact.html"><div class="contact-edit btn">EDIT</div>
      </div></a>
        
    <form method="post" action="contact.php">

      <div class="row">
        <div class="form-floating col-md-6 mb-3">
          <input
            type="name"
            class="form-control"
            id="fname"
            name="fname"
            placeholder="First Name"
            required
          />
          <label for="fname" id="fname-label" class="ps-4">First Name</label>
        </div>
        <div class="form-floating col-md-6 mb-3">
          <input
            type="name"
            class="form-control"
            id="lname"
            name="lname"
            placeholder="Last Name"
            required
          />
          <label for="lname" id="lname-label" class="ps-4">Last Name</label>
        </div>
        <div class="row">
          <span class="alert alert-danger" id="name-alert" style="display:none"></span>
        </div>
      </div>
      <div class="row">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Email ID"
            oninvalid="emailAlert()"
            required
          />
          <label for="email"  id="email-label" class="ps-4">E Mail ID</label>
        </div>
        <div class="row">
          <span class="ms-1 alert alert-danger" id="email-alert" style="display:none;"></span>
        </div>
      </div>
      <div class="row">
      <div class="form-floating">
        <textarea class="form-control mb-3" placeholder="Leave a message here" name="comment" id="message-area" style="height: 100px" oninvalid="messageAlert()" required></textarea>
  
        <label id="comments-label"class="ps-4" for="message-area">Your Message</label>
      </div>
      <div class="row">
        <span class="alert alert-danger" id="message-alert" style="display:none"></span>
      </div>
      </div>
      <div class="row">
        <button type="submit" name="submit" class="contact-submit btn"  id="send-message">Send Message</button>
      </div>
    </form>
  </div>  
  <h2 class="text-center mt-5" id="connect-heading">Lets Stay Connected</h2>
  <div class="container-md d-flex justify-content-center">
    <div class="social"><a href="https://github.com/wolfofweb" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a></div>
    <div class="social"><a href="https://www.linkedin.com/in/suryadharmakrishnan/" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg></a></div>
    <div class="social"><a href="https://www.instagram.com/wow_its_surya/" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path></svg></a></div>
    <div class="social"><a href="https://www.facebook.com/kingmaker.surya.50/" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path></svg></a></div>
    <div class="social"><a href="https://wa.me/qr/34RHABUTVWA7H1" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683925316" viewBox="0 0 1024 1024" version="1.1" pId="14972" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z" pId="14973"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" pId="14974"></path></svg></a></div>
  </div>
   <hr />
   <footer class="container-md">
     <div class="row mb-3">
       <div class="col-md-6 col-lg-12">
         <p>
           &nbsp;No Copyright Issue, Feel free to copy | If you need any help
           with this, Ping me...!
         </p>
       </div>
       
     </div>
     <div class="row mt-4">
       <span class="col-sm-12 col-md-3"
         >&nbsp;&#169; 2022 Made with &#10084; By Surya</span
       >
       <div class="col-md-3">
       <a href="https://github.com/wolfofweb" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>Github</a>
       </div>
       <a
         href="https://www.meity.gov.in/writereaddata/files/policy_on_adoption_of_oss.pdf"
         target="_blank"
         class="col-sm-12 col-md-3 privacy"
         >&nbsp;Policy on Adoption</a
       >
       <a href="terms.html" class="col-sm-12 col-md-3 terms" target="_blank"
         >&nbsp;Terms and conditions</a
       >
     </div>
   </footer>
<!-- Bootstrap Javascript CDN -->
<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
crossorigin="anonymous"
></script>
  </body>
</html>
