// GET REQUEST
function getTodos() {
  console.log('GET Request');
  axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
    console.log(res);
    showOutput(res)
  })
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
  axios.post('https://jsonplaceholder.typicode.com/todos',{title:'Shivanand',completed:false}).then((res)=>{
    showOutput(res)
  })
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
  axios.patch('https://jsonplaceholder.typicode.com/todos/201',{title:'Shivanand0018',completed:false}).then((res)=>{
    showOutput(res)
  })
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
  axios.delete('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
    showOutput(res)
  })
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
  const opt={
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:{title:'Shivanand'},
  
  transformResponse: axios.defaults.transformResponse.concat(data=>{
      data.title=data.title.toUpperCase();
      return data;
  
  })
}

}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
  
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES
axios.interceptors.request.use(config=>{
  console.log(`${config.method.toUpperCase()} request send to ${config.url}`);
  return config
})

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
