<template>
  <div>
    <div class="content-hea">
      <div class="content-title">Nhân Viên</div>
      <div class="content-button-add">
        <button class="btn-default btn-add" @click="btnAddDialog">
          Thêm mới nhân viên
        </button>
      </div>
    </div>
    <div class="content-table">
      <div class="search-employee">
        <div class="employee-search">
          <input
              type="text"
              class="input-search"
              style="width: 220px"
              placeholder="Tìm theo mã, tên nhân viên"
              v-model="FindEmployeeCode"
          />
        </div>
        <div
            class="icon-nav content-icon icon-refresh"
            @click="showLoaderClick()"
        ></div>
      </div>
      <div class="employee-table">
        <div class="grid">
          <table id="tblEmployee" class="table" width="100%" border="0">
            <thead>
            <tr>
              <th>
                <input type="checkbox" name="all" value="all"/>
                <span class="checkmark"></span>
              </th>
              <th>Mã nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Số CMND</th>
              <th>Chức danh</th>
              <th>Tên đơn vị</th>
              <th>Số tài khoản</th>
              <th>Tên ngân hàng</th>
              <th>Chi nhánh tài khoản ngân hàng</th>
              <th>Chức năng</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="employee in employees" :key="employee.employeeId">
              <td><input type="checkbox" name="all" value="all"/></td>
              <td>{{ employee.employeeCode }}</td>
              <td>{{ employee.fullName }}</td>
              <td>{{ formatGender(employee.gender) }}</td>
              <td>{{ formatDateDDMMYYYY(employee.dateOfBirth) }}</td>
              <td>{{ employee.identityCardNumber }}</td>
              <td>{{ employee.positionName }}</td>
              <td>{{ formatPositionName(employee.employeeGroupId) }}</td>
              <td>{{ employee.bankCardNumber }}</td>
              <td>{{ employee.bankName }}</td>
              <td>{{ employee.bankBranch }}</td>
              <td>
                <div class="Edit">
                  <div class="btn-edit">
                    <button
                        class="button-text button-table-text"
                        @click="btnEditClick(employee.employeeId)"
                    >
                      Sửa
                    </button>
                    <div
                        class="icon-nav arrow-icon icon-arrow-up"
                        @click="showEditClick(employee.employeeId)"
                    ></div>
                  </div>
                  <div
                      class="editDialog"
                      :class="{
                          'dialog-hide': !checkEdit(employee.employeeId),
                        }"
                  >
                    <div class="dialogEdit">
                      <button class="btn-edittable btn-mul">
                        Nhân bản
                      </button>
                      <button
                          class="btn-edittable btn-delete"
                          @click="btnDeleteCode()"
                      >
                        Xóa
                      </button>
                      <button class="btn-edittable btn-use">
                        Ngừng sử dụng
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="paging">
        <div class="page">
          <div class="paging-text">Tổng số: {{ totalRecord }} bản ghi</div>
          <div class="paging-table">
            <select
                name="div-page"
                id="div-page"
                @change="onChangePageSize($event)"
            >
              <option value="10">10 bản ghi trên 1 trang</option>
              <option value="20">20 bản ghi trên 1 trang</option>
              <option value="30">30 bản ghi trên 1 trang</option>
              <option value="50">50 bản ghi trên 1 trang</option>
              <option value="100">100 bản ghi trên 1 trang</option>
            </select>
            <button class="btn-text" @click="onClickBackSize()">Trước</button>
            <button class="btn-text" @click="onClickUpSize()">Sau</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminBooking"
}
</script>

<style scoped>
@import "../../../style/layout/content.css";
</style>