import { cleanup, render, screen } from "@testing-library/react";
import Login from '../../components/login'

afterEach(cleanup);

test("Cuando renderiza el componente Register", () => {
        
        const contentEmail = screen.getByPlaceholderText('Correo')
        const contentPass = screen.getByPlaceholderText('Contraseña')
        expect(contentEmail).toBeInTheDocument()
        expect(contentPass).toBeInTheDocument()
  
});