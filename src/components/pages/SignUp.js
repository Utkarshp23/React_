import React, { useReducer } from 'react';

const SignUp = () => {
  const init = {
    email: '',
    password: '',
    gender: '',
    city: '',
    tandc: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.val };
    }
  };
  const [user, dispatch] = useReducer(reducer, init);

  const handleSignUp = (e) => {
    if (user.tandc) {
      console.log(JSON.stringify(user));
    } else {
      console.log("Information can't be shown here...");
    }
  };
  return (
    <div>
      <form action=''>
        <div className='row'>
          <div className='col'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'email',
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className='col'>
            <input
              type='password'
              className='form-control'
              placeholder='Enter Password'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'password',
                  val: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <span className='h6'>Gender:</span>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='gender'
                id='inlineRadio1'
                value='m'
                onChange={(e) => {
                  dispatch({
                    type: 'update',
                    field: 'gender',
                    val: e.target.value,
                  });
                }}
              />
              <label className='form-check-label' htmlFor='inlineRadio1'>
                Male
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='gender'
                id='inlineRadio2'
                value='f'
                onChange={(e) => {
                  dispatch({
                    type: 'update',
                    field: 'gender',
                    val: e.target.value,
                  });
                }}
              />
              <label className='form-check-label' htmlFor='inlineRadio2'>
                Female
              </label>
            </div>
          </div>
        </div>
        <div>
          <input
            type='text'
            className='form-control'
            placeholder='Enter city'
            onChange={(e) => {
              dispatch({ type: 'update', field: 'city', val: e.target.value });
            }}
          />
        </div>
        <div className='form-check form-check-inline '>
          <input
            className='form-check-input'
            type='checkbox'
            id='inlineCheckbox1'
            // value={!user.tandc}
            onChange={(e) => {
              dispatch({
                type: 'update',
                field: 'tandc',
                val: e.target.checked,
              });
            }}
          />
          <label className='form-check-label' htmlFor='inlineCheckbox1'>
            Agree
          </label>
        </div>
        <br />
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => {
            handleSignUp();
          }}
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
