<template lang="jade">
layout
  main#main
    .wrap
      article
        h1 Privacy Policy
        h4 What information do we collect?
        p Google, as a third party vendor, uses cookies to serve ads on your site. Google's use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy..
        h4 What do we use your information for?
        p Any of the information we collect from you may be used in one of the following ways:
        ul
          li To personalize your experience (your information helps us to better respond to your individual needs)
          li To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)
        h4 Do we use cookies?
        p Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
        p We use cookies to keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
        h4 Do we disclose any information to outside parties?
        p We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
        h4 Third party links
        p Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
        h4 Childrens Online Privacy Protection Act Compliance
        p We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.
        h4 Terms and Conditions
        p Please also visit our
          a(href='#') Terms and Conditions
          |  section establishing the use, disclaimers, and limitations of liability governing the use of our website.
        h4 Your Consent
        p By using our site, you consent to our privacy policy.
</template>

<script>
import layout from '../layout/layout.vue'

export default {
  name: 'policy',
  components: {layout},
  metaInfo: {
    title: 'Privacy Policy'
  }
}
</script>
