import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <iframe src="https://docs.anchormydata.com/docs/what-is-ransomware" title="anchor website" style={{ width: '100%', height: '100%' }} />
    </IonPage>
  );
};

export default Home;
