<template>
  <div class="mt-[32px]">
    <el-pagination id="pagination" layout="prev, pager, next" :total="77">
    </el-pagination>
  </div>
</template>

<script>
export default {}
</script>

<style>
#pagination .el-pagination .el-pager {
  height: 55px !important;
}

#pagination .number {
  background: none !important;
  border: none !important;
  padding: 14px 24px 14px 24px !important;
  font-size: 18px !important;
  color: #020105 !important;
  font-family: 'Firs Neue Regular' !important;
  height: 55px !important;
}

#pagination .number:hover {
  color: #ff6418 !important;
}

#pagination .btn-prev {
  display: none !important;
}

#pagination .el-icon .more .btn-quicknext .el-icon-more {
  background: none !important;
}

#pagination .el-icon-more {
  background: none !important;
  margin-top: 8px !important;
}

#pagination .el-icon-more:before {
  content: '...' !important;
  font-size: 18px !important;
  color: #020105 !important;
  font-family: 'Firs Neue Regular' !important;
}

#pagination .btn-next {
  margin-top: 13px !important;
}

#pagination .btn-next {
  background: none !important;
}

#pagination .el-pagination #pagination .btn-next #pagination .el-icon,
#pagination .el-pagination #pagination .btn-prev #pagination .el-icon {
  font-weight: 400 !important;
  font-size: 18px !important;
}

#pagination .el-icon-d-arrow-right {
  background: none !important;
  margin-top: 13px !important;
}

#pagination .el-icon-d-arrow-left {
  background: none !important;
  margin-top: 13px !important;
}

#pagination .el-icon-d-arrow-right:before {
  content: url('@/assets/img/icons/next-v.svg') !important;
}

#pagination .el-icon-d-arrow-left:before {
  content: url('@/assets/img/icons/next-l.svg') !important;
}

#pagination .el-icon-arrow-right:before {
  content: url('@/assets/img/icons/next.svg') !important;
  background: none !important;
  border: none !important;
  color: #020105 !important;
  font-size: 18px !important;
  font-family: 'Firs Neue Regular' !important;
}

#pagination .number.active {
  padding: 14px 24px 14px 24px !important;
  background: #ff6418 !important;
  border-radius: 50% !important;
  color: white !important;
}
</style>
