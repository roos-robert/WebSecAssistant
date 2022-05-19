export default {
  common: {
    pluginName: 'WebSec Assistant',
    back: 'Back',
    clickHereToLearnMore: 'Click here to learn more!',
  },
  popup: {
    domainInfo: {
      domainOk: 'The domain is not listed',
    },
    password: {
      title: 'Password',
      summary: `
        <h4>A good password is easy to remember and hard to crack!</h4>
        <p>You solve this with a phrase that is <strong> at least four words long </strong>. Remember <strong>do not use personal information such as name or social security number</strong> in your password.</p>
      `,
      tester: {
        title: 'Test your password here!',
        strength: 'Strength',
        usePassword: 'Use this password',
        strengths: {
          veryWeak: 'Very weak password',
          weak: 'Weak password',
          medium: 'Moderate password',
          strong: 'Stronger password',
          veryStrong: 'Very strong password!',
        }
      }
    },
    phishing: {
      title: 'Phishing',
      summary: `
        <ul>
          <li>Always read the mail carefully before opening any files or links</li>
          <li>Never share your card / account number or password</li>
          <li>Contact the sender by phone if you are unsure</li>
        </ul>
      `,
      links: `
        <a href="https://www.msb.se/sv/amnesomraden/informationssakerhet-cybersakerhet-och-sakra-kommunikationer/informationssakerhetsmanaden/tank-sakert/skydda-dig-mot-natfiske-och-skadlig-kod/">Read more at MSB</a>
        <a href="https://polisen.se/utsatt-for-brott/skydda-dig-mot-brott/bedrageri/natfiske-phishing-/">Read more at the Police</a>
      `,
    },
    fakeNews: {
      title: 'Fake news',
      summary: `
        <p>Not everything on the Internet is true.</p>
        <p>Keep in mind that some accounts and websites are trying to spread fake or biased news.</p>
        <p>Be source critical and check senders of information and double check against other sources.</p>
      `,
    },
    scamming: {
      title: 'Online scams',
      summary: `
        <p>Criminals on the internet try in various ways to steal money and other things by, among other things:</p>
        <ul>
          <li>False ads in marketplaces like Blocket</li>
          <li>Fake e-commerce sites</li>
          <li>Sending fake social media messages</li>
        </ul>
        <p>Report if you are exposed to crime at <a href="https://polisen.se/utsatt-for-brott/polisanmalan/">https://polisen.se/utsatt-for-brott/polisanmalan/</a></p>
      `,
    }
  },
  guide: {
    close: 'Close the guide',
    listen: 'Listen',
    wellDone: 'Good job!',
    tabClosing: 'This tab closes automatically in seconds ...',
    previousPage: 'Previous page',
    nextPage: 'Next page',

    password: {
      title: "Password Guide",
      intro: `
        <h2>A good password is easy to remember and hard to crack!</h2>
        <p>You solve this with a phrase that is <strong>at least four words long</strong>. Remember <strong>do not use personal information such as name or social security number</strong> in your password.</p>
      `,
      guide: `
        <h2>Create more secure passwords by making them longer!</h2>
        <p>The more words the better. Remember to <strong>never write down your password</strong> on paper or in any file on your computer.</p>
        <p>You can also make the password unique by adding where to use it.</p>
        <p>In the next step, you will <strong>test your skills</strong>!</p>
      `,
      quiz1: {
        question: 'Which of the following is the best password?',
        answer1: '1. Your name or social security number',
        feedback1: 'Wrong, never use information about yourself in your password, this is the first thing a hacker tries!',
        answer2: '2. ComfortableChairFacebook',
        feedback2: 'Absolutely right, you know the situation! 🎉',
        answer3: '3. ASFD#%T#GT%#Y¤GW#G%¤#',
        feedback3: 'Even if it\'s long, it\'s hard to remember without writing it down. Only use this type of password if you can memorize it.',
      },
      quiz2: {
        question: 'What is the most important thing to choose a good password?',
        answer1: '1. That it is long and easy to remember.',
        feedback1: 'Absolutely right, you know the situation! 🎉',
        answer2: '2. That it is completely random.',
        feedback2: 'Completely random passwords may sound good, but are hard to remember. Only use this type of password if you can memorize it.',
        answer3: '3. That it contains information about yourself.',
        feedback3: 'Never use information about yourself in your password, this is the first thing a hacker tries!',
      },
      quiz3: {
        question: 'What\'s right about how you should handle your passwords?',
        answer1: '1. Write them down to always remember them',
        feedback1: 'Never write down your passwords, an attacker could find the note or file! Rather make passwords that are easy to remember by using sentences with at least four words as passwords.',
        answer2: '2. Use the same password for all accounts, but change often.',
        feedback2: 'Using the same password in several places is dangerous, if an attacker hacks a page he can access all your accounts. Frequently changing passwords makes it difficult to remember which passwords are going anywhere and is no longer recommended by leading organizations.',
        answer3: '3. Use unique passwords for your different accounts but make them easy to remember.',
        feedback3: 'Absolutely right, use for example a phrase with at least four words followed by the service where the password is used, for example SmallPinkBalloonWork 🎉',
      },
    },

    phishing: {
      title: 'Phishing Guide',
      intro: `
        <p>Phishing is a common method in which an attacker tries to cheat on sensitive information such as passwords or bank / card information via email, text message, or other channels.</p>
        <p>Sometimes there are also links that take the user to a page that looks genuine (such as a copy of a bank's login page) where the attacker tries to trick the user into entering their information or downloading malicious code.</p>
      `,
      read: `
        <h2>Read the text carefully!</h2>
        <p>Phishing emails are often machine translated with both misspellings and strange wording.</p>
        <p>Official emails almost always contain a signature with contact information at the bottom, but are often missing in phishing emails.</p>
      `,
      links: `
        <h2>Check sender address and links</h2>
        <p>Remember to be careful about clicking on links, attachments or downloading programs that come via email, text messages or various web pages.</p>
        <p>Hold the mouse pointer over both the sender address and links so you can see where they point in plain text, usually in the lower left corner of the browser.</p>
        <p>In the picture below you can see a link that seems to go to <i>www.swedbank.se</i>. Can you find the error?</p>
      `,
      links2: `
        <h2>Check sender address and links</h2>
        <p>Pay attention to the addresses! Similar domains are often used to try to deceive the user, for example nordea@gmail.com instead of noreply@nordea.se.</p>
      `,
      suspicion: `
        <p>In case of suspicion of phishing, but where you are still unsure, it is best to contact the alleged sender via other channels, e.g. phone. Then you can verify if the email is genuine.</p>
      `,
      summary: `
        <h2>In summary:</h2>
        <ul>
          <li>Always read the mail carefully before opening any files or links</li>
          <li>Never share your card / account number or password</li>
          <li>If phishing is suspected, you should verify the sender through other channels</li>
        </ul>
      `,
    },

    fakeNews: {
      title: 'Fake News',
      intro: `
        <p>Not everything on the Internet is true.</p>
        <p>Keep in mind that some accounts and websites are trying to spread fake or biased news.</p>
        <p>Be source critical and check senders of information and double check against other sources.</p>
      `,
      page1: `
        <p>Some people who write news or spread information internally have a hidden agenda. They may try to mislead, influence or skew information to suit their purpose. This is called fake news.</p>
      `,
      page2: `
        <p>Fake news is often emotionally written, forced and can be perceived as strange. Do not believe everything you read without double-checking other sources. It can be difficult to know which pages to trust so double checking is always good.</p>
      `,
      page3: `
        <p>Serious news sites always have a person who is the responsible publisher and describes their political positions. Look for the headline "about us" or similar, where it usually says so. If you want to be sure that information is correct, they are good to read official government information.</p>
      `,
    },

    scamming: {
      title: 'Online Scams',
      intro: `
        <p>Criminals on the internet try in various ways to steal money and other things by, among other things:</p>
        <ul>
          <li>False ads in marketplaces like Blocket</li>
          <li>Fake e-commerce sites</li>
          <li>Sending fake social media messages</li>
        </ul>
        <p>Report if you are exposed to crime at <a href="https://polisen.se/utsatt-for-brott/polisanmalan/">https://polisen.se/utsatt-for-brott/polisanmalan/</a></p>
      `,
      page1: `
        <p>Fraudsters try to deceive by creating fake ads on the block, for example, and trading. A common way is for them to ask for a down payment for an item that is not then delivered.</p>
        <p>Protect yourself by settling the deal physically or with a secure payment service where both buyers and sellers need to identify themselves before payment.</p>
      `,
      page2: `
        <p>There are also scammers and criminals who create websites where they commit fraud by selling products that are then never delivered.</p>
        <p>Even when trading via websites run by companies, it is a good idea to check that the site's owner is serious and to use a secure payment service that enables payment in arrears via invoice.</p>
      `,
      page3: `
        <p>A common way to cheat on social media is to create accounts in fake names and then contact users and ask for money in various ways. Sometimes someone can pretend to be a friend in need.</p>
        <p>Always be suspicious when asking for money on the internet. If someone you know asks for help with money, you should always call the person and confirm that it really is the person you are talking to.</p>
      `,
      page4: `
        <p>Always report when you are the victim of an online crime. By reporting crimes, you can get redress yourself and you contribute to the police's ability to stop criminals online!</p>
      `,
    },
  },

  warningPage: {
    goingTo: 'You\'re on your way to:',
    continueTo: 'Go to',
    showMore: 'Advanced...',
    whitelistCheckbox: 'Do not warn about this domain again',

    externalLinkTitle: 'External link',
    externalLink: 'You have opened an external link. Please read the URL above carefully. Are you sure you want to proceed? ',

    fakeNewsTitle: 'Fake news',
    fakeNews: 'The page you are about to visit is known for spreading false or very skewed information.',

    malwareTitle: 'Danger ahead!',
    malware: 'The page you are about to visit is known to contain malicious code. You are strongly advised against proceeding. ',

    phishingTitle: 'Phishing warning!',
    phishing: 'The page you are about to visit is known for phishing.',

    spamTitle: 'Spam',
    spam: 'The page you are about to visit is known to be sent via spam.',
  },

  settings: {
    title: 'Settings',
    
    passwordHelp: 'Password helper',
    showTooltip: "Show tooltip",

    domainBlocking: 'Domain blocking',
    blockDomains: 'Block domains',
    blocklist: 'Blocklist',
    lastUpdated: 'Last updated:',
    updating: 'Updating...',
    updateNow: 'Update now',
    updateSucceeded: 'Update succeeded!',
    updateFailed: 'Update failed: ',

    externalLinks: 'External links',
    warnExternalLinks: 'Warn when clicking on links outside the browser',

    phishingPopup: 'Phishing popup',
    enablePhishingPopup: 'Show phishing popup when visiting webmail',

    featureNotAvailable: 'This feature is not supported in your browser.'
  },
}
