export default {
  common: {
    pluginName: 'WebSec Coach',
    back: 'Tillbaka',
    clickHereToLearnMore: 'Klicka här för att lära dig mer!',
  },
  popup: {
    domainInfo: {
      domainOk: 'Domänen finns inte i några listor',
    },
    password: {
      title: 'Lösenord',
      summary: `
        <h4>Ett bra lösenord är lätt att komma ihåg och svårt att knäcka!</h4>
        <p>Det löser du med en fras som är <strong>minst fyra ord lång</strong>. Kom ihåg att <strong>inte använda personlig information som namn eller personnummer</strong> i ditt lösenord.</p>
      `,
      tester: {
        title: 'Testa ditt lösenord här!',
        strength: 'Styrka',
        usePassword: 'Använd detta lösenord',
        strengths: {
          veryWeak: 'Väldigt svagt lösenord',
          weak: 'Svagt lösenord',
          medium: 'Medelmåttigt lösenord',
          strong: 'Starkare lösenord',
          veryStrong:  'Mycket starkt lösenord!',
        }
      }
    },
    phishing: {
      title: 'Nätfiske (phishing)',
      summary: `
        <ul>
          <li>Läs alltid igenom mailet noga innan du öppnar några filer eller länkar</li>
          <li>Dela aldrig med dig av kort-/kontonummer eller lösenord</li>
          <li>Hör av dig till avsändaren via telefon om du är osäker</li>
        </ul>
      `,
      links: `
        <a href="https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/informationssakerhetsmanaden/tank-sakert/skydda-dig-mot-natfiske-och-skadlig-kod/">Läs mer hos MSB</a>
        <a href="https://polisen.se/utsatt-for-brott/skydda-dig-mot-brott/bedrageri/natfiske-phishing-/">Läs mer hos Polisen</a>
      `,
    },
    fakeNews: {
      title: 'Fake news',
      summary: `
        <p>Allt på Internet är inte sant.</p>
        <p>Tänk på att vissa konton och hemsidor försöker sprida falska eller vinklade nyheter.</p>
        <p>Var källkritisk och kontrollera avsändare av information och dubbelkolla mot andra källor.</p>
      `,
    },
    scamming: {
      title: 'Nätbedrägerier',
      summary: `
        <p>Kriminella på internet försöker på olika sätt lura till sig pengar och annat genom bland annat:</p>
        <ul>
          <li>Falska annonser på marknadsplatser som Blocket</li>
          <li>Fejkade e-handelsplatser</li>
          <li>Att skicka fejkade meddelanden i sociala medier</li>
        </ul>
        <p>Anmäl om du blir utsatt för brott på <a href="https://polisen.se/utsatt-for-brott/polisanmalan/">https://polisen.se/utsatt-for-brott/polisanmalan/</a></p>
      `,
    }
  },
  guide: {
    close: 'Stäng guiden',
    listen: 'Lyssna',
    wellDone: 'Bra jobbat!',
    tabClosing: 'Den här fliken stängs automatiskt om några sekunder...',
    previousPage: 'Föregående sida',
    nextPage: 'Nästa sida',

    password: {
      title: "Lösenordsguide",
      intro: `
        <h2>Ett bra lösenord är lätt att komma ihåg och svårt att knäcka!</h2>
        <p>Det löser du med en fras som är <strong>minst fyra ord lång</strong>. Kom ihåg att <strong>inte använda personlig information som namn eller personnummer</strong> i ditt lösenord.</p>
      `,
      guide: `
        <h2>Skapa säkrare lösenord genom att göra dem längre!</h2>
        <p>Ju fler ord desto bättre. Kom ihåg att <strong>aldrig skriva ner ditt lösenord</strong> på papper eller i någon fil på datorn.</p>
        <p>Du kan även göra lösenordet unikt genom att lägga till var det ska användas.</p>
        <p>I nästa steg får du <strong>testa dina kunskaper</strong>!</p>
      `,
      quiz1: {
        question: 'Vilket av följande är bäst lösenord?',
        answer1: '1. Ditt namn eller personnummer',
        feedback1: 'Fel, använd aldrig information om dig själv i ditt lösenord, det är det första en hacker provar!',
        answer2: '2. EnfinblåstolFacebook',
        feedback2: 'Helt rätt, du har koll på läget! 🎉',
        answer3: '3. ASFD#%T#GT%#Y¤GW#G%¤#',
        feedback3: 'Även om det är långt så är det svårt att komma ihåg utan att skriva ner det. Använd bara denna typ av lösenord om du kan memorera dem.',
      },
      quiz2: {
        question: 'Vad är viktigast för att välja ett bra lösenord?',
        answer1: '1. Att det är långt och lätt att komma ihåg.',
        feedback1: 'Helt rätt, du har koll på läget! 🎉',
        answer2: '2. Att det är helt slumpmässigt.',
        feedback2: 'Helt slumpade lösenord kanske låter bra, men är svårt att komma ihåg. Använd bara denna typ av lösenord om du kan memorera dem.',
        answer3: '3. Att det innehåller information om dig själv.',
        feedback3: 'Använd aldrig information om dig själv i ditt lösenord, det är det första en hacker provar!',
      },
      quiz3: {
        question: 'Vad är rätt om hur du bör hantera dina lösenord?',
        answer1: '1. Skriva ner dem för att alltid komma ihåg dem',
        feedback1: 'Skriv aldrig ner dina lösenord, en angripare kan hitta lappen eller filen! Gör hellre lösenord som är lätta att komma ihåg genom att använda meningar med minst fyra ord som lösenord.',
        answer2: '2. Använd samma lösenord för alla konton, men byt ofta.',
        feedback2: 'Att använda samma lösenord på flera ställen är farligt, om en angripare hackar en sida kan han komma in på alla dina konton. Att ofta byta lösenord gör att det är svårt att komma ihåg vilket lösenord som går vart och är inte längre rekommenderat av ledande organisationer.',
        answer3: '3. Använd unika lösenord för dina olika konton men gör dom lätta att komma ihåg.',
        feedback3: 'Helt rätt, använd exempelvis en fras med minst fyra ord följt av den tjänst där lösenordet används, exempelvis EnLitenRosaBollJobbet 🎉',
      },
    },

    phishing: {
      title: 'Nätfiskeguide',
      intro: `
        <p>Nätfiske (phishing) är en vanlig metod där en angripare försöker lura sig till känsliga uppgifter som lösenord eller bank-/kortuppgifter via e-post, sms, eller andra kanaler.</p>
        <p>Ibland finns också länkar som tar användaren till en sida som ser genuin ut (t.ex. en kopia av en banks inloggningssida) där angriparen försöker lura användaren att skriva in sina uppgifter eller ladda ner skadlig kod.</p>
      `,
      read: `
        <h2>Läs igenom texten noga!</h2>
        <p>Ofta är nätfiske-mail maskinöversatta med både stavfel och konstiga formuleringar.</p>
        <p>Officiella mail innehåller nästan alltid en signatur med kontaktuppgifter längst ner, men brukar ofta saknas i nätfiske-mail.</p>
      `,
      links: `
        <h2>Kontrollera avsändaradress och länkar</h2>
        <p>Tänk på att vara försiktig med att klicka på länkar, bilagor eller ladda ned program som kommer via mejl, sms eller olika webbsidor.</p>
        <p>Håll muspekaren över både avsändaradress och länkar så kan du se vart de pekar i klartext, oftast i webbläsarens nedre vänstra hörn.</p>
        <p>På bilden nedan kan du se en länk som ser ut att gå till <i>www.swedbank.se</i>. Kan du hitta felet?</p>
      `,
      links2: `
        <h2>Kontrollera avsändaradress och länkar</h2>
        <p>Var uppmärksam på adresserna! Ofta används liknande domäner för att försöka lura användaren, till exempel nordea@gmail.com istället för noreply@nordea.se.</p>
      `,
      suspicion: `
        <p>Vid misstanke om phishing, men där du fortfarande är osäker så är det bäst att ta kontakt med den påstådda avsändaren via andra kanaler, t.ex. telefon. Då kan du verifiera om mailet faktiskt är genuint.</p>
      `,
      summary: `
        <h2>Sammanfattningsvis:</h2>
        <ul>
          <li>Läs alltid igenom mailet noga innan du öppnar några filer eller länkar</li>
          <li>Dela aldrig med dig av kort-/kontonummer eller lösenord</li>
          <li>Vid misstanke om nätfiske bör du verifiera avsändaren via andra kanaler</li>
        </ul>
      `,
    },

    fakeNews: {
      title: 'Fejknyheter',
      intro: `
        <p>Allt på Internet är inte sant.</p>
        <p>Tänk på att vissa konton och hemsidor försöker sprida falska eller vinklade nyheter.</p>
        <p>Var källkritisk och kontrollera avsändare av information och dubbelkolla mot andra källor.</p>
      `,
      page1: `
        <p>Vissa som skriver nyheter eller sprider information på internt har en dold agenda. De kan försöka vilseleda, påverka eller vinkla information för att passa deras syfte. Detta kallas fejkade nyheter, eller fake news.</p>
      `,
      page2: `
        <p>Fejkade nyheter är ofta känslomässigt skrivna, forcerande och kan upplevas som märkliga. Tro inte på allt du läser utan dubbelkolla mot andra källor. Det kan vara svårt att veta vilka sidor man kan lita på så dubellkoll är alltid bra.</p>
      `,
      page3: `
        <p>Seriösa nyhetssidor har alltid en person som är ansvarig utgivare och beskriver sina politiska ställningstaganden. Kika efter rubriken ”om oss” eller liknande, där brukar sådant stå. Vill du vara säker på att information stämmer är de bra att läsa officiell myndighetsinformation.</p>
      `,
    },

    scamming: {
      title: 'Nätbedrägerier',
      intro: `
        <p>Kriminella på internet försöker på olika sätt lura till sig pengar och annat genom bland annat:</p>
        <ul>
          <li>Falska annonser på marknadsplatser som Blocket</li>
          <li>Fejkade e-handelsplatser</li>
          <li>Att skicka fejkade meddelanden i sociala medier</li>
        </ul>
        <p>Anmäl om du blir utsatt för brott på <a href="https://polisen.se/utsatt-for-brott/polisanmalan/">https://polisen.se/utsatt-for-brott/polisanmalan/</a></p>
      `,
      page1: `
        <p>Bedragare försöker luras genom att skapa falska annonser på exempelvis blocket och tradera. Ett vanligt sätt är att de begär förskottsbetalning för en vara som sedan inte levereras.</p>
        <p>Skydda dig genom att göra upp affären fysiskt eller med en säker betaltjänst där både köpare och säljare behöver legitimera sig innan betalning.</p>
      `,
      page2: `
        <p>Det finns också oseriösa och kriminella som skapar hemsidor där de genomför bedrägerier genom att sälja produkter som sedan aldrig levereras.</p>
        <p>Även vid handel via hemsidor som drivs av företag så är det en bra ide att kontrollera att sidans ägare är seriös och att använda en säker betaltjänst som möjliggör betalning i efterhand via faktura.</p>
      `,
      page3: `
        <p>Ett vanligt sätt att luras i sociala medier är att skapa konton i falska namn och sedan kontakta användare och på olika sätt be om pengar. Ibland kan någon utge sig för att vara en kompis i nöd.</p>
        <p>Var alltid misstänksam när någon ber om pengar på internet. Om någon du känner ber om hjälp med pengar bör du alltid ringa personen och bekräfta att det verkligen är hen du pratar med.</p>
      `,
      page4: `
        <p>Anmäl alltid när du blir utsatt för brott på nätet. Genom att anmäla brott kan du själv få upprättelse och du bidrar till polisens möjlighet att stoppa kriminella på nätet!</p>
      `,
    },
  },

  warningPage: {
    goingTo: 'Du är på väg till:',
    continueTo: 'Gå vidare till',
    showMore: 'Avancerat...',
    whitelistCheckbox: 'Varna inte för den här domänen igen',

    externalLinkTitle: 'Extern länk',
    externalLink: 'Du har öppnat en länk utifrån. Läs igenom webbadressen ovan noga. Är du säker på att du vill gå vidare?',

    fakeNewsTitle: 'Fake news',
    fakeNews: 'Sidan du är på väg till är känd för att sprida falsk eller väldigt vinklad information.',

    malwareTitle: 'Varning för skadlig kod!',
    malware: 'Sidan du är på väg till är känd för att innehålla skadlig kod. Du avråds starkt från att gå vidare.',

    phishingTitle: 'Varning för nätfiske!',
    phishing: 'Sidan du är på väg till är känd för nätfiske.',

    spamTitle: 'Skräppost',
    spam: 'Sidan du är på väg till är känd för att skickas ut genom skräppost.',
  },

  settings: {
    title: 'Inställningar',
    
    passwordHelp: 'Lösenordshjälp',
    showTooltip: "Visa tooltip",

    domainBlocking: 'Domänblockering',
    blockDomains: 'Blockera domäner',
    blocklist: 'Blocklista',
    lastUpdated: 'Senast uppdaterad:',
    updating: 'Uppdaterar...',
    updateNow: 'Uppdatera nu',
    updateSucceeded: 'Uppdateringen lyckades!',
    updateFailed: 'Uppdateringen misslyckades: ',

    externalLinks: 'Externa länkar',
    warnExternalLinks: 'Varna vid klick på länkar utifrån',

    phishingPopup: 'Nätfiske-popup',
    enablePhishingPopup: 'Visa popup med information om nätfiske i mailinkorgen',

    featureNotAvailable: 'Den här funktionen stöds inte i din webbläsare.'
  },
}
