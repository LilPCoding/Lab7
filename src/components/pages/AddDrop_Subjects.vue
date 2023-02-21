<template>
<!-- เพิ่มรายวิชา -->
  <div class="body">
    <div class="card shadow">
      <div class="body">
        <h1>เพิ่มรายวิชา</h1>
        <input
          class="form-control"
          type="number"
          placeholder="กรอกรหัสวิชาเพื่อค้นหา..."
          aria-label="กรอกรหัสวิชาเพื่อค้นหา"
          @keyup.enter="null"
        />
        <div class="d-grid gap-2 col-3 mx-auto mt-3">
          <button type="button" class="btn btn-success shadow" @click="null">Add</button>
        </div>
      </div>
    </div>
  </div>
<!-- จบการเพิ่มรายวิชา -->

<!-- ถอนรายวิชา -->
  <div class="body">
    <div class="card shadow">
      <div class="body">
        <h1>ถอนรายวิชา</h1>
        <span
          >รายวิชาที่ลงทะเบียน {{ allTask }} {{ allTask > 1 ? "วิชา" : "วิชา" }}
        </span>
        <br />

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">รหัสวิชา</th>
              <th scope="col">ชื่อรายวิชา</th>
              <th scope="col">หน่วยกิต</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in latest" :key="task.id" @click="finishTask(task)">
              <th scope="row"></th>
              <td>{{ task.code }}</td>
              <td>{{ task.subjectName }}</td>
              <td>{{ task.credit }}</td>
              <td width="10%">
                <button class="btn btn-success" @click="removeTask(task.id)">
                  Drop
                </button>
              </td>
            </tr>
          </tbody>
        </table>    
      </div>
    </div>
  </div>
<!-- จบการถอนรายวิชา -->
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          code: "10301221",
          subjectName: "การวิเคราะห์และออกแบบเชิงวัตถุ",
          credit: "3 (2-3-5)",
          finished: false,
        },
        {
          id: 2,
          code: "10301224",
          subjectName: "ฐานข้อมูลแบบไม่มีโครงสร้าง",
          credit: "3 (2-3-5)",
          finished: false,
        },
        {
          id: 3,
          code: "10301232",
          subjectName: "การพัฒนาระบบฝั่งเซิร์ฟเวอร์",
          credit: "3 (2-3-5)",
          finished: false,
        },
        {
          id: 4,
          code: "10301233",
          subjectName: "การพัฒนาซอฟต์แวร์บนอุปกรณ์เคลื่อนที่",
          credit: "3 (2-3-5)",
          finished: false,
        },
      ],
    };
  },
  methods: {
    finishTask(task) {
      task.finished = !task.finished;
    },
    removeTask(taskID) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskID;
      });
    },
  },
  computed: {
    allTask() {
      return this.tasks.length;
    },
    latest() {
      return [...this.tasks].reverse();
    },
  },
};
</script>

<style>

</style>
