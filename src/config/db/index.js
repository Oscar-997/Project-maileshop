const mongoose = require('mongoose') // import thư viện mongoose để quản lý mongodb vs nodejs

async function connect() {// tạo 1 hàm bất đồng bộ async tên connect
    try {// connect mongoose với địa chỉ ib của mongodb để có thể quản lý và xuất dữ liệu
        await mongoose.connect('mongodb://127.0.0.1:27017/fabric-maileshop', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!!!');// thành công in ra 
    } catch (error) {
        console.log('Connect failure!!!');// thất bại in ra ở terminal
    }
}

module.exports = { connect } // xuất hàm connect ra với 1 object 