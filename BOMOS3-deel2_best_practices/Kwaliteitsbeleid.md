## KWALITEITSBELEID EN BENCHMARKING

### Kwaliteit van standaarden
<p class="comment" style="color:red">
[Hier is veel overlap met BOMOS 2i en 2n, maar ook dingen die daar nog niet voldoende in terug komen. De categorieën uit ‘kwaliteitsinstrument gebruiken’ worden niet gebruikt in nieuwer werk]
</p>

Veel organisaties streven naar interoperabiliteit, waarbij semantische standaarden een middel zijn om dit doel te behalen. De afgelopen jaren zijn dan ook vele semantische standaarden geïntroduceerd. Er is echter weinig bekend over de kwaliteit van semantische standaarden. Dat is opmerkelijk, want de kwaliteit van die standaarden is ongetwijfeld van invloed op de mate waarin het doel van interoperabiliteit behaald kan worden.

In tegenstelling tot andere disciplines, zoals software-engineering, is er weinig literatuur en kennis beschikbaar over wat een kwalitatief goede standaard is die een effectieve bijdrage levert aan interoperabiliteit. Dit definieert ook ons kwaliteitsbegrip: fitness for use! (definitie van kwaliteitsgoeroe Juran). Het overheidsbeleid richt zich voornamelijk op de openheid van een standaard, wat slechts één kwaliteitsaspect is. Een kwalitatief hoogwaardige standaard is ongetwijfeld een open standaard, maar het omgekeerde is niet noodzakelijkerwijs waar: een open standaard hoeft niet per definitie een kwalitatief hoogwaardige standaard te zijn. Overigens wordt in de toetsing van standaarden voor de ‘’pas-toe-of leg-uit lijst’ van de Nederlandse overheid een sterke nadruk gelegd op de openheid, maar onderkent ook dat er meer kwaliteitsaspecten (bruikbaarheid, potentieel en impact) zijn die ook meegenomen worden in de toetsing voor opname op de lijst.

Semantische standaarden worden meestal door eigen organisaties ontwikkeld, en niet binnen grote standaardisatieorganisaties. Dit kan impact hebben op de kwaliteit; op zijn minst zal de kwaliteit daardoor sterk verschillen per semantische standaard.

#### Wat vinden de standaardisatieorganisaties zelf van de kwaliteit?
Een onderzoek onder 37 beheerorganisaties van standaarden (waaronder internationale standaarden zoals XBRL, HR-XML, ACORD en HL7 en nationale standaarden zoals SETU, StUF en Aquo) laat zien dat meer dan 90 procent van de ondervraagde opstellers van standaarden vindt dat de kwaliteit van hun standaard verbeterd kan worden (zie figuur 17). Daarnaast vindt ook een zeer ruime meerderheid dat een verbetering in kwaliteit van hun standaarden zal bijdragen aan betere interoperabiliteit.


#### Wat moet er dan gebeuren?
Ook laat het onderzoek zien dat de kwaliteit van een standaard essentieel is om het uiteindelijke doel van interoperabiliteit te behalen (meer dan 90 procent van de respondenten is die mening toegedaan). Minder overtuigend maar nog steeds zeer nadrukkelijk is de relatie tussen het kwaliteitsniveau en de kans op succesvolle adoptie van een standaard. Er is dus ruimte voor kwaliteitsverbeteringen die kunnen leiden tot betere interoperabiliteit en betere adoptie van de standaarden. Het is echter lastig de kwaliteit te verbeteren als de kwaliteit niet bekend is. De respondenten (meer dan 80 procent) willen een instrument gebruiken om de kwaliteit van hun standaarden te bepalen. Maar dan moet dit wel beschikbaar zijn.

Overigens laten de uitkomsten ook zien dat standaardisatieontwikkelaars zeker geneigd zijn om hoge kwaliteit na te streven en open te staan voor een kritische blik op hun werk door toepassing van een kwaliteitsinstrument. Een eventueel gebrek aan kwaliteit van een standaard heeft meerdere oorzaken, maar uit te sluiten valt de motivatie van de standaardisatieontwikkelaars. Eerder onderzoek heeft aangetoond dat juist bij semantische standaarden de ontwikkelaars intrinsiek gemotiveerd zijn; dat wil zeggen dat ze hun werk als hun hobby beschouwen.

Een grotere waarschijnlijkheid is de relatie tussen het budget en de kwaliteit van standaarden. Standaarden worden vaak met een miniem budget ontwikkeld wat ongetwijfeld consequenties heeft voor de kwaliteit, bijvoorbeeld doordat het budget op is de standaard wordt opgeleverd terwijl eigenlijk nog een ronde van review en verwerking een betere standaard zou opleveren.

Een andere mogelijke reden is het gebrek aan standaardisatie-expertise, aangezien het nog te weinig als ‘vak’ wordt gezien. Ook het polderen bij het standaardiseren met werkgroepen draagt niet positief bij. Regelmatig worden te veel opties in standaarden opgenomen om alle deelnemers in werkgroepen tegemoet te komen. Het resultaat is een te complexe standaard die in de praktijk slecht implementeerbaar is en leidt tot niet interoperabele implementaties die allemaal wel voldoen aan de standaard.


#### Een kwaliteitsinstrument
[TODO: Herzien/linken/samenvoegen met BOMOS 2i, 2n en beschikbare BOMOS profielen]

Hoe ziet zo’n instrument waarmee we de kwaliteit van een standaard inzichtelijk kunnen maken eruit? Om een kwaliteitsinstrument te ontwikkelen is veel kennis nodig: wat is een kwalitatief goede standaard? Welke kwaliteitsaspecten zijn van invloed, en hoe zijn die te meten? Maar ook over het onderwerp zelf: wat is een semantische standaard? Uit welke componenten bestaat een semantische standaard? Want daar zal de kwaliteitsthermometer in gestoken moeten worden. Het is noodzakelijk te weten hoe de kwaliteitsthermometer eruit kan zien, maar ook waar we hem in kunnen steken. Dit is complexe materie wat nog in de kinderschoenen staat. Voorlopig is er een eerste versie van een kwaliteitsmodel beschikbaar.

Deze eerste versie is gebaseerd op voornamelijk het domein van softwareengineering, waar kwaliteit al jaren onder de aandacht is. Dat heeft geleid tot meerdere ISO-standaarden (met name ISO 9126) die de kwaliteit van software beschrijven. Op basis hiervan is het in figuur 19 weergegeven kwaliteitsmodel voor semantische standaarden gedestilleerd en getoetst met experts.

De hoofdcategorieën zijn:

**Effectiviteit:** de mate waarin de standaard in de specifieke situatie de functies biedt en implementeert die expliciet of impliciet vereist zijn.  
**Betrouwbaarheid:** de mate waarin een standaard een op een gespecificeerd niveau blijft presteren onder specifieke condities zoals foutieve implementaties of verschillen in implementaties tussen partijen.  
**Bruikbaarheid:** de mate waarin een standaard begrepen, geleerd en gebruikt/ toegepast kan worden door gebruikers in de specifieke situatie.  
**Portabiliteit:** de mate waarin een standaard de mogelijkheid heeft om in verschillende omgevingen ingezet te worden.  
**Onderhoudbaarheid:** de mate waarin een standaard eenvoudig aangepast kan worden aan een veranderende situatie.  
**Adoptiegraad**: de mate waarin de standaard is geaccepteerd door verschillende partijen.  
**Openheid:** de mate waarin de standaard voldoet aan openheidscriteria op het gebied van intellectueel eigendom en (onderhoudsen beheer)processen.

Het kwaliteitsmodel in figuur 19 laat niet de volledig uitwerking voor elk kwaliteitsattribuut zien. Ter illustratie: het kwaliteitsattribuut Volwassenheid (onder Betrouwbaarheid) bevat meerdere attributen, zoals bijvoorbeeld Stabiliteit. Deze attributen kunnen weer meerdere metrieken bevatten, en daarnaast wordt vastgelegd hoe de waarde van de metriek bijdraagt aan de uiteindelijke waarde voor het attribuut. Een eenvoudig voorbeeld: het attribuut Stabiliteit heeft als metriek de hoeveelheid releases van een standaard in de afgelopen vijf jaar. Een potentiële meting van één release (in vijf jaar) kan door middel van het scoringsmechanisme leiden tot de waarde ‘zeer stabiel’ voor het attribuut Stabiliteit. Echter de onderste lagen van detaillering van attributen en metrieken is nog in ontwikkeling. Gelukkig is er veel waarop gebouwd kan worden. Bijvoorbeeld voor verdere detaillering van het kwaliteitsattribuut Openheid kan de uitwerking van openheid in hoofdstuk 8 als basis gebruikt worden.

#### Het kwaliteitsinstrument gebruiken
De relatie tussen interoperabiliteit en standaarden is die van doel-middel. Zonder het kwaliteitsaspect in ogenschouw te nemen worden standaarden te veel gezien als heilige graal. De standaard wordt het doel, in plaats van een middel om op een effectieve en efficiënte manier interoperabiliteit te bereiken. Een aandachtsverschuiving naar de kwaliteit van standaarden voorkomt dat standaarden een doel op zich worden en zal de relatie tussen standaarden en interoperabiliteit versterken.

![alt_text](images/kwaliteitsinstrumenten.png "Kwaliteitsinstrumenten")

Het huidige kwaliteitsmodel is niet af maar is toch een startpunt om te gebruiken om de kwaliteit van een standaard te bekijken. Bij de ontwikkeling wordt ook gekeken naar de kosten van een kwaliteitsmeting, waarbij vooral de uren relevant en kostbaar zijn. Uitgangspunt is dat de kwaliteitsmeting in slechts een paar uur uitgevoerd kan worden, zodat de kosten beperkt zijn en opbrengst dan ook al snel de kosten zal overtreffen. Het is met name geschikt voor de standaardisatie-ontwikkelaar zelf die de eigen standaard goed kent en het model als denkkader kan gebruiken om de eigen standaard mee te analyseren.

 De belangrijkste vraag is wat het gebruik van het kwaliteitsinstrument voor standaarden oplevert. Kort samengevat:

* een model om naar de standaard te kijken: een frisse blik • inzicht in wat van invloed is op de kwaliteit van een standaard
* ideeën voor verbetering van de standaard
* ideeën voor aanpassingen in het standaardisatieproces

Het helpt de standaardisatieontwikkelaar om met een frisse blik naar de standaard te kijken en daarbij een gevoel te krijgen hoe de kwaliteit te beïnvloeden is. Gedurende het gebruik zal de standaardisatieontwikkelaar ideeën ontwikkelen hoe de standaard te verbeteren is of mogelijkheden zien om het standaardisatieproces te veranderen om een hogere kwaliteit te bereiken.

In ultieme vorm is het kwaliteitsinstrument een meetinstrument (zoals een thermometer) voor standaarden, dat wil zeggen een compleet gereedschap inclusief ‘tool’ en ‘gebruikshandleiding’. Op dit moment ligt er een bruikbaar kwaliteitsmodel, met een stevig fundament, dat als ‘bril’ kan worden gebruikt om standaarden in de praktijk mee te toetsen.

### Kwaliteit van implementaties
De kwaliteit van de standaard kan nog zo goed zijn, als de kwaliteit van de implementaties achterblijft wordt er ook geen interoperabiliteit bereikt. Deze sectie gaat in op mogelijke vormen certificering, compliancy testing, validatie, en andere vormen van toetsen van het toepassen van de standaard, met daarbij eventueel een beloning. Certificering hanteren we als containerbegrip voor alle vormen hiervan.

Nadat de standaard is ontwikkeld en in enige mate is geadopteerd in de markt komt nagenoeg altijd de certificeringsvraag wel boven drijven. Soms zijn het leveranciers, als early adopters van de standaard die zich graag in de markt door middel van een stempel positief willen onderscheiden (oftewel: ze willen graag return op hun investment als early adopter). En soms blijken in de praktijk implementaties niet interoperabel te zijn wat de vraag van certificering om interoperabiliteit te garanderen oproept. Deze verschillen laten al zien dat certificering verschillend ingezet kan worden om simpelweg verschillende vragen in te vullen.

#### Doel van certificeren
Vanuit een standaardisatie-organisatie bekeken kan certificering een positieve bijdrage leveren aan:

**Interoperabiliteit en transparantie.** Indien het correct gebruiken van de standaard gemarkeerd wordt met een certificaat zal het voor organisaties eenvoudiger zijn om samenwerkingspartners te vinden met wie men interoperabel is.

**Adoptie bevorderen.** Early adopters de kans geven zich er positief mee te onderscheiden. Voor leveranciers kan het noodzaak worden om een certificaat te verkrijgen omdat ze anders buiten de markt vallen. Certificaat kan dan bijvoorbeeld gevraagd worden in aanbestedingen.

**Financiën.** Certificering kan ingezet worden als potentiële bron van inkomsten om het beheer van standaarden te financieren. Uitgangspunt hierbij is gebruikers van de standaard betalen voor de ontwikkeling hiervan.

Dit zijn verschillende doelstellingen die niet altijd verenigbaar zijn: bijvoorbeeld de uitvoering van een interoperabiliteitscertificaat zal grondiger uitgevoerd moeten worden dan een adoptie-certificaat. Dat betekent dat de kosten voor uitvoering hoger zullen liggen waardoor er minder ‘winst’ gemaakt kan worden op het certificaat, en daardoor een kleinere bijdrage voor de financiën van een standaardisatie-organisatie zal opleveren, en eerder kosten-neutraal zal zijn.

Samenvattend kan certificering ingezet worden als:
* Interoperabiliteits-instrument
* Adoptie-instrument
* Financieel instrument

#### Wie of wat kan worden gecertificeerd? 
Bij een certificeringtraject is er altijd iets of iemand dat gecertificeerd wordt. Dit kan een natuurlijk persoon, een organisatie, een implementatie-proces, een product of zelfs een project zijn. Er moet echter wel een keus gemaakt worden, het is niet mogelijk om hetzelfde certificaat uit te reiken aan (bijvoorbeeld) zowel een persoon als een pakket.

**Organisatie:** Een organisatie kan gecertificeerd worden indien de organisatie zich bijvoorbeeld gecommitteerd heeft aan bepaalde afspraken, zoals de implementatie van de standaard voor een bepaalde datum, of een hoeveelheid van implementaties. Daarnaast kan een organisatie certificaat ook als kapstok certificaat dienen. Bijvoorbeeld een organisatiecertificaat wordt uitgedeeld als er een minimale hoeveelheid aan implementaties van de standaard in projecten, producten, personen of processen heeft plaatsgevonden.

**Natuurlijke personen:** Een persoon kan gecertificeerd worden op basis van zijn kennis en expertise, bijvoorbeeld door het volgen en succesvol afronden van een opleiding, of door het (aantoonbaar) uitvoeren van een hoeveelheid aan projecten met de standaard.

**Projecten:** Semantische standaarden worden vaak ingezet in de uitwisseling van informatie. Een project tussen twee (of meer organisaties), waarin eventueel ook producten worden ingezet, kan dan gecertificeerd worden.

**Producten:** Voor veel standaarden is het cruciaal dat de standaard is geïmplementeerd in producten en diensten die aangeboden worden op de markt. Door aanschaf van een gecertificeerd product kan een organisatie eenvoudig gebruik maken van de standaard.

**Implementatieproces:** Als het proces (de aanpak) gecertificeerd is dan geeft dat vertrouwen in het resultaat van dat proces. In het geval bij standaardisatie zou een projectaanpak voor gebruik van de standaard in projecten kunnen certificeren, wat vertrouwen geeft dat het projectresultaat een succesvolle implementatie van de standaard bevat.

**Opleidingsmateriaal:** Als de opleiding, of het opleidingsmateriaal, is gecertificeerd dan geeft dat vertrouwen in de kennis die wordt verkregen om op basis daarvan een project te kunnen uitvoeren.

Bij het toekennen van het certificaat hoort meestal het gebruik maken van een logo dat door de beheerorganisatie wordt uitgegeven. Openheid en het voorkomen van intellectueel eigendomsrecht betekent niet dat er geen beschermd logo gebruikt mag worden. Uiteraard staat dat openheid niet in de weg.

#### Waarop kan worden gecertificeerd?
Er bestaat een spanningsveld tussen het aantal soorten certificaten dat uitgereikt wordt en omvang van gestelde eisen per certificaat. Enerzijds is het wenselijk om het aantal soorten certificaten beperkt te houden, dit om te voorkomen dat een organisatie vele certificeringtrajecten moet doorlopen (bovendien daalt de ‘waarde’ van een certificaat bij een toenemend aantal soorten). Anderzijds is het niet wenselijk dat een organisatie álle onderdelen van de te ontwikkelen standaarden moet kunnen ondersteunen om gecertificeerd te kunnen worden. Een algemeen certificaat kan weinig zeggend zijn, terwijl bij twintig specifieke certificaten niemand er meer iets van begrijpt.

In de meeste situaties bestaat een semantische standaard uit een familie van standaarden. Een afweging die gemaakt moet worden is op welk niveau de certificering wordt ingevoerd: voor de gehele set of voor een deel functionaliteit (vaak: de standaard). Daarbij moet ook bedacht worden dat ieder versienummer van een standaard dan een certificaat krijgt: het aantal explodeert al snel.

Een grote hoeveelheid aan certificaten is niet verstandig als adoptie het doelstelling is voor certificering aangezien de herkenbaarheid en waarde van het certificaat dan afneemt. Daarnaast moet er ook een stimulans zijn om bijvoorbeeld een nieuwe versie te implementeren, bijvoorbeeld door de uitgifte van een nieuw certificaat. Een deel van de oplossing om bijvoorbeeld de hoeveelheid certificaten een halt toe te roepen, is een bepaalde geldigheidsduur van het certificaat. Bijvoorbeeld in plaats van SETU timecard v1.2 certificaat uit te geven, zou SETU timecard 2010 certificaat (waarin is aangegeven dat SETU timecard v.1.2 de versie van de standaard is) een alternatief kunnen zijn dat zijn waarde verliest in 2011 of 2012. Hiermee wordt de versieproblematiek ondervangen.

Overigens is er een gevaar van doorschieten: bijvoorbeeld als er nieuwe versies van een standaard uitgebracht moeten worden om de financiën van de beheerorganisatie op orde te brengen.

#### Wie geeft het certificaat uit en wie doet de toetsing?
Voor het uitgeven van het certificaat zijn er logische kandidaten: de standaardisatie-beheer organiatie, de branche-organisatie, formele standaardisatieorganisaties (NEN), onafhankelijke kennisinstelling-en (zoals bv. TNO), certificeringsinstellingen (bv. DNV) of andere belangenbehartigers. Er is een belangrijk onderscheid tussen de toetser en de uitgever. Beide rollen kan bij dezelfde partij zijn belegd, maar kan ook opgedeeld worden tussen verschillende partijen wat een onafhankelijkheid en betrouwbaarheid waarborgt. Dat laatste verdient de aanbeveling want de betrouwbaarheid van een certificaat is van groot belang. De uitgever heeft eindverantwoordelijkheid en geeft de certificaten uit, en stelt het toetsingskader op. De uitvoering van de toets (op basis van het toetsingskader) kan dan door een andere en zelfs meerdere partijen worden uitgevoerd. Het stelt wel eisen aan het toetsingskader, immers onafhankelijk van de toetser zou het resultaat van de toets gelijk moeten zijn.

In veel gevallen zou de uitgever en opsteller van het toetsingskader de standaard beheerorganisatie kunnen zijn al dan niet in samenwerking met de branche-organisatie. De uitvoering kan dan belegd worden bij een onafhankelijke kennisinstelling, certificeringsorganisatie, of bij meerdere consultancybureaus. Als de toetsing licht van aard is, dan is de splitsing minder logisch.

Scheiding tussen uitgever en toetser draagt bij aan de onafhankelijkheid van de toetsing en indien fixed-price afspraken gemaakt kunnen worden over de kosten van een toetsing wordt tevens het (financieel) risico voor de standaardisatie-organisatie beperkt. Keuzes kunnen nog gemaakt worden wie het aanspreekpunt is, waar de aanvraag tot certificeren wordt ingediend, gebruik van certificaat/logo en ondermeer een klachtenprocedure.

Het pakket van eisen is de publieke versie van het toetsingskader, en geeft aan de certificatieaanvrager aan waarin de implementatie moet voldoen. Het toetsingskader is niet publiek beschikbaar en geeft aan hoe de meting/ beoordeling plaatsvindt.

Daarnaast moet er een beroepsprocedure zijn met een partij als aanspreekpunt indien er een meningsverschil is over de al dan niet toekenning van een certificaat.

#### Waarop wordt getoetst?
Conformance aan een standaard is niet triviaal. De meeste semantische standaarden zijn uitgedrukt in XML Schema. Om uitspraken over conformance te doen is het niet voldoende om te controleren of de XML instantie technisch valideert ten opzichte van het XML Schema. Dit laatste is technisch prima uit te voeren (ook al moeten er wel meerdere XML schema validators gebruikt worden voor goede resultaten), maar zegt niks over de vraag of de juiste informatie ook op de juiste plek is ingevuld. Immers als Amsterdam de waarde is van het element ‘Achternaam’ en ‘Jansen ‘ de waarde van het element ‘Woonplaats’, dan zal dit technisch prima valideren (tenzij woonplaats een waarde moet bevatten uit een lijst), maar toch voldoet het hoogstwaarschijnlijk niet aan de standaard. Deze semantische validatie is een lastig uit te voeren. Voorgaand voorbeeld was misschien helder, maar stel dat het zou gaan om de elementen ‘geboorteplaats’ en ‘woonplaats’, dan is correct gebruik niet te controleren zonder bewijsstukken of iets dergelijks.

Daarnaast is verschil in harde (onbetwistbare en betekenisvol op het gebied van interoperabiliteit) toetsing en zachte toetsing (betwistbaar of betekenisloos op het gebied van interoperabiliteit.) Bijvoorbeeld een zachte toetsing is de belofte van een organisatie om de standaard te implementeren door ondertekening van een convenant: dit is niet betwistbaar (convenant is wel/ niet ondertekend), maar betekent op dit moment niet veel op het gebied van interoperabiliteit. Het moge duidelijk zijn dat zachte toetsing relatief eenvoudig is en harde toetsing complexer.

De exacte invulling van de toetsingsprocedure (het toetsingskader) en de aspecten waarop getoetst zal worden (pakket van eisen) moet ingevuld worden en is situatieafhankelijk. We stellen wel een aantal uitgangspunten voor:

* De toets moet zo objectief (‘hard‘) mogelijk zodat bij certificeringtrajecten eenduidig aangetoond kan worden waarom een partij wel of juist niet gecertificeerd wordt. Dit voorkomt onnodige discussies en risico’s. Bovendien kan alleen getoetst worden op zaken die ook vastgelegd zijn in de standaard (of het pakket van eisen).
* Naast de structuur van berichten (syntax) is het wenselijk om de inhoud van berichten te controleren. Dit kan deels door gebruik te maken van in de standaard vastgelegde ‘business rules’. Ook is het in sommige gevallen wenselijk om de samenhang tussen berichten te toetsen.

Personen zijn bijvoorbeeld eenvoudiger toetsbaar op basis van een examen. Organisaties zijn eenvoudig toetsbaar op intenties en beloftes. Het proces is ook relatief eenvoudig toetsbaar, maar bij projecten, producten en organisaties (anders dan op intenties) wordt het complex.

Andere variaties zijn er op het gebied dat voor een organisatie-certificaat bijvoorbeeld de organisatie alleen de standaard mag gebruiken (en geen alternatieven), of in een aantal (percentage) gevallen de standaard inzet, of minimaal één geval (dan is men ‘in staat’).

Sommige certificaten vereisen dat er een aantal XML instanties (voorbeelden) worden ingeleverd die vervolgens worden gevalideerd. Uiteraard moet er dan nagedacht worden over wat een goede hoeveelheid voorbeelden is, en daarnaast moet men zich wel realiseren dat men de bron van de voorbeelden niet kan garanderen: bijvoorbeeld misschien komen ze wel niet uit het te certificeren systeem, maar zijn ze met de hand aangemaakt.


#### Hulpmiddel voor keuzes rond certificaten
In deze sectie is tot nu laten zien dat certificering complex is, en er meerdere keuzes gemaakt kunnen worden.

De figuur laat vrij eenvoudig zien dat doelstellingen rond adoptie en financiën in enige mate te combineren zijn, maar dat met name een interoperabiliteit doelstelling een andere invulling van certificering nodig maakt in vergelijking met de andere doelstellingen.

#### Andere vormen van certificering

Een nadeel van certificering is de impact die het heeft op de markt. Dit houdt in dat rekening gehouden moet worden met juridische zaken (bijvoorbeeld een leverancier die de beheerorganisatie gaat aanklagen omdat het ook een certificaat wil), maar ook dat beheerorganisatie zijn onafhankelijkheid en daardoor draagvlak verliest. Of als opmaat, of om geen risico’s te nemen wordt er vaak gebruik gemaakt van een alternatief. Naast certificering is er validatie. In feite is certificering het geven van een stempel na succesvolle validatie. Echter als het certificeringdoel wegvalt kunnen er lagere eisen gesteld worden aan validatie. Ondanks het wegvallen van het ‘stempel’ kan validatie toch deels voor dezelfde doelstellingen gebruikt worden:

**Interoperabiliteit:** In principe kan dezelfde test voor certificatie ook als validatie worden uitgevoerd, maar dan zonder stempel.  
**Financiën:** Ook voor een service gericht op validatie kan geld gevraagd worden. Echter dat zal nooit veel meer zijn dan de daadwerkelijke kosten van validatie, waarmee het geen cash cow zal worden.  
**Adoptie:** Het beschikbaar hebben van een helpdesk waarin validatie vragen gesteld kunnen worden helpt de adoptie. Echter certificering zal een veel groter effect hebben op de adoptie.

Vooral de interoperabiliteit doelstelling is prima te realiseren met validatie, en wordt door veel beheerorganisaties al ingezet. Tooling is hiervoor laagdrempelig beschikbaar (bijvoorbeeld de eValidator, of het zelf configureren van open source tools).

Met een plugfest wordt interoperabiliteit in de keten getoond door te laten zien dat de samenwerking tussen meerdere systemen werkt die aan elkaar geplugt zijn. Een plugfest met adoptie doelstelling is een openbare demonstratie van interoperabiliteit door meerdere leveranciers, en is ook een vorm van publieke validatie waarbij de resultaten een vorm van certificering zijn; immers de winnaar zal de winst gaan uitdragen in commerciële uitingen. Zowel certificering als plugfest hebben als doel transparantie richting de markt, om de markt in beweging te brengen. Maar een plugfest kan ook gebruikt worden voor een interoperabiliteit doelstelling, daarmee krijgt het plugfest een besloten karakter en worden de resultaten niet gepubliceerd. Voor meer informatie over plugfests zie hoofdstuk 11.

Validatie kijkt ook naar individuele systemen maar dan zonder doel van transparantie van de markt maar als doel ondersteuning richting organisaties en projecten. Tot slot kunnen er pilot projects gestart worden om interoperabiliteit in de keten te testen.

Overigens zou het dus goed mogelijk zijn om validatie te gebruiken voor de interoperabiliteit doelstelling, en daarnaast op een andere manier certificatie) in te richten voor adoptie of financiële doelstellingen. De volgende figuur laat zien waar de verschillende concepten voor gebruikt kunnen worden.

#### De praktijk
Terwijl validatie zeer gebruikelijk is geldt dit zeker niet voor certificatie. Over het algemeen wordt dit als ‘gevaarlijk’ gezien, en zou alleen toegepast moeten worden als het zeer zorgvuldig is ingericht. Het betekent immers nogal wat: een leverancier die het certificaat niet krijgt kan daarmee nadelige gevolgen ondervinden in de markt. De leverancier kan overgaan tot rechtszaken om het certificaat te bemachtigen. Dat leidt tot kosten voor de beheerorganisatie en negatieve publiciteit. Daarnaast is de standaardisatieorganisatie in veel gevallen afhankelijk van de kennis van leveranciers in de werkgroepen voor de totstandkoming van de standaard. Mogelijkerwijs staakt de leverancier ook de medewerking aan de werkgroep. De standaardisatieorganisatie kan zijn neutraliteit verliezen, wat schadelijk is voor adoptie en verdere ontwikkeling van de standaard.

Daardoor zijn er meerdere semantische standaardisatieorganisaties die certificering overwogen hebben, maar tot op heden wordt certificering weinig toegepast. We denken wel dat het een kwestie van tijd is, met de opkomst van standaarden wordt de roep op certificering alleen maar groter.

