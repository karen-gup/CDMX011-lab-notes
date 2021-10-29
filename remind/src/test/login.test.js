import { render, screen } from "@testing-library/react";
import Login from "../components/login";

beforeEach(() => render(<Login/>))

test("Cuando renderiza el componente Register", () => {
    const contentEmail = screen.getByPlaceholderText('Ingresa tu correo electrónico')
    expect(contentEmail).toBeInTheDocument()

});

// test('component Register', () => {

//     const contentEmail = screen.getByPlaceholderText('Ingresa tu correo electrónico')

//     expect(contentEmail).getByPlaceholderText()
// });