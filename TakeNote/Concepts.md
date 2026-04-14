## [Lập trình web](https://uet.vnu.edu.vn/~hoainam/TaiLieuHtmlCoBan.pdf)
## Các khái niệm và thuật ngữ cơ bản

- **WWW** ***(World Wide Web)***: mạng toàn cầu các máy tính sử dụng Internet để trao đổi tài liệu web
### Protocal
- **Protocal**: tập hợp các quy tắc được thống nhất giúp hai máy tính trao đổi dữ liệu được chính xác
    - **TCP**: 
    - **HTTP**:
    - **FTP**: 
- **Server**: chứa dữ liệu, tài nguyên và dịch vụ cho phép máy tính khác có thể khai thác và truy cập
    - Tên máy chủ thường được gắn với mục đích sử dụng: **Web** server, **File** server, **Mail** server
- **Client**: là máy tính dùng để **kết nối** và **khai thác** các tài nguyên trên máy chủ
- **Web host**: Web server cung cấp dịch vụ lưu trữ cho web site
- **Web server**: một máy tính phân phối dịch vụ và thông tin cho máy khác
- **Web client**: phần mềm dùng để truy cập và hiển thị nội dung trang web
- **Web page**: một tài liệu được phân phối trên mội trường web
- **Web site**: tập hợp các web page
- **Home page**: là web page có mức ưu tiên cao nhất, gọi là trang chủ của website. Khi truy cập vào liên kết chính thức, người dùng luôn được điều hướng đến trang chủ đầu tiên
- **IP address**: một con số xác định cho mỗi máy tính
    - Thí dụ: 192.168.10.1
- **Domain name**: tên xác định của websiet
- **Domain name system** ***(DNS)***: ánh xạ địa chỉ IP sang tên miền và ngược lại
- **ISP** ***(Internet Service Provider)***: nhà cung cấp dịch vụ Internet
- **URL** ***(Unifomr Resource Locator)***: Một địa chỉ web
    - **Giao thức**://**Tên miền**:**Cổng**/**Thư mục**/**Tập tin** ***?*** param1=value1 **&** param2=value2#**Tên vị trí trong trang web**
### Port
- [Port](https://www.cloudflare.com/learning/network-layer/what-is-a-computer-port/) (cổng): là con số xác định kênh nhập/xuất
    - Hai dịch vụ khác nhau phải chạy trên 2 cổng khác nhau
    - **Web server** thường dùng cổng 80, **ftp server** dùng cổng 21, **smtp server** dùng cổng 25
    - Port được sử dụng trong **lớp 4** của mô hình **OSI**
- **Số port**: mỗi một số **port** thể hiện cho một **giao thức** tương ứng
    - **HTTP** ***(Hypertext Transfer Protocal)*** gửi thông tin đến cổng số **80**
- **Web tĩnh**: chứa nội dung cố định và khong cho phép sử dụng tương tác, cập nhật dữ liệu trên web
- **Web động**: kết hợp HTML và mã lệnh, mã được thực thi trực tiếp trên **server**, gửi kết quả là **HTML** về cho người dùng
- [Mô hình OSI](https://www.cloudflare.com/img/learning/ddos/what-is-a-ddos-attack/osi-model-7-layers.svg)
### Liên kết
- Hyperlink: cho phép người dùng có thể duyệt từ trang web này sang trang web khác, gồm 3 phần:
    - Nguồn: 
    - Nhãn:
    - Đích đến: Xác định vị trí nguồn hiển thị
- Các dạng liên kết:
    - Internal hyperlink: liên kết đến các phần trong cùng 1 tại liệu
        - Sử dụng URL tương đối
    - External hyperlink: liên kết đến các trang trên website khác
        - Sử dụng URL tuyệt đối



