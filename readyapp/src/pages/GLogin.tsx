import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { logInOutline, personCircleOutline } from 'ionicons/icons';

import LOGO from '../assets/img/logo.png';
//===============================================
const GLogin: React.FC = () => {
  return (
    <>
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Connexion</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollY={false} className="ion-padding">
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
                                    <form>
                                        <IonInput mode="md" fill="outline" labelPlacement="floating" label="Email" type="email" placeholder="youremail@domain.com"></IonInput>
                                        <IonInput mode="md" className="ion-margin-top" fill="outline" labelPlacement="floating" label="Mot de passe" type="password" placeholder="simon@ionicacademy.com"></IonInput>
                                        
                                        <IonButton type="submit" expand="block" className="ion-margin-top">
                                            Se connecter
                                            <IonIcon icon={logInOutline} slot="end" />
                                        </IonButton>

                                        <IonButton routerLink="/register" color={'secondary'} type="button" expand="block" className="ion-margin-top">
                                            S'inscrire
                                            <IonIcon icon={personCircleOutline} slot="end" />
                                        </IonButton>

                                        <IonButton fill="clear" size="small" color={'medium'} type="button" expand="block" className="ion-margin-top">
                                            Revoir l'intro
                                            <IonIcon icon={personCircleOutline} slot="end" />
                                        </IonButton>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    </>
  );
};

export default GLogin;
//===============================================
