
## ARCHITECTUUR: Samenhang met andere standaarden

Zoals in hoofdstuk 2 geschetst is interoperabiliteit het doel en zijn standaarden het middel. Dit hoofdstuk gaat in op deze relatie tussen verschillende standaarden.

### De gelaagdheid van standaarden

Om interoperabiliteit (uitwisselbaarheid) te bewerkstelligen tussen organisaties of systemen is een complexe set van standaarden nodig. Dit maakt de materie uitermate lastig want het gaat niet meer om het kiezen of beheren van één standaard, maar het gaat om een set van standaarden die op sommige gebieden sterk aan elkaar gerelateerd zijn. Een onderscheid is daarbij te maken in standaarden voor technische zaken en standaarden voor de semantiek van informatie-uitwisseling. Het interoperabiliteitsraamwerk 21 in figuur 7 laat dit zien; tussen haakjes staan voorbeelden van standaarden waarmee dit kan worden ingevuld.

![alt_text](images/gelaagdheid_van_standaarden.png "De gelaagdheid van standaarden")

Voor technische interoperabiliteit moeten er keuzes gemaakt worden, waarbij vaak gekozen wordt voor een technische filosofie waarbij een familie van standaarden hoort; Echt veel keuzes zijn er eigenlijk niet. Bijvoorbeeld als communicatiemechanisme is het Internet met als standaarden TCP/IP, HTTP, etc. voor de hand liggend. Op het gebied van messaging (transport) mechanisme is er misschien meer keuze, maar tegenwoordig is Web service als familie hier ook voor de hand liggend. De keuze voor Web services brengt een keuze voor de individuele standaarden (zoals SOAP, WSDL, etc.) met zich mee. Een voorbeeld van een alternatief is de familie van ebXML standaarden. Overigens is de keuze voor deze technische standaarden alleen niet voldoende. Om interoperabiliteit te bereiken zijn doorgaans nog profielen nodig bovenop deze standaarden waarin beschreven staat hoe de opties in de standaarden ingevuld moeten worden. Ook al is dit niet domeinspecifiek wordt dit nu vaak per domein ingevuld, vooral om gebruikers een complete interoperabiliteitsoplossing te kunnen bieden in combinatie met de semantische standaarden.

Tot slot is de keuze voor de technische standaard XML tegenwoordig voor de hand liggend. In het verleden was EDI de aangewezen technologie. Deze wordt nog veel gebruikt in bestaande situaties, maar niet meer in nieuwe situaties.

De technische standaarden zijn randvoorwaardelijk, maar de echte uitdaging ligt bij de semantische standaarden waarin de betekenis van de informatieuitwisseling centraal staat. Verticale semantische standaarden zijn gericht op een specifieke sector, terwijl horizontale sectoroverstijgend zijn. In de praktijk zijn verticale standaarden noodzakelijk om goed aan te sluiten bij de context van de organisatie. Verticale standaarden kunnen een nadere invulling zijn van horizontale standaarden, zie hiervoor de volgende paragraaf.

Om het nog complexer te maken zijn er standaarden die gebruikt worden om standaarden te maken, denk bijvoorbeeld aan de standaard UML, als taal om diagrammen te tekenen die bijvoorbeeld het proces en data-model van een standaard bevatten.


### De relatie met internationale standaarden

BOMOS focust zich op de semantisch standaarden. Semantische standaarden kennen een ongekende complexiteit in vergelijking met andere standaarden en worden anders ontwikkeld en beheerd. Het merendeel van de IT-standaarden wordt al buiten de officiële standaardisatieorganisaties (zoals ISO en NEN) ontwikkeld, namelijk in zogenoemde industrieconsortia zoals W3C en OASIS. Wanneer we naar semantische standaarden kijken, gaat het echter nog een stap verder aangezien die grotendeels door een eigen organisatie ontwikkeld worden.

De praktijk laat zien dat alleen een onderscheid tussen horizontale en verticale standaarden te beperkt is. Internationale verticale standaarden hebben vaak nog een specifieke invulling nodig om bijvoorbeeld in de context van een land (zoals Nederland) perfect te kunnen aansluiten bij de bedrijfsprocessen in die context. Dit is noodzakelijk om interoperabiliteit te kunnen behalen. Op nationaal niveau ontstaan dan standaarden, ook wel afspraken of toepassingsprofielen genoemd, die een verdere invulling bevatten van een internationale standaard. Daarnaast worden er ook regelmatig specifieke codelijstjes voor de nationale context toegevoegd. Dit leidt tot de volgende classificatie:

*   Internationale horizontale standaard
*   Internationale verticale standaard
*   Nationale standaard/toepassingsprofiel/afspraak/taxonomie
*   Nationale vocabulaires, codelijstjes, etc.

Ook in de organisaties is dit terug te zien: HL7 is de internationale standaard, en daarnaast is er HL7 Nederland. Bij het internationale HR-XML is het SETU dat Nederlandse HR-XML profielen maakt.

Alle vormen, of het nu een internationale horizontale standaard is of een nationaal codelijstje, moeten allemaal ontwikkeld en beheerd worden! Overigens wil het niet zeggen dat alle vier de classificaties voor een bepaald toepassingsdomein moeten voorkomen. In de praktijk kan elke willekeurige combinatie voorkomen, afhankelijk van de situatie.

Tijdens de adoptiefase is nog wel eens een gehoorde opmerking dat men alleen de internationale standaard wil adopteren in plaats van de nationale. De argumentatie is meestal dat men wereldwijd zaken doet, of dat de internationale standaard breder aansluit of breder bekend is. In de praktijk zal dit echter leiden tot beperkte interoperabiliteit aangezien de internationale standaard minder goed zal aansluiten en veelal ook te veel vrijheidsgraden kent. Omdat interoperabiliteit het doel is van standaarden is het geen verstandige keus. Men zou zich moeten richten op de nationale standaard die zorg draagt voor aansluiting bij internationale standaarden en zorg draagt voor optimale toepassing in de Nederlandse context.

Belangrijk aandachtspunt daarbij is dat in een situatie van bijvoorbeeld een internationale verticale standaard in combinatie met een nationaal toepassingsprofiel, dat voor beide een andere naam wordt gehanteerd om verwarring in de praktijk voorkomen.


### Voorbeelden van gelaagdheid van standaarden


#### Voorbeeld 1: Uitzendbranche

[TODO: dit voorbeeld is welicht niet meer relevant ivm de adoptie van de NLCIUS standaard]

[TODO: INVOEGEN TABEL 3]

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/BOMOS-214.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/BOMOS-214.png "image_tooltip")



#### Voorbeeld 2: Onderwijs

EduStandaard maakt en beheert toepassingsprofielen (door EduStandaard “afspraken” genoemd) voor het Nederlandse onderwijsveld. Men maakt hier gebruik van verschillende internationale standaarden waaronder de IMS familie, maar ook specifiek IEEE LOM (Learning Object Metadata) voor metadata. De EduStandaard afspraken maken vervolgens gebruik van vocabulaires.



<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/BOMOS-215.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/BOMOS-215.png "image_tooltip")


[TODO: INVOEGEN TABEL 4]

IEEE LOM (is een standaard in het onderwijs om leermateriaal te metadateren). Echter aangezien landen verschillende onderwijssystemen kennen is een landelijk toepassingsprofiel nodig. Voor IEEE LOM zijn er velen, zoals UK LOM Core (Groot-Brittannie), CanCore (Canada), NORLOM (Noorwegen) en voor Nederland NL-LOM. Binnen dit toepassingsprofiel worden verschillende vocabulaires gebruikt, bijvoorbeeld “Referentiekader taal en rekenen”, die is bedoeld om de werkelijke basiskennis en vaardigheden van taal en rekenen in beeld te brengen. De vocabulaire is opgebouwd uit niveaus met een natuurlijke opbouw, onafhankelijk van leeftijd en onderwijsvorm, om de doorlopende leerlijnen op het gebied van taal en rekenen te bevorderen. Deze vocabulaire wordt gebruikt bij het metadateren van leermateriaal om aan te duiden welk niveau het leermateriaal nastreeft (classificatie).

#### Andere voorbeelden

XBRL is een voorbeeld van een internationale verticale standaard (in de financiële sector) waarvoor nationale taxonomieën zijn opgesteld, bijvoorbeeld de US GAAP of in Nederland door het SBR programma.

In het kader van e-factureren heeft de Nederlandse overheid gekozen voor een internationale horizontale standaard (UBL), en heeft men vervolgens zelf een factuurmodel ontwikkeld om de vrijheidsgraden te beperken. Dus ook hier is er sprake van een nationaal toepassingsprofiel om uiteindelijk interoperabiliteit te kunnen bereiken, alleen is dit toepassingsprofiel nog niet echt gestandaardiseerd. Overigens voor e-factureren rond flexibele arbeid heeft de Nederlandse overheid gekozen voor het gestandaardiseerde factuurmodel van SETU, waarin de internationale horizontale standaard OAGIS wordt gebruikt.

Tot slot, ook binnen de standaarden zelf kan weer gelaagdheid ontstaan, op verschillende manieren. Onderstaand voorbeeld is afkomstig van de StUF-standaard waarin we binnen de StUF familie relaties zien tussen verticale-sectormodellen, en horizontale standaarden. Daarnaast illustreert dit voorbeeld ook dat binnen de semantische StUF standaard op de onderste laag (protocol bindingen) ook technische zaken worden afgesproken die normaal gesproken niet bij een semantische standaard horen. Deze ‘transportlaag’ wordt vaak toch meegenomen om een totaaloplossing voor het domein te kunnen bieden voor interoperabiliteit, ondanks dat dit transport onderwerp niet sector-specifiek is.

### Sector overstijgende interoperabiliteit: Verzuiling

Door de sector-specifieke aanpak van de semantische standaarden ontstaat de angst voor verzuiling van sectoren. Interoperabiliteit over sectoren heen wordt niet opgelost, en wordt zelfs mogelijk steeds lastiger. Het potentiële probleem is alom bekend, en oplossingen worden daarvoor bedacht maar tot op heden stranden deze in zeer lage adoptie en gebrek aan draagvlak en ondersteuning. Dat kan twee oorzaken hebben;

1. Het probleem van sectoroverstijgende interoperabiliteit wordt nog niet als nijpend beschouwd aangezien binnen de sector nog grotere uitdagingen liggen.
2. De voorgestelde technische oplossingen zijn vaak uitermate complex. Bijvoorbeeld een technisch fraaie oplossing is de UN/CEFACT Core Components standaard. Deze standaard is grofweg tien jaar oud, maar kan op het gebied van adoptie nog wel een boost gebruiken.

<p class="comment" style="color:red">herzien: is UN/CEFACT core components 10 jaar oud? Zijn er andere delen van de tekst verouderd? </p>

De kern van de oplossing zit hem waarschijnlijk niet in de techniek, maar in de beheerorganisaties actief in de verschillende domeinen. Deze zullen minder verkokerd moeten optreden en meer moeten samenwerken met de collega beheer-organisaties in aanverwante sectoren. Daar is de laatste jaren dan ook al verbetering in opgetreden. Mede ook op basis van het ‘open’ gedachtegoed, want in een ‘open world’ (zie paragraaf 8.1) zijn er geen concurrerende standaarden en sluiten standaarden perfect op elkaar aan.

### De relatie met formele standaarden

De vorige paragrafen maken helder dat semantische standaarden in de meeste gevallen een gelaagdheid kennen en daarmee voortbouwen of gebruik maken van andere standaarden. Interessant daarbij is een probleem dat generiek is voor het ontwikkelen van standaarden, maar in de pressure cooker (zie hoofdstuk 7) nadrukkelijk naar voren komt: de omgang met formele (o.a. ISO, CEN, NEN) standaarden. Uitgangspunt is namelijk dat er zoveel mogelijk hergebruik plaatsvindt van bestaande standaarden en dat niet het wiel opnieuw uitgevonden wordt.

Bij formele standaarden zijn er een aantal pijnpunten:

**Het niet kunnen inzien van de formele standaarden:** Een aantal keren werd in de sessies melding gemaakt dat een bestaande formele standaard mogelijk al een (deel)oplossing bevat. Echter niemand weet het zeker want niemand heeft de standaard ingezien omdat er kosten aan verbonden zijn. Ook al kunnen de kosten beperkt zijn, de drempel is te hoog. Nu moest door de begeleider na afloop van de dag de standaard maar aangeschaft worden, om er soms na drie minuten achter te komen dat de standaard niet bruikbaar was. Dit staat snelle voortgang (in de pressure cooker) in de weg. In de praktijk blijkt (bijv. bij Geonovum en SETU) dat zelfs een ‘gratis registratie’ al als een te hoge drempel wordt ervaren.

**De kosten tijdens het ontwikkelen van standaarden:** De kosten voor een formele standaard zijn gemiddeld grofweg 100 euro per standaard. Relatief een klein bedrag bij de ontwikkeling van een nieuwe standaard, soms hooguit zonde als direct na aanschaf blijkt dat die niet relevant is. Maar een groter probleem is het aantal, bijna nooit is het een standaard die aangeschaft moet worden. In het geval van de pressure cooker voor de afvalsector ging het naast de aanschaf van een DIN standaard, ook om de aanschaf van NEN-, ENen ISO-standaarden, waarbij een ISO standaard uit vier delen bestaat die los aangeschaft dienen te worden. Dan nemen de kosten, maar ook de frustratie over het gedoe verder toe. Dit gedoe heeft vaak ook met inkoop-proces binnen een organisatie te maken. Al snel ontstaat een “laat maar, zal toch wel niet nuttig zijn” gevoel.

Dit probleem kan ondervangen worden door de werkgroep/pressure cooker onder te brengen bij het NEN, aangezien NEN werkgroepen onbeperkt inzage hebben in de standaarden. Echter aan het onderbrengen van de werkgroep bij NEN zijn ook kosten verbonden.

**Hergebruik:** De waarde van de formele standaarden is groot. Ook in de pressure cooker voor de afvalsector werd genoeg waardevols in de bestaande formele standaarden gevonden, waardoor zeker niet het wiel opnieuw uitgevonden hoefde te worden. Alleen dan wordt het onduidelijk hoe de formele standaarden hergebruik toestaan. Er bestaan twee opties:

* Verwijzen naar de formele standaard, maar dat leidt tot kosten voor implementaties (zie onder).
* Een stuk uit de formele standaard overnemen. 
  
Dit laatste is met name nuttig als de formele standaard veel breder (of voor een ander domein) van toepassing is maar dat de keuzes ook prima van toepassing zijn op ‘onze’ standaard. Wel leidt het tot vraagstukken rondom de openheid van het eindresultaat. Het NEN hanteert als vuistregel dat 10% overgenomen mag worden na overleg met het NEN. Dit laatste is ook noodzakelijk zodat NEN kan controleren of er geen patenten worden geschonden die op de formele standaarden kunnen rusten.

**De kosten voor de implementaties:** Als verwezen wordt naar een bestaande formele standaard, dan zal elke leverancier die de standaard wil implementeren deze formele standaard moeten aanschaffen. De eigen standaard kan dan wel open en gratis beschikbaar zijn, maar door de verwijzing creëren we toch een adoptiedrempel, en mogelijk risico dat de standaard verkeerd geïmplementeerd wordt omdat men tijdens de implementatie besluit de formele standaard niet aan te schaffen. Dus worden alle implementatie-partijen opgezadeld met kosten en wordt zo toch een adoptie en interoperabiliteits-drempel gecreëerd, wat niet de bedoeling was.


### Strategieën voor omgang met lokalisatie profielen
Als we in een nationale, sectorspecifieke context, een internationale standaard willen gebruiken, dan creëren we een belangrijke afhankelijkheid. De invulling van de relatie tussen de nationale en internationale standaard kan op verschillende manieren worden ingevuld, afhankelijk van de context en de gekozen strategie. Idealiter wordt gewoon de internationale standaard volledig geadopteerd, maar in de praktijk weten we dat een internationale standaard bijna nooit een op een overgenomen kan worden; soms zijn veranderingen beperkt: slechts wat extra zaken die voor de specifieke nationale context toegevoegd moeten worden om interoperabiliteit te kunnen bereiken.

De volgende situaties kunnen zich voordoen:

*  De specifieke context vergt uitbreidingen/aanpassingen aan de standaard
*  Er zitten vele overbodige zaken in de standaard die zorgen voor extra complexiteit die niet nodig is voor de specifieke context
*  Er worden fouten gevonden in de internationale standaard
*  Er missen zaken in de standaard die niet specifiek zijn voor de context
*  Er is behoefte aan een nieuwe standaard

Algemeen gesproken kunnen dan de volgende activiteiten ondernomen worden:

*   Aanpassen in de internationale standaard (en brengen de aanpassingen niet terug naar de internationale standaard) (Adaptations)
*   Toegestane uitbreidingen aan de standaard invullen (Extensions)
*   Zaken uit de standaard halen (Ommissions) • Passen de standaard tijdelijk aan (we brengen de gewenste aanpassingen in bij de internationale standaard, maar hebben nu een oplossing nodig die tijdelijk is, totdat de internationale standaard is aangepast) (Temporary Adaptations)  


![alt_text](images/adoptiepaden_standaard.png "Adoptiepaden van een standaard")

<p id="gdcalert18" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/BOMOS-217.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert19">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/BOMOS-217.png "image_tooltip")

Met name om interoperabiliteit internationaal mogelijk te maken is het verstandig om zoveel mogelijk in lijn te blijven met de internationale standaarden en een strategie te kiezen aan de rechterkant van het figuur, waar mogelijk compliant profiling. Echter dat vergt afstemming met de internationale standaard, waaraan kosten verbonden zijn, ondermeer door het bezoeken van de internationale standaardisatie bijeenkomsten. Een noodzakelijkheid om interoperabiliteit in internationale context na te streven. 


