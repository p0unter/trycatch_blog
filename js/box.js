const onePreview = document.querySelector(".one-preview .container");
const breakpointsOnePreview = {
    xs: '(max-width: 575.98px)',
    sm: '(min-width: 576px) and (max-width: 767.98px)',
    md: '(min-width: 768px) and (max-width: 991.98px)',
    lg: '(min-width: 992px) and (max-width: 1199.98px)',
    xl: '(min-width: 1200px) and (max-width: 1399.98px)',
    xxl: '(min-width: 1400px)',
};

for (const [key, query] of Object.entries(breakpointsOnePreview)) {
    const mediaQueryList = window.matchMedia(query);
    
    const handleMediaChange = (e) => {
        if (e.matches) {
            if(key == "sm" || key == "xs") {
                onePreview.innerHTML = `
                    <div class="center">
                        <h3 class="title-cat"><i class="ri-loop-right-line"></i> Bu Gün</h3>
                        <div class="box">
                            <a href="#" class="rooter">
                                <div class="img">
                                    <div class="category-span">PHP</div>
                                    <img src="asset/img/stock/yazilimikolaylastirin.png" alt="yazilimikolaylastirin">
                                </div>
                                <h5 class="box-title">Yazılımı Kolaylaştırın</h5>
                                <p class="box-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo deserunt iusto ullam, quas id animi totam at adipisci? Modi repudiandae debitis corporis autem culpa quae assumenda harum aut esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit mollitia explicabo magnam obcaecati veritatis voluptate enim nemo porro, sint ipsa ex! Similique quae ipsum velit explicabo praesentium facere deserunt? 
                                </p>
                                <ul class="box-alt-title">
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus?</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quas?</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vel?</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, rerum.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, facilis.</li>
                                </ul>
                                <p class="load-date">3 days ago</p>
                            </a>
                        </div>
                    </div>
                    <div class="left">
                        <h3 class="title-cat"><i class="ri-fire-line"></i> Popüler</h3>
                        <div class="box">
                            <a href="#" class="rooter">
                                <div class="img">
                                    <div class="category-span">Python</div>
                                    <img src="asset/img/stock/yazilimikolaylastirin.png" alt="yazilimikolaylastirin">
                                </div>
                                <h5 class="box-title">Yazılımı Kolaylaştırın</h5>
                                <p class="box-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo deserunt iusto ullam, quas id animi totam at adipisci? Modi repudiandae debitis corporis autem culpa quae assumenda harum aut esse!
                                </p>
                                <p class="load-date">3 days ago</p>
                            </a>
                        </div>
                        <div class="hr-line" style="margin: 20px 0;"></div>
                        <div class="box">
                            <a href="#" class="rooter">
                                <div class="img">
                                    <div class="category-span">C#</div>
                                    <img src="asset/img/stock/yazilimikolaylastirin.png" alt="yazilimikolaylastirin">
                                </div>
                                <h5 class="box-title">Yazılımı Kolaylaştırın</h5>
                                <p class="box-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo deserunt iusto ullam, quas id animi totam at adipisci? Modi repudiandae debitis corporis autem culpa quae assumenda harum aut esse! lore
                                </p>
                                <p class="load-date">3 days ago</p>
                            </a>
                        </div>
                    </div>
                    
                    <div class="right">
                        <h3 class="title-cat"><i class="ri-questionnaire-line"></i> Forum</h3>
                        <div class="form-group">
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor<div class="category-span category-red">PHP</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum.<div class="category-span category-green">C++</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum. Lorem.<div class="category-span category-blue">Node.js</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor<div class="category-span category-red">PHP</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum.<div class="category-span category-green">C++</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum. Lorem.<div class="category-span category-blue">Node.js</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor<div class="category-span category-red">PHP</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum.<div class="category-span category-green">C++</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum. Lorem.<div class="category-span category-blue">Node.js</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                        </div>
                    </div>
                `;
            } else {
                onePreview.innerHTML = `
                    <div class="left">
                        <h3 class="title-cat"><i class="ri-fire-line"></i> Popüler</h3>
                        <div class="box">
                            <a href="#" class="rooter">
                                <div class="img">
                                    <div class="category-span">Python</div>
                                    <img src="asset/img/stock/yazilimikolaylastirin.png" alt="yazilimikolaylastirin">
                                </div>
                                <h5 class="box-title">Yazılımı Kolaylaştırın</h5>
                                <p class="box-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo deserunt iusto ullam, quas id animi totam at adipisci? Modi repudiandae debitis corporis autem culpa quae assumenda harum aut esse!
                                </p>
                                <p class="load-date">3 days ago</p>
                            </a>
                        </div>
                        <div class="hr-line" style="margin: 20px 0;"></div>
                        <div class="box">
                            <a href="#" class="rooter">
                                <div class="img">
                                    <div class="category-span">C#</div>
                                    <img src="asset/img/stock/yazilimikolaylastirin.png" alt="yazilimikolaylastirin">
                                </div>
                                <h5 class="box-title">Yazılımı Kolaylaştırın</h5>
                                <p class="box-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo deserunt iusto ullam, quas id animi totam at adipisci? Modi repudiandae debitis corporis autem culpa quae assumenda harum aut esse! lore
                                </p>
                                <p class="load-date">3 days ago</p>
                            </a>
                        </div>
                    </div>
                    <div class="center">
                        <h3 class="title-cat"><i class="ri-loop-right-line"></i> Bu Gün</h3>
                        <div class="box">
                            <a href="#" class="rooter">
                                <div class="img">
                                    <div class="category-span">PHP</div>
                                    <img src="asset/img/stock/yazilimikolaylastirin.png" alt="yazilimikolaylastirin">
                                </div>
                                <h5 class="box-title">Yazılımı Kolaylaştırın</h5>
                                <p class="box-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo deserunt iusto ullam, quas id animi totam at adipisci? Modi repudiandae debitis corporis autem culpa quae assumenda harum aut esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit mollitia explicabo magnam obcaecati veritatis voluptate enim nemo porro, sint ipsa ex! Similique quae ipsum velit explicabo praesentium facere deserunt? 
                                </p>
                                <ul class="box-alt-title">
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloribus?</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, quas?</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vel?</li>
                                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, rerum.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, facilis.</li>
                                </ul>
                                <p class="load-date">3 days ago</p>
                            </a>
                        </div>
                    </div>
                    <div class="right">
                        <h3 class="title-cat"><i class="ri-questionnaire-line"></i> Forum</h3>
                        <div class="form-group">
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor<div class="category-span category-red">PHP</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum.<div class="category-span category-green">C++</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum. Lorem.<div class="category-span category-blue">Node.js</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor<div class="category-span category-red">PHP</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum.<div class="category-span category-green">C++</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum. Lorem.<div class="category-span category-blue">Node.js</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor<div class="category-span category-red">PHP</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum.<div class="category-span category-green">C++</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit Lorem, ipsum. Lorem.<div class="category-span category-blue">Node.js</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                            <a href="#" class="form-item">
                                <h5 class="title">Lorem ipsum dolor sit<div class="category-span category-gray">C#</div></h5>
                                <div class="info-g">
                                    <span class="loader">Pounter</span>
                                    <span class="loader">1 hour ago</span>
                                </div>
                            </a>
                        </div>
                    </div>
                `;
            }
        }
    };

    handleMediaChange(mediaQueryList);
    
    mediaQueryList.addEventListener('change', handleMediaChange);
}