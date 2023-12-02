import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToast, IonToolbar, useIonToast } from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";

import LOGO from '../assets/img/logo.png';
//===============================================
const GRegister: React.FC = () => {
    const [lUseIonToast] = useIonToast();

    const onRegister = (event: any) => {
        event.preventDefault();
        lUseIonToast({
            message: 'onRegister...',
            duration: 2000,
            position: "bottom",
        });
    };

  return (
    <IonPage>
        <IonHeader>
            <IonToolbar color={'success'}>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>

                <IonTitle>Inscription</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent scrollY={false}>
            <IonGrid fixed>
                <IonRow class="ion-justify-content-center">
                    <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                        <div className="ion-text-center ion-padding">
                            <img src={LOGO} alt="logo.png" width={'50%'} />
                        </div>
                    </IonCol>
                </IonRow>

                <IonRow class="ion-justify-content-center">
                    <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                        <IonCard>
                            <IonCardContent>
                                <form onSubmit={onRegister}>
                                    <IonInput fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="Entrez votre email"/>
                                    <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Mot de passe" type="password" placeholder="Entrez votre mot de passe"/>
                                    <IonInput className="ion-margin-top" fill="outline" labelPlacement="floating" label="Confirmation" type="password" placeholder="Confirmez votre mot de passe"/>
                                    <IonButton type="submit" expand="block" className="ion-margin-top">
                                        S'inscrire
                                        <IonIcon icon={checkmarkDoneOutline} slot="end" />
                                    </IonButton>
                                </form>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

            <IonToast trigger="open-toast" message="This toast will disappear after 5 seconds" duration={2000}></IonToast>
        </IonContent>
    </IonPage>
);
};

export default GRegister;
//===============================================
