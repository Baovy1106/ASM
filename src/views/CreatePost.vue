
Để tạo thêm trang để đăng bài viết, bạn có thể thêm một component mới để tạo bài viết và định tuyến nó trong ứng dụng Vue của mình.

Bước 1: Tạo Component Đăng Bài Viết
Trong thư mục components, hãy tạo một file mới, ví dụ PostArticle.vue:

html
Sao chép mã
<template>
    <div class="container mt-4">
        <h2>Đăng Bài Viết Mới</h2>
        <form @submit.prevent="submitArticle">
            <div class="mb-3">
                <label for="title" class="form-label">Tiêu đề</label>
                <input type="text" v-model="title" class="form-control" id="title" placeholder="Nhập tiêu đề bài viết" required>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Nội dung</label>
                <textarea v-model="content" class="form-control" id="content" rows="6" placeholder="Nhập nội dung bài viết" required></textarea>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Ảnh bài viết</label>
                <input type="file" @change="handleImageUpload" class="form-control" id="image">
            </div>
            <button type="submit" class="btn btn-primary">Đăng bài</button>
        </form>
    </div>
</template>
  
  <script>
  export default {
    data() {
        return {
            title: '',
            content: '',
            image: null
        }
    },
    methods: {
        handleImageUpload(event) {
            this.image = event.target.files[0];
        },
        submitArticle() {
            // Xử lý gửi bài viết
            const formData = new FormData();
            formData.append('title', this.title);
            formData.append('content', this.content);
            if (this.image) {
                formData.append('image', this.image);
            }

            // Thay vì console.log, bạn có thể thực hiện yêu cầu API để lưu bài viết
            console.log("Bài viết đã được gửi:", {
                title: this.title,
                content: this.content,
                image: this.image ? this.image.name : 'No image'
            });
            
            // Reset lại form sau khi đăng
            this.title = '';
            this.content = '';
            this.image = null;
        }
    }

  }
  </script>