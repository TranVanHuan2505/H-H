// ========== CẤU HÌNH DỮ LIỆU ==========

// Dữ liệu sản phẩm (16 thời trang + 16 mỹ phẩm)
const products = {
  fashion: [
    // Sản phẩm 1
    {
      id: 1,
      title: "Áo Thun Cotton Basic Nữ",
      price: 250000,
      originalPrice: 350000,
      description: "Áo thun cotton cao cấp, thoáng mát, thoải mái khi mặc, phù hợp cho mọi hoạt động hàng ngày. Thiết kế đơn giản nhưng tinh tế, dễ dàng phối hợp với nhiều trang phục khác nhau.",
      image: "Áo.jpg",
      thumbnails: ["ÁoThun1.jpg", "ÁoThun2.jpg"],
      rating: 4.5,
      reviews: 28,
      colors: ["Trắng", "Đen", "Xám"],
      sizes: ["S", "M", "L", "XL"],
      sku: "FASHION-001",
      category: "Áo",
      gender: "Nữ", // Thêm thuộc tính giới tính
      stock: 15
    },
    
    // Sản phẩm 2
    {
      id: 2,
      title: "Quần Jeans Premium Nam",
      price: 450000,
      originalPrice: 600000,
      description: "Quần jeans chất liệu denim cao cấp, co giãn tốt, ôm dáng nhưng vẫn tạo cảm giác thoải mái. Phù hợp cho cả đi làm và đi chơi.",
      image: "QuầnJeans2.jpg",
      thumbnails: ["QuầnJeans1.jpg"],
      rating: 4.2,
      reviews: 35,
      colors: ["Xanh đậm", "Đen"],
      sizes: ["28", "30", "32", "34"],
      sku: "FASHION-002",
      category: "Quần",
      gender: "Nam", // Thêm thuộc tính giới tính
      stock: 10
    },

    // Sản phẩm 3
    {
      id: 3,
      title: "Áo Khoác Gió Pro Unisex",
      price: 550000,
      originalPrice: 750000,
      description: "Áo khoác gió chống nước, nhẹ nhàng và phong cách trẻ trung. Lý tưởng cho các hoạt động ngoài trời hoặc những ngày thời tiết se lạnh.",
      image: "ÁoKhoác1.jpg",
      thumbnails: ["ÁoKhoác2.jpg", "ÁoKhoác2.jpg"],
      rating: 4.7,
      reviews: 18,
      colors: ["Xanh navy", "Đen"],
      sizes: ["M", "L", "XL"],
      sku: "FASHION-003",
      category: "Áo khoác",
      gender: "Unisex", // Thêm thuộc tính giới tính
      stock: 8
    },

    // Sản phẩm 4
    {
      id: 4,
      title: "Váy Đầm Dạ Hội Sang Trọng",
      price: 800000,
      originalPrice: 1000000,
      description: "Váy đầm dạ hội sang trọng, thiết kế tinh xảo, tôn lên vẻ đẹp quý phái. Phù hợp cho các buổi tiệc lớn, sự kiện quan trọng.",
      image: "VáyĐầm1.jpg",
      thumbnails: ["VáyĐầm2.jpg", "VáyĐầm3.webp"],
      rating: 4.9,
      reviews: 12,
      colors: ["Đỏ", "Đen"],
      sizes: ["M", "L"],
      sku: "FASHION-004",
      category: "Váy",
      gender: "Nữ",
      stock: 5
    },

    // Sản phẩm 5
    {
      id: 5,
      title: "Áo Sơ Mi Nam Lịch Lãm",
      price: 300000,
      originalPrice: 400000,
      description: "Áo sơ mi nam lịch lãm, chất liệu vải cao cấp, ít nhăn. Hoàn hảo cho môi trường công sở hoặc các dịp trang trọng.",
      image: "SơMiNam1.jpg",
      thumbnails: ["SơMiNam2.jpeg", "SơMiNam3.jpg"],
      rating: 4.3,
      reviews: 22,
      colors: ["Trắng", "Xanh"],
      sizes: ["S", "M", "L"],
      sku: "FASHION-005",
      category: "Áo",
      gender: "Nam",
      stock: 20
    },

    // Sản phẩm 6
    {
      id: 6,
      title: "Chân Váy Midi Thời Trang",
      price: 350000,
      originalPrice: 450000,
      description: "Chân váy midi thời trang, thiết kế thanh lịch, dễ dàng phối đồ với áo sơ mi, áo thun. Tạo phong cách nữ tính, duyên dáng.",
      image: "VáyMidi1.webp",
      thumbnails: ["VáyMidi2.jpg", "VáyMidi3.jpg"],
      rating: 4.6,
      reviews: 30,
      colors: ["Hồng", "Đen"],
      sizes: ["M", "L"],
      sku: "FASHION-006",
      category: "Váy",
      gender: "Nữ",
      stock: 12
    },

    // Sản phẩm 7
    {
      id: 7,
      title: "Quần Short Nữ Thoải Mái",
      price: 200000,
      originalPrice: 300000,
      description: "Quần short nữ thoải mái, chất liệu mềm mại, thoáng mát. Thích hợp cho các hoạt động thường ngày, đi dạo phố hoặc du lịch mùa hè.",
      image: "ShortNữ1.jpg",
      thumbnails: ["ShortNữ2.jpg"],
      rating: 4.4,
      reviews: 15,
      colors: ["Xanh", "Trắng"],
      sizes: ["S", "M"],
      sku: "FASHION-007",
      category: "Quần",
      gender: "Nữ",
      stock: 18
    },

    // Sản phẩm 8
    {
      id: 8,
      title: "Áo Hoodie Ấm Áp Unisex",
      price: 400000,
      originalPrice: 500000,
      description: "Áo hoodie ấm áp, chất liệu nỉ dày dặn, phong cách thể thao năng động. Lý tưởng cho những ngày lạnh hoặc khi tập luyện.",
      image: "Hoodie1.png",
      thumbnails: ["Hoodie33.jpg", "Hoodie2.jpg"],
      rating: 4.8,
      reviews: 25,
      colors: ["Đen", "Xám"],
      sizes: ["M", "L", "XL"],
      sku: "FASHION-008",
      category: "Áo",
      gender: "Unisex",
      stock: 10
    },

    // Sản phẩm 9
    {
      id: 9,
      title: "Giày Sneaker Thời Trang Unisex",
      price: 600000,
      originalPrice: 800000,
      description: "Giày sneaker thời trang, thiết kế hiện đại, đế êm ái. Mang lại cảm giác thoải mái khi di chuyển, phù hợp cho mọi hoạt động hàng ngày.",
      image: "GiàySneaker1.jpg",
      thumbnails: ["GiàySneaker2.jpg", "GiàySneaker3.jpg"],
      rating: 4.5,
      reviews: 40,
      colors: ["Trắng", "Đen"],
      sizes: ["39", "40", "41"],
      sku: "FASHION-009",
      category: "Giày",
      gender: "Unisex",
      stock: 8
    },

    // Sản phẩm 10
    {
      id: 10,
      title: "Dép Sandal Thoáng Mát Unisex",
      price: 150000,
      originalPrice: 200000,
      description: "Dép sandal thoáng mát, đế chống trượt, thiết kế đơn giản. Thích hợp cho mùa hè, đi biển hoặc đi dạo phố.",
      image: "DépSandal1.jpg",
      thumbnails: ["DépSandal2.jpg"],
      rating: 4.2,
      reviews: 10,
      colors: ["Nâu", "Đen"],
      sizes: ["38", "39", "40"],
      sku: "FASHION-010",
      category: "Giày",
      gender: "Unisex",
      stock: 15
    },

    // Sản phẩm 11
    {
      id: 11,
      title: "Áo Khoác Da Cá Tính Nam",
      price: 900000,
      originalPrice: 1200000,
      description: "Áo khoác da thời trang, chất liệu da tổng hợp cao cấp, phong cách cá tính. Tạo điểm nhấn mạnh mẽ cho trang phục của bạn.",
      image: "KhoácDa1.webp",
      thumbnails: ["KhoácDa2.jpg"],
      rating: 4.6,
      reviews: 20,
      colors: ["Đen", "Nâu"],
      sizes: ["M", "L"],
      sku: "FASHION-011",
      category: "Áo khoác",
      gender: "Nam",
      stock: 6
    },

    // Sản phẩm 12
    {
      id: 12,
      title: "Quần Legging Co Giãn Nữ",
      price: 250000,
      originalPrice: 350000,
      description: "Quần legging co giãn 4 chiều, chất liệu mềm mại, ôm sát cơ thể. Thoải mái cho mọi hoạt động từ tập gym đến đi chơi.",
      image: "QuầnLegging.jpg",
      thumbnails: ["QuầnLegging.jpg"],
      rating: 4.3,
      reviews: 15,
      colors: ["Đen", "Xám"],
      sizes: ["S", "M", "L"],
      sku: "FASHION-012",
      category: "Quần",
      gender: "Nữ",
      stock: 12
    },

    // Sản phẩm 13
    {
      id: 13,
      title: "Áo Thun Nữ Thời Trang",
      price: 200000,
      originalPrice: 300000,
      description: "Áo thun nữ thời trang, kiểu dáng đa dạng, dễ phối đồ. Phù hợp cho phong cách năng động, trẻ trung.",
      image: "ThunNữ.webp",
      thumbnails: ["ThunNữ.webp", "ThunNữ.webp"],
      rating: 4.4,
      reviews: 18,
      colors: ["Hồng", "Trắng"],
      sizes: ["S", "M", "L"],
      sku: "FASHION-013",
      category: "Áo",
      gender: "Nữ",
      stock: 20
    },

    // Sản phẩm 14
    {
      id: 14,
      title: "Quần Tây Nam Công Sở",
      price: 500000,
      originalPrice: 700000,
      description: "Quần tây nam lịch lãm, form dáng chuẩn, chất liệu vải cao cấp. Hoàn hảo cho môi trường công sở, tạo vẻ ngoài chuyên nghiệp.",
      image: "QuầnTâyNam.png",
      thumbnails: ["QuầnTâyNam.png"],
      rating: 4.5,
      reviews: 25,
      colors: ["Đen", "Xám"],
      sizes: ["28", "30", "32"],
      sku: "FASHION-014",
      category: "Quần",
      gender: "Nam",
      stock: 10
    },

    // Sản phẩm 15
    {
      id: 15,
      title: "Áo Khoác Bomber Năng Động Unisex",
      price: 700000,
      originalPrice: 900000,
      description: "Áo khoác bomber thời trang, thiết kế trẻ trung, chất liệu bền đẹp. Phù hợp cho phong cách đường phố, cá tính.",
      image: "KhoácBomber.jpg",
      thumbnails: ["KhoácBomber.jpg", "KhoácBomber.jpg"],
      rating: 4.8,
      reviews: 30,
      colors: ["Đen", "Xanh"],
      sizes: ["M", "L"],
      sku: "FASHION-015",
      category: "Áo khoác",
      gender: "Unisex",
      stock: 5
    },

    // Sản phẩm 16
    {
      id: 16,
      title: "Giày Boot Phong Cách Unisex",
      price: 750000,
      originalPrice: 950000,
      description: "Giày boot thời trang, thiết kế độc đáo, chất liệu bền bỉ. Tạo phong cách cá tính, mạnh mẽ cho người mang.",
      image: "GiàyBoot.jpg",
      thumbnails: ["GiàyBoot.jpg", "GiàyBoot.jpg"],
      rating: 4.6,
      reviews: 20,
      colors: ["Nâu", "Đen"],
      sizes: ["39", "40", "41"],
      sku: "FASHION-016",
      category: "Giày",
      gender: "Unisex",
      stock: 8
    }
  ],
  
  cosmetics: [
    // Sản phẩm 17
    {
      id: 17,
      title: "Son Lì Luxury Cao Cấp",
      price: 220000,
      originalPrice: 300000,
      description: "Son lì không trôi, giữ màu lâu đến 12 tiếng, chất son mềm mịn không gây khô môi. Mang lại đôi môi quyến rũ, bền màu suốt cả ngày.",
      image: "SonLìLuxury.jpg",
      thumbnails: ["SonLìLuxury.jpg", "SonLìLuxury.jpg"],
      rating: 4.8,
      reviews: 42,
      colors: ["Đỏ cam", "Hồng đào", "Đỏ gạch"],
      sku: "COSMETIC-001",
      category: "Son môi",
      stock: 20
    },

    // Sản phẩm 18
    {
      id: 18,
      title: "Kem Nền Silk Che Phủ Hoàn Hảo",
      price: 380000,
      originalPrice: 450000,
      description: "Kem nền che phủ hoàn hảo mọi khuyết điểm, kết cấu mịn màng, tự nhiên. Giúp da đều màu, rạng rỡ suốt cả ngày.",
      image: "KemNềnSilk.jpg",
      thumbnails: ["KemNềnSilk.jpg"],
      rating: 4.6,
      reviews: 31,
      colors: ["01 Sáng", "02 Trung bình", "03 Tự nhiên"],
      sku: "COSMETIC-002",
      category: "Trang điểm",
      stock: 15
    },

    // Sản phẩm 19
    {
      id: 19,
      title: "Phấn Má Hồng Tự Nhiên",
      price: 150000,
      originalPrice: 200000,
      description: "Phấn má hồng với tông màu tự nhiên, dễ sử dụng, tạo hiệu ứng ửng hồng rạng rỡ cho đôi gò má. Bền màu và không gây bít tắc lỗ chân lông.",
      image: "PhấnMáHồng.webp",
      thumbnails: ["PhấnMáHồng.webp"],
      rating: 4.5,
      reviews: 20,
      colors: ["Hồng", "Đào", "Cam đất"],
      sku: "COSMETIC-003",
      category: "Trang điểm",
      stock: 25
    },

    // Sản phẩm 20
    {
      id: 20,
      title: "Kẻ Mắt Nước Chống Trôi",
      price: 180000,
      originalPrice: 250000,
      description: "Kẻ mắt nước dễ sử dụng, đầu cọ mảnh, bền màu và chống trôi. Giúp bạn tạo đường kẻ sắc nét, cuốn hút.",
      image: "KẻMắtNước.jpg",
      thumbnails: ["KẻMắtNước.jpg"],
      rating: 4.7,
      reviews: 15,
      colors: ["Đen"],
      sku: "COSMETIC-004",
      category: "Trang điểm",
      stock: 30
    },

    // Sản phẩm 21
    {
      id: 21,
      title: "Mascara Chống Nước Dài Mi",
      price: 250000,
      originalPrice: 300000,
      description: "Mascara chống nước, giúp mi dài và cong tự nhiên, không vón cục. Bền màu suốt cả ngày dài, không lem trôi.",
      image: "MascaraChốngNước.jpg",
      thumbnails: ["MascaraChốngNước.jpg"],
      rating: 4.6,
      reviews: 28,
      colors: ["Đen"],
      sku: "COSMETIC-005",
      category: "Trang điểm",
      stock: 20
    },

    // Sản phẩm 22
    {
      id: 22,
      title: "Kem Dưỡng Ẩm Chuyên Sâu",
      price: 300000,
      originalPrice: 400000,
      description: "Kem dưỡng ẩm với thành phần thiên nhiên, cấp ẩm chuyên sâu, giúp da mềm mại và mịn màng. Phù hợp cho mọi loại da, đặc biệt là da khô.",
      image: "DưỡngẨm.jpg",
      thumbnails: ["DưỡngẨm.jpg"],
      rating: 4.9,
      reviews: 35,
      colors: ["Trắng"],
      sku: "COSMETIC-006",
      category: "Chăm sóc da",
      stock: 15
    },

    // Sản phẩm 23
    {
      id: 23,
      title: "Sữa Rửa Mặt Dịu Nhẹ",
      price: 180000,
      originalPrice: 250000,
      description: "Sữa rửa mặt dịu nhẹ, không gây kích ứng, làm sạch sâu lỗ chân lông. Phù hợp cho mọi loại da, kể cả da nhạy cảm.",
      image: "SRM.jpg",
      thumbnails: ["SRM.jpg"],
      rating: 4.4,
      reviews: 20,
      colors: ["Trắng"],
      sku: "COSMETIC-007",
      category: "Chăm sóc da",
      stock: 25
    },

    // Sản phẩm 24
    {
      id: 24,
      title: "Nước Tẩy Trang Micellar",
      price: 220000,
      originalPrice: 300000,
      description: "Nước tẩy trang dịu nhẹ, không gây kích ứng, làm sạch lớp trang điểm và bụi bẩn hiệu quả. Giúp da sạch thoáng, mềm mại.",
      image: "TẩyTrang.webp",
      thumbnails: ["TẩyTrang.webp"],
      rating: 4.5,
      reviews: 18,
      colors: ["Trong suốt"],
      sku: "COSMETIC-008",
      category: "Chăm sóc da",
      stock: 30
    },

      // Sản phẩm 25
    {
      id: 25,
      title: "Son Kem Lì Bền Màu",
      price: 250000,
      originalPrice: 350000,
      description: "Son kem lì, bền màu và không gây khô môi, chất son mượt mà. Tạo hiệu ứng môi căng mọng, quyến rũ.",
      image: "SonKem.webp",
      thumbnails: ["SonKem.webp", "SonKem.webp"],
      rating: 4.7,
      reviews: 25,
      colors: ["Hồng đào", "Đỏ rượu", "Cam cháy"],
      sku: "COSMETIC-009",
      category: "Son môi",
      stock: 18
    },

    // Sản phẩm 26
    {
      id: 26,
      title: "Kem Chống Nắng SPF50+ PA++++",
      price: 350000,
      originalPrice: 450000,
      description: "Kem chống nắng quang phổ rộng, bảo vệ da toàn diện khỏi tia UVA/UVB. Không gây bết dính, phù hợp sử dụng hàng ngày.",
      image: "ChốngNắngSPF.webp",
      thumbnails: ["ChốngNắngSPF.webp"],
      rating: 4.8,
      reviews: 40,
      colors: ["Trắng"],
      sku: "COSMETIC-010",
      category: "Chăm sóc da",
      stock: 22
    },

    // Sản phẩm 27
    {
      id: 27,
      title: "Toner Cân Bằng Da Dịu Nhẹ",
      price: 280000,
      originalPrice: 350000,
      description: "Toner dịu nhẹ giúp cân bằng độ pH cho da, se khít lỗ chân lông. Chuẩn bị da tốt nhất cho các bước dưỡng tiếp theo.",
      image: "Toner.webp",
      thumbnails: ["Toner.webp"],
      rating: 4.6,
      reviews: 30,
      colors: ["Trong suốt"],
      sku: "COSMETIC-011",
      category: "Chăm sóc da",
      stock: 15
    },

    // Sản phẩm 28
    {
      id: 28,
      title: "Serum Vitamin C Sáng Da",
      price: 450000,
      originalPrice: 600000,
      description: "Serum sáng da, giảm thâm nám hiệu quả, cải thiện tông màu da. Giúp da đều màu, rạng rỡ và tươi trẻ hơn.",
      image: "VitaminC.jpg",
      thumbnails: ["VitaminC.jpg", "VitaminC.jpg"],
      rating: 4.9,
      reviews: 35,
      colors: ["Vàng nhạt"],
      sku: "COSMETIC-012",
      category: "Chăm sóc da",
      stock: 12
    },

    // Sản phẩm 29
    {
      id: 29,
      title: "Mặt Nạ Giấy Dưỡng Ẩm",
      price: 50000,
      originalPrice: 80000,
      description: "Mặt nạ giấy ngậm tinh chất dưỡng da, cấp ẩm tức thì, giúp da mềm mại và căng mọng. Sử dụng thường xuyên để có làn da khỏe đẹp.",
      image: "MặtNạ.webp",
      thumbnails: ["MặtNạ.webp"],
      rating: 4.4,
      reviews: 28,
      colors: ["Trắng"],
      sku: "COSMETIC-013",
      category: "Chăm sóc da",
      stock: 50
    },

    // Sản phẩm 30
    {
      id: 30,
      title: "Kem Tẩy Tế Bào Chết Dịu Nhẹ",
      price: 220000,
      originalPrice: 300000,
      description: "Kem tẩy da chết nhẹ nhàng, không gây kích ứng, loại bỏ tế bào chết và làm sạch sâu. Giúp da mịn màng, tươi sáng hơn.",
      image: "TTBC.jpg",
      thumbnails: ["TTBC.jpg"],
      rating: 4.5,
      reviews: 20,
      colors: ["Hồng"],
      sku: "COSMETIC-014",
      category: "Chăm sóc da",
      stock: 25
    },

    // Sản phẩm 31
    {
      id: 31,
      title: "Kem Dưỡng Mắt Giảm Thâm",
      price: 320000,
      originalPrice: 400000,
      description: "Kem dưỡng mắt giảm quầng thâm và nếp nhăn, cung cấp độ ẩm cần thiết cho vùng da quanh mắt. Giúp đôi mắt trông tươi trẻ và rạng rỡ hơn.",
      image: "KemDưỡngMắt.webp",
      thumbnails: ["KemDưỡngMắt.webp"],
      rating: 4.7,
      reviews: 18,
      colors: ["Trắng"],
      sku: "COSMETIC-015",
      category: "Chăm sóc da",
      stock: 15
    },

    // Sản phẩm 32
    {
      id: 32,
      title: "Xịt Khoáng Dưỡng Ẩm Tức Thì",
      price: 180000,
      originalPrice: 250000,
      description: "Xịt khoáng cấp ẩm tức thì, dịu nhẹ cho da, giúp làm dịu và tươi mát làn da. Có thể sử dụng bất cứ lúc nào trong ngày để cấp ẩm.",
      image: "XịtKhoángDưỡngẨm.webp",
      thumbnails: ["XịtKhoángDưỡngẨm.webp"],
      rating: 4.6,
      reviews: 22,
      colors: ["Trong suốt"],
      sku: "COSMETIC-016",
      category: "Chăm sóc da",
      stock: 30
    }
  ],
  accessories: [
    {
      id: 33,
      title: "Kính Mát Thời Trang",
      price: 300000,
      originalPrice: 400000,
      description: "Kính mát phong cách, bảo vệ mắt khỏi tia UV. Phù hợp cho mọi khuôn mặt.",
      image: "KínhMát1.jpg",
      thumbnails: ["KínhMát2.jpg", "KínhMát3.jpg"],
      rating: 4.5,
      reviews: 20,
      colors: ["Đen", "Nâu"],
      sku: "ACC-001",
      category: "Kính",
      stock: 10
    },
    {
      id: 34,
      title: "Túi Xách Da Cao Cấp",
      price: 800000,
      originalPrice: 1200000,
      description: "Túi xách da thật, thiết kế sang trọng, tiện dụng cho mọi dịp.",
      image: "TúiXách1.jpg",
      thumbnails: ["TúiXách2.webp", "TúiXách3.webp"],
      rating: 4.8,
      reviews: 30,
      colors: ["Đen", "Xanh"],
      sku: "ACC-002",
      category: "Túi",
      stock: 8
    },
    {
      id: 35,
      title: "Đồng Hồ Thông Minh",
      price: 1500000,
      originalPrice: 2000000,
      description: "Đồng hồ thông minh đa chức năng, theo dõi sức khỏe, kết nối điện thoại.",
      image: "ĐồngHồTM1.jpg",
      thumbnails: ["ĐồngHồTM2.jpg", "ĐồngHồTM3.png"],
      rating: 4.7,
      reviews: 25,
      colors: ["Đen", "Bạc"],
      sku: "ACC-003",
      category: "Đồng hồ",
      stock: 5
    },
    {
      id: 36,
      title: "Thắt Lưng Da Nam",
      price: 250000,
      originalPrice: 350000,
      description: "Thắt lưng da thật cao cấp, phong cách lịch lãm, bền đẹp theo thời gian.",
      image: "ThắtLưng1.jpg",
      thumbnails: ["ThắtLưng2.jpg"],
      rating: 4.3,
      reviews: 15,
      colors: ["Đen", "Nâu"],
      sku: "ACC-004",
      category: "Thắt lưng",
      stock: 12
    }
  ],
  sale: [
    {
      id: 1, // Áo Thun Cotton Basic Nữ
      title: "Áo Thun Cotton Basic Nữ (SALE)",
      price: 180000, // Giá giảm
      originalPrice: 350000,
      description: "Áo thun cotton cao cấp, thoáng mát, thoải mái khi mặc, phù hợp cho mọi hoạt động hàng ngày. Thiết kế đơn giản nhưng tinh tế, dễ dàng phối hợp với nhiều trang phục khác nhau. (Sản phẩm khuyến mãi đặc biệt)",
      image: "Áo.jpg",
      thumbnails: ["ÁoThun1.jpg", "ÁoThun2.jpg"],
      rating: 4.5,
      reviews: 28,
      colors: ["Trắng", "Đen", "Xám"],
      sizes: ["S", "M", "L", "XL"],
      sku: "FASHION-001-SALE",
      category: "Áo",
      gender: "Nữ",
      stock: 8 // Số lượng tồn kho riêng cho bản sale
    },
    {
      id: 17, // Son Lì Luxury Cao Cấp
      title: "Son Lì Luxury Cao Cấp (SALE)",
      price: 150000,
      originalPrice: 300000,
      description: "Son lì không trôi, giữ màu lâu đến 12 tiếng, chất son mềm mịn không gây khô môi. Mang lại đôi môi quyến rũ, bền màu suốt cả ngày. (Sản phẩm khuyến mãi đặc biệt)",
      image: "SonLìLuxury.jpg",
      thumbnails: ["SonLìLuxury.jpg", "SonLìLuxury.jpg"],
      rating: 4.8,
      reviews: 42,
      colors: ["Đỏ cam", "Hồng đào", "Đỏ gạch"],
      sku: "COSMETIC-001-SALE",
      category: "Son môi",
      stock: 10
    },
    {
      id: 33, // Kính Mát Thời Trang
      title: "Kính Mát Thời Trang (SALE)",
      price: 200000,
      originalPrice: 400000,
      description: "Kính mát phong cách, bảo vệ mắt khỏi tia UV. Phù hợp cho mọi khuôn mặt. (Sản phẩm khuyến mãi đặc biệt)",
      image: "KínhMát1.jpg",
      thumbnails: ["KínhMát2.jpg", "KínhMát3.jpg"],
      rating: 4.5,
      reviews: 20,
      colors: ["Đen", "Nâu"],
      sku: "ACC-001-SALE",
      category: "Kính",
      stock: 5
    }
  ],
  news: [
    {
      id: 1,
      title: "Xu Hướng Thời Trang Thu Đông 2023: Nét Cổ Điển Pha Lẫn Hiện Đại",
      image: "ThoiTrangThuDong.png", // Cần ảnh minh họa
      date: "26/10/2023",
      shortDescription: "Khám phá những xu hướng nổi bật nhất cho mùa thu đông năm nay, từ những gam màu trầm ấm đến các họa tiết độc đáo.",
      content: `
        <p>Mùa thu đông 2023 chứng kiến sự trở lại mạnh mẽ của các phong cách cổ điển, nhưng được làm mới với những chi tiết hiện đại và phá cách. Các nhà thiết kế tập trung vào sự thoải mái, tính ứng dụng cao nhưng vẫn giữ được vẻ sang trọng và tinh tế.</p>
        <h4>1. Gam màu chủ đạo</h4>
        <p>Các tông màu đất như nâu, be, xanh rêu, cùng với đỏ burgundy và xám than sẽ thống trị bảng màu. Những màu sắc này không chỉ dễ phối đồ mà còn mang lại cảm giác ấm áp, sang trọng.</p>
        <h4>2. Chất liệu lên ngôi</h4>
        <p>Len, dạ, tweed và da là những chất liệu không thể thiếu. Đặc biệt, các loại vải tái chế và thân thiện với môi trường cũng được ưu tiên, thể hiện xu hướng thời trang bền vững.</p>
        <h4>3. Phụ kiện nổi bật</h4>
        <p>Túi xách cỡ lớn, khăn choàng bản rộng và boots cao cổ sẽ là những điểm nhấn hoàn hảo cho bộ trang phục thu đông của bạn.</p>
        <p>Hãy cùng LUXURY cập nhật tủ đồ của mình để đón chào một mùa thu đông thật phong cách!</p>
      `
    },
    {
      id: 2,
      title: "Bí Quyết Chăm Sóc Da Mùa Đông: Giữ Làn Da Mịn Màng, Rạng Rỡ",
      image: "DaThuDong.jpg", // Cần ảnh minh họa
      date: "20/10/2023",
      shortDescription: "Thời tiết hanh khô mùa đông có thể khiến làn da của bạn trở nên khô ráp, thiếu sức sống. Hãy cùng tìm hiểu bí quyết chăm sóc da hiệu quả.",
      content: `
        <p>Mùa đông mang theo không khí lạnh và khô, đây là thách thức lớn đối với làn da của chúng ta. Để giữ cho làn da luôn mịn màng, ẩm mượt và rạng rỡ, bạn cần có một quy trình chăm sóc da phù hợp.</p>
        <h4>1. Tăng cường dưỡng ẩm</h4>
        <p>Sử dụng các sản phẩm dưỡng ẩm có kết cấu đặc hơn, chứa các thành phần như Hyaluronic Acid, Glycerin, Ceramides để khóa ẩm hiệu quả.</p>
        <h4>2. Không quên kem chống nắng</h4>
        <p>Dù trời không nắng gắt, tia UV vẫn có thể gây hại cho da. Hãy sử dụng kem chống nắng hàng ngày để bảo vệ da khỏi lão hóa sớm.</p>
        <h4>3. Chế độ ăn uống và sinh hoạt</h4>
        <p>Uống đủ nước, ăn nhiều rau xanh, trái cây và ngủ đủ giấc cũng góp phần quan trọng giúp làn da khỏe mạnh từ bên trong.</p>
        <p>Áp dụng những bí quyết trên, bạn sẽ có một làn da đẹp không ngại thời tiết!</p>
      `
    }
  ],
  contact: {
    title: "Liên hệ với chúng tôi",
    info: [
      { icon: "fas fa-map-marker-alt", text: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh" },
      { icon: "fas fa-phone", text: "0123.456.789" },
      { icon: "fas fa-envelope", text: "info@luxury.com" },
      { icon: "fas fa-clock", text: "8:00 - 22:00 (T2 - CN)" }
    ],
    form: {
      heading: "Gửi tin nhắn cho chúng tôi",
      fields: [
        { id: "contact-name", label: "Họ và tên *", type: "text", required: true },
        { id: "contact-email", label: "Email *", type: "email", required: true },
        { id: "contact-subject", label: "Chủ đề", type: "text", required: false },
        { id: "contact-message", label: "Nội dung *", type: "textarea", rows: 5, required: true }
      ],
      buttonText: "Gửi tin nhắn"
    }
  }
};

// ========== BIẾN TOÀN CỤC ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentCategory = 'home'; // Mặc định là trang chủ
let currentSlide = 0;
let currentCheckoutStep = 1;
let slideInterval;

let selectedProductOptions = {}; // To store selected color/size for modal product

// Lấy phần tử main content để tải nội dung động
const mainContentArea = document.getElementById('main-content');

// ========== KHỞI TẠO ỨNG DỤNG ==========
document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo trang chủ khi tải lần đầu
    renderCategoryPage('home');
    updateCartCount();
    updateWishlistCount();
    setupEventListeners();
});

// ========== PHẦN TÌM KIẾM ==========
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const allProducts = [...products.fashion, ...products.cosmetics, ...products.accessories, ...products.sale];
        const results = allProducts
            .filter(p => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query))
            .slice(0, 5); // Limit to 5 results
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(p => `
                <div class="search-result-item" onclick="openProductModal(${p.id})">
                    <img src="${p.image}" alt="${p.title}">
                    <span>${p.title} - ${p.price.toLocaleString()}đ</span>
                </div>
            `).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item">Không tìm thấy sản phẩm</div>';
            searchResults.style.display = 'block';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

// ========== PHẦN SLIDER (Chỉ hiển thị trên trang chủ) ==========
function initSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length === 0) return;
    
    // Tạo dots navigation
    const dotsContainer = document.querySelector('.slider-dots');
    if (dotsContainer) { // Kiểm tra nếu phần tử tồn tại
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetSliderTimer();
            });
            dotsContainer.appendChild(dot);
        });
    }
    
    // Sự kiện nút điều khiển
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetSliderTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetSliderTimer(); });
    
    startSlider();
}

function startSlider() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSliderTimer() {
    clearInterval(slideInterval);
    startSlider();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    if (slides.length === 0) return;

    currentSlide = index;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
    
    if (dots.length > 0) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
}

function prevSlide() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length === 0) return;
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

function nextSlide() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length === 0) return;
    goToSlide((currentSlide + 1) % slides.length);
}

// ========== PHẦN SẢN PHẨM (Chung cho các trang sản phẩm) ==========
function renderProductGrid(productsToDisplay, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Đảm bảo container tồn tại

    let htmlContent = '';
    if (productsToDisplay.length === 0) {
        htmlContent = `
            <div class="no-content-message">
                <i class="fas fa-box-open"></i>
                <p>Không có sản phẩm nào trong danh mục này.</p>
            </div>
        `;
    } else {
        productsToDisplay.forEach(product => {
            const discountPercent = product.originalPrice ? Math.round((1 - product.price/product.originalPrice) * 100) : 0;
            
            htmlContent += `
                <div class="product-card">
                    ${discountPercent > 0 ? `<div class="product-badge">-${discountPercent}%</div>` : ''}
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">
                            <span>${product.price.toLocaleString()}đ</span>
                            ${product.originalPrice ? `<span class="original-price">${product.originalPrice.toLocaleString()}đ</span>` : ''}
                        </div>
                        <div class="product-rating">
                            ${generateStarRating(product.rating)}
                            <span>(${product.reviews})</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn add-to-cart" data-id="${product.id}">Thêm vào giỏ</button>
                            <button class="btn wishlist ${isProductInWishlist(product.id) ? 'active' : ''}" data-id="${product.id}"><i class="fas fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    container.innerHTML = htmlContent;
    setupProductCardButtons(); // Gắn lại sự kiện cho các nút
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

function setupProductCardButtons() {
    document.querySelectorAll('.product-card .add-to-cart').forEach(button => {
        button.onclick = (event) => {
            event.stopPropagation(); // Prevent opening modal if clicked on "Add to Cart" button
            const productId = parseInt(button.dataset.id);
            const product = [...products.fashion, ...products.cosmetics, ...products.accessories, ...products.sale].find(p => p.id === productId);
            if (product) {
                // If product has options, open modal for selection
                if (product.colors || product.sizes) {
                    openProductModal(productId);
                } else {
                    // Otherwise, add directly to cart
                    addToCart(product, 1);
                    showNotification('Đã thêm vào giỏ hàng: ' + product.title);
                }
            }
        };
    });

    document.querySelectorAll('.product-card .wishlist').forEach(button => {
        button.onclick = (event) => {
            event.stopPropagation(); // Prevent opening modal
            const productId = parseInt(button.dataset.id);
            toggleWishlist(productId);
            button.classList.toggle('active', isProductInWishlist(productId));
        };
    });

    // Add click listener to the product card itself to open modal
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (event) => {
            // Only open modal if the click wasn't on an action button
            if (!event.target.closest('.product-actions button')) {
                const productId = parseInt(card.querySelector('.add-to-cart').dataset.id);
                openProductModal(productId);
            }
        });
    });
}

// ========== QUẢN LÝ HIỂN THỊ TRANG (Màn hình riêng cho từng mục) ==========
function renderCategoryPage(category) {
    currentCategory = category;
    let pageContent = '';
    let pageTitle = '';
    let pageDescription = '';

    // Ẩn tất cả các phần tử của trang chủ trước khi tải nội dung mới
    mainContentArea.innerHTML = '';

    switch (category) {
        case 'home':
            pageTitle = 'Trang chủ';
            pageDescription = 'Chào mừng bạn đến với LUXURY - Thời trang & Mỹ phẩm cao cấp';
            // Tải lại nội dung trang chủ từ HTML gốc
            pageContent = `
                <section class="hero-slider">
                    <div class="slider-container">
                        <div class="slider">
                            <div class="slide" style="background-image: url('nền1.jpg')">
                                <div class="slide-content">
                                    <h2>Bộ sưu tập mùa hè 2023</h2>
                                    <p>Khám phá những xu hướng thời trang mới nhất</p>
                                    <a href="#" class="btn">Mua ngay</a>
                                </div>
                            </div>
                            <div class="slide" style="background-image: url('nền2.jpg')">
                                <div class="slide-content">
                                    <h2>Mỹ phẩm cao cấp</h2>
                                    <p>Chăm sóc da với các sản phẩm chất lượng</p>
                                    <a href="#" class="btn">Mua ngay</a>
                                </div>
                            </div>
                            <div class="slide" style="background-image: url('nền3.jpg')">
                                <div class="slide-content">
                                    <h2>Giảm giá lên đến 50%</h2>
                                    <p>Ưu đãi đặc biệt trong tháng này</p>
                                    <a href="#" class="btn">Mua ngay</a>
                                </div>
                            </div>
                        </div>
                        <div class="slider-nav">
                            <button class="slider-prev"><i class="fas fa-chevron-left"></i></button>
                            <button class="slider-next"><i class="fas fa-chevron-right"></i></button>
                        </div>
                        <div class="slider-dots"></div>
                    </div>
                </section>

                <section class="category-section">
                    <div class="container">
                        <div class="section-header">
                            <h2>Danh mục sản phẩm</h2>
                            <p>Khám phá các sản phẩm nổi bật của chúng tôi</p>
                        </div>
                        
                        <div class="category-tabs">
                            <button class="tab active" data-category="fashion">Thời Trang</button>
                            <button class="tab" data-category="cosmetics">Mỹ Phẩm</button>
                        </div>
                        
                        <div class="products-container" id="products-container"></div>
                        
                        <div class="view-all">
                            <a href="#" class="btn" id="view-all-products-btn">Xem tất cả sản phẩm</a>
                        </div>
                    </div>
                </section>

                <section class="banner-section">
                    <div class="container">
                        <div class="banner-grid">
                            <div class="banner-item" style="background-image: url('ThoiTrangNam.jpg')">
                                <div class="banner-content">
                                    <h3>Thời Trang Nam</h3>
                                    <p>Phong cách lịch lãm</p>
                                </div>
                            </div>
                            <div class="banner-item" style="background-image: url('ThoiTrangNu.png')">
                                <div class="banner-content">
                                    <h3>Thời Trang Nữ</h3>
                                    <p>Quyến rũ và thanh lịch</p>
                                </div>
                            </div>
                            <div class="banner-item" style="background-image: url('MyPham.jpg')">
                                <div class="banner-content">
                                    <h3>Mỹ Phẩm</h3>
                                    <p>Chăm sóc da chuyên nghiệp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="featured-section">
                    <div class="container">
                        <div class="section-header">
                            <h2>Sản phẩm nổi bật</h2>
                            <p>Những sản phẩm được yêu thích nhất</p>
                        </div>
                        
                        <div class="products-container featured-products" id="featured-products-container"></div>
                    </div>
                </section>

                <section class="newsletter-section">
                    <div class="container">
                        <div class="newsletter-content">
                            <h3>Đăng ký nhận tin</h3>
                            <p>Nhận thông tin khuyến mãi và cập nhật sản phẩm mới</p>
                            <form class="newsletter-form">
                                <input type="email" placeholder="Nhập email của bạn" required>
                                <button type="submit" class="btn">Đăng ký</button>
                            </form>
                        </div>
                    </div>
                </section>
            `;
            mainContentArea.innerHTML = pageContent;
            initSlider(); // Khởi tạo lại slider
            loadProducts('fashion'); // Tải sản phẩm thời trang mặc định cho tab
            loadFeaturedProducts(); // Tải sản phẩm nổi bật
            // Gắn lại sự kiện cho tab sản phẩm chính
            document.querySelectorAll('.category-tabs .tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const cat = tab.dataset.category;
                    loadProducts(cat);
                    document.querySelectorAll('.category-tabs .tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                });
            });
            document.getElementById('view-all-products-btn').addEventListener('click', (e) => {
                e.preventDefault();
                renderCategoryPage('fashion'); // Chuyển sang trang tất cả thời trang
            });
            break;

        case 'fashion-women':
        case 'fashion-men':
        case 'cosmetics':
        case 'accessories':
        case 'sale':
            pageTitle = document.querySelector(`[data-nav-category="${category}"]`).textContent;
            pageDescription = `Khám phá các sản phẩm ${pageTitle.toLowerCase()} của chúng tôi.`;
            
            let productsToRender = [];
            if (category === 'fashion-women') {
                productsToRender = products.fashion.filter(p => p.gender === 'Nữ' || p.gender === 'Unisex');
            } else if (category === 'fashion-men') {
                productsToRender = products.fashion.filter(p => p.gender === 'Nam' || p.gender === 'Unisex');
            } else if (category === 'cosmetics') {
                productsToRender = products.cosmetics;
            } else if (category === 'accessories') {
                productsToRender = products.accessories;
            } else if (category === 'sale') {
                productsToRender = products.sale;
            }

            pageContent = `
                <section class="category-page-container">
                    <div class="container">
                        <div class="section-header">
                            <h2>${pageTitle}</h2>
                            <p>${pageDescription}</p>
                        </div>
                        <div class="category-product-grid" id="category-product-grid"></div>
                    </div>
                </section>
            `;
            mainContentArea.innerHTML = pageContent;
            renderProductGrid(productsToRender, 'category-product-grid');
            break;

        case 'news':
            pageTitle = 'Tin tức mới nhất';
            pageDescription = 'Cập nhật thông tin và xu hướng từ LUXURY.';
            pageContent = `
                <section class="category-page-container">
                    <div class="container">
                        <div class="section-header">
                            <h2>${pageTitle}</h2>
                            <p>${pageDescription}</p>
                        </div>
                        <div class="news-list">
                            ${products.news.length === 0 ? `
                                <div class="no-content-message">
                                    <i class="fas fa-newspaper"></i>
                                    <p>Chưa có bài viết tin tức nào.</p>
                                </div>
                            ` : products.news.map(article => `
                                <div class="news-item">
                                    <img src="${article.image}" alt="${article.title}">
                                    <div class="news-item-content">
                                        <h4>${article.title}</h4>
                                        <span class="news-date">${article.date}</span>
                                        <p>${article.shortDescription}</p>
                                        <button class="btn" onclick="showNewsDetail(${article.id})">Đọc thêm</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
            mainContentArea.innerHTML = pageContent;
            break;

        case 'contact':
            pageTitle = 'Liên hệ với chúng tôi';
            pageDescription = 'Chúng tôi luôn sẵn lòng hỗ trợ bạn.';
            const contactData = products.contact;
            pageContent = `
                <section class="category-page-container">
                    <div class="container">
                        <div class="section-header">
                            <h2>${pageTitle}</h2>
                            <p>${pageDescription}</p>
                        </div>
                        <div class="contact-page">
                            <h3>${contactData.title}</h3>
                            ${contactData.info.map(item => `<p><i class="${item.icon}"></i> ${item.text}</p>`).join('')}
                            
                            <form class="contact-form">
                                <h4>${contactData.form.heading}</h4>
                                ${contactData.form.fields.map(field => `
                                    <div class="form-group">
                                        <label for="${field.id}">${field.label}</label>
                                        ${field.type === 'textarea' ? 
                                            `<textarea id="${field.id}" rows="${field.rows}" ${field.required ? 'required' : ''}></textarea>` :
                                            `<input type="${field.type}" id="${field.id}" ${field.required ? 'required' : ''}>`
                                        }
                                    </div>
                                `).join('')}
                                <button type="submit" class="btn btn-primary">${contactData.form.buttonText}</button>
                            </form>
                        </div>
                    </div>
                </section>
            `;
            mainContentArea.innerHTML = pageContent;
            // Thêm sự kiện submit cho form liên hệ (chỉ demo)
            document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
                e.preventDefault();
                showNotification('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại sớm nhất.');
                e.target.reset(); // Reset form
            });
            break;

        default:
            // Fallback to home if category is not recognized
            renderCategoryPage('home');
            break;
    }

    // Cập nhật trạng thái active cho menu chính và menu mobile
    document.querySelectorAll('.main-nav li a').forEach(navLink => navLink.classList.remove('active'));
    document.querySelectorAll('.mobile-menu-content ul li a').forEach(navLink => navLink.classList.remove('active'));
    
    const activeNavLink = document.querySelector(`.main-nav li a[data-nav-category="${category}"]`);
    if (activeNavLink) activeNavLink.classList.add('active');
    
    const activeMobileNavLink = document.querySelector(`.mobile-menu-content ul li a[data-nav-category="${category}"]`);
    if (activeMobileNavLink) activeMobileNavLink.classList.add('active');

    // Cuộn lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hàm hiển thị chi tiết tin tức (ví dụ)
function showNewsDetail(newsId) {
    const article = products.news.find(n => n.id === newsId);
    if (!article) return;

    const pageTitle = article.title;
    const pageDescription = `Ngày đăng: ${article.date}`;

    const pageContent = `
        <section class="category-page-container">
            <div class="container">
                <div class="section-header">
                    <h2>${pageTitle}</h2>
                    <p>${pageDescription}</p>
                </div>
                <div class="news-detail-content" style="background-color: var(--white); padding: 2rem; border-radius: var(--border-radius); box-shadow: var(--box-shadow);">
                    <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
                    ${article.content}
                    <button class="btn" onclick="renderCategoryPage('news')" style="margin-top: 2rem;">Quay lại Tin tức</button>
                </div>
            </div>
        </section>
    `;
    mainContentArea.innerHTML = pageContent;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Hàm tải sản phẩm cho các tab trên trang chủ (Thời trang / Mỹ phẩm)
function loadProducts(category) {
    const container = document.getElementById('products-container');
    if (!container) return; // Đảm bảo container tồn tại

    const productsToDisplay = products[category] || [];
    renderProductGrid(productsToDisplay, 'products-container');
}

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products-container');
    if (!container) return; // Đảm bảo container tồn tại

    // Lấy 8 sản phẩm bất kỳ từ cả 3 danh mục chính để làm sản phẩm nổi bật
    const allProducts = [...products.fashion, ...products.cosmetics, ...products.accessories];
    const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
    const featuredProducts = shuffledProducts.slice(0, 8); // Lấy 8 sản phẩm

    renderProductGrid(featuredProducts, 'featured-products-container');
}


// ========== MODAL SẢN PHẨM ==========
function openProductModal(productId) {
    const allProducts = [...products.fashion, ...products.cosmetics, ...products.accessories, ...products.sale];
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    selectedProductOptions = {
        id: product.id,
        color: product.colors && product.colors.length > 0 ? product.colors[0] : null, // Default to first color or null
        size: product.sizes && product.sizes.length > 0 ? product.sizes[0] : null,   // Default to first size or null
        quantity: 1
    };
    
    // Cập nhật thông tin sản phẩm
    document.getElementById('modal-product-main-image').src = product.image;
    document.getElementById('modal-product-title').textContent = product.title;
    document.getElementById('modal-product-price').textContent = product.price.toLocaleString() + 'đ';
    document.getElementById('modal-product-original-price').textContent = product.originalPrice ? product.originalPrice.toLocaleString() + 'đ' : '';
    document.getElementById('modal-product-discount').textContent = product.originalPrice ? `-${Math.round((1 - product.price/product.originalPrice) * 100)}%` : '';
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('product-sku').textContent = product.sku;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('modal-product-stars').innerHTML = generateStarRating(product.rating);
    document.getElementById('modal-product-reviews').textContent = `(${product.reviews} đánh giá)`;
    document.getElementById('modal-product-status').textContent = product.stock > 0 ? 'Còn hàng' : 'Hết hàng';
    document.getElementById('modal-product-status').className = `product-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`;

    // Cập nhật hình ảnh thumbnails
    const thumbnailsContainer = document.getElementById('modal-product-thumbnails');
    thumbnailsContainer.innerHTML = '';
    const allImages = [product.image, ...(product.thumbnails || [])];
    allImages.forEach((imgSrc, i) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = `Hình ảnh ${i+1} của ${product.title}`;
        thumb.classList.toggle('active', i === 0); // Set first thumbnail as active
        thumb.onclick = () => {
            document.getElementById('modal-product-main-image').src = imgSrc;
            thumbnailsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Cập nhật màu sắc và kích thước
    updateProductOptionsInModal(product);
    
    // Cập nhật trạng thái số lượng
    const quantityElement = document.getElementById('quantity');
    quantityElement.textContent = selectedProductOptions.quantity;
    
    // Thiết lập nút tăng giảm số lượng
    document.getElementById('decrease-btn').onclick = () => {
        let qty = parseInt(quantityElement.textContent);
        if (qty > 1) {
            selectedProductOptions.quantity = qty - 1;
            quantityElement.textContent = selectedProductOptions.quantity;
        }
    };
    
    document.getElementById('increase-btn').onclick = () => {
        let qty = parseInt(quantityElement.textContent);
        if (qty < product.stock) {
            selectedProductOptions.quantity = qty + 1;
            quantityElement.textContent = selectedProductOptions.quantity;
        } else {
            showNotification('Số lượng tồn kho không đủ.');
        }
    };
    
    // Thiết lập nút thêm vào giỏ hàng
    document.getElementById('add-to-cart-btn').onclick = () => {
        if (product.stock === 0) {
            showNotification('Sản phẩm này hiện đã hết hàng.');
            return;
        }
        addToCart(product, selectedProductOptions.quantity);
        showNotification('Đã thêm vào giỏ hàng: ' + product.title);
        document.getElementById('product-modal').style.display = 'none';
    };

    // Thiết lập nút thêm vào wishlist
    const addToWishlistBtn = document.getElementById('add-to-wishlist-btn');
    addToWishlistBtn.classList.toggle('active', isProductInWishlist(product.id));
    addToWishlistBtn.onclick = () => {
        toggleWishlist(product.id);
        addToWishlistBtn.classList.toggle('active', isProductInWishlist(product.id));
    };
    
    // Hiển thị modal
    document.getElementById('product-modal').style.display = 'flex'; // Use flex to center
}

function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function updateProductOptionsInModal(product) {
    const colorsSection = document.getElementById('modal-product-colors-section');
    const sizesSection = document.getElementById('modal-product-sizes-section');
    const colorsContainer = document.getElementById('modal-product-colors');
    const sizesContainer = document.getElementById('modal-product-sizes');
    const selectedColorDisplay = document.getElementById('selected-color-display');
    const selectedSizeDisplay = document.getElementById('selected-size-display');

    // Handle Colors
    if (product.colors && product.colors.length > 0) {
        colorsSection.style.display = 'block';
        colorsContainer.innerHTML = product.colors.map(color => `
            <div class="option-item ${selectedProductOptions.color === color ? 'active' : ''}" data-value="${color}">${color}</div>
        `).join('');
        selectedColorDisplay.textContent = selectedProductOptions.color || product.colors[0];

        colorsContainer.querySelectorAll('.option-item').forEach(item => {
            item.onclick = () => {
                colorsContainer.querySelectorAll('.option-item').forEach(opt => opt.classList.remove('active'));
                item.classList.add('active');
                selectedProductOptions.color = item.dataset.value;
                selectedColorDisplay.textContent = selectedProductOptions.color;
            };
        });
    } else {
        colorsSection.style.display = 'none';
        selectedProductOptions.color = null;
    }
    
    // Handle Sizes
    if (product.sizes && product.sizes.length > 0) {
        sizesSection.style.display = 'block';
        sizesContainer.innerHTML = product.sizes.map(size => `
            <div class="option-item ${selectedProductOptions.size === size ? 'active' : ''}" data-value="${size}">${size}</div>
        `).join('');
        selectedSizeDisplay.textContent = selectedProductOptions.size || product.sizes[0];

        sizesContainer.querySelectorAll('.option-item').forEach(item => {
            item.onclick = () => {
                sizesContainer.querySelectorAll('.option-item').forEach(opt => opt.classList.remove('active'));
                item.classList.add('active');
                selectedProductOptions.size = item.dataset.value;
                selectedSizeDisplay.textContent = selectedProductOptions.size;
            };
        });
    } else {
        sizesSection.style.display = 'none';
        selectedProductOptions.size = null;
    }
}


// ========== GIỎ HÀNG ==========
function addToCart(product, quantity = 1) {
    // Ensure color and size are null if not present on the product
    const itemColor = product.colors && product.colors.length > 0 ? selectedProductOptions.color : null;
    const itemSize = product.sizes && product.sizes.length > 0 ? selectedProductOptions.size : null;

    const existingItemIndex = cart.findIndex(item => 
        item.id === product.id && 
        item.selectedColor === itemColor && 
        item.selectedSize === itemSize
    );
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            selectedColor: itemColor,
            selectedSize: itemSize
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
}

function removeFromCart(productId, color = null, size = null) {
    // Filter out the item matching ID, color, and size.
    // If color/size are null, they will still match null in the cart item.
    cart = cart.filter(item => !(item.id === productId && item.selectedColor === color && item.selectedSize === size));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
    showNotification('Đã xóa sản phẩm khỏi giỏ hàng');
}

function updateCartItemQuantity(productId, change, color = null, size = null) {
    const itemIndex = cart.findIndex(item => item.id === productId && item.selectedColor === color && item.selectedSize === size);
    if (itemIndex === -1) return;
    
    const newQuantity = cart[itemIndex].quantity + change;
    if (newQuantity < 1) {
        removeFromCart(productId, color, size);
        return;
    }
    
    // Check stock
    const productInStock = [...products.fashion, ...products.cosmetics, ...products.accessories, ...products.sale].find(p => p.id === productId);
    if (productInStock && newQuantity > productInStock.stock) {
        showNotification(`Số lượng tồn kho của ${productInStock.title} chỉ còn ${productInStock.stock} sản phẩm.`);
        return;
    }

    cart[itemIndex].quantity = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalPriceElement = document.getElementById('subtotal-price');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutOrderItems = document.getElementById('checkout-order-items');
    const orderSubtotalElement = document.getElementById('order-subtotal');
    const orderTotalElement = document.getElementById('order-total');

    let subtotal = 0;
    
    if (cartItemsContainer) cartItemsContainer.innerHTML = '';
    if (checkoutOrderItems) checkoutOrderItems.innerHTML = '';

    if (cart.length === 0) {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Giỏ hàng của bạn đang trống</p>
                    <button class="btn" onclick="toggleCartModal()">Tiếp tục mua sắm</button>
                </div>
            `;
        }
        if (document.getElementById('checkout-btn')) document.getElementById('checkout-btn').disabled = true; // Disable checkout if cart is empty
    } else {
        if (document.getElementById('checkout-btn')) document.getElementById('checkout-btn').disabled = false; // Enable checkout
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            // Pass item.selectedColor and item.selectedSize to the functions
            const colorParam = item.selectedColor ? `'${item.selectedColor}'` : 'null';
            const sizeParam = item.selectedSize ? `'${item.selectedSize}'` : 'null';

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">${item.price.toLocaleString()}đ</p>
                    ${item.selectedColor ? `<p class="cart-item-options">Màu: ${item.selectedColor}</p>` : ''}
                    ${item.selectedSize ? `<p class="cart-item-options">Size: ${item.selectedSize}</p>` : ''}
                    <div class="cart-item-quantity">
                        <button onclick="updateCartItemQuantity(${item.id}, -1, ${colorParam}, ${sizeParam})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartItemQuantity(${item.id}, 1, ${colorParam}, ${sizeParam})">+</button>
                    </div>
                </div>
                <p class="cart-item-remove" onclick="removeFromCart(${item.id}, ${colorParam}, ${sizeParam})">Xóa</p>
            `;
            if (cartItemsContainer) cartItemsContainer.appendChild(cartItem);

            // Update checkout summary
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item-checkout';
            orderItem.innerHTML = `
                <span>${item.title} (${item.quantity}x)</span>
                <span>${itemTotal.toLocaleString()}đ</span>
            `;
            if (checkoutOrderItems) checkoutOrderItems.appendChild(orderItem);
        });
    }
    
    if (subtotalPriceElement) subtotalPriceElement.textContent = subtotal.toLocaleString() + 'đ';
    if (totalPriceElement) totalPriceElement.textContent = subtotal.toLocaleString() + 'đ'; // Discount logic can be added here
    
    if (orderSubtotalElement) orderSubtotalElement.textContent = subtotal.toLocaleString() + 'đ';
    const shippingFee = cart.length > 0 ? 30000 : 0; // Example shipping fee
    if (orderTotalElement) orderTotalElement.textContent = (subtotal + shippingFee).toLocaleString() + 'đ';
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function toggleCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex'; // Use flex
    if (cartModal.style.display === 'flex') {
        updateCart(); // Ensure cart is updated when opened
    }
}

// ========== WISHLIST ==========
function isProductInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

function toggleWishlist(productId) {
    const allProducts = [...products.fashion, ...products.cosmetics, ...products.accessories, ...products.sale];
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    if (isProductInWishlist(productId)) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification(`Đã xóa ${product.title} khỏi danh sách yêu thích`);
    } else {
        wishlist.push(product);
        showNotification(`Đã thêm ${product.title} vào danh sách yêu thích`);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlist(); // Update wishlist modal if open
}

function updateWishlistCount() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
}

function renderWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    const emptyWishlistMessage = document.getElementById('empty-wishlist');
    if (!wishlistItemsContainer || !emptyWishlistMessage) return;

    wishlistItemsContainer.innerHTML = '';

    if (wishlist.length === 0) {
        emptyWishlistMessage.style.display = 'block';
        wishlistItemsContainer.style.display = 'none';
    } else {
        emptyWishlistMessage.style.display = 'none';
        wishlistItemsContainer.style.display = 'grid'; // Use grid for wishlist items
        wishlist.forEach(product => {
            const discountPercent = product.originalPrice ? Math.round((1 - product.price/product.originalPrice) * 100) : 0;
            const card = document.createElement('div');
            card.className = 'product-card'; // Reuse product-card style
            card.innerHTML = `
                ${discountPercent > 0 ? `<div class="product-badge">-${discountPercent}%</div>` : ''}
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span>${product.price.toLocaleString()}đ</span>
                        ${product.originalPrice ? `<span class="original-price">${product.originalPrice.toLocaleString()}đ</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateStarRating(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn add-to-cart" data-id="${product.id}">Thêm vào giỏ</button>
                        <button class="btn wishlist active" data-id="${product.id}"><i class="fas fa-heart"></i></button>
                    </div>
                </div>
            `;
            wishlistItemsContainer.appendChild(card);
        });
        // Re-attach event listeners for newly rendered wishlist items
        wishlistItemsContainer.querySelectorAll('.product-card .add-to-cart').forEach(button => {
            button.onclick = (event) => {
                event.stopPropagation();
                const productId = parseInt(button.dataset.id);
                const productToAdd = [...products.fashion, ...products.cosmetics, ...products.accessories, ...products.sale].find(p => p.id === productId);
                if (productToAdd) {
                    addToCart(productToAdd, 1);
                    showNotification('Đã thêm vào giỏ hàng: ' + productToAdd.title);
                }
            };
        });
        wishlistItemsContainer.querySelectorAll('.product-card .wishlist').forEach(button => {
            button.onclick = (event) => {
                event.stopPropagation();
                const productId = parseInt(button.dataset.id);
                toggleWishlist(productId);
                // No need to toggle class here, renderWishlist will re-render
            };
        });
    }
}

function toggleWishlistModal() {
    const wishlistModal = document.getElementById('wishlist-modal');
    wishlistModal.style.display = wishlistModal.style.display === 'flex' ? 'none' : 'flex';
    if (wishlistModal.style.display === 'flex') {
        renderWishlist(); // Update wishlist content when opened
    }
}


// ========== THANH TOÁN ==========
function nextCheckoutStep() {
    const currentStepElement = document.querySelector(`#step-${currentCheckoutStep}`);
    
    // Validate current step before proceeding
    if (currentCheckoutStep === 1) {
        const shippingForm = document.getElementById('shipping-form');
        if (!shippingForm.checkValidity()) {
            shippingForm.reportValidity(); // Show browser's validation messages
            showNotification('Vui lòng điền đầy đủ thông tin giao hàng bắt buộc.');
            return;
        }
    }

    if (currentCheckoutStep >= 3) return;
    
    if (currentStepElement) currentStepElement.classList.remove('active');
    currentCheckoutStep++;
    const nextStepElement = document.querySelector(`#step-${currentCheckoutStep}`);
    if (nextStepElement) nextStepElement.classList.add('active');
    updateCheckoutStepsUI();
    
    if (currentCheckoutStep === 3) {
        // Simulate order completion
        const orderNumberElement = document.getElementById('order-number');
        if (orderNumberElement) orderNumberElement.textContent = '#LUX' + Math.floor(100000 + Math.random() * 900000);
        setTimeout(() => {
            cart = []; // Clear cart after successful order
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            updateCartCount();
        }, 1000); // Small delay for user to see success message
    }
}

function prevCheckoutStep() {
    if (currentCheckoutStep <= 1) return;
    
    const currentStepElement = document.querySelector(`#step-${currentCheckoutStep}`);
    if (currentStepElement) currentStepElement.classList.remove('active');
    currentCheckoutStep--;
    const prevStepElement = document.querySelector(`#step-${currentCheckoutStep}`);
    if (prevStepElement) prevStepElement.classList.add('active');
    updateCheckoutStepsUI();
}

function updateCheckoutStepsUI() {
    const steps = document.querySelectorAll('.checkout-steps .step');
    steps.forEach((step, index) => {
        step.classList.toggle('active', parseInt(step.dataset.step) <= currentCheckoutStep);
    });
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
    currentCheckoutStep = 1; // Reset to first step
    document.querySelectorAll('.checkout-step').forEach((step, i) => {
        step.classList.toggle('active', i === 0);
    });
    updateCheckoutStepsUI(); // Update UI to reflect reset
}

// ========== XÁC THỰC ==========
function openAuthModal() {
    document.getElementById('auth-modal').style.display = 'flex'; // Use flex to center
}

function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function switchAuthTab(tabId) {
    document.querySelectorAll('.auth-tabs .auth-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabId);
    });
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.toggle('active', form.id === `${tabId}-form`);
    });
}

// Handle login form submission (client-side only for demo)
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real application, send data to server for authentication
    showNotification('Đăng nhập thành công (demo)!');
    closeAuthModal();
});

// Handle register form submission (client-side only for demo)
document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        showNotification('Mật khẩu nhập lại không khớp!');
        return;
    }
    // In a real application, send data to server for registration
    showNotification('Đăng ký thành công (demo)!');
    closeAuthModal();
    switchAuthTab('login'); // Switch to login tab after registration
});


// ========== NOTIFICATION ==========
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Trigger reflow to ensure transition plays
    void notification.offsetWidth; 
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300); // Remove after transition
    }, 3000);
}

// ========== MOBILE MENU ==========
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('show');
    });
    
    document.querySelector('.close-mobile-menu')?.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    });
}

// ========== THIẾT LẬP SỰ KIỆN ==========
function setupEventListeners() {
    // Tabs sản phẩm trên trang chủ (nếu có)
    document.querySelectorAll('.category-tabs .tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const cat = tab.dataset.category;
            loadProducts(cat);
            document.querySelectorAll('.category-tabs .tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    
    // Sản phẩm nổi bật (View All button) trên trang chủ
    document.getElementById('view-all-products-btn')?.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        renderCategoryPage('fashion'); // Chuyển sang trang tất cả thời trang
    });
    
    // Modal đăng nhập/đăng ký
    document.getElementById('auth-btn')?.addEventListener('click', openAuthModal);
    document.querySelectorAll('.auth-tabs .auth-tab').forEach(tab => {
        tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });
    
    // Thanh toán
    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Giỏ hàng trống, vui lòng thêm sản phẩm');
            return;
        }
        toggleCartModal(); // Close cart modal
        document.getElementById('checkout-modal').style.display = 'flex'; // Open checkout modal
        updateCart(); // Ensure order summary is updated
    });

    // Handle payment method selection in checkout modal
    document.querySelectorAll('.payment-methods-checkout .payment-method-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.payment-methods-checkout .payment-method-item').forEach(p => p.classList.remove('active'));
            item.classList.add('active');
            // You can store the selected payment method here if needed
            // let selectedPaymentMethod = item.dataset.paymentMethod;
        });
    });

    // Handle shipping form submission to move to next step
    document.getElementById('shipping-form')?.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        nextCheckoutStep();
    });
    
    // Đóng modal khi click bên ngoài
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') && e.target.id !== 'cart-modal' && e.target.id !== 'checkout-modal') {
            // Only close product modal and auth modal if clicked outside
            document.getElementById('product-modal').style.display = 'none';
            document.getElementById('auth-modal').style.display = 'none';
            document.getElementById('wishlist-modal').style.display = 'none';
        }
    });
    
    // Setup cho mobile
    setupMobileMenu();
    setupSearch();
    
    // Các hàm toàn cục khác (để có thể gọi từ HTML inline)
    window.toggleCartModal = toggleCartModal;
    window.closeProductModal = closeProductModal;
    window.openProductModal = openProductModal;
    window.toggleWishlistModal = toggleWishlistModal;
    window.closeAuthModal = closeAuthModal;
    window.closeCheckout = closeCheckout;
    window.nextCheckoutStep = nextCheckoutStep;
    window.prevCheckoutStep = prevCheckoutStep; // If you add a back button
    window.updateCartItemQuantity = updateCartItemQuantity;
    window.removeFromCart = removeFromCart;
    window.closeMobileMenu = () => document.getElementById('mobile-menu').classList.remove('show'); // For mobile menu close button
    window.showNewsDetail = showNewsDetail; // Để gọi từ HTML
}

// ========== KHỞI CHẠY ỨNG DỤNG ==========
// Ensure all DOM content is loaded before running scripts
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Khởi tạo trang chủ khi tải lần đầu
        renderCategoryPage('home');
        updateCartCount();
        updateWishlistCount();
        setupEventListeners();
    });
} else {
    renderCategoryPage('home');
    updateCartCount();
    updateWishlistCount();
    setupEventListeners();
}

// Gắn sự kiện cho các liên kết điều hướng chính
document.querySelectorAll('.main-nav li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.navCategory;
        renderCategoryPage(category);
    });
});
