## Beheer in de praktijk

De meest gebruikelijke manier om specificaties van standaarden te beheren is digitaal. Hiervoor wordt tegenwoordig gebruik gemaakt van templates zoals ReSpec zodat specificaties op een uniforme wijze worden gepubliceerd.

Ook het beheer van specificaties verloopt steeds vaker via een automatisch proces. Waar het in het verleden nog gebruikelijk was om losse documenten te delen binnen werkgroepen, stappen steeds meer beheerorganisaties over naar een (git) repositories om teksten in te beheren. Hoewel deze omgevingen van oorsprong bedoeld zijn om programma code in te beheren, blijken deze ook goed bruikbaar te zijn voor het beheer van ‘leesbare’ tekst. Technische kennis is wel vereist, en standaarden beheerders moeten het ook vaak zonder ‘WYSISYG’ functionaliteit doen. Bij het opstellen van de tekst ziet deze er kaal uit, pas na het toevoegen van het template is deze voorzien van opmaak.

### Beheer pipeline

Door gebruik te maken van dezelfde gereedschappen als voor het beheer van programmacode is dit proces eenvoudig te automatiseren. Daarbij is het ook een goed gebruik om een werkomgeving in te richten waarop beheerders van de standaard kunnen controleren of de tekst goed wordt weergegeven. Het is in een dergelijk proces ook mogelijk om controles uit te voeren, bijvoorbeeld op basis van toegankelijkheid of op ontbrekende verwijzingen.

#### Respec en Git

Respec is een stuk gereedschap om (technische) documentatie vorm te geven. De auteurs schrijven documentatie in markdown files. Met respec wordt dit omgezet in documentatie in een standaard layout specifiek bedoeld voor publicatie via een web interface.