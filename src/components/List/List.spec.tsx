import {
  getByPlaceholderText,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from ".";

// test("test-start", () => {
//   // Tipos com get vão parar o testes caso não achem o elemento
//   Tipos get vão falhar caso haja mais um elemento igual
//   //const { getByText } = render(<App />);

//    //tipos query não vão parar os testes
//    const { queryByText } = render(<App />);

//   //expect(getByText("oi")).toBeInTheDocument();

//   // testa se existe determinada classe
//   expect(queryByText("oi")).toHaveAttribute('class','test')
// });

describe("App Component", () => {
  it("should be render list in the component", () => {
    const { getByText } = render(<List initialValues={["Math", "Teste"]} />);

    expect(getByText("Math")).toBeInTheDocument();
    expect(getByText("Teste")).toBeInTheDocument();
  });

  it("should be able click the button in the component", async () => {
    const { getByText, findByText, getByPlaceholderText } = render(
      <List initialValues={["Math", "Teste"]} />
    );

    const addButton = getByText("Adicionar");

    const input = getByPlaceholderText("Valor");

    //manipula eventos na DOM
    userEvent.type(input, "New");
    userEvent.click(addButton);

    // vai esperar o componente carregar
    expect(await findByText("New")).toBeInTheDocument();
  });

  it("should be able to remove item from the list", async () => {
    const { queryByText,getByText, getAllByText } = render(
      <List initialValues={["Math", "Teste"]} />
    );

    const removeButtons = getAllByText("Remover");
    userEvent.click(removeButtons[0]);

    // await waitFor(() => {
    //   expect(queryByText("Diego")).not.toBeInTheDocument();
    // });

    await waitForElementToBeRemoved(() => {
      return getByText("Math");
    });
  });
});
