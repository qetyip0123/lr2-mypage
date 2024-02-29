<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
DataTable.use(DataTablesCore);

const columns = [
  { data: 'level', "width": "5%" },
  { data: 'title', "width": "35%", render: (data, type, row, meta) => `<a target="_blank" href="http://www.dream-pro.info/~lavalse/LR2IR/search.cgi?mode=ranking&${row.md5 ? ('bmsmd5=' + row.md5) : ('bmsid=' + row.lr2_bmsid)}">${data}</a>` },
  { data: 'artist', "width": "20%", render: (data, type, row, meta) => `<a target="_blank" href="${row.url}">${data}</a>` },
  { data: 'chart', "width": "5%", render: (data, type, row, meta) => row.url_diff ? `<a target="_blank" href="${row.url_diff}">DL</a>` : `` },
  { data: 'comment', "width": "35%" }
];

const url = (import.meta.env.PROD ? '/lr2-mypage' : '') + '/double_time.json'
</script>

<template>
  <div class="table">
    <DataTable :ajax="{ url: url, 'dataSrc': '' }" :columns="columns" class="display">
      <thead>
        <tr>
          <th>Level</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Chart</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Level</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Chart</th>
          <th>Notes</th>
        </tr>
      </tfoot>
    </DataTable>
  </div>
</template>
<style>
@import 'datatables.net-dt';

.dataTables_wrapper .dataTables_length select {
  background-color: white;
}

.dataTables_wrapper .dataTables_filter input {
  background-color: white;
}
</style>
