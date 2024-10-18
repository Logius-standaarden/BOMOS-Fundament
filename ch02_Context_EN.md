# Context & Definitions

## Context: standards for interoperability

The most important reasons for organisations to strive for interoperability are effectiveness and efficiency. Standardisation ensures improved cooperation throughout the chain comprising for example partners, suppliers and customers.


 A lack of interoperability is not only costly but can also lead to extended lead times, as revealed by numerous studies.

 The costs from the lack of interoperability in the automotive industry in the United States, for example, are estimated at 1 billion dollars, and a design time two months longer than strictly necessary (See: Brunnermeier, S.B. & S.A. Martin (2002). Interoperability costs in the US automotive supply chain. Supply Chain Management 7(2), pp. 71-82.). The government also has an interest in striving for interoperability, but has additional reasons for doing so, also from a social viewpoint. For example consider the consequences in the face of a disaster if the various emergency services were not interoperable. In respect of such topics as electronic patient records and problems concerning young people at risk, interoperability issues also emerge.

Standards are important tools for achieving interoperability and also important in terms of supplier independence. Standards come in different shapes and sizes. There are numerous classifications of standard types, but within government, the European Interoperability Framework is considered the guideline. Within this framework, a distinction is made between technical and semantic interoperability which in turn leads to a distinction between technical and semantic standards. Standards focused on technical aspects (infrastructural) can often be adopted one-for-one from international consortia such as W3C, UN/CEFACT, ETSI, ISO, CEN and IETF.

Standards of a semantic nature often require a regional profile so that specific implementation requirements can be taken into account. There are user groups (communities) active in the Netherlands responsible for developing a national profile for international standards. In the context of Dutch legislation and/or Dutch specific business and government processes, it is necessary to focus international standards on the Dutch situation.

(Business) Transaction standards, vocabularies (lists of values) or files (e.g. patient file) are other examples of semantic standards. Also typical of semantic standards are:

* They are often a specific reflection of an international standard.
* They are often intended for a specific, substantive problem:
 * For example ‘vertical’ information exchange for a specific sector: Geodomain, Education, Healthcare, etc.
 * For example ‘horizontal’: information exchange for a specific function: Purchasing, Invoicing, etc.
* They are often developed and managed in the domain (the sector) and not by formal standardisation organisations.
* The heart of the standard is the semantics (meaning) and not the technical aspects.

A semantic standard never operates in isolation and often shares multiple relationships with other international standards, including also technical standards. We often also see stratification within the semantic standard: The international semantic standard which standardises the basic semantics for a specific problem domain and provides space for standardising additional agreements in a specific context (such as a country). These additional agreements on top of the international standards are sometimes referred to as an application profile, but in many cases also simply designated by the term semantic standard. Within the application profile or semantic standard, vocabularies (code lists, etc.) beyond the standard are often adopted because they have their own dynamic and can consequently be governed by other management procedures. The result is three levels of semantic standards: international, specific context (e.g. national) and vocabularies. One vital task is to maintain harmonisation with the development and management organisations for these international standards. The semantic standards, the subject of this document, can apply in the government context (G2G, G2B and/or G2C context) but in practice this document can equally apply outside the government context.

<aside class="example" title="Gegevenswoordenboek Stedelijk Water">
The Data Dictionary Urban Water (GWSW) is an open standard for the uniform recording, exchange and sharing of data in urban water management. The GWSW is a semantic standard. It specifies the static data about objects, but also about the network, measures (construction, replacement, repair, renovation) and processes such as inspection and capacity and discharge calculations. For the exchange of data and information, it is essential that all parties work with the same system and the same definitions and that they also speak the same (computer) language. The GWSW provides that common language in which minimum datasets and quality requirements are laid down for application, according to which datasets can be assessed. The GWSW reflects improvements to data management and exchange, and consequently, in essence to sewer system management. The GWSW standard makes it a simple matter for municipalities and water authorities to openly publish the latest data about sewer systems via PDOK.
</aside>

The development and management of standards differs from the development and management of other products such as provisions and software. A provision is a combination of information, system, organisation and interface required for a service. Both internally within the provision and at the interface between the provision and the outside world, different types of standards can be used, including semantic standards. This user relationship between a standard and a provision applies equally between a standard and software.

<aside class="example" title="NL-LOM en Edurep">
The standard NL-LOM describes how metadata must be recorded in educational material. A provision that makes use of NL-LOM is Edurep, a search engine which makes it possible to find educational material based on metadata.

([NL-LOM](https://www.forumstandaardisatie.nl/standaard/nl-lom);
[Edurep](https://www.kennisnet.nl/edurep/))
</aside>

As a consequence, standards have a different set of users and a different set of challenges, such as harmonisation with communities and international standards. This does not mean that the discipline of semantic standardisation is unable to learn from other disciplines such as the software world. Models from those disciplines can be perfectly usable. In particular the BiSL framework for functional management is usable to a certain degree and was also considered in the creation of BOMOS (For more information about BiSL: Best Practice - BiSL – Een framework voor Functioneel Beheer en Informatiemanagement , Remko van der Pols, Ralph Donatz, Frank van Outvorst, Van Haren Publishing, 2005.).

BOMOS was initially developed for semantic standards; this focus is still regularly reflected among others in [de best practices in deel 2](https://logius-standaarden.github.io/BOMOS-Verdieping/). However, on the basis of user experiences, we have since also learned that where BOMOS is employed advisedly, it is also usable in the context of other standards (such as technical or organisational standards), provisions, frameworks or even other concepts such as the management of data, or software. User experiences of this kind, which may result in amended BOMOS versions for use in a specific context, can be published as BOMOS Supplementary Modules. 

## Definitions

**Management and development of standards (in short: management)**
All activities focused on structurally working towards, making available and maintaining a (set of) standard(s) that always meet the latest needs of stakeholders.

It is possible to distinguish between development and management. The management of standards relates to the making available and adaptation of existing standards based on new wishes and requirements, without introducing functional extensions. In other words, this includes the distribution of the standard for example via a website, the provision of support, the gathering of wishes and requirements and the publication of new versions.

The development of standards relates to the development of a standard as a solution for a new functional domain. This can mean that on the basis of the development the existing standard is expanded, or that a new standard emerges.

Management and development in its broadest sense, for a standard, also includes such subjects as adoption and certification. 
**Management and Development Model**
The Management and Development Model is a layered structure of subjects necessary for the development and management of an open standard, as reproduced in an activity diagram. It is the core of BOMOS.

**Community**
Each specific community or group in the electronic (government) field involved with the development and/or management of a specific (set of) standard(s), in response to an explicit common need. Because needs of this kind are often perceived both in the private and in the public domain, a community can be a form of public-private partnership.

**Open standard**  
There are many different opinions about the definition of an open standard. Above all because of the interests of different organisations, no successful definition has ever been produced. In BOMOS, we use a definition that was used in the initial period of the European Interoperability Framework, and which was adopted by the Dutch government. At a later stage adaptations were made, in particular more strict definitions, but the original definition is relatively the most open. What we understand by an ‘open standard’ is a standard that satisfies the following requirements:
1. The standard is approved and will be maintained by a not-for-profit organisation and further development is based on an open decision-making procedure accessible to all stakeholders (consensus or majority decision);
2. The standard is published and there is free access to the specification document for the standard or the document can be obtained for a nominal charge. It must be possible for all parties to copy, to supply and to use the standard free of charge or for a nominal price;
3. The intellectual property - in respect of any patents present - to (parts of) the standard is provided irrevocably on a royalty-free basis;
4. There are no restrictions regarding the reuse of the standard.

**Semantic interoperability**
Means that the collaborating parties allocate the same meaning to the data exchange.

**Semantic standards**  
Are agreements about the meaning of data.

**Working group**  
A group within the community with a demarcated sub activity with an unequivocally defined end result as its objective.

For more information about interoperability and standards:

Open Standard:  
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

Standardisation Guide for researchers: 
https://op.europa.eu/en/publication-detail/-/publication/db289e47-140b-11eb-b57e-01aa75ed71a1/

Compulsory open standards in the Netherlands:
https://www.forumstandaardisatie.nl/open-standaarden/lijst/verplicht/

Netherlands Government Reference Architecture (NORA):  
https://www.digitaleoverheid.nl/dossiers/nederlandse-overheid-referentie-architectuur-nora/
