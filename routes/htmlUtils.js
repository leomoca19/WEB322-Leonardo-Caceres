//Bootstrap middleware
const template = (title, html) => `
  <html>
    <head>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"/>
    </head>
    <body class="container">
      <nav>
          <a href="/">Home</a>&nbsp;|&nbsp;<a href="/users">Users</a>&nbsp;|&nbsp; <a href="/products">Products</a>
      </nav>    
      <h1>${title}</h1>
      <div>${html}</div> 
    </body>
  </html>
`

const htmlContent = (errorMsg = '') => `
  <form method="POST">
    <div>${errorMsg}</div>
    <br>

    Name:&emsp;&emsp; 
    <input type="text" name="username"/>
    <br>

    Password:&nbsp;&nbsp; 
    <input type="password" name="password"/>
    <br>

    <button type="submit">GO!</button>
  </form>
`

const userDetails = (user) => `
<table class="user-table">
<tbody>
      <tr>
          <th>ID:</th>
          <td>${user.id}</td>
      </tr>
      <tr>
          <th>First Name:</th>
          <td>${user.firstName}</td>
      </tr>
      <tr>
          <th>Last Name:</th>
          <td>${user.lastName}</td>
      </tr>
      <tr>
          <th>Email:</th>
          <td>${user.email}</td>
      </tr>
      <tr>
          <th>Birth Date:</th>
          <td>${user.dob}</td>
      </tr>
      <tr>
          <th>Company:</th>
          <td>${user.company}</td>
      </tr>
      <tr>
          <th>Phone:</th>
          <td>${user.phone}</td>
      </tr>
  </tbody>
`

const productDetails = (product) => `
<table class="product-table">
  <tbody>
    <tr>
      <th>ID:</th>
      <td>${product.id}</td>
    </tr>
    <tr>
      <th>Name:</th>
      <td>${product.name}</td>
    </tr>
    <tr>
      <th>ISBN:</th>
      <td>${product.isbn}</td>
    </tr>
    <tr>
      <th>Price:</th>
      <td>${product.price}</td>
    </tr>
    <tr>
      <th>Description:</th>
      <td>${product.description}</td>
    </tr>
  </tbody>
</table>
`

const table = (list, form='') => `
  <table class="user-table">
      <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
          </tr>
      </thead>
      <tbody>
          ${list.slice(0, 25).join('')}
      </tbody>
  </table>
  ${form}
`

const newUserForm =  `
  <h1>Add User</h1>
  <form method="POST" action="/users">
    <br>

    First Name:&emsp;&emsp; 
    <input type="text" name="firstName"/>
    <br>

    Last Name:&nbsp;&nbsp; 
    <input type="text" name="lastName"/>
    <br>

    Email:&nbsp;&nbsp; 
    <input type="text" name="email"/>
    <br>

    Password:&nbsp;&nbsp; 
    <input type="password" name="password"/>
    <br>

    Date of Birth:&nbsp;&nbsp; 
    <input type="date" name="dob"/>
    <br>

    Company:&nbsp;&nbsp; 
    <input type="text" name="company"/>
    <br>

    Phone:&nbsp;&nbsp; 
    <input type="text" name="phone"/>
    <br>

    <button type="submit">Add User</button>
  </form>
`

const deleteProductForm = `
<h1>Delete a Product</h1>
  <form method="POST" action="/products/?_method=DELETE">
    <br>

    <label for="">:</label>
    <input type="" id=""/>

    <button type="submit">Delete Product</button>
  </form>
`


module.exports = {
  template,
  htmlContent,
  userDetails,
  productDetails,
  table,
  newUserForm,
  deleteProductForm,
}