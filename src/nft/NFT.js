import React from 'react'
import "../nft/styles.css"
export default function NFT() {
    return (
    
          <div className='bg'>
            

{/* breadcrumb */}
<section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        
                        <div className="breadcrumbs-wrap">
                            <h1 className="breadcrumb-title">NFT</h1>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        {/* end */}


        {/* new */}
        <section className="pt-0">
            <div className="container">
                
              
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div id="filter-sidebar" className="filter-sidebar">
                            <div className="filt-head">
                                <h4 className="filt-first">Advance Options</h4>
                                <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">Close <i className="ti-close"></i></a>
                            </div>
                            <div className="show-hide-sidebar">
                                
                             
                                <div className="sidebar-widgets">
                                    
                                    
                                    <form className="form-inline addons mb-3">
                                        <input className="form-control" type="search" placeholder="Search Courses" aria-label="Search"/>
                                        <button className="btn my-2 my-sm-0" type="submit"><i className="ti-search"></i></button>
                                    </form>	
                                    
                                    <h4 className="side_title">Course categories</h4>
                                    <ul className="no-ul-list mb-3">
                                        <li>
                                            <input id="a-4" className="checkbox-custom" name="a-4" type="checkbox"/>
                                            <label htmlFor="a-4" className="checkbox-custom-label">Backend (3)</label>
                                        </li>
                                        <li>
                                            <input id="a-5" className="checkbox-custom" name="a-5" type="checkbox"/>
                                            <label htmlFor="a-5" className="checkbox-custom-label">Frontend (2)</label>
                                        </li>
                                        <li>
                                            <input id="a-6" className="checkbox-custom" name="a-6" type="checkbox"/>
                                            <label htmlFor="a-6" className="checkbox-custom-label">General (2)</label>
                                        </li>
                                        <li>
                                            <input id="a-7" className="checkbox-custom" name="a-7" type="checkbox"/>
                                            <label htmlFor="a-7" className="checkbox-custom-label">IT & Software (2)</label>
                                        </li>
                                        <li>
                                            <input id="a-8" className="checkbox-custom" name="a-8" type="checkbox"/>
                                            <label htmlFor="a-8" className="checkbox-custom-label">Photography (2)</label>
                                        </li>
                                        <li>
                                            <input id="a-9" className="checkbox-custom" name="a-9" type="checkbox"/>
                                            <label htmlFor="a-9" className="checkbox-custom-label">Technology (2)</label>
                                        </li>
                                    </ul>
                                    
                                    {/* <h4 className="side_title">Instructors</h4> */}
                                    {/* <ul className="no-ul-list mb-3">
                                        <li>
                                            <input id="a-1" className="checkbox-custom" name="a-1" type="checkbox"/>
                                            <label htmlFor="a-1" className="checkbox-custom-label">Keny White (4)</label>
                                        </li>
                                        <li>
                                            <input id="a-2" className="checkbox-custom" name="a-2" type="checkbox"/>
                                            <label htmlFor="a-2" className="checkbox-custom-label">Hinata Hyuga (11)</label>
                                        </li>
                                        <li>
                                            <input id="a-6" className="checkbox-custom" name="a-6" type="checkbox"/>
                                            <label htmlFor="a-6" className="checkbox-custom-label">Mike hussy (4)</label>
                                        </li>
                                        <li>
                                            <input id="a-7" className="checkbox-custom" name="a-7" type="checkbox"/>
                                            <label htmlFor="a-7" className="checkbox-custom-label">Adam Riky (7)</label>
                                        </li>
                                        <li>
                                            <input id="a-8" className="checkbox-custom" name="a-8" type="checkbox"/>
                                            <label htmlFor="a-8" className="checkbox-custom-label">Balcony</label>
                                        </li>
                                        <li>
                                            <input id="a-9" className="checkbox-custom" name="a-9" type="checkbox"/>
                                            <label htmlFor="a-9" className="checkbox-custom-label">Icon</label>
                                        </li>
                                    </ul> */}
                                    
                                    <h4 className="side_title">Price</h4>
                                    <ul className="no-ul-list mb-3">
                                        <li>
                                            <input id="a-10" className="checkbox-custom" name="a-10" type="checkbox"/>
                                            <label htmlFor="a-10" className="checkbox-custom-label">All (75)</label>
                                        </li>
                                        <li>
                                            <input id="a-11" className="checkbox-custom" name="a-11" type="checkbox"/>
                                            <label htmlFor="a-11" className="checkbox-custom-label">Free (15)</label>
                                        </li>
                                        <li>
                                            <input id="a-12" className="checkbox-custom" name="a-12" type="checkbox"/>
                                            <label htmlFor="a-12" className="checkbox-custom-label">Paid (60)</label>
                                        </li>
                                    </ul>
                                    
                                    <button className="btn btn-theme full-width mb-2">Filter Result</button>
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                
                    <div className="col-lg-4 col-md-12 col-sm-12 order-2 order-lg-1 order-md-2">							
                        <div className="page_sidebar hide-23 color">
                            
                            <form className="form-inline addons mb-3">
                                <input className="form-control" type="search" placeholder="Search Courses" aria-label="Search"/>
                                <button className="btn my-2 my-sm-0" type="submit"><i className="ti-search"></i></button>
                            </form>	
                            
                            <h4 className="side_title">Course categories</h4>
                            <ul className="no-ul-list mb-3">
                                <li>
                                    <input id="aa-4" className="checkbox-custom" name="aa-4" type="checkbox"/>
                                    <label htmlFor="aa-4" className="checkbox-custom-label">Backend (3)</label>
                                </li>
                                <li>
                                    <input id="aa-5" className="checkbox-custom" name="aa-5" type="checkbox"/>
                                    <label htmlFor="aa-5" className="checkbox-custom-label">Frontend (2)</label>
                                </li>
                                <li>
                                    <input id="aa-6" className="checkbox-custom" name="aa-6" type="checkbox"/>
                                    <label htmlFor="aa-6" className="checkbox-custom-label">General (2)</label>
                                </li>
                                <li>
                                    <input id="aa-7" className="checkbox-custom" name="aa-7" type="checkbox"/>
                                    <label htmlFor="aa-7" className="checkbox-custom-label">IT & Software (2)</label>
                                </li>
                                <li>
                                    <input id="aa-8" className="checkbox-custom" name="aa-8" type="checkbox"/>
                                    <label htmlFor="aa-8" className="checkbox-custom-label">Photography (2)</label>
                                </li>
                                <li>
                                    <input id="aa-9" className="checkbox-custom" name="aa-9" type="checkbox"/>
                                    <label htmlFor="aa-9" className="checkbox-custom-label">Technology (2)</label>
                                </li>
                            </ul>
                            
                            {/* <h4 className="side_title">Instructors</h4>
                            <ul className="no-ul-list mb-3">
                                <li>
                                    <input id="aa-41" className="checkbox-custom" name="aa-41" type="checkbox"/>
                                    <label htmlFor="aa-41" className="checkbox-custom-label">Keny White (4)</label>
                                </li>
                                <li>
                                    <input id="aa-2" className="checkbox-custom" name="aa-2" type="checkbox"/>
                                    <label htmlFor="aa-2" className="checkbox-custom-label">Hinata Hyuga (11)</label>
                                </li>
                                <li>
                                    <input id="aa-3" className="checkbox-custom" name="aa-3" type="checkbox"/>
                                    <label htmlFor="aa-3" className="checkbox-custom-label">Mike hussy (4)</label>
                                </li>
                                <li>
                                    <input id="aa-71" className="checkbox-custom" name="aa-71" type="checkbox"/>
                                    <label htmlFor="aa-71" className="checkbox-custom-label">Adam Riky (7)</label>
                                </li>
                                <li>
                                    <input id="aa-81" className="checkbox-custom" name="aa-81" type="checkbox"/>
                                    <label htmlFor="aa-81" className="checkbox-custom-label">Balcony</label>
                                </li>
                                <li>
                                    <input id="aa-91" className="checkbox-custom" name="aa-91" type="checkbox"/>
                                    <label htmlFor="aa-91" className="checkbox-custom-label">Icon</label>
                                </li>
                            </ul> */}
                            
                            <h4 className="side_title">Price</h4>
                            <ul className="no-ul-list mb-3">
                                <li>
                                    <input id="aa-10" className="checkbox-custom" name="aa-10" type="checkbox"/>
                                    <label htmlFor="aa-10" className="checkbox-custom-label">All (75)</label>
                                </li>
                                <li>
                                    <input id="b-8" className="checkbox-custom" name="b-8" type="checkbox"/>
                                    <label htmlFor="b-8" className="checkbox-custom-label">Free (15)</label>
                                </li>
                                <li>
                                    <input id="b-9" className="checkbox-custom" name="b-9" type="checkbox"/>
                                    <label htmlFor="b-9" className="checkbox-custom-label">Paid (60)</label>
                                </li>
                            </ul>
                            
                        </div>
                        
                        <div className="page_sidebar hidden-md-down color1">
                            <h4 className="side_title">Related Products</h4>
                            <div className="related_items mb-4">
                                <div className="product_item">
                                    <div className="thumbnail">
                                        <a href="#"><img src="https://www.fabionodariphoto.com/wp-content/uploads/2021/04/vendere-foto-nft-750x500.jpg" className="img-fluid" alt=""/></a>
                                    </div>
                                    <div className="info">
                                        <h6 className="product-title"><a href="#">The Source of Learning and Development</a></h6>
                                        {/* <div className="woo_rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="price"><p className="price_ver">ETH99.00<del>ETH149.00</del>
                                    </p></span></div>
                                </div>	
                                <div className="product_item">
                                    <div className="thumbnail">
                                        <a href="#"><img src="https://www.fabionodariphoto.com/wp-content/uploads/2021/04/vendere-foto-nft-750x500.jpg" className="img-fluid" alt=""/></a>
                                    </div>
                                    <div className="info">
                                        <h6 className="product-title"><a href="#">Full Web Designing Course with 20% Offer</a></h6>
                                        {/* <div className="woo_rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </div> */}
                                        <span className="price"><p className="price_ver">ETH89.00<del>ETH179.00</del>
                                    </p></span></div>
                                </div>
                                <div className="product_item">
                                    <div className="thumbnail">
                                        <a href="#"><img src="https://www.fabionodariphoto.com/wp-content/uploads/2021/04/vendere-foto-nft-750x500.jpg" className="img-fluid" alt=""/></a>
                                    </div>
                                    <div className="info">
                                        <h6 className="product-title"><a href="#">The Source of Learning Advance WordPress</a></h6>
                                        {/* <div className="woo_rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="price"><p className="price_ver">ETH199.00<del>ETH279.00</del>
                                    </p></span></div>
                                </div>
                                <div className="product_item">
                                    <div className="thumbnail">
                                        <a href="#"><img src="https://www.fabionodariphoto.com/wp-content/uploads/2021/04/vendere-foto-nft-750x500.jpg" className="img-fluid" alt=""/></a>
                                    </div>
                                    <div className="info">
                                        <h6 className="product-title"><a href="#">Advance Magento & Drupal Development</a></h6>
                                        {/* <div className="woo_rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="price"><p className="price_ver">ETH599.00<del>ETH999.00</del>
                                    </p></span></div>
                                </div>
                            </div>
                            
                            <h4 className="side_title">Popular Tags</h4>
                            <div className="popular_tags">
                                <div className="tag_cloud">
                                    <a href="#" className="tag-cloud-lin">business</a>
                                    <a href="#" className="tag-cloud-lin">design</a>
                                    <a href="#" className="tag-cloud-lin">development</a>
                                    <a href="#" className="tag-cloud-lin">php</a>
                                    <a href="#" className="tag-cloud-lin">wordpress</a>
                                    <a href="#" className="tag-cloud-lin">magento</a>
                                    <a href="#" className="tag-cloud-lin">skills</a>
                                    <a href="#" className="tag-cloud-lin">software</a>
                                    <a href="#" className="tag-cloud-lin">accounting</a>
                                </div>	
                            </div>
                            
                        </div>
                        
                    </div>	
                    
                    <div className="col-lg-8 col-md-12 col-sm-12 order-1 order-lg-2 order-md-1">
                        
                        <div className="row align-items-center mb-3">
                           
                            <div className="col-lg-6 col-md-6 col-sm-12 ordering">
                                <div className="filter_wraps">
                                    <div className="dn db-991 mt30 mb0 show-23">
                                        <div id="main2">
                                            <a href="javascript:void(0)" className="btn btn-theme arrow-btn filter_open" onClick="openNav()" id="open2">Show Filter<span><i className="fas fa-arrow-alt-circle-right"></i></span></a>
                                        </div>
                                    </div>
                                    {/* <div className="dropdown show">
                                        <a className="btn btn-custom dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Recent Shop
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Popular Shop</a>
                                        <a className="dropdown-item" href="#">Recent Shop</a>
                                        <a className="dropdown-item" href="#">Featured Shop</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                    
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    {/* <div className="shop_status hot">Hot</div> */}
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">The Shop Time</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH179.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">Jodi Picoult</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i> 
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH199.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    {/* <div className="shop_status sell">New</div> */}
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">Ken Follett</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH129.00</span>
                                       
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            

                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">Charllots Web 2</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH249.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
                      
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    {/* <div className="shop_status hot">Hot</div> */}
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">The Midnight Witness</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH359.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
               
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    {/* <div className="shop_status sell">New</div> */}
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">All The Light See</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH69.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
                    
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">The Famous Five</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH250.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
                           
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    {/* <div className="shop_status hot">Hot</div> */}
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">The Fitzerland</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH149.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
                           
                            <div className="col-lg-4 col-md-4 col-sm-6">
                        
                                <div className="shop_grid">
                                    <div className="shop_grid_thumb">
                                        <a href="#"><img src="https://cryptocurrencycompany.files.wordpress.com/2021/12/nfts-development.jpg" className="img-fluid" alt="" /></a>
                                    </div>
                                    <div className="shop_grid_caption">
                                        <h4 className="sg_rate_title">The Ruskill Bond</h4>
                                        {/* <div className="shop_grid_rate">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </div> */}
                                        <span className="sg_rate theme-cl">ETH249.00</span>
                                    </div>
                                    <div className="shop_grid_action">
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ti-zoom-in"></i></a>
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="ti-heart"></i></a> */}
                                        <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="fas fa-shopping-cart"></i></a>
                                        {/* <a href="#" className="btn btn-shop" data-toggle="tooltip" data-placement="top" title="Compare"><i className="ti-reload"></i></a> */}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                   
                        {/* <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <ul className="pagination p-center">
                                            <li className="page-item">
                                              <a className="page-link" href="#" aria-label="Previous">
                                                <span className="ti-arrow-left"></span>
                                                <span className="sr-only">Previous</span>
                                              </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item active"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                                            <li className="page-item"><a className="page-link" href="#">18</a></li>
                                            <li className="page-item">
                                              <a className="page-link" href="#" aria-label="Next">
                                                <span className="ti-arrow-right"></span>
                                                <span className="sr-only">Next</span>
                                              </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div> */}
                        
                        
                    </div>
                
                </div>
          
                
            </div>
        </section>


                
          </div>
   
    )
}
