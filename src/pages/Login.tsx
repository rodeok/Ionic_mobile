import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {logInOutline,personCircleOutline} from 'ionicons/icons';
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';
const Login: React.FC = () => {
    const router = useIonRouter()
const doLogin = async (event: any)=>{
    event.preventDefault();
   await present(" Logging in🎅")
   setTimeout( async ()=>{
    dismiss()
    router.push("/app", "root")
   }, 2000)
}
const INTRO_KEY = "intro-seen"
const finishIntro = async () =>{
    // console.log("FIN")
    setIntroSeen(true)
    Preferences.set({
        key: INTRO_KEY,
        value: 'true'
    })
}
const seeIntroAgain = () =>{
    setIntroSeen(false)
    Preferences.remove({key: INTRO_KEY})
}
const [introSeen, setIntroSeen] = useState(true)
const [present,dismiss] = useIonLoading()
useEffect(()=>{
   const checkStorage = async () =>{
    const seen = await Preferences.get({key: INTRO_KEY})
    // console.log("🚀 ~ file: Login.tsx:17 ~ checkStrorage ~seen:", seen )
    setIntroSeen(seen.value === "true")
   }
   checkStorage()
},[])
    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishIntro}/>
        ):(  
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Favlink</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className="ion-padding">
                <IonGrid fixed>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                               <IonText>
                                <h3>Image Here</h3>
                               </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow class='ion-justify-content-center'>
                    <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                    <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput fill='outline' label='Email' type='email' placeholder='favlinc@gooo.net' labelPlacement='floating'></IonInput>
                        <IonInput className='ion-margin-top' fill='outline' label='Password' type='password' placeholder='password' labelPlacement='floating'></IonInput>
                         <IonButton type='submit' className='ion-margin-top' expand='block'> <IonIcon icon={logInOutline} slot='end'/> Login</IonButton>
                         <IonButton routerLink='/register' color={"secondary"} type='button' className='ion-margin-top' expand='block'> <IonIcon icon={personCircleOutline} slot="end"/> Create account</IonButton>
                         <IonButton onClick={seeIntroAgain} fill='clear' size='small' color={"medium"} type='button' className='ion-margin-top' expand='block'> <IonIcon icon={personCircleOutline} slot="end"/> Watch Intro again</IonButton>
                        </form>  
                    </IonCardContent>
                </IonCard>
                    </IonCol>

                    </IonRow>


                </IonGrid>

            </IonContent>
        </IonPage>
         )}
        </>
    );
};

export default Login;