# Typescript labb 1

## Starta projektet

- Packa upp zip-filen
- Ställ dig i frontend-mappen och kör npm install
- Ställ dig i backend-mappen och kör npm install

- Skapa en postgres-databas, tabeller och startdata finns i db.sql-filen i backend-mappen
- Skapa en .env-fil i backend-mappen och lägg in:
  PGURI=postgres://ANVÄNDARNAMN:LÖSENORD@localhost/minizoo
  där du ersätter användarnamn, lösenord. minizoo är namnet du gav databasen när du skapa den med CREATE DATABASE minizoo;

- Kör npm run dev i terminalen i backend-mappen
- Kör npm run dev i terminalen i frontend-mappen
- Kör npx cypress open i en annan terminal i frontend

## Labb 1 Mål

GET/SELECT görs för att hämta alla djuren från databasen. I index.ts i backend-mappen och i komponenten Animals i mappen Components i frontend-mappen.

Props används för att skicka types(djurtyper) från kompnenten Animals till komponenten AddAnimals. Tillhörande interface importeras från shared-mappen som ligger i rot-mappen.

Min useState med tillhörande generics finns i komponenten Animals, rad 7, där useStaten animals har en generic som är typad till en array av Animal-object(som är ett interface importerat från shared-mappen).

Det går att ändra applikationens frontend via POST/INSERT, användaren kan lägga till ett djur som syns på webbsidan. Fetch-anrop görs i komponenten AddAnimal och Sql-fråga finns i index.ts i backend-mappen.

Koden är enhetligt formatterad.

Interface som beskriver JSON-strukturen som frontend-delen hämtar från backend-delen finns i mappen shared i rot-mappen. Där finns interface Animal och Type.

Det ska inte finnas några any i min kod.

## Labb 2 Mål

E2e-tester som använder it finns i cypress/e2e, fil spec.cy.ts.

Komponenttest finns i cypress/componen, fil AddAnimal.cy.tsx.

Kopmplett e2e-test finns i cypress/e2e, fil spec.cy.ts.

Ett test där mocking-data används finns i cypress/component fil Animals.cy.tsx. Mocking-datan finns i cypress/fixtures fil animals.json.

Integrgrationstester finns i cypress/e2e fil integration-request.cy.tsx. när post testet är gjort går det att se det nya djuret genom att besöka webbsidan.
