import { render, screen, fireEvent } from "@testing-library/react";
import App from '../App'

beforeEach(() => render(<App/>));

test("Cuando renderiza el componente Login", () => {
        
        const contentEmail = screen.getByPlaceholderText('Correo electronico')
        const contentPass = screen.getByPlaceholderText('Contraseña')
        const contentSubmit = screen.getByRole('button', {name:/ENTRAR/i})

        expect(contentEmail).toBeInTheDocument()
        expect(contentPass).toBeInTheDocument()
        expect(contentSubmit).toBeInTheDocument()
  
});

test("Cuando el usuario da click en ENTRAR", () => {
        screen.getByPlaceholderText('Correo electronico').value = 'correo@correo.com';
        screen.getByPlaceholderText('Contraseña').value = '123456';
        fireEvent.click(screen.getByRole("button", {name: /ENTRAR/i}));
       expect(screen.queryByText(/error/i)).not.toBeInTheDocument()
});