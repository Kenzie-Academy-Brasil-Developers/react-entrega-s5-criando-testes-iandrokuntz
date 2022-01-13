context("Searching Cep", () => {
    it("Tries to search for a cep adress", () => {

      cy.visit("https://react-entrega-s5-criando-testes-iandrokuntz.vercel.app/");
      cy.viewport(1440, 900);

      cy.get("input").type("14020630");

      cy.get("button").click();

      cy.contains("Logradouro");
      cy.get('input[value="Rua Abrão Caixe"]');

      cy.contains("Número");

      cy.contains("Toda a extensão");

      cy.contains("Complemento");

      cy.contains("Bairro");
      cy.get('input[value="Condomínio Itamaraty"]');

      cy.contains("Cidade");
      cy.get('input[value="Ribeirão Preto"]');

      cy.contains("Estado");
      cy.get('input[value="SP"]');
    });
  });