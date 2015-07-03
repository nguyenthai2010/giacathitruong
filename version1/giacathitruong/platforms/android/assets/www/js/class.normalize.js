// http://stackoverflow.com/a/16877175/1250044
var normalize = (function (str) {
    var map = {
            'á':'a', 'à':'a', 'ả':'a', 'ã':'a', 'ạ':'a', 'â':'a', 'ấ':'a', 'ầ':'a', 'ẩ':'a', 'ẫ':'a', 'ậ':'a', 'ă':'a', 'ắ':'a', 'ằ':'a', 'ẳ':'a', 'ẵ':'a', 'ặ':'a', 'đ':'d', 'é':'e', 'è':'e', 'ẻ':'e', 'ẽ':'e', 'ẹ':'e', 'ê':'e', 'ế':'e', 'ề':'e', 'ể':'e', 'ễ':'e', 'ệ':'e', 'í':'i', 'ì':'i', 'ỉ':'i', 'ĩ':'i', 'ị':'i', 'ó':'o', 'ò':'o', 'ỏ':'o', 'õ':'o', 'ọ':'o', 'ô':'o', 'ố':'o', 'ồ':'o', 'ổ':'o', 'ỗ':'o', 'ộ':'o', 'ơ':'o', 'ớ':'o', 'ờ':'o', 'ở':'o', 'ỡ':'o', 'ợ':'o', 'ú':'u', 'ù':'u', 'ủ':'u', 'ũ':'u', 'ụ':'u', 'ư':'u', 'ứ':'u', 'ừ':'u', 'ử':'u', 'ữ':'u', 'ự':'u', 'ý':'y', 'ỳ':'y', 'ỷ':'y', 'ỹ':'y', 'ỵ':'y', 'Á':'A', 'À':'A', 'Ả':'A', 'Ã':'A', 'Ạ':'A', 'Â':'A', 'Ấ':'A', 'Ầ':'A', 'Ẩ':'A', 'Ẫ':'A', 'Ậ':'A', 'Ă':'A', 'Ắ':'A', 'Ằ':'A', 'Ẳ':'A', 'Ẵ':'A', 'Ặ':'A', 'Đ':'D', 'É':'E', 'È':'E', 'Ẻ':'E', 'Ẽ':'E', 'Ẹ':'E', 'Ê':'E', 'Ế':'E', 'Ề':'E', 'Ể':'E', 'Ễ':'E', 'Ệ':'E', 'Í':'I', 'Ì':'I', 'Ỉ':'I', 'Ĩ':'I', 'Ị':'I', 'Ó':'O', 'Ò':'O', 'Ỏ':'O', 'Õ':'O', 'Ọ':'O', 'Ô':'O', 'Ố':'O', 'Ồ':'O', 'Ổ':'O', 'Ỗ':'O', 'Ộ':'O', 'Ơ':'O', 'Ớ':'O', 'Ờ':'O', 'Ở':'O', 'Ỡ':'O', 'Ợ':'O', 'Ú':'U', 'Ù':'U', 'Ủ':'U', 'Ũ':'U', 'Ụ':'U', 'Ư':'U', 'Ứ':'U', 'Ừ':'U', 'Ử':'U', 'Ữ':'U', 'Ự':'U', 'Ý':'Y', 'Ỳ':'Y', 'Ỷ':'Y', 'Ỹ':'Y', 'Ỵ':'Y'
        },
        nonWord = /\W/g,
        mapping = function (c) {
            return map[c] || c; 
        };


    return function (str) {
        return str.replace(nonWord, mapping);
    };
}());

$(document).ready(function(e) {
	//alert(normalize('Bắp cải trắng'));
});


