// Para poder evitar el error de cy, vamos a definir a cy como global


/* global cy */

/**
 *  * Este archivo sera el que contenga nuestras pruebas
 *  * Para poder iniciar una prueba necesitamos darle un nombre
 *  ? EN este caso usamos describe para darle un titulo
 *  
 */

describe("Mi primera prueba con cypress", () => {
    // Dentro de nuestro arrow function, vamos a escribir las pruebas que realizaremos: ejemplo:
    it("prueba home", () => {
        // ? Aqui vamos a verificar si es que nuestro home funciona o no.
        cy.visit("https://codigo-react.vercel.app/");
        // QUe busque la palabra pokedesk
        cy.contains("Pokedex");
        // Ahora vamos a buscar el boton que diga detalle del pokemon
        cy.contains("Detalle del pokemon").click();
        cy.contains("Habilidades");
        // Recuerden que el texto debe ser el mismo que esta en el codigo.
        cy.contains("Cerrar").click();
    });
    // Vamos a crear otra prueba para banderas
    it("Prueba flags", () => {
        cy.visit("https://codigo-react.vercel.app/flags");
        // Vamos a ver vcomo escribit en un inpiut

        cy.wait(5000).then(() => {
            cy.get("input:first").type("peru");
            cy.contains("Republic of Peru").click();
            cy.contains("Lima");
        });
    });
    it("Prueba de youtube", () => {
        cy.visit("https://codigo-react.vercel.app/youtube");
        cy.contains("Doctor Strange");
    });
    it("Prueba de login", () => {
        cy.visit("https://codigo-react.vercel.app/Login");
        //Ahora vamos a ver de que otra manera podemos acceder a los inputs.
        cy.get('[name="email"]').type("pepe@gmail.com");
        cy.get('[name="password"]').type("123456");

        cy.contains("Iniciar Session").click();

        cy.url().should("include", "/youtube/administrator")

        cy.contains("Crear").click();

        cy.get('[name="name"]').type("Hombre araña");
        cy.get('[name="director"]').type("David Rivera Robles");
        cy.get('[name="gender"]').type("Marvel");
        cy.get('[name="video_link"]').type("www.google.com");
        cy.get('[name="wallpaper"]').type("www.google.com");

        cy.get(".btn-crear-movie").click();
    })
});