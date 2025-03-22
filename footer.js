document.addEventListener("DOMContentLoaded", function () {
    var footerContent = `
        <footer id="footer">
            <div id="footer-widgets" class="container style-1">
                <div class="row">
                    <div class="col-md-3">
                        <div class="widget widget_about margin-bottom-25">
                            <div class="margin-bottom-35">
                                <img src="assets/img/habeos-logo2.png" width="204" height="30" alt="image"  class="footer-logo-img"/>
                            </div>
                        </div>
                        <section class="widget widget_information">
                            <ul class="info-wrap">
                                <li class="address item">Kanthapuram, Unnikulam post, Calicut, India 673574</li>
                                <li class="phone item">+91 8606 168 977, 0496 296 8977</li>
                                <li class="email item">info@habeosbuilders.com</li>
                            </ul>
                        </section>
                    </div>
                    <div class="col-md-3">
                        <div class="widget widget_tag_cloud">
                            <h2 class="widget-title">Popular tags</h2>
                            <div class="tagcloud">
                                <a href="#">Commercial Projects</a>
                                <a href="#">Resort Projects</a>
                                <a href="#">Residence Porjects</a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="widget widget_links">
                            <h2 class="widget-title">Useful links</h2>
                            <ul class="">
                                <li><a href="#"  id="whatsapp">WhatsApp</a></li>
                                <li><a href="https://www.instagram.com/habeos__builders?igsh=b3dhcHdkZmlkNGpv" id="instagram">Instagram</a></li>
                                <li><a href="#" id="linkedin">LinkedIn</a></li>
                                <li><a href="#" id="facebook">Facebook</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="widget widget_instagram">
                            <h2 class="widget-title">Instagram photos</h2>
                            <div class="instagram-wrap clearfix g10">
                                <div class="instagram_badge_image">
                                    <a href="https://www.instagram.com/p/CUALx0YJKzB/?igsh=cGs1aXRjcmJpdmpy">
                                        <div class="item">
                                            <img src="assets/img/instagram/1.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="https://www.instagram.com/p/CeGBxERuaEu/?igsh=cDcwMWdreXd3MTR2">
                                        <div class="item">
                                            <img src="assets/img/instagram/2.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="https://www.instagram.com/p/CeIVqKrB8Cj/?igsh=dGw5NWo2NjZuaDNp">
                                        <div class="item">
                                            <img src="assets/img/instagram/3.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="https://www.instagram.com/p/ChuXTVlv8O5/?igsh=MXA4dG84MGo4cXU3eA==">
                                        <div class="item">
                                            <img src="assets/img/instagram/4.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="https://www.instagram.com/p/CuhSub1BPjk/?igsh=MXhma2lyd3YyYTFxOQ==">
                                        <div class="item">
                                            <img src="assets/img/instagram/5.jpg" alt="image" />
                                        </div>
                                    </a>
                                </div>
                                <div class="instagram_badge_image">
                                    <a href="https://www.instagram.com/p/CsgwCvLh48M/?igsh=ZmczNTQ2dWI2aDJ5">
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