# Đây là ghi chú ý về Grid trong CSS

- Grid là một hệ thống bố cục 2 chiều, cho phép sắp xếp các thành phần trên **hàng** và **cột**

> ***CÁC THUỘC TÍNH CỦA GRID***


> HTML
``` html
.grid-container
{
    display: grid;
}
```


``` css

    grid-template-columns: ;
    Định nghĩa số lượng kích thước và kích thuốc các cột
    
    grid-template-rows: ;
    Định nghĩa số lượng kích thước và kích thuốc các hàng

    grid-template-area: ;
    Nhận string làm giá trị, trong đó string phải được sắp xếp cho sao
    tạo thành một hình chữ nhật hoặc hình vuông

    gap: <rows-gap> | <columns-gap>
    Khoảng cách giữa các hàng (cột) trong grid

``` 
