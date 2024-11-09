import"./style/footer.css";
function Footer(){
     return <>
     <div className="row row-cols-md-4 row-cols-sm-2 footer">
  <div className="col mt-2">
    <h4 className="ms-md-4 ms-sm-4">Quick Links</h4>
    <ul>
      <li className="lili">About Us</li>
      <li className="lili">Home</li>
      <li className="lili">Docter</li>
      <li className="lili">Product</li>
      <li className="lili">HomeRemedi</li>
    </ul>
  </div>

  <div className="col mt-2">
    <h4 className="ms-md-4 ms-sm-4">Contact</h4>
    <ul>
      <li className="lili">+91 7879710456</li>
      <li className="lili">ayurveda@gmail.com</li>
      <li className="lili">Indore India</li>
      {/* <!-- <li className="lili">Terms and Condition</li>
      <li className="lili">Contact Us</li> --> */}
    </ul>
  </div>

  <div className="col mt-2">
    <h4 className="ms-md-4 ms-sm-4">Follow Us</h4>
    <ul>
      <li className="lili">Facebook</li>
      <li className="lili">Twitter</li>
      <li className="lili">Instagram</li>
      <li className="lili">LinkdIn</li>
      {/* <!-- <li className="lili">Track my Order</li>
      <li className="lili">Help</li> --> */}
    </ul>
  </div>

  <div className="col mt-2">
    <h4 className="ms-md-4 ms-sm-4">My Account</h4>
    
  </div>
  <div className="d-flex justify-content-center col-12">Created by <span style={{color:"green"}}> Concept Squard</span> | All Rights Reserved</div>
</div>
     </>
}
export default Footer;