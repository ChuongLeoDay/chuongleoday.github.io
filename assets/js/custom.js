
// Home Page
//script sticky header
window.onscroll = function() {
    const headerContainer = document.querySelector('.js-headerTC');
    const headerContainerMot = document.querySelector('.js-header-1-content');
    const bottomheadercontent = document.querySelector('.js-bottom-header-contentTC');
    if (document.documentElement.scrollTop > 160 || document.body.scrollTop > 160) {
      headerContainer.classList.add('stickky-header');
      bottomheadercontent.classList.add('dis-play-none');
    } else {
      headerContainer.classList.remove('stickky-header');
      bottomheadercontent.classList.remove('dis-play-none');
    }

}

//script sản phẩm
const theI1 = document.getElementById('js-mui-ten-1');
const theI2 = document.getElementById('js-mui-ten-2')
const sanphamHeader = document.querySelector('.js-li-header-content');
function ChuyenIcon() {
    theI2.classList.add('active-about-us-content-closed');  
    theI1.classList.remove('active-about-us-content-closed');  
}

function ChuyenIcon1() {
  theI2.classList.remove('active-about-us-content-closed');  
  theI1.classList.add('active-about-us-content-closed'); 
}

sanphamHeader.addEventListener('mouseover', ChuyenIcon);
sanphamHeader.addEventListener('mouseout', ChuyenIcon1);

//script form đăng nhập
const btnDN = document.querySelector('.js-listen-log-in');
const login = document.querySelector('.js-log-in');
const logInChild = document.querySelector('.js-container-log-in');
const nutX = document.querySelector(".js-div-icon-close");
function showForm() {
    login.classList.add('open');
}

function closedForm() {
    login.classList.remove('open');
}
btnDN.addEventListener('click', showForm);
nutX.addEventListener('click', closedForm);
login.addEventListener('click', closedForm);
logInChild.addEventListener('click', function (event) {
  event.stopPropagation();
})

//script show hide password
const inputPass = document.getElementById('pass-input-log-in');
const iconEyesHide = document.getElementById('icon-eye-hide');
const iconEyesShow = document.getElementById('icon-eye-show');

function showPass() {
    iconEyesHide.classList.add('hidden');
    iconEyesShow.classList.remove('hidden');
    inputPass.setAttribute("type", "text" )
}

function hidePass() {
    iconEyesShow.classList.add('hidden');
    iconEyesHide.classList.remove('hidden');
    inputPass.setAttribute("type", "password")
}

iconEyesHide.addEventListener('click', showPass);
iconEyesShow.addEventListener('click', hidePass);

// slick slider quảng cáo
$('.slider-quang-cao-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots : true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows : false,
    fade: true,
    cssEase: 'linear',
  });

//slider thương hiệu nổi bật

$('.thuong-hieu-slider-container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });

  //slider sản phẩm all

  $('.san-pham-chung-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
  // slider cảm nhận khách hàng
  $('.reviewer-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 4000,
  });

  // Thương hiệu hợp tác
  $('.brand-container').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 4000,
  });

  // Phần LB BLOG
  
$('.Blog-container').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
});
  // phần cart

    // trở về trang chủ tại giỏ hàng
    const btnBackHome = document.querySelector('.nut-back-to-shop-cart');
    const btnOpenCart = document.querySelector('.js-listen-open-cart');
    btnBackHome.addEventListener('click', function() {
      document.querySelector('.cart-shopping').style.right = '-100%';
    })
    btnOpenCart.addEventListener('click', function() {
      document.querySelector('.cart-shopping').style.right = '0';
    })


  // // công thên sản phẩm tại giỏ hàng

  // // console.log(divCartItem);
  // const btnCongSL = document.querySelectorAll('.js-btn-cong-so-luong');
  // const btnTruSL = document.querySelectorAll('.js-btn-tru-so-luong');
  // var divContentCongTru = document.querySelectorAll('.cart-item-content-cong-tru');
  // console.log(divContentCongTru)
  // // console.log(btnCongSL, btnTruSL)
  // function congSLSP() {
  //   var SoLuongSPValue = document.querySelectorAll('.input-cart-so-luong');
  //   if (SoLuongSPValue.length === btnCongSL.length) {
  //     var SoLuongSP = divContentCongTru.querySelector('.input-cart-so-luong').value; 
  //     console.log(SoLuongSP);
  //     document.querySelector('.input-cart-so-luong').value = parseInt(SoLuongSP) + 1;
  //   }
  // }
  
  // function truSLSP() {
  //   var SoLuongSP = document.querySelector('.input-cart-so-luong').value; 
  //   if (parseInt(SoLuongSP) > 1) {
  //     document.querySelector('.input-cart-so-luong').value = parseInt(SoLuongSP) - 1;
  //   }
  // }
  
  // btnCongSL.forEach(function(button, index) {
  //   button.addEventListener('click', congSLSP);
  // })

  // btnTruSL.forEach(function(button, index) {
  //   button.addEventListener('click', truSLSP);
  // })
 


  // nhận thông tin nhập vào giỏ hàng 
  const btnThemVaoGioHang = document.querySelectorAll('.btn-them-vao-gio');
  // console.log(btnThemVaoGioHang);
  btnThemVaoGioHang.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
      var btnItemMotSanPham = event.target;
      var divChuaThongTinSP = btnItemMotSanPham.parentElement.parentElement;
      var imgSPContent = divChuaThongTinSP.querySelector('img').src;
      var TenSPContent = divChuaThongTinSP.querySelector('h3').innerText;
      var GiaTienSPContent1 = divChuaThongTinSP.querySelector('.span-gia-tien-san-pham-content-1').innerText;
      var GiaTienSPContent2 = divChuaThongTinSP.querySelector('.span-gia-tien-san-pham-content-2').innerText;
      var GiaTienSPContent3 = divChuaThongTinSP.querySelector('.gia-tien-san-pham-content-3').innerText;
      console.log(GiaTienSPContent1)
      addCart(imgSPContent, TenSPContent, GiaTienSPContent1, GiaTienSPContent2, GiaTienSPContent3 );
      TongSoTienThanhToan();
      XoaSanPhamTaiGioHang();
      InputChangeItems();
      TinhTongItems();
    })
  });
 
function addCart(Hinhanh, ten, giatien1, giatien2, giatien3) {
  var divChuaThongTinSP1 = document.querySelectorAll('.cart-item');
  var alertWarning = document.querySelector('.alert-custom-A');
  var alertProgressA = document.querySelector('.alert-progress-A');
  alertWarning.addEventListener('click', function() {
    alertWarning.classList.remove('active-alert');
    alertProgressA.classList.remove('active-chay');
  })
  for (var i = 0; i < divChuaThongTinSP1.length; i++) {
    var TenSPSoSanh = divChuaThongTinSP1[i].querySelector('h4').innerText;
    console.log(TenSPSoSanh)
    if(TenSPSoSanh == ten) {
      alertWarning.classList.add('active-alert');
      alertProgressA.classList.add('active-chay');
      setTimeout(() => {
        alertWarning.classList.remove('active-alert');
      }, 4000);
      setTimeout(() => {
        alertProgressA.classList.remove('active-chay');
      }, 4500);
      return
    }
  }
  var tongItemHang = document.querySelector('.cart-items');
  var CartisEmty = document.querySelector('.cart-is-emty-container');
  var divChuaThongTinSP1 = document.querySelectorAll('.cart-item');
  var y = divChuaThongTinSP1.length;
  console.log(y);
  var v = y + 1;
  var addDiv = document.createElement("div");
  var divContentSanPhamGioHang = '<div class="cart-item display-flex"><div class="three-col cart-item-content display-flex"><div style="width: 79px;height: 79px;" class="div-img-cart-content"><img src="'+ Hinhanh +'" alt="" class="img-cart-item-content"></div><div class="cart-ten-sp-content"><h4 class = ".Ten-sp-cart-content">'+ten+'</h4></div></div><div class="three-col cart-item-content cart-item-content-cong-tru"><input class="input-cart-so-luong" type="number" value="1" min="1"></div><div class="three-col cart-item-content display-flex"><div class = "div-chua-gia-tien-trong-gio-hang-cua-ban" style=" margin-right: 20px;" class="two-col"><span class="js-cart-so-tien-1">'+giatien1+'</span><span>.</span><span class="js-cart-so-tien-2">'+giatien2+'</span><span>.</span><span class="js-cart-so-tien-3">'+giatien3+'</span></div><div style="margin-left: 10px ;" class="two-col js-loai-bo-san-pham"><i class="bi bi-trash-fill"></i></div></div></div>'
  addDiv.innerHTML = divContentSanPhamGioHang;
  tongItemHang.append(addDiv);
  if(v == 1) {
    CartisEmty.remove();
  }
  // if (v == 0) {
  //   var addDiv1 = document.createElement("div");
  //   var CartisEmty1 = '<div class="cart-is-emty-container"><i class="bi bi-cart-x"></i>Chưa có sản phẩm nào trong giỏ hàng của bạn</div>';
  //   addDiv1.innerHTML = CartisEmty1;
  //   tongItemHang.append(addDiv1);
  // }
}

// Tính tổng giá trị giỏ hàng 
function TongSoTienThanhToan() {
  var divChuaThongTinSP1 = document.querySelectorAll('.cart-item');
  var TotalC = 0;
  for(var i = 0; i < divChuaThongTinSP1.length;  i++) {
    var valueSoLuongSPInput = divChuaThongTinSP1[i].querySelector('.input-cart-so-luong').value;
    var inputSotien1 = divChuaThongTinSP1[i].querySelector('.js-cart-so-tien-1').innerHTML;
    var inputSotien2 = divChuaThongTinSP1[i].querySelector('.js-cart-so-tien-2').innerHTML;
    var inputSotien3 = divChuaThongTinSP1[i].querySelector('.js-cart-so-tien-3').innerHTML;
    TotalA = inputSotien1 * 1000000 + inputSotien2 * 1000 + inputSotien3 * 1;
    TotalB = TotalA * valueSoLuongSPInput;
    TotalC = TotalC + TotalB;
    // TotalD = TotalC.toLocaleString('de-DE');
    InputChangeItems();
    TinhTongItems();
  }
  var goiDivTongTien = document.querySelector('.cart-summary-items-2');
  var spanTongTienCartShow = goiDivTongTien.querySelector('.js-cart-tong-so-luong-tien');
  spanTongTienCartShow.innerHTML = TotalC.toLocaleString('de-DE');
}

// Tính tổng items
function TinhTongItems() {
  var divChuaThongTinSP1 = document.querySelectorAll('.cart-item');
  var TotalCC = 0;
  for(var i = 0; i < divChuaThongTinSP1.length;  i++) {
    var valueSoLuongSPInput = divChuaThongTinSP1[i].querySelector('.input-cart-so-luong').value;
    var Total1C = valueSoLuongSPInput * 1;
    TotalCC = TotalCC + Total1C;
  }
  var IconGanGioHang = document.querySelector('.icon-so-luong-sp-trong-cart');
  var IconTrongCartTSP = document.querySelector('.js-cart-tong-so-luong');
  IconGanGioHang.innerHTML = TotalCC;
  IconTrongCartTSP.innerHTML = TotalCC;
}

// Xóa item 
function XoaSanPhamTaiGioHang() {
  var divChuaThongTinSP1 = document.querySelectorAll('.cart-item');
  for(var i = 0; i < divChuaThongTinSP1.length; i++) {
    var btnDeleteItem = divChuaThongTinSP1[i].querySelector('.js-loai-bo-san-pham');
    btnDeleteItem.addEventListener('click', function (event) {
      var DeleteItem = event.target;
      var DeleteItems = DeleteItem.parentElement.parentElement.parentElement;
      DeleteItems.remove();
      TongSoTienThanhToan();
      TinhTongItems();
      ChenLaiCartisEmty();
    })
  }
}

function ChenLaiCartisEmty() {
  var divChuaThongTinSP1 = document.querySelectorAll('.cart-item');
  var tongItemHang = document.querySelector('.cart-items');
  var y = divChuaThongTinSP1.length;
  if (y > 0 ) {
    return;
  } else {
    var addDiv1 = document.createElement("div");
    // var CartisEmty1 = '<div class="cart-is-emty-container"><i class="bi bi-cart-x"></i>Chưa có sản phẩm nào trong giỏ hàng của bạn</div>';
    tongItemHang.innerHTML = '<div class="cart-title-1 cart-title">GIỎ HÀNG CỦA BẠN</div><div class="cart-title-3"><div class="three-col cart-title-3ab">Sản phẩm</div><div class="three-col cart-title-3ab">Số lượng</div><div class="three-col cart-title-3ab">Giá(VNĐ)</div></div><div class="cart-is-emty-container"><i class="bi bi-cart-x"></i>Chưa có sản phẩm nào trong giỏ hàng của bạn</div>';
    // tongItemHang.append(addDiv1);
  }
}

// Số lượng mua thay đổi reset tổng tiền
function InputChangeItems() {
  var divChuaThongTinSP1 = document.querySelectorAll('.cart-item');
  for(var i = 0; i < divChuaThongTinSP1.length; i++) {
    var inputValue1 = divChuaThongTinSP1[i].querySelector('.input-cart-so-luong');
    console.log(inputValue1)
    inputValue1.addEventListener("change", function () {
      TongSoTienThanhToan();
    })
  }

}

// Thanh Toán Ngay và reset lại giỏ hàng
const btnThanhToanNgayCart = document.querySelector('.nut-chot-don');
var alertCheckCart = document.querySelector('.alert-custom-B');
var alertProgressB = document.querySelector('.alert-progress-B');

btnThanhToanNgayCart.addEventListener('click', function () {
  var cartItems = document.querySelectorAll('.cart-item');
  var i = cartItems.length;
  if (i > 0) {
    alertCheckCart.classList.add('active-alert');
    alertProgressB.classList.add('active-chay');
    setTimeout(() => {
      alertCheckCart.classList.remove('active-alert');
    }, 4000);
    setTimeout(() => {
      alertProgressB.classList.remove('active-chay');
    }, 4500);
    for(var cartItem of cartItems) {
        cartItem.remove();
    }
    var IconGanGioHang = document.querySelector('.icon-so-luong-sp-trong-cart');
    var IconTrongCartTSP = document.querySelector('.js-cart-tong-so-luong');
    IconGanGioHang.innerHTML = 0;
    IconTrongCartTSP.innerHTML = 0;
    var spanTongTienCartShow = document.querySelector('.js-cart-tong-so-luong-tien');
    spanTongTienCartShow.innerHTML = 0;
    ChenLaiCartisEmty();
    document.querySelector('.cart-shopping').style.right = '-100%';
  } else {
    alert('Bạn chưa có sản phẩm nào trong giỏ hàng');
  }
})



