


/* === ADSL28 - DATABASE MANIFEST === */
/*
 * Đây là tệp duy nhất bạn cần sửa khi thêm hoặc bớt các môn học.
 * Chương trình sẽ tự động tải các tệp được liệt kê dưới đây.
 */
//================================================================

const DATABASE_FILES = [
    'DATABASE/LICHSUDIALI.js',
    'DATABASE/khoahoctunhien.js',
    'DATABASE/CIE6TW6.js',
    'DATABASE/TOAN6.js',
  //  'DATABASE/EnglishMrSON.js',
    // 'DATABASE/IOE.js',
     'DATABASE/ENGLISHHK1.js',
    'DATABASE/questiontest.js',
     'DATABASE/	IEL90.js',
     'DATABASE/nguvan6.js',



// 'DATABASE/	AdvancedEnglishv2.js',
// 'DATABASE/	checkpointone.js',

 // Thêm các tệp .js database khác của bạn ở đây
];

//================================================================
// Hàm này sẽ tự động dùng document.write để tải các tệp database
DATABASE_FILES.forEach(filePath => {
    document.write(`<script src="${filePath}"></script>`);
});

// (Đã xóa dấu '}' bị thừa từ đây)


