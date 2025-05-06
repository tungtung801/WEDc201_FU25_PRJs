const products = [
    {
        id: 1,
        name: "Spicy Chicken Burger",
        image: "images/burgers/SpicyChickenBurger.png",
        alt: "Spicy Chicken Burger",
        description: "Get ready for a flavor adventure! Our Spicy Chicken Burger features a juicy, spice-infused chicken fillet, fresh toppings, and a cool sauce, all in a soft bun. It's the perfect bite for those who love a little heat!",
        oldPrice: "$9.00",
        newPrice: "$8.25"
    },
    {
        id: 2,
        name: "Tropical Pineapple Burger",
        image: "images/burgers/TropicalPineappleBurger.png",
        alt: "Tropical Pineapple Burger",
        description: "Escape to the tropics with our Tropical Pineapple Burger! Juicy grilled patty, sweet grilled pineapple, and a tangy glaze create a flavor paradise!",
        oldPrice: "$7.99",
        newPrice: "$6.99"
    },
    {
        id: 3,
        name: "Smoky BBQ Bacon Burger",
        image: "images/burgers/TheSmokyBBQBaconBurger.png",
        alt: "SmokyBBQBaconBurger",
        description: "Sink your teeth into our Smoky BBQ Bacon Burger! A juicy beef patty topped with crispy bacon, melted cheddar, and a rich, smoky BBQ sauce. A classic done right!",
        oldPrice: "$9.50",
        newPrice: "$8.95"
    },
    {
        id: 4,
        name: "Mushroom Swiss Burger",
        image: "images/burgers/Mushroom Swiss Burger.png",
        alt: "Mushroom Swiss Burger",
        description: "Indulge in the earthy flavors of our Mushroom Swiss Burger. A tender beef patty smothered in sautéed mushrooms and creamy Swiss cheese. Pure comfort in every bite!",
        oldPrice: "$10.00",
        newPrice: "$8.95"
    },
    {
        id: 5,
        name: "Classic Cheeseburger",
        image: "images/burgers/Classic_Cheeseburger.png",
        alt: "Classic Cheeseburger",
        description: "The timeless favorite! A juicy beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomato, and our signature sauce on a toasted bun.",
        oldPrice: "$7.50",
        newPrice: "$6.75"
    }

];

const newProducts = [
    {
        id: 6,
        name: "Double Patty Burger",
        image: "images/burgers/Double_Patty_Burger.png", // Bạn cần cung cấp đường dẫn ảnh
        alt: "Double Patty Burger",
        description: "For the serious burger lover! Two juicy beef patties stacked high with your choice of cheese and toppings.",
        oldPrice: "$11.50",
        newPrice: "$10.50"
    },
    {
        id: 7,
        name: "Veggie Burger",
        image: "images/burgers/Veggie_Burger.png", // Bạn cần cung cấp đường dẫn ảnh
        alt: "Veggie Burger",
        description: "A delicious and hearty plant-based patty with fresh vegetables and a flavorful spread, served on a soft bun.",
        oldPrice: "$8.00",
        newPrice: "$7.25"
    },
    {
        id: 8,
        name: "Bacon Blue Cheese Burger",
        image: "images/burgers/Bacon_Blue_Cheese_Burger.png", // Bạn cần cung cấp đường dẫn ảnh
        alt: "Bacon Blue Cheese Burger",
        description: "A gourmet delight! Crispy bacon and tangy blue cheese crumbles top a juicy beef patty with fresh greens.",
        oldPrice: "$12.00",
        newPrice: "$11.00"
    },
    {
        id: 9,
        name: "Teriyaki Chicken Burger",
        image: "images/burgers/Teriyaki Chicken Burger.png", // Bạn cần cung cấp đường dẫn ảnh
        alt: "Teriyaki Chicken Burger",
        description: "Grilled chicken fillet glazed with our homemade teriyaki sauce, topped with fresh slaw on a toasted bun.",
        oldPrice: "$9.25",
        newPrice: "$8.50"
    },
    {
        id: 10,
        name: "Philly Cheesesteak Burger",
        image: "images/burgers/Philly Cheesesteak_Burger.png", // Bạn cần cung cấp đường dẫn ảnh
        alt: "Philly Cheesesteak Burger",
        description: "A unique fusion! Thinly sliced steak, sautéed onions and peppers, and melted provolone cheese piled on a juicy burger patty.",
        oldPrice: "$10.50",
        newPrice: "$9.75"
    }
]

const accounts = [
    {
        username: "admin",
        password: "admin",
        role: "admin"
    },
    {
        username: "user",
        password: "user",
        role: "user"
    }
];

function displayProducts(arrayX, containerID) {
    let productData = "";
    arrayX.map(value => { // Sửa lỗi: '==' thay vì '=>' trong arrow function
        productData += `
            <div class="col-md-3 mb-4"> <div class="card h-100">
                    <img src="${value.image}" class="card-img-top" alt="${value.alt}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div class="card-title"> <h5>${value.name}</h5>
                        </div>
                        <br>
                        <div class="card-subtitle"> <p>${value.description}</p>
                        </div>
                        <div class="card-text">
                            <h5 class="old-price text-secondary">Price: <del>${value.oldPrice}</del> ${value.newPrice} </h5>
                        </div>
                        <div class="d-grid gap-2 mt-3">
                                <button onclick="addToCart(${value.id})" class="btn btn-primary btn-sm">
                                    Add To Cart
                                </button>
                                <button class="btn btn-outline-secondary btn-sm">
                                    Check Out
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById(containerID).innerHTML = productData;
}

// Thêm sự kiện click cho nút "Add To Cart", neu co thì lấy ra, 0 có thì return array rỗng
let productInCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function addToCart(id) {
    // Kiểm tra xem id này có trong localStorage chưa
    // true nếu id có => có món hàng
    // false nếu id không có => không có món hàng
    let checkProduct = productInCart.some(value => value.id === id);

    // Nếu chưa có sản phẩm trong giỏ hàng thì thêm vào
    if (!checkProduct) {
        // Tìm sản phẩm trong mảng products, return về object sản phẩm chứa id, name, ... trung vơi id đã truyền vào
        let product = products.find(value => value.id === id)
            || newProducts.find(value => value.id === id); // Tìm sản phẩm trong cả 2 mảng products và newProducts

        if (product) {
            productInCart.unshift({
                ...product,
                quantity: 1 // thêm thuộc tính quantity với giá trị mặc định là 1
            });
        } else {
            console.error(`❌ Product with id: "${id}" not found!`); // Nếu không tìm thấy sản phẩm, in ra lỗi
            alert("❌ Could not add product to cart.");
            return; // Dừng hàm nếu không tìm thấy sản phẩm
        }

        alert(`✅ Added "${product.name}" to cart successfully!`); // thông báo đã thêm sản phẩm vào giỏ hàng
    } else {
        // Nếu đã có sản phẩm trong giỏ hàng thì tăng số lượng lên 1
        let getIndex = productInCart.findIndex(value => value.id === id); // tìm vị trí của sản phẩm trong giỏ hàng
        let product = productInCart.find(value => value.id === id); // tìm sản phẩm trong giỏ hàng
        productInCart[getIndex] = {
            ...product,
            quantity: product.quantity + 1 // tăng số lượng lên 1
        }
        alert(`✨ Updated quantity of "${product.name}" in cart!`); // thông báo đã tăng số lượng sản phẩm trong giỏ hàng
    }
    // Luu vào localStorage
    localStorage.setItem('cart', JSON.stringify(productInCart)); // lưu vào localStorage
    calculateTotal(); // gọi hàm calculateTotal để tính tổng số sản phẩm trong giỏ hàng
}

function calculateTotal() {
    document.getElementById('total').innerHTML = productInCart.length; // xóa nội dung của thẻ có id là total
}

function displayProductsToTable() {
    let productData = ""; // khởi tạo biến productData là chuỗi rỗng
    productInCart.map((value, index) => {
        productData += `
            <tr>
                <td>${value.name}</td>
                <td>
                    <img src="${value.image}" width='100' alt="">
                </td>
                <td>
                    ${value.newPrice}
                </td>
                <td>
                    <button onclick='editQuantity(${index}, "increase")' class="btn btn-secondary btn-sm change-quantity" data-id="${value.id}" data-action="increase">+</button>
                    <span class="mx-2">${value.quantity}</span>
                    <button onclick='editQuantity(${index}, "decrease")'class="btn btn-secondary btn-sm change-quantity" data-id="${value.id}" data-action="decrease">-</button>
                </td>
                <td>
                    $${(parseFloat(value.newPrice.replace('$', '')) * value.quantity).toFixed(2)}
                <td>
                    <button onclick = 'removeFromCart(${index})' class="btn btn-danger btn-sm remove-from-cart" data-id="${value.id}">Delete</button>
                </td>
            </tr>
        `;
    });
    calculateTotalInCart(); // gọi hàm calculateTotalInCart để tính tổng tiền trong giỏ hàng
    document.getElementById('cart-items').innerHTML = productData; // gán nội dung của thẻ tbody
}

function goToBillPage() {
    const billTimeElement = document.getElementById('bill-time');
    const storeLocationElement = document.getElementById('bill-location');
    const billIdElement = document.getElementById('bill-id');
    const billBodyElement = document.getElementById('cart-items');
    const totalMoneyElement = document.getElementById('total-money');

    // Lấy thông tin giỏ hàng từ localStorage
    const storedCart = localStorage.getItem('cart');
    const productInCart = storedCart ? JSON.parse(storedCart) : [];

    // Tạo phần body hóa đơn
    let billItemsHTML = '';
    productInCart.forEach(item => {
        const totalItemPrice = parseFloat(item.newPrice.replace('$', '')) * item.quantity;
        billItemsHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.newPrice}</td>
                <td><span class="mx-2">${item.quantity}</span></td>
            </tr>
        `;
    });
    localStorage.setItem('billItemsHTML', billItemsHTML); // Lưu HTML cho body hóa đơn

    // Tạo Bill ID ngẫu nhiên
    const billIdLength = 12;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let billId = '';
    for (let i = 0; i < billIdLength; i++) {
        billId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem('billId', billId); // Lưu Bill ID

    // Lấy giờ phút hiện tại
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, '0');
    const currentMinute = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${currentHour}:${currentMinute}`;
    localStorage.setItem('billTime', currentTime); // Lưu thời gian

    // Tạo địa điểm ngẫu nhiên ở Mỹ
    const usLocations = [
        "456 Oak Avenue, Pleasantville, CA, USA",
        "789 Maple Street, Springfield, IL, USA",
        "321 Birch Lane, Hilltop, TX, USA",
        "654 Cedar Drive, Rivertown, NY, USA",
        "987 Elm Street, Lakeview, FL, USA",
        "123 Pine Road, Mountainview, CO, USA",
        "234 Spruce Way, Forest City, WA, USA",
        "567 Willow Boulevard, Sunnydale, AZ, USA",
        "890 Fir Court, Oceanview, OR, USA",
        "345 Chestnut Street, Riverdale, NJ, USA",

        // ... thêm các địa điểm khác nếu cần
    ];
    const randomLocation = usLocations[Math.floor(Math.random() * usLocations.length)];
    localStorage.setItem('billLocation', randomLocation); // Lưu địa điểm

    // Tính tổng tiền
    let totalMoney = 0;
    productInCart.forEach(item => {
        totalMoney += parseFloat(item.newPrice.replace('$', '')) * item.quantity;
    });
    localStorage.setItem('billTotal', totalMoney.toFixed(2)); // Lưu tổng tiền

    // Chuyển đến trang bill.html
    window.location.href = 'bill.html';
}

function displayBillOnBillPage() {
    const billTimeElement = document.getElementById('bill-time');
    const storeLocationElement = document.getElementById('bill-location');
    const billIdElement = document.getElementById('bill-id');
    const billBodyElement = document.getElementById('cart-items');
    const totalMoneyElement = document.getElementById('total-money');

    // Lấy dữ liệu đã lưu từ localStorage
    const billItemsHTML = localStorage.getItem('billItemsHTML');
    const billId = localStorage.getItem('billId');
    const billTime = localStorage.getItem('billTime');
    const billLocation = localStorage.getItem('billLocation');
    const billTotal = localStorage.getItem('billTotal');

    // Hiển thị dữ liệu lên trang bill.html
    if (billBodyElement) {
        billBodyElement.innerHTML = billItemsHTML;
    }
    if (billIdElement) {
        billIdElement.textContent = `Bill ID: ${billId}`;
    }
    if (billTimeElement) {
        billTimeElement.textContent = `${billTime}`;
    }
    if (storeLocationElement) {
        storeLocationElement.textContent = ` ${billLocation}`;
    }
    if (totalMoneyElement) {
        totalMoneyElement.textContent = billTotal;
    }

    // (Tùy chọn) Xóa dữ liệu đã lưu khỏi localStorage sau khi hiển thị
    // localStorage.removeItem('billItemsHTML');
    // localStorage.removeItem('billId');
    // localStorage.removeItem('billTime');
    // localStorage.removeItem('billLocation');
    // localStorage.removeItem('billTotal');
}


function editQuantity(index, action) {
    if (action === 'increase') {
        productInCart[index] = {
            ...productInCart[index],
            quantity: productInCart[index].quantity + 1 // tăng số lượng lên 1
        };
    } else if (action === 'decrease') {
        if (productInCart[index].quantity > 1) {
            productInCart[index] = {
                ...productInCart[index],
                quantity: productInCart[index].quantity - 1 // giảm số lượng xuống 1
            };
        }
    }
    localStorage.setItem('cart', JSON.stringify(productInCart)); // lưu vào localStorage
    displayProductsToTable(); // gọi hàm displayProductsToTable để hiển thị sản phẩm trong giỏ hàng
}

function removeFromCart(index) {
    productInCart.splice(index, 1); // xóa sản phẩm tại vị trí index trong giỏ hàng với số lượng 1
    calculateTotal(); // gọi hàm calculateTotal để tính tổng số sản phẩm trong giỏ hàng
    localStorage.setItem('cart', JSON.stringify(productInCart)); // lưu vào localStorage
    displayProductsToTable(); // gọi hàm displayProductsToTable để hiển thị sản phẩm trong giỏ hàng}
}

function calculateTotalInCart() {
    let totalMoney = 0; // khởi tạo biến totalMoney là 0
    for (let i = 0; i < productInCart.length; i++) {
        totalMoney += parseFloat(productInCart[i].newPrice.replace('$', '')) * productInCart[i].quantity; // tính tổng tiền của sản phẩm trong giỏ hàng
    }
    document.getElementById('total-money').innerHTML = `$${totalMoney.toFixed(2)}`; // gán nội dung của thẻ có id là total-money và thêm ký tự đô la
}

function handleLogin(username, password) {
    const account = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (account) {
      if (account.role === "admin") {
        window.location.href = "admin-dashboard.html";
        alert("Login successfully as admin!");
      } else if (account.role === "user") {
        window.location.href = "index.html"; // Chuyển đến trang chính
        alert("Login successfully !");
      }
    } else {
      // Xử lý trường hợp đăng nhập thất bại
      console.log("Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.");
      // Ở đây nhỏ có thể hiển thị thông báo lỗi cho người dùng trên giao diện.
    }
  }

  // Giả sử nhỏ có input field cho username và password với id tương ứng
  const loginForm = document.getElementById("login-form"); // ID của form đăng nhập
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("loginButton"); // ID của nút đăng nhập

  if (loginForm && usernameInput && passwordInput && loginButton) {
    loginButton.addEventListener("click", function(event) {
      event.preventDefault(); // Ngăn chặn hành động submit mặc định của form (nếu có)
      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;
      handleLogin(enteredUsername, enteredPassword);
    });
  } else {
    console.error("Không tìm thấy form hoặc các input cần thiết.");
  }



//================================= HÀM LOAD TRANG ===============================//

// Gọi hàm displayProducts để hiển thị sản phẩm khi trang tải
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        // Trang Home
        displayProducts(products, 'products'); // Giả sử bạn có hàm này cho trang Home
        calculateTotal();
    } else if (window.location.pathname.includes("menu.html")) {
        // Trang Menu
        const allProducts = [...products, ...newProducts]; // Kết hợp cả 2 mảng sản phẩm
        displayProducts(allProducts, 'products'); // Giả sử bạn có hàm này cho trang Menu
        calculateTotal(); // Có thể vẫn cần nếu giỏ hàng hiển thị ở cả 2 trang
    } else if (window.location.pathname.includes("cart.html")) {
        // Trang Giỏ hàng
        displayProductsToTable(); // Gọi hàm này để hiển thị sản phẩm trong giỏ hàng
        calculateTotal(); // Tính tổng số sản phẩm trong giỏ hàng
        calculateTotalInCart(); // Tính tổng tiền trong giỏ hàng
        const checkoutButton = document.getElementById('checkout-button');
        if (checkoutButton) {
            checkoutButton.onclick = goToBillPage;
        }
    } else if (window.location.pathname.includes("news.html")) {
        // Trang Tin tức
        // Giả sử bạn có hàm này cho trang Tin tức
        calculateTotal(); // Có thể vẫn cần nếu giỏ hàng hiển thị ở cả 2 trang
    } else if (window.location.pathname.includes("bill.html")) {
        displayBillOnBillPage(); // Gọi hàm này khi trang bill.html tải
    } else if (window.location.pathname.includes("admin-dashboard.html")) {
        // tương lai sẽ load hàm thêm tin tức mới vào đây
    } else if (window.location.pathname.includes("account.html")) {
        // Trang Đăng nhập
        handleLogin(); // Gọi hàm này khi trang login.html tải
        // Không cần làm gì đặc biệt ở đây, chỉ cần đảm bảo rằng các trường input đã được định nghĩa trong HTML
    } else {
        console.error("Trang không xác định hoặc không có chức năng tương ứng.");
    }
});

