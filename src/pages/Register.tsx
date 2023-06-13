import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkCircleOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter()
    const doRegister = (event: any)=>{
        event.preventDefault();
        console.log("dologin")
        router.goBack()
    }
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot='start'>
                    <IonBackButton defaultHref='/'/>
                </IonButtons>
                <IonTitle>Create Account</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
                    <IonInput fill='outline' label='Email' type='email' placeholder='favlinc@gooo.net' labelPlacement='floating'></IonInput>
                    <IonInput className='ion-margin-top' fill='outline' label='Password' type='password' placeholder='password' labelPlacement='floating'></IonInput>
                     <IonButton type='submit' className='ion-margin-top' expand='block'> <IonIcon icon={checkmarkCircleOutline} slot='end'/>Create my account</IonButton>
                     {/* <IonText className='ion-margin-top'>Already have an account </IonText> */}
                     {/* <IonButton routerLink='/login' color={"secondary"} type='submit' className='ion-margin-top' expand='block'> <IonIcon icon={personCircleOutline} slot="end"/>  Login</IonButton> */}

                    </form>  
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    );
};

export default Register;