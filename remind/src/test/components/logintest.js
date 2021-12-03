// import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import Login from './login'

afterEach(cleanup)
 beforeEach(()=>render(<Login/>));

test("Al renderizar el componente Login", () =>{
    const mockHandleLogin = jest.fn()
    render(<Login handleLogin={mockHandleLogin}/>)
    const loginEmail = screen.getByPlaceholderText(/Correo electronico/i)
    
    expect(loginEmail).toBeInTheDocument();

})
/* test('render component Login',() => {
    const component =  beforeEach(()=>render(<Login/>))
    console.log(component)
}) */
