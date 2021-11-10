import { render, screen } from "@testing-library/react";
import Login from '../../components/login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//beforeEach(() => render(<Login/>));


test("Cuando renderiza el componente Login", () => {
        beforeEach(() => render(<Login/>));
        const contentEmail = screen.getByPlaceholderText('Correo')
        const contentPass = screen.getByPlaceholderText('Contraseña')
        expect(contentEmail).toBeInTheDocument()
        expect(contentPass).toBeInTheDocument()
  
});