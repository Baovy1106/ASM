<template>
    <div class="container mt-4">
        <h2>Thông Tin Cá Nhân</h2>
        <form @submit.prevent="updateProfile">
            <div class="mb-3">
                <label for="name" class="form-label">Tên</label>
                <input type="text" v-model="user.name" class="form-control" id="name" placeholder="Nhập tên của bạn" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="user.email" class="form-control" id="email" placeholder="Nhập email của bạn" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input type="text" v-model="user.phone" class="form-control" id="phone" placeholder="Nhập số điện thoại của bạn">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Địa chỉ</label>
                <input type="text" v-model="user.address" class="form-control" id="address" placeholder="Nhập địa chỉ của bạn">
            </div>
            <button type="submit" class="btn btn-primary">Cập nhật thông tin</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                phone: '',
                address: ''
            }
        };
    },
    created() {
        this.loadUserData();
    },
    methods: {
        loadUserData() {
            // Giả lập dữ liệu người dùng từ server
            this.user = {
                name: 'Nguyễn Văn A',
                email: 'nguyenvana@example.com',
                phone: '0123456789',
                address: '123 Đường ABC, Thành phố XYZ'
            };
        },
        updateProfile() {
            // Xử lý cập nhật thông tin cá nhân
            console.log("Thông tin người dùng đã được cập nhật:", this.user);
            alert("Cập nhật thông tin thành công!");
        }
    }
};
</script>

<style scoped>
    .container {
        max-width: 600px;
    }
</style>
