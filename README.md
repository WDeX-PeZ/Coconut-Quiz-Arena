# Coconut-Quiz-Arena
Coconut Quiz Arena Offline App

# 🥥 COCONUT QUIZ ARENA
## HƯỚNG DẪN TẢI, GIẢI NÉN, CÀI ĐẶT VÀ SỬ DỤNG
### Vietnamese User Guide

Chào mừng bạn đến với Coconut Quiz Arena – nền tảng luyện tập và thi thử với nhiều môn học, chế độ chơi, hệ thống quản lý câu hỏi và công cụ tạo đề bằng AI.

---

# PHẦN I. TẢI ỨNG DỤNG

### Bước 1. Truy cập GitHub Releases

1. Mở trang GitHub Releases chính thức của Coconut Quiz Arena.
2. Tìm phiên bản mới nhất có nhãn **Latest**.
3. Nhấn vào phiên bản đó.
4. Cuộn xuống phần **Assets**.
5. Tìm file `Coconut-Quiz-Arena.zip`.
6. Nhấn vào file để tải xuống.
7. Chờ quá trình tải hoàn tất.

### Bước 2. Kiểm tra file đã tải

Sau khi tải xuống, file thường nằm trong thư mục:

- Android: `Download` hoặc `Tải xuống`.
- Windows: `Downloads` hoặc `Tải xuống`.

Tên file dự kiến:

`Coconut-Quiz-Arena.zip`

**Lưu ý:** Đây là gói ZIP chứa mã nguồn và tài nguyên của ứng dụng, không phải file APK Android.

---

# PHẦN II. GIẢI NÉN TRÊN ANDROID

Sử dụng ZArchiver hoặc trình quản lý tệp có hỗ trợ giải nén ZIP.

### Bước 1. Tìm file ZIP

1. Mở ZArchiver.
2. Truy cập thư mục `Download`.
3. Tìm file `Coconut-Quiz-Arena.zip`.

### Bước 2. Giải nén

1. Chạm vào file ZIP.
2. Chọn **Giải nén tại đây (Extract here)** hoặc **Giải nén vào thư mục riêng**.
3. Chờ quá trình giải nén hoàn tất.
4. Mở thư mục vừa được tạo.

### Bước 3. Kiểm tra các tệp

Cấu trúc gói ứng dụng dự kiến:

```text
Coconut-Quiz-Arena/
├── index.html
├── manifest.webmanifest
├── service-worker.js
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    └── icon-512-maskable.png
```

Tên hoặc vị trí một số tệp có thể khác tùy phiên bản phát hành.

**Quan trọng:**
- Không xóa các tệp trong thư mục.
- Không đổi tên tùy tiện.
- Không di chuyển riêng icon hoặc Service Worker.
- Giữ nguyên cấu trúc thư mục khi cần triển khai ứng dụng.

### Bước 4. Mở ứng dụng

Cách được khuyến nghị:

1. Mở Google Chrome.
2. Truy cập đường link GitHub Pages chính thức của Coconut Quiz Arena.
3. Chờ website tải hoàn tất.
4. Bắt đầu sử dụng.

Có thể mở `index.html` trực tiếp từ trình quản lý tệp nếu trình duyệt hỗ trợ, nhưng cách này không đảm bảo PWA, Service Worker và chế độ offline hoạt động đầy đủ.

---

# PHẦN III. GIẢI NÉN TRÊN WINDOWS

### Bước 1. Tìm file ZIP

1. Mở File Explorer.
2. Chọn thư mục `Downloads`.
3. Tìm `Coconut-Quiz-Arena.zip`.

### Bước 2. Giải nén

1. Nhấn chuột phải vào file ZIP.
2. Chọn **Extract All...**.
3. Chọn thư mục lưu kết quả.
4. Nhấn **Extract**.
5. Chờ Windows giải nén hoàn tất.

### Bước 3. Kiểm tra thư mục

Mở thư mục vừa giải nén và kiểm tra có những thành phần chính:

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- Thư mục `icons`

Không xóa hoặc thay đổi vị trí các tệp nếu chưa hiểu rõ chức năng của chúng.

### Bước 4. Mở ứng dụng

Cách khuyến nghị là mở đường link GitHub Pages bằng Chrome hoặc Edge.

Bạn cũng có thể nhấp đúp `index.html` để xem giao diện cơ bản, nhưng một số tính năng PWA cần website chạy trên HTTPS hoặc máy chủ localhost.

---

# PHẦN IV. CÀI COCONUT QUIZ ARENA LÊN MÀN HÌNH CHÍNH

### Android

1. Mở Chrome.
2. Truy cập website GitHub Pages chính thức.
3. Chờ trang tải xong.
4. Nhấn dấu ba chấm ở góc trên bên phải.
5. Chọn **Cài đặt ứng dụng (Install app)** hoặc **Thêm vào màn hình chính (Add to Home screen)** nếu có.
6. Xác nhận thao tác.
7. Quay về màn hình chính và mở biểu tượng Coconut Quiz Arena.

### iPhone / iPad

1. Mở website bằng Safari.
2. Nhấn nút **Chia sẻ (Share)**.
3. Chọn **Add to Home Screen** nếu tùy chọn này khả dụng.
4. Xác nhận thêm ứng dụng vào màn hình chính.

### Máy tính

Có thể sử dụng trực tiếp trên Chrome hoặc Edge. Nếu trình duyệt hỗ trợ cài PWA, hãy mở menu trình duyệt và chọn tùy chọn cài đặt ứng dụng.

**Lưu ý:** Coconut Quiz Arena hiện được phân phối dưới dạng PWA (Progressive Web App), không phải APK Android hay chương trình EXE Windows.

---

# PHẦN V. HƯỚNG DẪN SỬ DỤNG

## 1. Trang chủ (Home)

Trang chủ giúp người dùng theo dõi tổng quan:

- Số lượng câu hỏi đã làm.
- Số câu đúng và sai.
- Tiến độ học tập.
- Hoạt động gần đây.
- Các thông tin thống kê chính.

## 2. Môn học (Subjects)

1. Mở mục **Subjects**.
2. Chọn môn học muốn luyện tập.
3. Chọn bộ đề phù hợp.
4. Chọn chế độ chơi.
5. Điều chỉnh các tùy chọn nếu cần.
6. Bắt đầu làm bài.

## 3. Các chế độ chơi

**Practice – Luyện tập**

Luyện tập không giới hạn thời gian. Người chơi nhận phản hồi sau khi trả lời theo cơ chế của ứng dụng.

**Speedrun – Tốc độ**

Hoàn thành bộ câu hỏi nhanh nhất có thể. Thành tích được ghi nhận theo độ chính xác, điểm số và thời gian.

**Countdown – Đếm ngược**

Trả lời câu hỏi trong thời gian giới hạn.

**Survival – Sinh tồn**

Người chơi có số mạng giới hạn. Trả lời sai sẽ mất mạng; hết mạng thì lượt chơi kết thúc.

**Exam – Thi thử**

Làm bài với đồng hồ giới hạn thời gian. Đáp án được xử lý theo cơ chế thi thử và chỉ xem sau khi nộp bài.

**Review – Ôn câu sai**

Luyện tập những câu hỏi đã từng trả lời sai trong phạm vi bộ đề được chọn.

**Smart Review – Ôn tập thông minh**

Ưu tiên câu sai, câu còn yếu và câu lâu chưa ôn; kết hợp câu mới và câu đã vững.

## 4. Trong lúc làm bài

- Chọn đáp án A, B, C hoặc D.
- Theo dõi đồng hồ và tiến độ.
- Nhấn nút tạm dừng khi cần.
- Tiếp tục bài làm khi sẵn sàng.
- Chuyển câu theo cơ chế của chế độ đang chơi.
- Xem kết quả sau khi hoàn thành.

### Phím tắt trên máy tính

| Phím | Chức năng |
|---|---|
| A / B / C / D | Chọn đáp án |
| Space | Tạm dừng / tiếp tục |
| Enter | Chuyển câu khi được phép |
| M | Bật / tắt âm thanh |
| R | Chơi lại sau khi hoàn thành |

Với câu hỏi Đúng/Sai, A tương ứng Đúng và B tương ứng Sai.

---

# PHẦN VI. TẠO ĐỀ BẰNG AI STUDY STUDIO

AI Study Studio cho phép tạo bộ câu hỏi từ tài liệu bằng các công cụ AI bên ngoài mà không cần nhập API Key vào Coconut Quiz Arena.

### Bước 1. Cấu hình bộ đề

1. Mở **AI Study Studio**.
2. Chọn môn học.
3. Chọn lớp.
4. Nhập tên bộ đề nếu cần.

### Bước 2. Sao chép prompt

Nhấn **Sao chép prompt (Copy Prompt)**.

Ứng dụng sẽ tạo hướng dẫn phù hợp với môn học và thông tin bạn đã chọn.

### Bước 3. Sử dụng AI bên ngoài

Có thể sử dụng Claude, Gemini hoặc công cụ AI phù hợp.

1. Mở công cụ AI.
2. Gửi ảnh đề, tài liệu hoặc nội dung cần tạo câu hỏi.
3. Dán prompt vừa sao chép.
4. Yêu cầu AI tạo tệp JSON hoặc CSV theo đúng định dạng.

### Bước 4. Nhập kết quả vào Coconut

Có hai cách:

- Chọn tệp JSON/CSV đã tải về.
- Hoặc dán nội dung AI trả về vào mục dán dữ liệu trong AI Study Studio.

Sau đó chọn **Phân tích bằng PRO** hoặc chức năng phân tích tương ứng.

### Bước 5. Kiểm tra câu hỏi

Trước khi nhập, hãy kiểm tra:

- Nội dung câu hỏi.
- Các phương án A/B/C/D.
- Đáp án đúng.
- Phần giải thích.
- Độ khó và chủ đề.
- Những câu được đánh dấu cần kiểm tra.

Không nên nhập các câu chưa xác định được đáp án chính xác.

### Bước 6. Nhập bộ đề

1. Chọn những câu hỏi hợp lệ.
2. Bỏ chọn câu không muốn nhập.
3. Nhấn **Nhập câu đã chọn (Import Selected)**.
4. Kiểm tra bộ đề trong Question Bank.

---

# PHẦN VII. SỬ DỤNG SONG NGỮ VIỆT – ANH

### Chuyển đổi ngôn ngữ

1. Mở **Settings (Cài đặt)**.
2. Tìm mục **Language / Ngôn ngữ**.
3. Chọn:
   - 🇻🇳 Vietnamese – Tiếng Việt.
   - 🇬🇧 English – Tiếng Anh.
4. Giao diện sẽ chuyển đổi theo lựa chọn.
5. Ứng dụng lưu ngôn ngữ đã chọn để sử dụng trong những lần mở tiếp theo.

### Sử dụng đề thi tiếng Anh

Để một bộ đề có thể sử dụng đầy đủ bằng cả hai ngôn ngữ, dữ liệu câu hỏi cần có:

- Câu hỏi tiếng Việt.
- Phương án tiếng Việt.
- Giải thích tiếng Việt.
- Câu hỏi tiếng Anh.
- Phương án tiếng Anh.
- Giải thích tiếng Anh.

Các phiên bản phải giữ nguyên mã câu hỏi và đáp án tương ứng.

**Lưu ý quan trọng:**

- Chuyển giao diện sang English không tự động dịch toàn bộ ngân hàng đề cũ.
- Câu hỏi chỉ có tiếng Việt sẽ không tự nhiên trở thành câu hỏi tiếng Anh.
- Những câu thiếu bản dịch đầy đủ có thể không được chọn khi tạo đề English.
- Hãy sử dụng JSON song ngữ để lưu cả hai phiên bản câu hỏi.
- CSV thông thường chỉ chứa một phiên bản nội dung tại một thời điểm.

---

# PHẦN VIII. QUẢN LÝ NGÂN HÀNG CÂU HỎI

Trong **Question Bank**, người dùng có thể quản lý các bộ đề đã lưu.

Các thao tác chính:

- Tìm kiếm bộ đề.
- Mở bộ đề.
- Xem thông tin câu hỏi.
- Đổi tên bộ đề.
- Xóa bộ đề không còn sử dụng.
- Kiểm tra các bộ đề đã nhập từ AI Study Studio.

Hãy kiểm tra kỹ trước khi xóa vì thao tác xóa bộ đề có thể ảnh hưởng đến khả năng sử dụng bộ câu hỏi đó trong những lượt chơi tiếp theo.

---

# PHẦN IX. SAO LƯU VÀ KHÔI PHỤC DỮ LIỆU

Coconut Quiz Arena lưu dữ liệu cá nhân trên trình duyệt bằng localStorage.

Dữ liệu có thể bao gồm:

- Bộ đề được nhập.
- Điểm số.
- Lịch sử làm bài.
- Câu hỏi cần ôn.
- Tiến độ học tập.
- Cài đặt cá nhân.

### Cách sao lưu

1. Mở Settings.
2. Tìm phần Data.
3. Chọn **Export / Backup**.
4. Lưu tệp JSON về thiết bị.
5. Giữ lại bản sao lưu ở nơi an toàn.

### Cách khôi phục

1. Mở Settings.
2. Chọn **Import / Restore**.
3. Chọn tệp JSON đã sao lưu.
4. Xác nhận nhập dữ liệu.

**Cảnh báo:**

- Không xóa dữ liệu website khi chưa sao lưu.
- Dữ liệu không tự đồng bộ giữa nhiều thiết bị.
- Khi chuyển sang thiết bị mới, hãy dùng tệp backup để khôi phục.
- Nên sao lưu định kỳ, đặc biệt trước những lần cập nhật lớn.

---

# PHẦN X. CÀI ĐẶT CÁ NHÂN

Trong Settings, người dùng có thể tùy chỉnh:

- Ngôn ngữ.
- Tên người chơi.
- Cỡ chữ.
- Kích thước nút đáp án.
- Hiệu ứng.
- Màu nhấn.
- Giao diện sáng hoặc tối.
- Âm thanh.
- Hiệu ứng chuyển động.
- Tự chuyển câu trong Practice / Review.
- Hiển thị hoặc ẩn giải thích.

Hãy lựa chọn các thiết lập phù hợp với thiết bị và sở thích của bạn.

---

# PHẦN XI. CẬP NHẬT PHIÊN BẢN MỚI

Khi có phiên bản mới:

### Đối với người dùng PWA

1. Truy cập lại link GitHub Pages chính thức.
2. Tải lại trang.
3. Đóng và mở lại ứng dụng nếu cần.
4. Nếu vẫn thấy phiên bản cũ, thử làm mới trang và kiểm tra bộ nhớ đệm.

Thông thường, người đã cài PWA qua cùng một đường link không cần cài lại ứng dụng mỗi lần phát hành.

### Đối với người muốn tải gói ZIP

1. Mở GitHub Releases.
2. Chọn phiên bản có nhãn **Latest**.
3. Cuộn xuống Assets.
4. Tải file ZIP mới nhất.
5. Giải nén để lấy mã nguồn và tài nguyên của phiên bản đó.

**Lưu ý:** ZIP là gói mã nguồn và tài nguyên, không phải APK. Nếu chỉ muốn sử dụng ứng dụng, hãy truy cập GitHub Pages.

---

# PHẦN XII. KHẮC PHỤC SỰ CỐ

**1. Không tìm thấy file ZIP**

Kiểm tra thư mục Download hoặc Downloads. Nếu chưa có, truy cập lại GitHub Releases và tải file trong Assets.

**2. Không giải nén được**

- Kiểm tra file ZIP đã tải đầy đủ chưa.
- Thử dùng ZArchiver trên Android.
- Thử dùng Extract All trên Windows.
- Tải lại ZIP nếu file bị lỗi.

**3. Không mở được index.html**

- Kiểm tra đã giải nén chưa.
- Kiểm tra tên file có bị đổi thành `index.html.txt` không.
- Thử Chrome hoặc Edge.
- Ưu tiên truy cập website HTTPS chính thức.

**4. Không cài được ứng dụng**

- Mở website bằng trình duyệt hỗ trợ PWA.
- Đảm bảo website dùng HTTPS.
- Chờ trang tải hoàn tất.
- Kiểm tra lại menu trình duyệt.

**5. Không thấy đề đã nhập**

- Kiểm tra đúng trình duyệt và thiết bị.
- Kiểm tra đúng website đã dùng để nhập đề.
- Khôi phục dữ liệu từ backup nếu đã xóa dữ liệu hoặc chuyển thiết bị.

**6. Không thấy câu hỏi tiếng Anh**

- Kiểm tra câu hỏi đã có bản dịch tiếng Anh chưa.
- Kiểm tra cả câu hỏi, đáp án và giải thích.
- Nhập dữ liệu song ngữ đầy đủ.

**7. Website vẫn hiển thị bản cũ**

- Tải lại trang.
- Đóng rồi mở lại ứng dụng.
- Kiểm tra trạng thái triển khai GitHub Pages.
- Thử làm mới bộ nhớ đệm theo hướng dẫn của nhà phát hành.

---

# CẢM ƠN BẠN ĐÃ SỬ DỤNG COCONUT QUIZ ARENA!

**Learn Smarter. Play Better. Improve Every Day.**

---

---

# 🥥 COCONUT QUIZ ARENA
## DOWNLOAD, EXTRACT, INSTALLATION AND USER GUIDE
### English User Guide

Welcome to Coconut Quiz Arena – a learning and testing platform featuring multiple subjects, game modes, question-bank management, and AI-assisted test creation.

---

# PART I. DOWNLOAD THE APPLICATION

### Step 1. Visit GitHub Releases

1. Open the official Coconut Quiz Arena GitHub Releases page.
2. Find the newest version marked **Latest**.
3. Open that release.
4. Scroll down to the **Assets** section.
5. Find `Coconut-Quiz-Arena.zip`.
6. Click the file to download it.
7. Wait until the download is complete.

### Step 2. Locate the downloaded file

The ZIP file is usually saved in:

- Android: `Download`.
- Windows: `Downloads`.

Expected filename:

`Coconut-Quiz-Arena.zip`

**Note:** This ZIP contains the application's source code and resources. It is not an Android APK file.

---

# PART II. EXTRACTING THE ZIP FILE ON ANDROID

Use ZArchiver or another file manager that supports ZIP extraction.

### Step 1. Find the ZIP file

1. Open ZArchiver.
2. Navigate to the `Download` folder.
3. Find `Coconut-Quiz-Arena.zip`.

### Step 2. Extract the archive

1. Tap the ZIP file.
2. Select **Extract here** or **Extract to a separate folder**.
3. Wait for extraction to finish.
4. Open the extracted folder.

### Step 3. Check the files

The expected application structure is:

```text
Coconut-Quiz-Arena/
├── index.html
├── manifest.webmanifest
├── service-worker.js
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    └── icon-512-maskable.png
```

Some filenames or folder locations may vary between releases.

**Important:**
- Do not delete files from the folder.
- Do not rename files unnecessarily.
- Do not move the icons or Service Worker separately.
- Preserve the folder structure when deploying the application.

### Step 4. Open the application

Recommended method:

1. Open Google Chrome.
2. Visit the official Coconut Quiz Arena GitHub Pages link.
3. Wait for the website to finish loading.
4. Start using the application.

You may be able to open `index.html` directly from your file manager, but this does not guarantee that PWA installation, Service Worker, and offline features will work correctly.

---

# PART III. EXTRACTING THE ZIP FILE ON WINDOWS

### Step 1. Locate the ZIP file

1. Open File Explorer.
2. Select the `Downloads` folder.
3. Find `Coconut-Quiz-Arena.zip`.

### Step 2. Extract the archive

1. Right-click the ZIP file.
2. Select **Extract All...**.
3. Choose the destination folder.
4. Click **Extract**.
5. Wait for Windows to finish extracting the files.

### Step 3. Check the extracted folder

Open the extracted folder and verify that it contains the main components:

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- The `icons` folder

Do not delete or move these files unless you understand their purpose.

### Step 4. Open the application

The recommended method is to visit the official GitHub Pages website using Chrome or Edge.

You may also double-click `index.html` to preview the basic interface. However, some PWA features require the application to run over HTTPS or a localhost server.

---

# PART IV. INSTALL COCONUT QUIZ ARENA ON YOUR HOME SCREEN

### Android

1. Open Chrome.
2. Visit the official GitHub Pages website.
3. Wait for the page to finish loading.
4. Tap the three-dot menu in the top-right corner.
5. Select **Install app** or **Add to Home screen**, if available.
6. Confirm the installation.
7. Return to your home screen and open the Coconut Quiz Arena icon.

### iPhone / iPad

1. Open the website in Safari.
2. Tap the **Share** button.
3. Select **Add to Home Screen**, if available.
4. Confirm the action.

### Desktop

You can use Coconut Quiz Arena directly in Chrome or Edge. If your browser supports PWA installation, open the browser menu and select the installation option.

**Note:** Coconut Quiz Arena is distributed as a PWA (Progressive Web App). It is not a standalone Android APK or Windows EXE program.

---

# PART V. HOW TO USE THE APPLICATION

## 1. Home

The Home page provides an overview of:

- The number of questions answered.
- Correct and incorrect answers.
- Learning progress.
- Recent activity.
- Key statistics.

## 2. Subjects

1. Open **Subjects**.
2. Select the subject you want to study.
3. Choose a question set.
4. Select a game mode.
5. Adjust the available options if needed.
6. Start answering questions.

## 3. Game modes

**Practice**

Practice without a time limit. The application provides feedback after answering according to the selected mode.

**Speedrun**

Complete a question set as quickly as possible. Performance is recorded based on accuracy, score, and time.

**Countdown**

Answer questions within a limited time.

**Survival**

You have a limited number of lives. Incorrect answers cost a life. The session ends when you run out of lives.

**Exam**

Take a timed test. Answers are processed according to the exam mode, and results are revealed after submission.

**Review**

Practice questions you previously answered incorrectly within the selected question sets.

**Smart Review**

Prioritizes incorrect, weak, and long-unreviewed questions while mixing in new and mastered questions.

## 4. During a quiz

- Select answer A, B, C, or D.
- Monitor the timer and progress.
- Use the pause button when needed.
- Resume when ready.
- Move to the next question according to the selected mode.
- Review your results after completing the session.

### Desktop keyboard shortcuts

| Key | Function |
|---|---|
| A / B / C / D | Select an answer |
| Space | Pause / Resume |
| Enter | Move to the next question when allowed |
| M | Toggle sound |
| R | Replay after completing a session |

For True/False questions, A corresponds to True and B corresponds to False.

---

# PART VI. CREATE TESTS WITH AI STUDY STUDIO

AI Study Studio allows you to create question sets from learning materials using external AI tools. You do not need to enter an API Key into Coconut Quiz Arena.

### Step 1. Configure your test

1. Open **AI Study Studio**.
2. Select a subject.
3. Select a grade.
4. Enter a test title if needed.

### Step 2. Copy the prompt

Click **Copy Prompt**.

The application generates instructions based on your selected subject and test information.

### Step 3. Use an external AI tool

You can use Claude, Gemini, or another suitable AI assistant.

1. Open the AI tool.
2. Upload a worksheet image, document, or learning material.
3. Paste the copied prompt.
4. Ask the AI to create a JSON or CSV file using the required format.

### Step 4. Import the result into Coconut

There are two available methods:

- Select the JSON/CSV file you downloaded.
- Paste the AI-generated content into the data-pasting area in AI Study Studio.

Then select **Analyze with PRO** or the corresponding analysis function.

### Step 5. Review the questions

Before importing, check:

- Question content.
- Answer choices A/B/C/D.
- Correct answers.
- Explanations.
- Difficulty and topic.
- Questions marked for review.

Do not import questions whose correct answers have not been verified.

### Step 6. Import the question set

1. Select the valid questions.
2. Deselect any questions you do not want.
3. Click **Import Selected**.
4. Check the new question set in Question Bank.

---

# PART VII. VIETNAMESE–ENGLISH BILINGUAL SUPPORT

### Change the application language

1. Open **Settings**.
2. Find **Language**.
3. Select:
   - 🇻🇳 Vietnamese.
   - 🇬🇧 English.
4. The interface changes according to your selection.
5. Your language preference is saved for future sessions.

### Use English question sets

For a question set to support both languages, its data should include:

- Vietnamese question.
- Vietnamese answer choices.
- Vietnamese explanation.
- English question.
- English answer choices.
- English explanation.

Both language versions must preserve the same question ID and corresponding correct answer.

**Important notes:**

- Switching the interface to English does not automatically translate your existing question bank.
- Questions available only in Vietnamese do not automatically become English questions.
- Questions without complete English translations may be excluded when generating an English test.
- Use bilingual JSON to store both question versions.
- A standard CSV file usually stores only one language version at a time.

---

# PART VIII. QUESTION BANK MANAGEMENT

In **Question Bank**, you can manage your saved question sets.

Main actions include:

- Searching for question sets.
- Opening a question set.
- Viewing question information.
- Renaming a question set.
- Deleting question sets you no longer need.
- Checking question sets imported from AI Study Studio.

Check carefully before deleting a set because removing it may affect your ability to use those questions in future sessions.

---

# PART IX. BACK UP AND RESTORE YOUR DATA

Coconut Quiz Arena stores personal data in the browser using localStorage.

Stored data may include:

- Imported question sets.
- Scores.
- Quiz history.
- Questions to review.
- Learning progress.
- Personal settings.

### Back up your data

1. Open Settings.
2. Find the Data section.
3. Select **Export / Backup**.
4. Save the JSON file to your device.
5. Keep the backup in a safe location.

### Restore your data

1. Open Settings.
2. Select **Import / Restore**.
3. Choose your backup JSON file.
4. Confirm the import.

**Warnings:**

- Do not clear website data before creating a backup.
- Data is not automatically synchronized between devices.
- When moving to a new device, use your backup file to restore your data.
- Create backups regularly, especially before major updates.

---

# PART X. PERSONAL SETTINGS

In Settings, you can customize:

- Language.
- Player name.
- Font size.
- Answer button size.
- Visual effects.
- Accent color.
- Light or dark theme.
- Sound.
- Motion effects.
- Automatic question advancement in Practice / Review.
- Explanation visibility.

Choose the settings that best suit your device and preferences.

---

# PART XI. UPDATING TO A NEW VERSION

When a new version is released:

### For PWA users

1. Visit the official GitHub Pages link again.
2. Reload the page.
3. Close and reopen the application if necessary.
4. If the old version still appears, refresh the page and check the browser cache.

Users who installed the PWA through the same website link usually do not need to reinstall the application for routine updates.

### For users who want to download the ZIP package

1. Open GitHub Releases.
2. Select the version marked **Latest**.
3. Scroll down to Assets.
4. Download the newest ZIP file.
5. Extract it to obtain the source code and resources for that version.

**Note:** The ZIP is a source-code and resource package, not an APK. If you only want to use the application, visit GitHub Pages.

---

# PART XII. TROUBLESHOOTING

**1. Cannot find the ZIP file**

Check your Download or Downloads folder. If it is missing, return to GitHub Releases and download the file from Assets.

**2. Cannot extract the ZIP file**

- Check whether the ZIP download completed.
- Try ZArchiver on Android.
- Try Extract All on Windows.
- Download the ZIP again if the archive is corrupted.

**3. Cannot open index.html**

- Make sure the ZIP has been extracted.
- Check whether the filename was changed to `index.html.txt`.
- Try Chrome or Edge.
- Prefer the official HTTPS website.

**4. Cannot install the application**

- Open the website in a browser that supports PWAs.
- Make sure the website uses HTTPS.
- Wait for the page to finish loading.
- Check the browser menu again.

**5. Imported question sets are missing**

- Check that you are using the same device and browser.
- Make sure you are visiting the same website where you imported the questions.
- Restore from a backup if the data was deleted or you changed devices.

**6. English questions are missing**

- Check whether the questions have English translations.
- Verify that the question, answer choices, and explanation are translated.
- Import complete bilingual question data.

**7. The website still shows the old version**

- Reload the page.
- Close and reopen the application.
- Check the GitHub Pages deployment status.
- Refresh the browser cache according to the publisher's instructions.

---

# THANK YOU FOR USING COCONUT QUIZ ARENA!

**Learn Smarter. Play Better. Improve Every Day.**
