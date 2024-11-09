import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    let [user,setUser]=useState({});
    const navigate=useNavigate();
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    useEffect(()=>{
        setUser(JSON.parse(sessionStorage.getItem('user-details')));
    },[]);
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleInputBlur = () => {
        if (searchValue === '') {
            setShowSearch(false);
        }
    };
    const LogOut=()=>{
        sessionStorage.clear();
        navigate('/');
        setUser(null);
        toast.info('Logout')
    }
    const showCart=()=>{
        if(!user){
            toast.error('Firstly Login');
            return
        }
        navigate('/show-cart')
    }
    const LinkStyle = { color: 'rgb(87, 86, 86)', textDecoration: 'none' }
    const img = 'https://i.postimg.cc/0N4mvQzt/png-transparent-ayurveda-healing-tree-art-ayurveda-therapy-medicine-hospital-panchakarma-herbal-food.png';
    return (
        <>
            <div className='topheader d-flex justify-content-around align-items-center'>
                <div><img style={{ borderRadius: '50%', height: '60px' }} src={img} className="img-fluid" alt="" /></div>
                <div>
                    <div className="input-group position-relative d-sm-block d-none d-md-block d-lg-block">
                        <input type="search" className="rounded-pill rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" style={{ borderRadius: '50rem', right: '0' }} className="seachbtn position-absolute btn btn-success" data-mdb-ripple-init><span>search</span></button>
                    </div>
                </div>
                <div>
                    {user ? <>
                        <span style={{ cursor: 'pointer', fontWeight: '600' }} className="text-success me-4"><i className="fa fa-user pe-2" style={{ fontSize: '22px' }} aria-hidden="true"></i>Profile</span>
                        <span  onClick={LogOut} style={{ cursor: 'pointer', fontWeight: '600' }} className="text-success me-4"><i className="fa fa-sign-out pe-2" style={{ fontSize: '22px' }} aria-hidden="true"></i>LogOut</span>
                    </>:
                    <>
                        <span onClick={()=>navigate('user-account')} style={{ cursor: 'pointer', fontWeight: '600' }} className="text-success pe-3"><i className="fa fa-user pe-2" style={{ fontSize: '22px' }} aria-hidden="true"></i>Login</span>
                    </>}
                    <span onClick={showCart} style={{ cursor: 'pointer', fontWeight: '600' }} className="text-success"><i className="fa fa-shopping-cart pe-2" style={{ fontSize: '22px' }} aria-hidden="true"></i>Cart</span>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm position-relative">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars text-light ms-5"></i>
                </button>
                <div className="header collapse navbar-collapse " id="navbarSupportedContent" style={{ backgroundColor: '#186C38',color:'white' }}>
                    <ul className="navbar-nav text-dark mr-auto w-100 d-flex justify-content-around align-items-center">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link text-light" style={LinkStyle}>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/disease" className="nav-link text-light" style={LinkStyle}>Disease</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/get-all-products" className="nav-link text-light" style={LinkStyle}>Products</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/yoga" className="nav-link text-light" style={LinkStyle}>Yoga</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/homeremedies" className="nav-link text-light" style={LinkStyle}>Home Remedies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/about" className="nav-link text-light" style={LinkStyle}>About Us</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/doctorconsult" className="nav-link text-light" style={LinkStyle}>Doctor Consult</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/contact" className="nav-link text-light" style={LinkStyle}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="mobilesearch position-absolute d-sm-none d-block d-lg-none d-md-none " style={{ right: '5%' }}>
                    <div className="input-group position-relative ">
                        {showSearch ? (
                            <>
                                <input
                                    type="text"
                                    className="rounded-pill"
                                    placeholder="Search"
                                    onBlur={handleInputBlur}
                                    onChange={handleInputChange}
                                    value={searchValue}
                                />
                                <button type="button" style={{ borderRadius: '50rem', right: '0' }} className=" position-absolute" data-mdb-ripple-init><span>search</span></button>

                            </>
                        ) : (
                            <i className="fa fa-search" onClick={toggleSearch}></i>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
