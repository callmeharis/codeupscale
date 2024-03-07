import { MailIcon, PhoneIcon, TimeIcon,  } from "@/svg";
import lahoreOffice from '../../../src/images/pakistan.svg';
import ukOffice from '../../../src/images/uk.svg';
import usOffice from '../../../src/images/usa.svg';
import pakFlag from '../../../src/images/pakFlag.svg';
import usFlag from '../../../src/images/usFlag.svg';
import ukFlag from '../../../src/images/ukFlag.svg';
export const FOOTER_LINKS: any = [
    {
        title: 'Services',
        links: [
            {
                link: 'App Development'
            },
            {
                link: 'Web Development'
            },
            {
                link: 'Ecommerce Development'
            },
            {
                link: 'Game Development'
            },
            {
                link: 'Salesforce Solutions'
            },
            {
                link: 'AI & ML'
            },
            {
                link: 'IoT & Embedded'
            },
            {
                link: 'Devops'
            },
        ]
    },
    {
        title: 'Company',
        links: [
            {
                link: 'Home'
            },
            {
                link: 'About'
            },
            {
                link: 'Services'
            },
            {
                link: 'Hire Talent'
            },
            {
                link: 'Work'
            },
            {
                link: 'Careers'
            },
            {
                link: 'Contact Us'
            },
        ]
    },
    {
        title: 'Contact',
        links: [
            {
                icon: <PhoneIcon />,
                link: '123 456 789'
            },
            {
                icon: <MailIcon />,
                link: 'hola@Liftmedia.com'
            },
            {
                icon: <TimeIcon />,
                link: 'Lunes a Viernes 09:00 a 20:00 horas'
            },
        ]
    },
    {
        title: 'Mobile',
        links: [
            {

                link: 'Android Apps'
            },
            {

                link: 'iPhone Apps'
            },
            {
                link: 'Hybrid Apps'
            },
            {
                link: 'Flutter'
            },
            {
                link: 'React Native'
            },
            {
                link: 'Kotlin'
            },
            {
                link: 'Ionic'
            },
            {
                link: 'Swift'
            },
            {
                link: 'Xamrin'
            },

        ]
    },

    {
        title: 'Web',
        links: [
            {

                link: 'PHP'
            },
            {

                link: 'Java'
            },
            {
                link: ' Wordpress'
            },
            {
                link: 'Drupal'
            },
            {
                link: 'Laravel'
            },
            {
                link: 'CodeIgniter'
            },
            {
                link: 'CakePHP'
            },
            {
                link: 'TypeScript'
            },

        ]
    },
    {
        title: 'Ecommerce',
        links: [
            {

                link: 'Magento'
            },
            {

                link: 'Shopify'
            },
            {
                link: 'Ubercart'
            },
            {
                link: 'Prestashop'
            },
            {
                link: 'CS Cart'
            },
            {
                link: 'VirtueMart'
            },
            {
                link: 'BigCommerce'
            },
            {
                link: 'WooCommerce'
            },

        ]
    },
    {
        title: '  AI & ML',
        links: [
            {

                link: 'Text to Speech'
            },
            {

                link: 'Business Intelligence'
            },
            {
                link: 'Data Forecasting'
            },
            {
                link: 'Natural Language Processing'
            },
            {
                link: 'Data Analytics'
            },
            {
                link: 'Object Recognition'
            },
            {
                link: 'Sentimental Analysis'
            },
            {
                link: 'Alexa Skills Development'
            },

        ]
    },
    {
        title: 'IoT & Embedded',
        links: [
            {

                link: 'IoT App'
            },
            {

                link: 'Embedded Software'
            },
            {
                link: 'IoT Hardware Prototyping'
            },
            {
                link: 'IoT Dashboard and Analytics'
            },
            {
                link: 'Smart Home - Home Automation'
            },
        ]
    },
    {
        title: 'Blockchain',
        links: [
            {

                link: 'Wallet'
            },
            {

                link: 'Exchange'
            },
            {
                link: 'Ethereum'
            },
            {
                link: 'Hyperledger'
            },
            {
                link: 'Data Analytics'
            },
            {
                link: 'Smart Contracts'
            },
            {
                link: 'Private Blockchains'
            },
            {
                link: 'NFT Marketplace'
            },

        ]
    },
    {
        title: 'Game',
        links: [
            {

                link: 'Unity 3D'
            },
            {

                link: 'Unreal Engine'
            },
            {
                link: 'Augmented Reality'
            },
            {
                link: 'Virtual Reality'
            },
            {
                link: 'Casual Games'
            },
            {
                link: 'Metaverse'
            },
        ]
    },
    {
        title: 'Salesforce',
        links: [
            {

                link: 'Salesforce Development'
            },
            {

                link: 'Salesforce Consulting'
            },
            {
                link: 'Salesforce Implementation'
            },
        ]
    },
]

export const OUR_OFFICES_DATA = [
    {
        image: lahoreOffice,
        icon: pakFlag,
        title: 'Lahore OFFICE',
        infoText: 'One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.',
        phoneNumber: '+1 309 791 4105',
    },
    {
        image: usOffice,
        icon: usFlag,
        title: 'USA OFFICE',
        infoText: 'One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.',
        phoneNumber: '+1 309 791 4105',
    },
    {
        image: ukOffice,
        icon: ukFlag,
        title: 'UK OFFICE',
        infoText: 'One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.',
        phoneNumber: '+1 309 791 4105',
    }
]