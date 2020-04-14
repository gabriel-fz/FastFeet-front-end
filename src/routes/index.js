import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import DeliveriesList from '../pages/Deliveries/DeliveriesList';
import DeliverymansList from '../pages/Deliverymans/DeliverymansList';
import RecipientsList from '../pages/Recipients/RecipientsList';
import DeliveryProblems from '../pages/DeliveryProblems';

import DeliveriesRegister from '../pages/Deliveries/DeliveriesRegister';
import DeliverymansRegister from '../pages/Deliverymans/DeliverymansRegister';
import RecipientsRegister from '../pages/Recipients/RecipientsRegister';

import DeliveriesEdit from '../pages/Deliveries/DeliveriesEdit';
import DeliverymansEdit from '../pages/Deliverymans/DeliverymansEdit';
import RecipientsEdit from '../pages/Recipients/RecipientsEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route
        path="/encomendas"
        exact
        isPrivate
        component={DeliveriesList}
        linkActive="encomendas"
      />
      <Route
        path="/entregadores"
        exact
        isPrivate
        component={DeliverymansList}
        linkActive="entregadores"
      />
      <Route
        path="/destinatarios"
        exact
        isPrivate
        component={RecipientsList}
        linkActive="destinatarios"
      />
      <Route
        path="/problemas"
        exact
        isPrivate
        component={DeliveryProblems}
        linkActive="problemas"
      />

      <Route
        path="/encomendas/cadastrar"
        isPrivate
        component={DeliveriesRegister}
        linkActive="encomendas"
      />
      <Route
        path="/entregadores/cadastrar"
        isPrivate
        component={DeliverymansRegister}
        linkActive="entregadores"
      />
      <Route
        path="/destinatarios/cadastrar"
        isPrivate
        component={RecipientsRegister}
        linkActive="destinatarios"
      />

      <Route
        path="/encomendas/editar"
        isPrivate
        component={DeliveriesEdit}
        linkActive="encomendas"
      />
      <Route
        path="/entregadores/editar"
        isPrivate
        component={DeliverymansEdit}
        linkActive="entregadores"
      />
      <Route
        path="/destinatarios/editar/:recipientId"
        isPrivate
        component={RecipientsEdit}
        linkActive="destinatarios"
      />
    </Switch>
  );
}
