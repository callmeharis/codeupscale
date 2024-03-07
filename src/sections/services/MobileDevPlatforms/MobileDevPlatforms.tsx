import { Card } from '@/components/card/Card';
import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import Image from 'next/image';
import React from 'react'
import andriodStudio from '../../../images/services/andriodStudio.svg';
import cordova from '../../../images/services/cordova.svg';
import firebase from '../../../images/services/firebase.svg';
import flutter from '../../../images/services/flutter.svg';
import ionic from '../../../images/services/ionic.svg';
import IosBlack from '../../../images/services/IosBlack.svg';
import IosLayer from '../../../images/services/IosLayer.svg';
import kotlin from '../../../images/services/kotlin.svg';
import reactNative from '../../../images/services/reactNative.svg';
import swift from '../../../images/services/swift.svg';
import vsStudio from '../../../images/services/vsStudio.svg';
import xamrine from '../../../images/services/xamrine.svg';
const MobileDevPlatforms = () => {
    const MOBILE_PLATFROMS = [
        {
            icon: reactNative,
            title: 'React Native',
        },
        {
            icon: flutter,
            title: 'Flutter',
        },
        {
            icon: ionic,
            title: 'Ionic',
        },
        {
            icon: swift,
            title: 'Swift',
        },
        {
            icon: cordova,
            title: 'Cordova',
        },
        {
            icon: kotlin,
            title: 'Kotlin',
        },
        {
            icon: vsStudio,
            title: 'Visual Studio',
        },
        {
            icon: andriodStudio,
            title: 'Android Studio',
        },
        {
            icon: firebase,
            title: 'Firebase',
        },
        {
            icon: xamrine,
            title: 'Xamarin',
        },
        {
            icon: IosBlack,
            title: 'Phone Gap',
        },
        {
            icon: IosLayer,
            title: 'iOS',
        }
    ]
    return (
        <div className='container pt-[100px]'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Mobile Application Development Platforms'} />
            <GeneralHeading className={'text-center mb-[60px]'} heading={'Revolutionize Your Brand With Advanced Mobile Application Development Platforms'} />

            <div className='flex justify-center flex-wrap gap-x-[30px] gap-y-[60px]'>
                {
                    MOBILE_PLATFROMS.map((data, index) => {
                        return (
                            <Card className={'md:w-[calc(33.3%-30px)]  lg:w-[calc(20%-30px)]   w-[calc(50%-30px)]  flex flex-col items-center justify-center'} key={index}>
                                <div className='mb-[17px] '>
                                    <Image src={data.icon} alt={data.title} />
                                </div>
                                <h5 className='mb-[17px] font-poppins text-lg font-semibold text-center'>{data.title}</h5>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MobileDevPlatforms