document.addEventListener("DOMContentLoaded", function () {
    var footerContent = `
        <footer id="footer">
            <div id="footer-widgets" class="container style-1">
                <div class="row">
                    <div class="col-md-3">
                        <div class="widget widget_about margin-bottom-25">
                            <div class="margin-bottom-35">
                                <img src="assets/img/logo-light@2x.png" width="204" height="30" alt="image" />
                            </div>
                            <p>Nullam vel enim risus. Integer rhoncus hendrerit sem egestas porttitor.</p>
                        </div>
                        <section class="widget widget_information">
                            <ul class="info-wrap">
                                <li class="address item">1 Beverly Hills, Los Angeles, California, 90210, United States</li>
                                <li class="phone item">+1 (390) 379 3368, +1 (390) 379 6868</li>
                                <li class="email item">contact@construction.com</li>
                            </ul>
                        </section>
                    </div>
                    <div class="col-md-3">
                        <div class="widget widget_tag_cloud">
                            <h2 class="widget-title">Popular tags</h2>
                            <div class="tagcloud">
                                <a href="#">Architectural</a>
                                <a href="#">Builder</a>
                                <a href="#">Fire</a>
                                <a href="#">Building</a>
                                <a href="#">Garden design</a>
                                <a href="#">Interior</a>
                                <a href="#">Marketing events</a>
                                <a href="#">ThemeForest</a>
                                <a href="#">Construction</a>
                                <a href="#">Exterior</a>
                                <a href="#">Highway</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="widget widget_links">
                            <h2 class="widget-title">Useful links</h2>
                            <ul class="links col2">
                                <li><a href="#">Home</a></li>
                                <li class="last"><a href="#">Help Center</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li class="last"><a href="#">Term of Use</a></li>
                                <li><a href="#">Services</a></li>
                                <li class="last"><a href="#">About Us</a></li>
                                <li><a href="#">News</a></li>
                                <li class="last"><a href="#">Conditions</a></li>
                                <li><a href="#">Contact</a></li>
                                <li class="last"><a href="#">Conditions</a></li>
                                <li><a href="#">Our Shop</a></li>
                                <li class="last"><a href="#">Privacy Legal</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="widget widget_instagram">
                            <h2 class="widget-title">Instagram photos</h2>
                            <div class="instagram-wrap clearfix g10">
                                <div class="instagram_badge_image">
                                    <a href="#">
                                        <div class="item">
                                            <img src="assets/img/instagram/1.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="#">
                                        <div class="item">
                                            <img src="assets/img/instagram/2.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="#">
                                        <div class="item">
                                            <img src="assets/img/instagram/3.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="#">
                                        <div class="item">
                                            <img src="assets/img/instagram/4.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="#">
                                        <div class="item">
                                            <img src="assets/img/instagram/5.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="#">
                                        <div class="item">
                                            <img src="assets/img/instagram/6.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="bottom" class="clearfix style-1">
    <div id="bottom-bar-inner" class="wprt-container">
        <div class="bottom-bar-inner-wrap">
        
            <div class="bottom-bar-content">
                <div id="copyright">CONSTRUCTION • ULTIMATE CONSTRUCTION TEMPLATE.
                </div><!-- /#copyright -->
            </div><!-- /.bottom-bar-content -->

            <div class="bottom-bar-menu">
                <ul class="bottom-nav">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="projects.html">PROJECTS</a></li>
                    <li><a href="services.html">SERVICES</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>       
            </div><!-- /.bottom-bar-menu -->
        </div>
    </div>
</div>

    `;

    document.getElementById("home-footer").innerHTML = footerContent;
});

// <div id="site-header-wrap"></div>
// <div id="home-footer"></div>