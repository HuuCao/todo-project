# useState hook

### Dùng khi nào?
- Khi muốn dữ liệu thay đổi thì giao diện từ động được cập nhật (render lại theo dữ liệu)
- hook chỉ sử dụng được cho function component

### Cách sử dụng
```tsx
import { useState } from "react";
function Component () {
    const [state, setState] = useState(initState);
    // initState: là già trị khởi tạo (chỉ dùng 1 lần trong lần đầu) => sau đó return về 1 mảng
    // trong lần đầu tiên lấy giá trị khởi tạo gán cho biến state
    // setState là một hàm dùng để set lại state

    ... //my code

    return (
        <>
            <p>Hello world</p>
        </p>
    );
}
```

### Lưu ý
- Component được re-render sau khi `setState`
- Initial state chỉ dùng được cho lần đầu
- Set state với callback?
- Inittal state với callback?
- Set state thay thế state bằng giá trị mới
- Trường hợp có tình toán logic phức tạp thì nên tạo 1 callback làm initialState (giá trị khởi tạo) để sau khi re-render thì nó không gọi thực thi lại logic tính toán





# useEffect hook

### Dùng khi nào?

- useEffect là một hook trong React cho phép bạn thực hiện các side effects trong các functional component
- side effect: khi có tác động xảy ra dẫn tới việc dữ liệu chương trình bị thay đổi
- useEffect có thể thực hiện các tác vụ như UpdateDOM, Call API, Listen DOM Events, Cleanup

### Cách sử dụng
```tsx
import { useEffect } from "react";
function Component () {
    useEffect(callback, [deps]); // đối số thức nhất là bắt buộc, đôi số thứ 2 là không bắt buộc (chứa những sự phụ thuộc dữ liệu)

    /** 
     *  Sẽ có 3 TH sử dụng useEffect. CHÚ Ý: Callback sẽ luôn được gọi sau khi component mounted 
     **/

    /**
     * 1. useEffect(callback); <ít dùng trong thực tế>
     * -----------------------------------------------------
     * - Gọi callback mỗi khi component re-render
     * - Gọi callback sau khi component thêm element vào DOM
     * 
     * **/

    /**
     * 2. useEffect(callback, []);
     * -----------------------------------------------------
     * - Chỉ gọi callback 1 lần sau khi component mounted
     * 
     * **/

    /**
     * 2. useEffect(callback, [deps]);
     * -----------------------------------------------------
     * - Callback sẽ được gọi lại mỗi khi deps thay đổi
     * 
     * **/


    // 3. useEffect(callback, [deps])

    return (
        <>
            <p>Hello world</p>
        </p>
    );
}
```