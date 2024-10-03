# Context & Definities

## Context: standaarden voor interoperabiliteit

De belangrijkste redenen voor organisaties om interoperabiliteit na te
streven zijn effectiviteit en efficiëntie. Standaardisatie zorgt voor
een betere samenwerking in de gehele keten van bijvoorbeeld partners,
toeleveranciers en klanten. Een gebrek aan interoperabiliteit is niet
alleen kostbaar, maar kan ook leiden tot langere doorlooptijden, zoals
verschillende onderzoeken laten zien. Zo worden de kosten van gebrek
aan interoperabiliteit in de automobielindustrie in de Verenigde
Staten geschat op 1 miljard dollar, en een twee maanden langere
ontwerptijd dan strikt noodzakelijk (Zie: Brunnermeier, S.B. &
S.A. Martin (2002). Interoperability costs in the US automotive supply
chain. Supply Chain Management 7(2), pp. 71-82.). Ook de overheid
heeft belang bij het nastreven van interoperabiliteit, maar heeft nog
een extra reden ondermeer vanuit maatschappelijk oogpunt. Denk aan de
consequenties bij een ramp wanneer de verschillende
hulpdienstorganisaties niet interoperabel met elkaar zouden
zijn. Daarnaast doen zich bij thema’s als het elektronisch
patiëntendossier en de problematiek rond risicojongeren ook
interoperabiliteitsvraagstukken voor.

Standaarden zijn een belangrijk middel voor het bereiken van
interoperabiliteit, en daarnaast ook belangrijk voor
leveranciersonafhankelijkheid. Standaarden zijn er in verschillende
soorten en maten. Er zijn zeer veel indelingen in type standaarden,
maar binnen de overheid wordt het European Interoperability Framework
als leidraad gehanteerd.  Hierin wordt onderscheid gemaakt tussen
technische en semantische interoperabiliteit, waarmee ook een
onderscheid te maken is tussen technische en semantische standaarden.
De technische (infrastructureel) georiënteerde standaarden kunnen
veelal één-op-één overgenomen worden van internationale consortia
zoals W3C, UN/CEFACT, ETSI, ISO, CEN en IETF.

Standaarden van semantische aard vereisen vaak een regionaal profiel
zodat rekening kan worden gehouden met specifieke implemenatieeisen.
Zo zijn er Nederlandse gebruikersgroepen (communities) actief voor het
ontwikkelen van een nationale profielen op internationale standarden.
In de context van Nederlandse wetgeving en/of Nederlandse specifieke
bedrijfs(overheids)-processen is het namelijk noodzakelijk om
internationale standaarden toe te spitsen op de Nederlandse situatie.

(Bedrijfs)Transactie standaarden, vocabulaires (waardelijstjes) of
dossiers (bv. patiëntendossier) zijn ook voorbeelden van semantische
standaarden. Andere kenmerken van semantische standaarden zijn:

* Het zijn vaak een specifieke invulling van een internationale standaard.
* Ze zijn vaak voor een specifiek inhoudelijk probleem:
  * Bijv. ‘verticaal’: informatie-uitwisseling voor een bepaalde sector: Geo-domein, Onderwijs, Zorg, etc.
  * Bijv. ‘horizontaal’ informatie-uitwisseling voor een bepaalde functie: Inkoop, Facturatie, etc.
* Ze worden vaak ontwikkeld en beheerd in het domein (de sector), en niet door formele standaardisatieorganisaties.
* De kern van de standaard is de semantiek (de betekenis), niet de techniek.

Een semantische standaard staat nooit op zichzelf en heeft vaak
meerdere relaties met andere internationale standaarden, waaronder ook
technische standaarden. Vaak zien we ook een gelaagdheid binnen de
semantische standaard: De internationale semantische standaard die de
basissemantiek standaardiseert voor een bepaald probleemdomein en
ruimte biedt om in een specifieke context (zoals een land) nog extra
afspraken te standaardiseren. Deze extra afspraken bovenop de
internationale standaarden worden soms een toepassingsprofiel genoemd,
maar regelmatig ook gewoon aangeduid met de term semantische
standaard. Binnen het toepassingsprofiel of semantische standaard
worden vaak vocabulaires (codelijsten e.d.) buiten de standaard
vastgesteld omdat deze een eigen dynamiek kennen en daarmee andere
beheerprocedures van toepassing kunnen zijn. Hiermee hebben we drie
niveaus van semantische standaarden; de internationale, de specifieke
context (bijv. nationaal), en de vocabulaires. Een belangrijke taak is
afstemming blijven houden met de ontwikkel- en beheerorganisaties van
deze internationale standaarden. De semantische standaarden, waar dit
document op van toepassing is, kan van toepassing zijn in de
overheidscontext (G2G, G2B en/of G2C-context), maar in de praktijk zal
dit document evengoed van toepassing zijn buiten de overheidscontext.

<aside class="example" title="Gegevenswoordenboek Stedelijk Water">
Het Gegevenswoordenboek Stedelijk Water (GWSW) is een open standaard voor 
het eenduidig vastleggen, uitwisselen en delen van gegevens in het stedelijk 
waterbeheer. Het GWSW is een semantische standaard. Het specificeert de vaste 
gegevens over objecten, maar ook het netwerk, maatregelen (aanleg, vervanging, 
reparatie, renovatie) en processen zoals inspectie, capaciteits- en 
afvoerberekeningen. Voor het uitwisselen van data en informatie is het 
essentieel dat alle partijen met dezelfde systematiek en definities werken 
en dezelfde (computer)taal spreken. Het GWSW is die gezamenlijke taal, waarin 
voor toepassingen minimale datasets en kwaliteitseisen vastliggen waartegen 
datasets getoetst kunnen worden. Het GWSW geeft verbeteringen in het 
gegevensbeheer en -uitwisseling en daarmee in de basis aan het rioleringsbeheer. 
Via de GWSW-standaard is het voor gemeenten en waterschappen ook eenvoudig om actuele rioleringsdata via PDOK open te publiceren.
</aside>

Het ontwikkelen en het beheer van standaarden is anders dan het
ontwikkelen en beheren van andere producten zoals voorzieningen en
software. Een voorziening is een samenstel van informatie, systeem,
organisatie en koppelvlak ten behoeve van dienstverlening. Zowel
intern binnen de voorziening, als op het koppelvlak van de voorziening
met de buitenwereld kunnen verschillende type standaarden gebruikt
worden waaronder ook semantische standaarden. Deze gebruiksrelatie
tussen een standaard en voorziening geldt evengoed tussen een
standaard en software.

<aside class="example" title="NL-LOM en Edurep">
De standaard NL-LOM beschrijft op welke
manier metadata moet worden vastgelegd bij educatief materiaal. Een
voorziening dat gebruik maakt van NL-LOM is Edurep, een zoekmachine
die op basis van metadata educatief materiaal vindbaar maakt. 
(<a href=https://www.forumstandaardisatie.nl/standaard/nl-lom">NL-LOM</a>;
<a href=https://www.kennisnet.nl/edurep/">Edurep</a>)
</aside>

Standaarden hebben daarmee andere gebruikers, en andere uitdagingen
zoals afstemming met communities en internationale standaarden. Dat
betekent niet dat de semantische standaardisatiediscipline niet kan
leren van andere disciplines, zoals de software-wereld. Modellen uit
die disciplines kunnen bruikbaar zijn. Met name het BiSL-raamwerk voor
functioneel beheer is in enige mate bruikbaar, en deze is dan ook
meegenomen in de totstandkoming van BOMOS (Voor meer informatie over
BiSL: Best Practice - BiSL – Een framework voor Functioneel Beheer en
Informatiemanagement, Remko van der Pols, Ralph Donatz, Frank van
Outvorst, Van Haren Publishing, 2005.).

BOMOS is initieel ontwikkeld voor semantische standaarden; deze focus
is nog regelmatig terug te vinden in onder meer [de best practices in
deel
2](https://logius-standaarden.github.io/BOMOS-Verdieping/). Echter op
basis van gebruikservaringen hebben we inmiddels ook geleerd dat
wanneer BOMOS met beleid wordt toegepast het ook bruikbaar is in de
context van andere standaarden (zoals technische of organisatorische),
voorzieningen, stelsels, of andere concepten zoals het beheer van
data, of software. Dit soort gebruikservaringen, die eventueel leiden
tot aangepaste BOMOS versies voor gebruik in een specifieke context,
kunnen gepubliceerd worden als BOMOS Aanvullende Module.

## Definities

**Beheer en Ontwikkelen van standaarden (kortweg: beheer)**
Alle activiteiten gericht op het structureel werken aan, beschikbaar
stellen, en houden van een (set van) standaard(en) die steeds past bij
de actuele behoefte van de belanghebbenden.

Een onderscheid is te maken tussen ontwikkeling en beheer. Het beheer
van standaarden heeft betrekking op het beschikbaar stellen en
aanpassen van bestaande standaarden op basis van nieuwe wensen en
eisen zonder dat er sprake is van functionele uitbreidingen. Dit bevat
dus ondermeer het verspreiden van de standaard bijvoorbeeld op een
website, het bieden van ondersteuning, het verzamelen van wensen en
eisen en het uitbrengen van nieuwe versies.

Het ontwikkelen van standaarden heeft betrekking op de ontwikkeling
van een standaard als oplossing voor een nieuw functioneel
terrein. Dit kan betekenen dat op basis van de ontwikkeling de
bestaande standaard wordt uitgebreid of dat er een nieuwe standaard
ontstaat.

Beheer en ontwikkeling, in de brede zin, voor een standaard bevat ook
onderwerpen als adoptie en certificering.

**Beheer- en Ontwikkelmodel**    
Het Beheer- en Ontwikkelmodel is een gelaagde structuur van
onderwerpen die nodig zijn voor het ontwikkelen en beheren van een
open standaard, en is weergegeven als een activiteitendiagram. Het is
de kern van BOMOS.

**Community**  
Elke specifieke gemeenschap of groep in het elektronische
(overheids-)veld die zich bezighoudt met de ontwikkeling en/of het
beheer van een specifieke (set van) standaard(en), vanuit een
expliciete gezamenlijke behoefte. Omdat dergelijke behoeften vaak
zowel in het private als in het publieke domein worden gevoeld, kan
een community een publiek-private samenwerkingsvorm zijn.

**Open standaard**  
Er zijn vele meningen over de definitie van een open standaard, vooral
vanwege belangen van verschillende organisaties is het nooit gelukt om
dit goed te definiëren. In BOMOS hanteren we een definitie die in de
start periode van het European Interoperability Framework werd
gehanteerd en ook door de Nederlandse overheid werd overgenomen. Later
zijn aanpassingen, en met name afzwakkingen geïntroduceerd, maar de
oorspronkelijke definitie is relatief het meest open.  Onder een ‘open
standaard’ verstaan we een standaard die voldoet aan de volgende
eisen:
1. De standaard is goedgekeurd en zal worden gehandhaafd door een
   not-for-profit organisatie, en de lopende ontwikkeling gebeurt op
   basis van een open besluitvormingsprocedure die toegankelijk is voor
   alle belanghebbende partijen (consensus of meerderheidsbeschikking);
2. De standaard is gepubliceerd en over het specificatiedocument van
   de standaard kan vrijelijk worden beschikt of het is te verkrijgen
   tegen een nominale bijdrage. Het moet voor een ieder mogelijk zijn om
   het te kopiëren, beschikbaar te stellen en te gebruiken om niet of
   tegen een nominale prijs;
3. Het intellectuele eigendom - m.b.t. mogelijk aanwezige patenten -
   van (delen van) de standaard is onherroepelijk ter beschikking gesteld
   op een royalty-free basis;
4. Er zijn geen beperkingen omtrent het hergebruik van de standaard.

**Semantische interoperabiliteit**  
Betekent dat samenwerkende partijen aan gegevens, die uitgewisseld
worden, dezelfde betekenis toekennen.

**Semantische standaarden**  
Zijn afspraken over de betekenis van gegevens.

**Werkgroep**  
Een groep binnen de community met een afgebakende deelactiviteit met
een eenduidig gedefinieerd eindresultaat als doel.

Voor meer informatie over interoperabiliteit en standaarden:

Open Standaard:  
https://forumstandaardisatie.nl/open-standaarden

Standardisation Handbook:
https://en.wikipedia.org/wiki/Open_standard

https://open-stand.org/

European Interoperability Framework:  
https://ec.europa.eu/isa2/eif_en

BSI Guide to Standardization:  
https://www.bsigroup.com/en-GB/standards/Information-about-standards/how-are-standards-made/The-BSI-Guide-to-Standardization/

Standardisation Handbook:  
https://en.wikipedia.org/wiki/Open_standard

Handreiking Standardisatie voor onderzoekers:
https://op.europa.eu/en/publication-detail/-/publication/db289e47-140b-11eb-b57e-01aa75ed71a1/

Verplichte open standaarden in Nederland:
https://www.forumstandaardisatie.nl/open-standaarden/lijst/verplicht/

Nederlandse Overheids Referentie Architectuur (NORA):  
https://www.digitaleoverheid.nl/dossiers/nederlandse-overheid-referentie-architectuur-nora/
