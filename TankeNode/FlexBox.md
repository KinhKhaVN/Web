# Đây là ghi chú cho chủ để Flexbox trong css

+ **FLEX BOX LÀ GÌ?**
    + Flexbox là một phương pháp để sắp xếp, căn chỉnh các phần tử theo **chiều ngang** (main-axis) **chiều dọc** (corss-axis)

# Cách sử dụng Flexbox

> **Đoạn mã HTML**
``` css 
.container
{
    display: flex
}
``` 
- Đầu tiên phần tử **cha** (container) phải là 1 flex container
- Các phần tử con có các thuộc tính cơ bản sau

> **Child**
``` css
    flex-direction: row | row-reverse | column | column-reverse 
    Các phần tử được trải đều theo chiều ngang hoặc dọc
    
    flex-wrap: wrap | nowrap | wrap-reverse
    Các phần tử được xuống dòng khi số số lương lớn hơn chiều ngang (dọc) của màn hình
    
    flex-flow: <flex-direction> | <flex-wrap>
    Sử dụng flex-flow để thu gọn code cho flex-direction và flex-wrap
```

