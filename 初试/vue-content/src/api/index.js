export default {
  add: 'http://localhost:3000/addUser', // 新增一条数据  必传name age
  del: 'http://localhost:3000/deleteUser', // 根据id删除一条数据 必传 id
  update: 'http://localhost:3000/updateUser', // 根据id修改对应数据  必传id name age
  queryAll: 'http://localhost:3000/queryAll', // 查
  queryName: 'http://localhost:3000/queryName' // 根据name查询列表 必传 name
}
