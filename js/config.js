var respecConfig = {
  //voor specStatus mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specType
  specType: "HR",
  // TODO: Standaard emailadres bij een consultatieversie: geo-standaarden@geonovum.nl
  // TODO: Geef bij emailComments een ander emailadres op als dat gewenst is.
  // TODO: emailComments: '...',
  // TODO: Voor pubDomain mogelijkheden zie https://github.com/Geonovum/respec/wiki/pubDomain
  // TODO: pubDomain: "...",
 
  // Vul in om een korte extra uitleg te weergeven op de docs.centrumvoorstandaarden.nl website.
  //subExplanation: "", 
 
  // Voor publishDate zie https://github.com/w3c/respec/wiki/publishDate
  // Als er geen publishDate is opgegeven, genereert ReSpec de dataum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  // https://docs.centrumvoorstandaarden.nl/{pubDomain}/{shortName}
  //publishDate: "2017-12-22",
  // Als er een eerder gepubliceerde versie is, geef dan de datum daarvan op
  //previousPublishDate: "2017-05-31",
  // Zie https://github.com/w3c/respec/wiki/previousMaturity. Dit moet een
  // Als previousMaturity niet opgegeven wprdt, maar previousPublishDate wel, dan wordt dezelfde status gebruikt als bij specStatus
  //previousMaturity: "WV",
  // licentie. Kiezen uit:
  license: 'cc-by-nd',
  // logos: [], // Geef een lege array op als er geen Geonovum logo moet staan
  doJsonLd: true,
  editors: [
    {
      name: "Erwin Folmer",
      company: "Kasaster",
      companyURL: "http://www.kadaster.nl/",
    },
    {
      name: "Erwin Kaats.",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
        {
      name: "Wouter van den Berg",
      company: "TNO",
      companyURL: "http://www.tno.nl/",
    },
  ],
  authors: [{
    name: "Erwin Kaats",
    url: "https://logius.nl/standaarden",
  }
],
  // shortName = korte naam voor in de url van het document, gebruik alleen letters, cijfers en eventueel '-'
  shortName: "bomos",
  // url van de github repository waar je in werkt
  github: "https://github.com/Logius-standaarden/BOMOS",
  // url van de issue lijst in de github repository waar je in werkt
  //issueBase: "https://github.com/centrumvoorstandaarden/.../issues/",
  // in localBiblio kun je bibliografische items opnemen. In de tekst kun je dan tussen blokhaken verwijzen naar de korte naam bv [NEN3610].
  nl_markdownSplitH1sections: false,
  nl_organisationName: "Logius",
  nl_organisationPrefix: "LS-",
  nl_markdownTableClass: "logius",
  nl_markdownEmbedImageInFigure: true,
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    //src: "http://localhost:8081/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },
  localBiblio: {
    NEN3610: {
      href: "http://www.nen.nl/web/Normshop/Norm/NEN-36102011-nl.htm",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
  },
};
