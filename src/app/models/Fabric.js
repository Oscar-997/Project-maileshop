const mongoose = require('mongoose')// import thư viện mongoose
const Schema = mongoose.Schema;// tạo 1 biến với phương thức Schema về để 
const slug = require('mongoose-slug-generator'); // call đến plugin tải về mongoose để có thể 
                                // thêm được slug sau local/Fabrics/slug

const mongooseDelete = require('mongoose-delete');


const Fabric = new Schema({
    name: {type: 'string', required: true},// truyền về giá trị Name, required là phải có 
    description: {type: 'string'},// mô tả với giá trị là chuỗi
    image: {type: 'string'},// tương tự mô tả
    slug: { type: String, slug: 'name', unique: true},// truyền chuổi về, giá trị slug lấy giống name
                                            // unique là mỗi slug là duy nhất khác thì truyền thêm id vào 
    price: {type: String}
},{
    timestamps:true,// cập nhật thời gian update và creat 
    collection: 'fabrics'
});

// add plugin
mongoose.plugin(slug)// thêm phương thức plugin với giá trị là slug
Fabric.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})// thêm plugin xóa mềm 

module.exports = mongoose.model('Fabric', Fabric); //xuất giá trị với dạng model
                                            // với biến Fabric có tên là Fabric