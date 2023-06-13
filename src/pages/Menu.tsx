import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, settingsOutline,logOut } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import List from './List';
import Settings from './Settings';
const Menu: React.FC = () => {
   const paths = [
    {name: "Home", url: "/app/list", icon: homeOutline},
    {name: "Settings", url: "/app/settings", icon: settingsOutline}
   ]
    return (
        <IonPage>
            <IonSplitPane contentId='main' when="md">
        <IonMenu contentId='main'>
        <IonHeader>
                <IonToolbar color={"secondary"}>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
            {paths.map((item,index) =>(
             <IonMenuToggle key={index} autoHide={false}>
                <IonItem detail={false} routerDirection='none'  routerLink={item.url}>
                    <IonIcon slot='start' icon={item.icon}/>
                    {item.name}
                    </IonItem>
             </IonMenuToggle>
            ))}
                <IonMenuToggle  autoHide={false}>
                <IonButton expand='full' routerDirection='root'  routerLink={"/"}>
                    <IonIcon slot='start' icon={logOut}/>
                    Logout 
                    </IonButton>
             </IonMenuToggle>
            </IonContent>
        </IonMenu>
        <IonRouterOutlet id='main'>
          <Route exact path="/app/list" component={List}/>
          <Route exact path="/app/settings" component={Settings}/>
        <Route exact path="/app">
         <Redirect to="/app/list"/>
        </Route>
        </IonRouterOutlet>
        </IonSplitPane>
        </IonPage>
    );
};

export default Menu;