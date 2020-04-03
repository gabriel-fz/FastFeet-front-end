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

      <Route path="/deliveries" component={DeliveriesList} isPrivate />
      <Route path="/deliverymans" component={DeliverymansList} isPrivate />
      <Route path="/recipients" component={RecipientsList} isPrivate />
      <Route path="/delivery_problems" component={DeliveryProblems} isPrivate />

      <Route
        path="/delivery/register"
        component={DeliveriesRegister}
        isPrivate
      />
      <Route
        path="/deliveryman/register"
        component={DeliverymansRegister}
        isPrivate
      />
      <Route
        path="/recipient/register"
        component={RecipientsRegister}
        isPrivate
      />

      <Route path="/delivery/edit" component={DeliveriesEdit} isPrivate />
      <Route path="/deliveryman/edit" component={DeliverymansEdit} isPrivate />
      <Route
        path="/recipient/edit/:recipientId"
        component={RecipientsEdit}
        isPrivate
      />
    </Switch>
  );
}
