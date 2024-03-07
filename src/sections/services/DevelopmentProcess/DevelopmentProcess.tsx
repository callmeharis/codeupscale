import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import Text from '@/components/Text/Text';
import Image from 'next/image';
import React, { useState } from 'react';
import design from '../../../images/services/design.svg';
import devops from '../../../images/services/devops.svg';
import mvp from '../../../images/services/mvp.svg';
import planing from '../../../images/services/planing.svg';
import product from '../../../images/services/product.svg';
import support from '../../../images/services/support.svg';
import testing from '../../../images/services/testing.svg';
import styles from './DevelopmentProcess.module.css';


interface ProcessDataType {
    id: number,
    title: string;
    icon: string;
    content: string;
}
const PROCESS_DATA = [
    {
        id: 1,
        title: 'Planning',
        icon: planing,
        content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
        id: 2,
        title: 'Design',
        icon: design,
        content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
        id: 3,
        title: 'MVP Development',
        icon: mvp,
        content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
        id: 4,
        title: 'Product Development',
        icon: product,
        content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
        id: 5,
        title: 'Software Quality Assurance',
        icon: testing,
        content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
        id: 6,
        title: 'DevOps Services',
        icon: devops,
        content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
        id: 7,
        title: 'Support & Maintenance',
        icon: support,
        content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
];

function DevelopmentProcess() {
    const [activeContent, setActiveContent] = useState<ProcessDataType>(PROCESS_DATA[0]);
    const [cardAnimation, setCardAnimation] = useState('');

    const handleLinkHover = (processData: ProcessDataType) => {
        setCardAnimation(styles.cardAnimation)
        setCardAnimation('')
        setTimeout(() => {
            setActiveContent(processData);
        }, 400);
       
    };

    return (
        <div className={styles.processWrapper}>
            <div className="container">
                <SubHeading className={'text-center mb-[8px]'} subHeading={'Development Process'} />
                <GeneralHeading className={'text-center mb-[8px]'} heading={'Discover Our Fine-Tuned Mobile Application Development Process'} />
                <Text text={'Journey with us into the universal mobile app development process to paint the canvas of your next big project.'} className={'text-center text-grey font-normal mt-[8px] mb-[60px]'} />
                <div className='flex md:flex-row flex-col align-middle justify-start gap-[30px] w-full'>
                    <div className="md:w-[35%] w-[100%]">
                        {PROCESS_DATA.map((data) => (
                            <div
                                key={data.id}
                                className={styles.linksSection}
                                onMouseEnter={() => handleLinkHover(data)}
                            >
                                <p className='font-poppins text-primary-dark font-semibold text-lg	md:text-right mb-[40px] cursor-pointer transition'> {data.title}</p>
                                <span className={`${styles.blueCircle} transition`}></span>
                            </div>
                        ))}
                    </div>
                    <div className={`md:w-[calc(65%-30px)] w-[100%]  ${styles.rught}`}>
                        {activeContent && (
                            <div className={`${styles.contentCard} ${cardAnimation}`}>
                                <Image src={activeContent.icon} alt="Icon"  height={40} width={40}/>
                                <h2 className='font-poppins text-primary-dark font-semibold text-lg mt-[8px]'>{activeContent.title}</h2>
                                <p className='font-poppins text-grey font-normal text-lg mt-[16px] leading-8'>{activeContent.content}</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>

    );


}
export default DevelopmentProcess;
