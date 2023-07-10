import React from 'react'

const Form = () => {
  return (
    <div className="container App" >
      
    <div className="row">
      
        <p class="fw-light fs-4">EMPLOYEE FORM</p>
     
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 col-xs-12">
        <div className="row g-3">

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="name" />
              <label for="floatingInput">Name</label>
            </div>
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="designation" />
              <label for="floatingInput">Designation</label>
            </div>
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="location" />
              <label for="floatingInput">Location</label>
            </div>
          </div>

          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-xs-6">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="salary" />
              <label for="floatingInput">Salary</label>
            </div>
          </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 col-xs-12">
          <a class="btn btn-primary" href="/" role="button">Submit</a>
          </div>

         <a href="/"> <button type="button"   href="/" class="btn btn-light">Back to Home</button></a>

        </div>

      </div>
    </div>
  </div>  
  )
}

export default Form