## Digitaal beheer: Git en Respec als best practice

De meest gebruikelijke manier om specificaties van standaarden te beheren is digitaal. Er is een breder keuze aan digitale applicaties die toepasbaar zijn voor standaarden beheer, al zijn ze hier niet altijd voor bedoeld. Smaenwerkingsapplicaties voor documentbeheer of softwareontwikkeling kunnen worden toegepast om betrokkenen toegang te geven tot documentatie of zelfs gebruikers de documentatie bij te laten werken. 

Een voorbeeld is het gebruik van Git en Respec voor het operationeel beheer. Git is een applicatie voor wijzigngsbeheer bij softwareontwikkeling. Respec is een applicatie om van documenten om te zetten in documentatie die online gepubliceerd kan worden. Het beheer van specificaties verloopt steeds vaker via een automatisch proces. Waar het in het verleden nog gebruikelijk was om losse documenten te delen binnen werkgroepen, stappen steeds meer beheerorganisaties over naar een (git) repositories om teksten in te beheren. Hoewel deze omgevingen van oorsprong bedoeld zijn om programma code in te beheren, blijken deze ook goed bruikbaar te zijn voor het beheer van ‘leesbare’ tekst. Technische kennis is wel vereist, en standaarden beheerders moeten het ook vaak zonder ‘WYSISYG’ functionaliteit doen. Bij het opstellen van de tekst ziet deze er kaal uit, pas na het toevoegen van het template is deze voorzien van opmaak.

Respec is een applicatie die bij het W3C consortium gebruikt wordt om documentatie op een uniforme manier te presenteren. Door gebruik van een responsive layout kan de documentatie onafhankelijk van schermgrootte leesbaar getoond worden. Respec maakt automatisch een inhoudsopgave waarmee een gebruiker snel door de documentatie kan browsen. Respec is specifiek bedoeld voor technische documentatie en het sluit goed aan bij applicaties voor softwareontwikkeling zoals Git.

### Git en Github

Door gebruik te maken van dezelfde gereedschappen als voor het beheer van programmacode is dit proces eenvoudig te automatiseren. Daarbij is het ook een goed gebruik om een werkomgeving in te richten waarop beheerders van de standaard kunnen controleren of de tekst goed wordt weergegeven. Binnen Git heet een werkomgeving een _repository_. Een repository is meer dan een archief voor code. Binnen Github, een online omgeving voor Git repositories, kunnen issues ingediend worden door gebruikers, zijn projectmanagementtools beschikbaar en kunnen automatische acties op een repository gezet worden. Het is in Github mogelijk om controles uit te voeren, bijvoorbeeld op basis van toegankelijkheid of op ontbrekende verwijzingen.

#### Issuebeheer

In een Git omgeving zoals Github kunnen ook issues ingediend worden, die dan weer tot wijziging in de code kunnen leiden. Issues kunnen in principe door iedere gebruiker worden ingediend. Een issue wordt verwerkt door de beheerder van de repository. Een issue kan worden toegewezen aan een ontwikkelaar. 
