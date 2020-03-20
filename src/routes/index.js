import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Deliveries from '../pages/Deliveries';
import Deliverymans from '../pages/Deliverymans';
import Recipients from '../pages/Recipients';
import DeliveryProblems from '../pages/DeliveryProblems';

import DeliveriesRegister from '../pages/DeliveriesRegister';
import DeliverymansRegister from '../pages/DeliverymansRegister';
import RecipientsRegister from '../pages/RecipientsRegister';

import DeliveriesEdit from '../pages/DeliveriesEdit';
import DeliverymansEdit from '../pages/DeliverymansEdit';
import RecipientsEdit from '../pages/RecipientsEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/deliverymans" component={Deliverymans} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
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

      <Route
        path="/delivery/edit/:deliveryId"
        component={DeliveriesEdit}
        isPrivate
      />
      <Route path="/deliveryman/edit" component={DeliverymansEdit} isPrivate />
      <Route
        path="/recipient/edit/:recipientId"
        component={RecipientsEdit}
        isPrivate
      />
    </Switch>
  );
}
