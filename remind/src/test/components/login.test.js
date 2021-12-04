// import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'
import Login from '../../components/login'

afterEach(cleanup)
 beforeEach(()=>render(<Login/>))
 test("Cuando renderiza el componente Login", () => {
        
    const contentEmail = screen.getByPlaceholderText('Correo electronico')
    const contentPass = screen.getByPlaceholderText('Contraseña')
    const contentSubmit = screen.getByRole('button', {name:/ENTRAR/i})

    expect(contentEmail).toBeInTheDocument()
    expect(contentPass).toBeInTheDocument()
    expect(contentSubmit).toBeInTheDocument()

})
