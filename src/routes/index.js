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

      <Route path="/encomendas" exact component={DeliveriesList} isPrivate />
      <Route
        path="/entregadores"
        exact
        component={DeliverymansList}
        isPrivate
      />
      <Route path="/destinatarios" exact component={RecipientsList} isPrivate />
      <Route path="/problemas" exact component={DeliveryProblems} isPrivate />

      <Route
        path="/encomendas/cadastrar"
        component={DeliveriesRegister}
        isPrivate
      />
      <Route
        path="/entregadores/cadastrar"
        component={DeliverymansRegister}
        isPrivate
      />
      <Route
        path="/destinatarios/cadastrar"
        component={RecipientsRegister}
        isPrivate
      />

      <Route path="/encomendas/editar" component={DeliveriesEdit} isPrivate />
      <Route
        path="/entregadores/editar"
        component={DeliverymansEdit}
        isPrivate
      />
      <Route
        path="/destinatarios/editar/:recipientId"
        component={RecipientsEdit}
        isPrivate
      />
    </Switch>
  );
}
