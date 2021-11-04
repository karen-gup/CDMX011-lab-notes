import { render, screen } from "@testing-library/react";
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

